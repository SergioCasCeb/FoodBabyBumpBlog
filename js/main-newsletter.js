"strict"

URL = 'http://localhost:3000/newsletter';

$(document).ready(main);

function main() {
    $('#subscribe').click(sendData);
    $('#get-news').click(getData);
}


function sendData() {
    let data = {
        name: $('#name').val(),
        country: $('#country').val(),
        email: $('#email').val()
    }


    if (data.name == '' || data.name == null || data.country == '' || data.country == null || data.email == '' || data.email == null) {
        alert("Please insert all the necessary information");
        return;
    }

    $.post(URL, data, (res, status) => {
        alert(`Status: ${status}, Message: ${res.msg}\n`);
        $('#name').val('');
        $('#country').val('');
        $('#email').val('');
    });


}

function getData() {
    $.get(URL, (res, status) => {
        $('#entries-newsletter').html('');

        let guestNum = 1;
        $('#entries-newsletter').append(`
        <tr class="table-title">
            <td>Entry</td>
            <td>Name</td>
            <td>Country</td>
            <td>Email</td>
         </tr>
        `)

        res.forEach(entry => {

            $('#entries-newsletter').append(`<tr>
                <td><span>${guestNum}</span></td>
                <td>${entry.name}</td>
                <td>${entry.country}</td>
                <td>${entry.email}</td>
                </tr>`);
            guestNum++;

        });
    });
}