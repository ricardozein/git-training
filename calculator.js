$("#calcular").click(function() {
    var resultado;

    var numA = parseInt($("#num-a").val());
    var numB = parseInt($("#num-b").val());

    if ($("#operator").val() == "+") {
        resultado = numA + numB;
    }

    if ($("#operator").val() == "-") {
        resultado = numA - numB;
    }

    if ($("#operator").val() == "*") {
        resultado = numA * numB;
    }

    if ($("#operator").val() == "/") {
        resultado = numA / numB;
    }
    $("#resultado").html(resultado);

});
