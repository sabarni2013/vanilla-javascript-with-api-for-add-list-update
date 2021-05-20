
window.onload = function () {
    listTickets().then(data => {
        for (var j = 0; j < data.length; j++) {
            rowEle = document.createElement('tr');

            colEle = document.createElement('td');
            colEle.innerHTML = data[j].cc_emails
            rowEle.appendChild(colEle);
            colEle = document.createElement('td');
            colEle.innerHTML = data[j].subject
            colEle.setAttribute("onclick", "updateRow("+data[j]+")");
            /*add edit attribute */
            colEle.setAttribute("style", "color: red;cursor: pointer;");
            rowEle.appendChild(colEle);
            colEle = document.createElement('td');
            colEle.innerHTML = data[j].status
            rowEle.appendChild(colEle);
            colEle = document.createElement('td');
            colEle.innerHTML = data[j].type
            rowEle.appendChild(colEle);
            document.getElementById('table').appendChild(rowEle);
        }
    });
};
function updateRow(data) {
    
    location.href = 'addTicket.html';
    document.getElementById('cc_emails').innerText = data.cc_emails;
    document.getElementById('status').innerText = data.status;
    document.getElementById('subject').innerText = data.subject;
    document.getElementById('name').innerText = data.name;
    document.getElementById('phone').innerText = data.phone;
}
async function listTickets() {
    // https://newaccount1621390341787.freshdesk.com/api/v2/tickets
    let response = await fetch('https://60a49b6cfbd48100179dc5c3.mockapi.io/api/v2/tickets', {
        method: 'GET'
    });
    return await response.json();
}
/*****ADD TICKETS********/
function submitForm() {
    var formEl = document.forms.submitForm;
    var formData = new FormData(formEl);
    let obj = {
        "cc_emails": formData.get('cc_emails'),
        "fwd_emails": [],
        "reply_cc_emails": [],
        "source": 2,
        "status": formData.get('status'),
        "subject": formData.get('subject'),
        "company_id": 1,
        "id": 1,
        "type": "Question",
        "created_at": new Date(),
        "updated_at": new Date(),
        "requester": {
            "email": formData.get('cc_emails'),
            "id": 1,
            "mobile": null,
            "name": formData.get('name'),
            "phone": formData.get('phoneNo')
        },
    }

    fetch('https://newaccount1621390341787.freshdesk.com/api/v2/tickets', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer 123abc456def'
        },
        body: obj
    })
        .then(response => {
            location.href = 'index.html';
        })
        .catch(err => {
            console.log(err)
        })
}
