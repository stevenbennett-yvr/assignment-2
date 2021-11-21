function cleanUpIndex() {
    let contact = document.getElementsByClassName('contact');
    while(contact[0]) {
        contact[0].parentNode.removeChild(contact[0]);
    }
}


function createSingleIndex(input) {
    /* <a href="page3.html"><div class="contact"><p>Barry Allen</p></div></a> */
    text = document.createTextNode(input);
    paragraph = document.createElement('p');
    div = document.createElement('div');
    a = document.createElement('a');
    div.classList.add('contact');
    a.href = "page3.html";
    paragraph.appendChild(text);
    div.appendChild(paragraph);
    a.appendChild(div);
    return a
}

function renderIndex(input){
    /* append onto <div class='main'> list */
    main = document.querySelectorAll('div.main');
    new_card = createSingleIndex(input);
    main[0].appendChild(new_card);
    return main
}

function cleanUpView(){
    let contactinfo = document.querySelectorAll('div.contactinfo');
    while(contactinfo[0]) {
        contactinfo[0].parentNode.removeChild(contactinfo[0]);
    } 
}

function cleanUpCreate(){
    let contactedit = document.querySelectorAll('div.contactedit');
    while(contactedit[0]) {
        contactedit[0].parentNode.removeChild(contactedit[0]);
    }
}
