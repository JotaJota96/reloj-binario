
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
    
    document.getElementById('hora-actual').textContent = hh + ":" + mm + ":" + ss;
});
