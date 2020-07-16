
/**
 * Esta funcion devuelve la conversion del numero recibido como parametro a formato binario
 * @param {number} d Numero a convertir
 * @param {number} bits Cantidad de bits del resultado
 * @returns {string} Resultado de la conversion a binario
 */
function digitoABinario(d, bits = 4){
    if (d <= 1) {
        if (bits <= 1){
            return "" + d;
        }
        return "" + digitoABinario(0, bits-1) + d;
    }
    
    if (d % 2 == 0){
        return digitoABinario(d/2, bits-1) + "0";
    }else{
        return digitoABinario((d-1)/2, bits-1) + "1";
    }
}

/**
 * Establece los valores en cada columna
 * @param {string} horaCompleta Hora a mostrar (numeros concatenados sin caracteres no numericos)
 */
function actualizarReloj(horaCompleta){
    // prefijos de las columnas
    let columnas = ["hd", "hu", "md", "mu", "sd", "su"];
    // para cada columna
    for (let i = 0; i < columnas.length; i++){
        // convierte el numero a mostrar a binario
        let bits = digitoABinario(horaCompleta[i]);
        // actualiza la columna
        actualizarColumna(bits, columnas[i]);
    }
}

/**
 * Muestra un numero binario en una columna especifica
 * @param {String} bits Numero binario a representar
 * @param {String} columna ID de la columna
 */
function actualizarColumna(bits, columna){
    let filas = ["8", "4", "2", "1"];
    for (let i = 0; i < filas.length; i++) {
        let idLed = columna + filas[i];
        // aca hay que encender o apagar los leds segun los bits
    }
}

setInterval(() => {
    // obtengo la hora actual (en formato 24hs)
    let fecha = new Date();
    let hh = fecha.getHours();
    let mm = fecha.getMinutes();
    let ss = fecha.getSeconds();
    
    // si el numero es menor a 10, le agrego un cero a la izquierda para siempre tener dos digitos
    if (hh < 10) hh = "0" + hh;
    if (mm < 10) mm = "0" + mm;
    if (ss < 10) ss = "0" + ss;

    actualizarReloj("" + hh + mm + ss);

    document.getElementById('hora-actual').textContent = hh + ":" + mm + ":" + ss;
});
