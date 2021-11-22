let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
  ]

function cleanUpIndex() {
    let contact = document.getElementsByClassName('contact');
    while(contact[0]) {
        contact[0].parentNode.removeChild(contact[0]);
    }
}


function createSingleIndex(input) {
    /* define elements <a href="page3.html"><div class="contact"><p>Barry Allen</p></div></a> */
    main = document.querySelectorAll('div.main');
    text = document.createTextNode(input);
    paragraph = document.createElement('p');
    div = document.createElement('div');
    a = document.createElement('a');
    /* insert class=contact into div and href=page3.html into a */
    div.classList.add('contact');
    a.href = "page3.html";
    /* put the parst togeather */
    paragraph.appendChild(text);
    div.appendChild(paragraph);
    a.appendChild(div);
    /* append into list */
    main[0].appendChild(a);
    return a
}

function renderIndex(contactlist) {
    /* accepts array of objects, isolates data from object and inputs it into createSingleIndex */
    for (let i = 0; i < contactlist.length; i++)
        createSingleIndex(contactlist[i].name);
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
