function cleanUpIndex() {
    let contact = document.getElementsByClassName('contact');
    while(contact[0]) {
        contact[0].parentNode.removeChild(contact[0]);
    }
}


function createSingleIndex(input) {
    var new_card = document.createElement('div');
    new_card.className = "contact";
    new_card.innerHMTL = input;
    document.body.appendChild(new_card)
    return new_card
}

function renderIndex(input)
    