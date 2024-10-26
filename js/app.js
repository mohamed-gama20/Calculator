function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

let num1, num2, sign;
$(document).ready(function () {
    $("#1").click(function () {
        $(".res").val($(".res").val() + '1');
    });
    $("#2").click(function () {
        $(".res").val($(".res").val() + '2');
    });
    $("#3").click(function () {
        $(".res").val($(".res").val() + '3');
    });
    $("#4").click(function () {
        $(".res").val($(".res").val() + '4');
    });
    $("#5").click(function () {
        $(".res").val($(".res").val() + '5');
    });
    $("#6").click(function () {
        $(".res").val($(".res").val() + '6');
    });
    $("#7").click(function () {
        $(".res").val($(".res").val() + '7');
    });
    $("#8").click(function () {
        $(".res").val($(".res").val() + '8');
    });
    $("#9").click(function () {
        $(".res").val($(".res").val() + '9');
    });
    $("#add").click(function () {
        $(".res").val($(".res").val() + '+');
        sign = '+';
    });
    $("#0").click(function () {
        $(".res").val($(".res").val() + '0');
    });
    $("#sub").click(function () {
        $(".res").val($(".res").val() + '-');
        sign = "-";
    });
    $("#c").click(function () {
        $(".res").val("");
    });
    $("#e").click(function () {
        let final = $(".res").val().split(/[\+\-]/);
        console.log(sign);

        if (sign === '+') {
            $(".res").val(`${add(+final[0], +final[1])}`)
        }
        if (sign === '-') {
            $(".res").val(`${sub(+final[0], +final[1])}`)
        }
    });

});