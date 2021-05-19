
window.onload = function() {
    listTickets().then(data =>{
            for (var j = 0; j < data.length; j++) {
                rowEle = document.createElement('tr');
               
                colEle = document.createElement('td');
                colEle.innerHTML = data[j].cc_emails
                rowEle.appendChild(colEle);
                colEle = document.createElement('td');
                colEle.innerHTML = data[j].subject
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
   
async function listTickets() {
    let response = await fetch('https://60a49b6cfbd48100179dc5c3.mockapi.io/api/v2/tickets', {
        method: 'GET'
    });
    return await response.json();
}
