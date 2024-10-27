function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function addMany(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
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
        $(".res").val($(".res").val() + ' + ');
        sign = '+';
    });
    $("#0").click(function () {
        $(".res").val($(".res").val() + '0');
    });
    $("#sub").click(function () {
        $(".res").val($(".res").val() + ' - ');
        sign = "-";
    });
    $("#c").click(function () {
        $(".res").val("");
    });
    $("#e").click(function () {
        // let final = $(".res").val().split(/[\+\-]/);
        let nums = [];
        let result = 0;
        let value = $(".res").val().trim();
        let final = value.split(" ");
        if (final[0] === '-' || final[0] === '+') {
            final[1] = final[0] + final[1];
            final.splice(0, 1);
        }
        for (let i = 1; i < final.length; i++) {
            if (final[i] === '-') {
                final[i] = "+";
                final[i + 1] = "-" + final[i + 1];
            }

        }

        if (final[final.length - 1] === '-' || final[final.length - 1] === '+') {
            // $(".res").val("There is operation at the end which is invalid...");
            // return;
            final.splice(final.length - 1, 1);
            console.log(final);

        }
        for (let i = 0; i < final.length; i++) {
            if (final[i] !== '+') {
                nums.push(+final[i]);
                result = addMany(nums);
            }
        }

        $(".res").val(`${result}`);

    });
    $("#del").click(function () {
        $(".res").val($(".res").val().replace($(".res").val()[$(".res").val().length - 1], ""));
    });
});