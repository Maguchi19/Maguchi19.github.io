$(document).ready(function () {
    $('#calculateBtn').click(function () {
        var num1 = parseFloat($('#input1').val());
        var num2 = parseFloat($('#input2').val());
        var operation = $('#operation').val();
        var result;

        if (isNaN(num1) || isNaN(num2)) {
            $('#result').text("Por favor, ingrese números válidos.");
            return;
        }

        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    result = "No se puede dividir por 0.";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = "Operación no válida.";
        }

        $('#result').text("Resultado: " + result);
    });
});