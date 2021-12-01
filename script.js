    /* 
    1 bad bad global contactlist
    */

let contactlist = [{
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
];

    /* 
    2. Attach an event listener to the sidebar link that says "Contacts".
    Any click on this should call a clear function that clears the main area, then call the renderIndex function, passing in the global contact list.
    Also this listener should cancel the event, so that the link is not followed in the normal way.
    */

document.querySelector('#contactshome').addEventListener('click', event => {
    console.log('event2');
    cleanUpMain();
    renderIndex(contactlist);
    event.preventDefault();
});

    /*
    3. Attach an event listener to the sidebar link that says "Create New Contact".
    Any click on this should call a clear function that clears the main area, then call the renderCreate function.
    Also this listener should cancel the event, so that the link is not followed in the normal way.
    */

document.querySelector('#newcontact').addEventListener('click', event => {
    console.log('event3')
    cleanUpMain();
    renderCreate();
    event.preventDefault();
});

function cleanUpMain() {
    let main = document.querySelector('div.main');
    main.innerHTML = ' ';
    }

function createSingleIndex(input) {
    let main = document.querySelectorAll('div.main');
    let a = document.createElement('a');
    a.href = "page3.html";
    let div = document.createElement('div');
    div.classList.add('contact');
    let text = document.createTextNode(input);
    let paragraph = document.createElement('p');
    paragraph.appendChild(text);
    div.appendChild(paragraph);
    a.appendChild(div);
    main[0].appendChild(a);

    function makeView(event) {
            console.log('event 4');
        let name = event.target.textContent;
        let foundContact;
        for (let i = 0; i < contactlist.length; i++) {
            if (contactlist[i].name === name) {
                foundContact = contactlist[i]
                cleanUpMain();
                renderView(name);
                event.preventDefault();
            }
        }
    }
    a.addEventListener('click', makeView);
    return a;
}

function renderIndex(contactlist) {
    /* accepts array of objects, isolates data from object and inputs it into createSingleIndex */
    for (let i = 0; i < contactlist.length; i++)
        createSingleIndex(contactlist[i].name);
}



/// View ///
function cleanUpView() {
    let contactinfo = document.querySelector('.contactinfo');
    if (contactinfo) {
        contactinfo.remove();
    }
}

function renderView(input){

    console.log(input);

    object = contactlist.find( ({ name }) => name === input );

    main = document.querySelectorAll('div.main');
    let contactinfo = document.createElement('div');
        contactinfo.classList = 'contactinfo';
    let contactname = document.createElement('div');
        contactname.classList = 'contactname';
    let name = document.createTextNode(object.name);
    let image = document.createElement('img');
        image.setAttribute('src','./img/profile.jpg');
        image.classList = 'profilepic';
        image.setAttribute('alt','Profile picture');
    let contactemail = document.createElement('div');
        contactemail.classList = 'contactemail';
        email = document.createTextNode(`Email: ${object.email}`);
    let contactphone = document.createElement('div');
        contactphone.classList = 'contactphone';
        phone = document.createTextNode(`Phone: ${object.phone}`);
    let contactaddress = document.createElement('div');
        contactaddress.classlist = 'contactaddress';
        address = document.createTextNode(`Address: ${object.address}`);
    let buttons = document.createElement('div');
        buttons.classList = 'buttons';
    let edit = document.createElement('button');
        edit.classList = 'button edit';
        edit.setAttribute('value','Edit');
        edittext = document.createTextNode('Edit');
    let close = document.createElement('button');
        close.classList = 'button close';
        close.setAttribute('value','close');
        closetext = document.createTextNode('Close');
    ///put it togeather
    main[0].appendChild(contactinfo);
    contactinfo.appendChild(contactname);
    contactname.appendChild(name);
    contactname.appendChild(image);
    contactinfo.appendChild(contactemail);
    contactemail.appendChild(email);
    contactinfo.appendChild(contactphone);
    contactphone.append(phone);
    contactinfo.appendChild(contactaddress);
    contactaddress.appendChild(address);
    contactinfo.appendChild(buttons);
    buttons.appendChild(edit);
    edit.appendChild(edittext);
    buttons.appendChild(close);
    close.appendChild(closetext);

    document.querySelector('.button.close').addEventListener('click', event => {
        console.log('event5');
        cleanUpMain();
        renderIndex(contactlist);
    });

    document.querySelector('.button.edit').addEventListener('click', event => {
        console.log('event6');
        event.preventDefault();
    });
}


/// Create ///
function renderCreate(createList) {

        let main = document.querySelectorAll('div.main');
        var contactedit = document.createElement('div');
            contactedit.classLlist = 'contactedit';
        let contactimg = document.createElement('div');
            contactimg.classlist = 'contactimg';
        let image = document.createElement('img');
            image.setAttribute('src',"./img/profile.jpg");
            image.classList = 'profilepic';
            image.setAttribute('alt','Profile picture')
        let divform = document.createElement('div');
            divform.classlist = "form";
        let form = document.createElement("form");
        /// append
        main[0].appendChild(contactedit);
        contactedit.appendChild(contactimg);
        contactimg.appendChild(image)
        contactedit.appendChild(divform);
        divform.appendChild(form);
        /// put it togeather
        let formlist = [{
            type: "text",
            id: "contactname",
            name: "contactname",
            placeholder: "Contact Name",
            extra: "extranamefield",
        },{
            type: "tel",
            id: "contactphone",
            name: "contactphone",
            placeholder: "Contact Phone",
            extra: "extraphonefield", 
        },{
            type: "text",
            id: "contactaddress",
            name: "contactaddress",
            placeholder: "Contact Address",
            extra: "extraaddressfield",
        },{
            type: "email",
            id: "contactemail",
            name: "contactemail",
            placeholder: "Contact Email",
            extra: "extraemailfield",
        }];

        for (let i = 0; i < formlist.length; i++) {
            let container = document.createElement("div");
            container.classList.add("inputcontainer");
            form.appendChild(container);
        
            let feild_input = document.createElement("input");
            feild_input.setAttribute('type', formlist[i].type);
            feild_input.setAttribute('id', formlist[i].id);
            feild_input.setAttribute('name', formlist[i].name);
            feild_input.setAttribute('placeholder', formlist[i].placeholder);
            container.appendChild(feild_input);
    
            let button = document.createElement("button");
            button.classList.add("extrafield");
            button.setAttribute("id", formlist[i].extra);
            button.setAttribute("name", formlist[i].extra);
            button.textContent = "+";
            container.appendChild(button);
        };

        let buttondiv = document.createElement('div');
            buttondiv.classlist = 'buttons';
        let submit = document.createElement('button');
            submit.setAttribute('type','submit');
            submit.setAttribute('class','button save');
            submit.setAttribute('id','savecontact');
            submit.setAttribute('name','savecontact');
            savetext = document.createTextNode('Save Contact');
            submit.appendChild(savetext);
        let cancel = document.createElement('button');
            cancel.setAttribute('type','reset');
            cancel.setAttribute('class','button cancel');
            cancel.setAttribute('id','cancel');
            cancel.setAttribute('name','cancel');
            canceltext = document.createTextNode('Cancel');
            cancel.appendChild(canceltext);
            form.appendChild(buttondiv);
            buttondiv.appendChild(submit);
            buttondiv.appendChild(cancel);

        document.querySelector('.button.cancel').addEventListener('click', event => {
            console.log('event7');
            cleanUpMain();
            renderIndex(contactlist);
        });
        document.querySelector('.button.save').addEventListener('click', event => {
        console.log('event8');
        let addcontact = {
            name: document.querySelector('#contactname').value,
            phone: document.querySelector('#contactphone').value,
            address: document.querySelector('#contactaddress').value,
            email: document.querySelector('#contactemail').value,
        };
        console.log(addcontact.name);
        if (addcontact.name != '' && addcontact.phone != '' && addcontact.address != '' && addcontact.email != '') {
        contactlist.push(addcontact);
        cleanUpMain();
        let name = contactlist.slice(-1)[0];
        renderView(name.name);
        event.preventDefault();
        }
    });
}
