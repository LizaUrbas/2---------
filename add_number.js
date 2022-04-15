
let phonebook = [];
document.querySelector('.press').onclick = clickAdd;

function clickAdd() {

    let username = document.querySelector('.userName').value;
    let lastname = document.querySelector('.lastName').value;
    let phone = document.querySelector('.userPhone').value;

    let contact = lastname + ' ' + username + ' : ' + phone;
    document.querySelector('.outAdd').innerHTML = contact;
    console.log(contact);

    phonebook.push(contact);
    console.log(phonebook);
    
};

document.querySelector('.enter').onclick = clickEnter;

function clickEnter() {
    document.querySelector('.outEnter').innerHTML = phonebook.sort() + " ";
}