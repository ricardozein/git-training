$("#calcular").click(function() {
    var resultado;
    regvalidation = /^[\d]+$/;
    if (!regvalidation.test($("#num-a").text())){
        alert('numero a invalido');
	   return false;
    }
    if (!regvalidation.test($("#num-b").text())){
	   alert ('numero b invalido');
	   return false;
    }
    var numA = parseInt($("#num-a").val());
    var numB = parseInt($("#num-b").val());

    if ($("#operator").val() == "+") {
        resultado = numA + numB;
    }

    if ($("#operator").val() == "*") {
        resultado = numA * numB;
    }
    $("#resultado").html(resultado);

});
