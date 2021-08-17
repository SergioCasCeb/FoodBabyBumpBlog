"strict"

URLS = 'http://localhost:3000/survey';

$(document).ready(mainSurvey);

function mainSurvey() {
    $('#submit').click(sendDataSurvey);
    $('#get-survey').click(getDataSurvey);
}


function sendDataSurvey() {
    let surveyFav = document.querySelector('input[name="favorite"]:checked').value;
    let surveyPre = document.querySelector('input[name="preference"]:checked').value;
    let commSurvey = $('#comments').val();

    var surveyCountries = new Array();
    var amountCountries = document.getElementsByName("countries");
    var otherCountries = document.getElementById('new-country').value;

    for (var i = 0; i < amountCountries.length; i++) {
        if (amountCountries[i].checked) {
            surveyCountries.push(amountCountries[i].value + '<br>');
            if (amountCountries[i].value == "other") {
                surveyCountries.pop(amountCountries[i]);
                surveyCountries.push(otherCountries);
            }
        }
    }


    var surveyDiet = new Array();
    var amountDiets = document.getElementsByName("diet");
    var otherDiets = document.getElementById('new-diet').value;

    for (var i = 0; i < amountDiets.length; i++) {
        if (amountDiets[i].checked) {
            surveyDiet.push(amountDiets[i].value + '<br>');
            if (amountDiets[i].value == "other-diet") {
                surveyDiet.pop(amountDiets[i]);
                surveyDiet.push(otherDiets);
            }
        }

    }

    if ($('#comments').val() == '' || $('#comments').val() == '') {
        commSurvey = "No comments";
    }



    let dataSurvey = {
        range: $('#range-slider').val(),
        favorite: surveyFav,
        preference: surveyPre,
        countries: surveyCountries,
        diet: surveyDiet,
        comments: commSurvey
    }



    $.post(URLS, dataSurvey, (res, status) => {
        alert(`Status: ${status}, Message: ${res.msg}\n`);
    });


}

function getDataSurvey() {
    $.get(URLS, (res, status) => {
        $('#entries-survey').html('');

        let guestNum = 1;

        $('#entries-survey').append(`
            <tr class="table-title">
                <td>Entry</td>
                <td>Range</td>
                <td>Preference</td>
                <td>Favorite</td>
                <td>Countries</td>
                <td>Diet</td>
                <td>Message</td>
            </tr>
        `)

        res.forEach(entrySurvey => {

            $('#entries-survey').append(`<tr>
                <td><span>${guestNum}</span></td>
                <td>${entrySurvey.range}</td>
                <td>${entrySurvey.favorite}</td>
                <td>${entrySurvey.preference}</td>
                <td>${entrySurvey.countries}</td>
                <td>${entrySurvey.diet}</td>
                <td>${entrySurvey.comments}</td>
                </tr>`);
            guestNum++;

        });
    });
}