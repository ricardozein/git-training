$("#calcular").click(function() {
    $("#resultado").html(eval($("#num-a").val() + $("#operator").val() + $("#num-b").val()));
});
