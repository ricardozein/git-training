$("#calcular").click(function() {
    regvalidation = /^[\d]+$/;
    if (!regvalidation.test($("#num-a").text())){
        alert('numero a invalido');
	   return false;
    }
    if (!regvalidation.test($("#num-b").text())){
	   alert ('numero b invalido');
	   return false;
    }
$("#resultado").html(eval($("#num-a").val() + $("#operator").val() + $("#num-b").val()));
});
