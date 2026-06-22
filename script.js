function converterTempo() {

    let valor = Number(document.getElementById("valor").value);
    let unidade = document.getElementById("unidade").value;

    let segundos;

    switch(unidade){

        case "segundos":
            segundos = valor;
            break;

        case "minutos":
            segundos = valor * 60;
            break;

        case "horas":
            segundos = valor * 3600;
            break;

        case "dias":
            segundos = valor * 86400;
            break;
    }

    let minutos = segundos / 60;
    let horas = segundos / 3600;
    let dias = segundos / 86400;

    document.getElementById("segundos").innerHTML =
        `Segundos: ${segundos.toFixed(2)}`;

    document.getElementById("minutos").innerHTML =
        `Minutos: ${minutos.toFixed(2)}`;

    document.getElementById("horas").innerHTML =
        `Horas: ${horas.toFixed(2)}`;

    document.getElementById("dias").innerHTML =
        `Dias: ${dias.toFixed(2)}`;
}