/**
 * Created by MKS on 22.09.2015.
 */
$(document).ready(function () {
    //ALWAYS
    $("#footer_load").load("footer.html");
    //ALWAYS

    var buttons = {
        btn_ac: 'AC',
        btn_ce: 'CE',
        btn_pi: 'π',
        btn_div: '/',
        btn_7: '7',
        btn_8: '8',
        btn_9: '9',
        btn_mul: '*',
        btn_4: '4',
        btn_5: '5',
        btn_6: '6',
        btn_min: '-',
        btn_1: '1',
        btn_2: '2',
        btn_3: '3',
        btn_plu: '+',
        btn_pound: '#',
        btn_0: '0',
        btn_ans: 'Ans',
        btn_eq: '='

    };

    var evalArray = [];
    var result;

    var doCalc = function (arr) {
        var strToEval = arr.join('');
        return eval(strToEval);
    }

    $(".cal-button").click(function () {
        if ($('#input-field').text() == '0') {
            $('#input-field').empty();
        }
        if ($(this).attr('id') == 'btn_pi') {
            evalArray.push(Math.PI);
            $('#input-field').append(buttons[$(this).attr('id')]);
            return;
        }
        if ($(this).attr('id') == 'btn_ac') {
            $('#input-field').text('0');
            $('#result-field').text('0');
            evalArray = [];
            result = null;
            return;
        }
        if ($(this).attr('id') == 'btn_ce') {
            evalArray.splice(evalArray.length - 1, 1);
            $('#input-field').text(evalArray.join(''));
            return;
        }
        if ($(this).attr('id') == 'btn_eq') {

            if (isNaN(evalArray[evalArray.length - 1])) {
                console.log('NaA');
                $('#input-field').fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                $('.in-number').fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                return;
            }
            $('#result-field').text(doCalc(evalArray));
            result = doCalc(evalArray);
            return;
        }
        if ($(this).attr('id') == 'btn_ans') {
            ;
            evalArray = [];
            evalArray.push(result);
            $('#input-field').text(result);
            result = null;
            return;
        }
        if (!$(this).hasClass('in-number')) {
            evalArray.push(buttons[$(this).attr('id')]);
            $('#input-field').append(buttons[$(this).attr('id')]);
            return;
        }
        evalArray.push(buttons[$(this).attr('id')]);
        $('#input-field').append(buttons[$(this).attr('id')]);
    });

    $(".cal-button").hover(
        function () {
            $(this).addClass("cal-button-hover");
        },
        function () {
            $(this).removeClass("cal-button-hover");
        }
    );

});