let userAutenticate = document.getElementById('button-send');
var token = "";

userAutenticate.addEventListener("submit", autenticate());

function autenticate () {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "username": "string",
    "password": "string"
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://api.clientify.net/v1/api-auth/obtain_token/", requestOptions)
    .then(response => response.text())
    .then(result => createContactCrm(result))
    .catch(error => console.log('error', error));
};

function createContactCrm(result) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token " + result.token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "first_name": "Jasper",
    "last_name": "Barry",
    "email": "tbefaqoja@mailinator.net",
    "phone": "+1 (618) 353-6458",
    "status": "Voluptates facilis u",
    "title": "Mrs.",
    "company": "Henderson Gomez LLC",
    "contact_type": "",
    "contact_source": "",
    "addresses": [
        {
        "street": "camino de la coquina, 23",
        "city": "Lugo",
        "state": "Galicia",
        "country": "Spain",
        "postal_code": "34",
        "type": 1
        }
    ],
    "custom_fields": [],
    "description": "Sunt vitae consequun",
    "remarks": "Consequatur aliquid",
    "summary": "Voluptas dolorem com",
    "message": "Nobis aliquip quia c",
    "re_property_name": "Hakeem Hicks",
    "last_contact": null
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://api.clientify.net/v1/contacts/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
