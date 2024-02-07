let camperViewTable = document.getElementById('camperView');

const manipulateSingleData = function (displayMethod, data) {
    displayMethod === 'complete' ?  camperViewTable = document.getElementById('camperViewComplete') : camperViewTable = document.getElementById('camperViewSimplify');

    camperViewTable.getElementsByClassName('id-result-search')[0].innerText = data.id;
    camperViewTable.getElementsByClassName('name-result-search')[0].innerText = `${data.name}`;
    camperViewTable.getElementsByClassName('age-result-search')[0].innerText = getAge(data.birthDate);
    camperViewTable.getElementsByClassName('sex-result-search')[0].innerText = data.sex;
    
    if (getAge(data.birthDate) >= 18){
        document.getElementById('rowAdultResponsibleName').classList.add('d-none');
        document.getElementById('rowAdultResponsibleName2').classList.add('d-none');
        document.getElementById('rowAdultResponsibleDocument').classList.add('d-none');
        document.getElementById('rowAdultResponsibleDocument2').classList.add('d-none');
        document.getElementById('rowAdultResponsiblePhone').classList.add('d-none');
    } else {
        camperViewTable.getElementsByClassName('adult-result-search')[0].innerText = data.responsiblePersonName;
        camperViewTable.getElementsByClassName('adult-result-search')[1].innerText = data.responsiblePersonDocument;
        camperViewTable.getElementsByClassName('adult-result-search')[2].innerHTML = `<a href="tel:${data.responsiblePersonPhone}">${data.responsiblePersonPhone}</a>`;
        document.getElementById('rowAdultResponsibleName').classList.remove('d-none');
        document.getElementById('rowAdultResponsibleName2').classList.remove('d-none');
        document.getElementById('rowAdultResponsibleDocument').classList.remove('d-none');
        document.getElementById('rowAdultResponsibleDocument2').classList.remove('d-none');
        document.getElementById('rowAdultResponsiblePhone').classList.remove('d-none');
    }

    camperViewTable.getElementsByClassName('telefone-result-search')[0].innerHTML = `<a href="tel:${data.phone}">${data.phone}</a>`;
    camperViewTable.getElementsByClassName('church-result-search')[0].innerText = data.church;
    camperViewTable.getElementsByClassName('email-result-search')[0].innerText = data.email;
    camperViewTable.getElementsByClassName('payment-result-search')[0].innerText = data.payment;
    camperViewTable.getElementsByClassName('ticket-result-search')[0].innerText = data.ticket;

    if (displayMethod === 'complete') {
        camperViewTable.getElementsByClassName('surname-result-search')[0].innerText = data.surname;
        camperViewTable.getElementsByClassName('allergy-result-search')[0].innerText = data.allergies;
        camperViewTable.getElementsByClassName('medicines-result-search')[0].innerText = data.medicines;

        // Checkin fluxes
        if (data.checkinDate) {
            camperViewTable.getElementsByClassName('checkin-result-search')[0].innerText = data.checkinDate;
            document.getElementById('rowCheckin').classList.remove('d-none');
            document.getElementById('checkinButton').classList.add('d-none');

            if(data.checkoutDate) {
                camperViewTable.getElementsByClassName('checkout-result-search')[0].innerText = data.checkoutDate;
                document.getElementById('rowCheckout').classList.remove('d-none');
                document.getElementById('checkoutButton').classList.add('d-none');
            } else {
                document.getElementById('checkoutButton').classList.remove('d-none');
                document.getElementById('rowCheckout').classList.add('d-none');
            }

        } else {
            document.getElementById('rowCheckin').classList.add('d-none');
            document.getElementById('rowCheckout').classList.add('d-none');
            document.getElementById('checkinButton').classList.remove('d-none');
            document.getElementById('checkoutButton').classList.add('d-none');
        }
    }
}

const manipulateAllData = function (data) {
    const table = document.getElementById('multipleResultSearch');

    for (let i = 0; i < data.length; i++) {
        createRow(table, data, i);
    }
}

const createRow = function (table, data, position) {
    let row = document.createElement('tr');
    let id = document.createElement('td');
    let name = document.createElement('td');
    let church = document.createElement('td');

    id.classList.add('id-result-search', 'row-table', 'fw-bold');
    name.classList.add('name-result-search', 'row-table');
    church.classList.add('church-result-search', 'row-table');

    id.innerHTML = data[position].id;
    name.innerHTML = `${data[position].name}`;
    church.innerHTML = data[position].church;

    row.setAttribute('id', `row-${data[position].id}`);
    row.setAttribute('onclick', `camperView(id)`);

    row.appendChild(id);
    row.appendChild(name);
    row.appendChild(church);

    table.appendChild(row);
}

const clearTable = function () {
    const table = document.getElementById('multipleResultSearch');
    
    for (let i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}