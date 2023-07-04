let nombre = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido")

function nombreCompleto (nombre, apellido) {
    alert("Bienvenido al convertidor de divisas " + nombre + " " + apellido +" " + "espero te sirva de ayuda :D")
}

nombreCompleto(nombre , apellido)

let valor = 0
let operacion = " "
let resultado = 0
let nuevaOperacion = 0

function convertidor () {
do {
    valor = Number(prompt("ingrese el monto en pesos a convertir"))
    operacion = prompt("Seleccione a que moneda quiere convertirlo: DOLAR(USD), EURO(EUR), YUANES(CNY), REALES(R), LIBRAS(LIB)")
    divisas(259, 282, 36, 56)
    nuevaOperacion = confirm("desea realizar mas operaciones?")
} while(nuevaOperacion)
}

function divisas (dolar, euro, yuanes, reales, libras) {
    let resultado = 0
    let mensaje = ""
    switch (operacion.toUpperCase()) {
    case "USD":
        resultado = (valor / dolar).toFixed(2)
        mensaje = `Convertiste ${valor} pesos a ${resultado} ${operacion}`
        break;

        case "EUR":
            resultado = (valor / euro).toFixed(2)
            mensaje = `Convertiste ${valor} pesos a ${reultado} ${operacion}`
            break;

        case "CNY":
            resultado = (valor / yuanes).toFixed(2)
            mensaje = `Convertiste ${valor} pesos a ${resultado} ${operacion}`
            break;

        case "R":
            resultado = (valor / reales).toFixed(2)
            mensaje = `Convertiste ${valor} pesos a ${resultado} ${operacion}`
            break;

        case "LIB":
            resultado = (valor / libras).toFixed(2)
            mensaje = `Convertiste ${valor} pesos a ${resultado} ${operacion}`
            break;

    default:
        mensaje = "No elegiste ninguna opcion, intenta denuevo."
        break;

    }
    document.write(`${mensaje}<br>`)
}

convertidor()