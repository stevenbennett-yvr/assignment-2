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
    cleanUpIndex();
    cleanUpCreate();
    cleanUpView();
    renderIndex(contactlist);
    event.preventDefault();
});

    /*
    3. Attach an event listener to the sidebar link that says "Create New Contact".
    Any click on this should call a clear function that clears the main area, then call the renderCreate function.
    Also this listener should cancel the event, so that the link is not followed in the normal way.
    */

document.querySelector('#newcontact').addEventListener('click', event => {
    cleanUpIndex();
    cleanUpView();
    cleanUpCreate();
    renderCreate();
    event.preventDefault();
});

/*
4. Modify createSinlgeIndex function so that enire singleIndex dom elemtn has a handler

*/





    /*
    5. Modify render view function, add an event listener to close button.
document.querySelector('.button.close').addEventListener('click', event => {
    cleanUpView();
    renderIndex(contactlist);
});
    */


    /*
    6. also in renderview function, ensure that clickign the Edit does nothing.

document.querySelector('.button.edit').addEventListener('click', event => {
    event.preventDefault();
});
    */

    /*
    7. modify the renderCreate function, add an event listener to cancle button.
    it should act the same as contacts
document.querySelector('.cancel.button').addEventListener('click', event => {
    cleanUpCreate();
    renderIndex(contactlist);
});
    */

/*
8.
In your renderCreate function, add an event listener to the "Save" button.
In this event listener, create a new object, with keys like "name", "email", "phone", and "address".

*/

/*
9.
Continuing part (8), append this new object to your global contact list.
Also, clear the main area, and then call renderView, passing it your new contact.
Also, cancel the event, so that there are no other consequences of clicking on the button.

*/


function cleanUpIndex() {
    let contact = document.getElementsByClassName('contact');
    while(contact[0]) {
        contact[0].parentNode.removeChild(contact[0]);
    }
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

    a.addEventListener('click', (event) => {
        for (let i=0; i< contactList.length; i++) {
            if (contactList[i]['name'] === a.innerText) {
                cleanUpIndex();
                renderView(contactList[i]);
                event.preventDefault();
            }
        }
    }) 
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
}


/// Create ///

function cleanUpCreate(){
    let contactedit = document.querySelector('.contactedit');
    if (contactedit) {
        contactedit.remove();
    }
}

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
        /// put it togeather
       
        main[0].appendChild(contactedit);
        contactedit.appendChild(contactimg);
        contactimg.appendChild(image)
        contactedit.appendChild(divform);
        divform.appendChild(form);
    
        for (i = 0; i < 4; i++) {
            let container = document.createElement("div");
            container.classList.add("inputcontainer");
            form.appendChild(container);
    
            let type = "";
            let input = "";
            if (i === 0) {
                input = "name";
                type = "text";
            } else if (i === 1) {
                input = "phone";
                type = "tel";
            } else if (i === 2) {
                input = "address";
                type = "text";
            } else {
                input = "email";
                type = "email";
            };
    
            let feild_input = document.createElement("input");
            feild_input.setAttribute("type", type);
            feild_input.setAttribute("id", `contact${input}`);
            feild_input.setAttribute("name", `contact${input}`);
            feild_input.setAttribute('placeholder', `Contact ${input}`);
            feild_input.defaultValue = createList[input];
            container.appendChild(feild_input);
    
            let button = document.createElement("button");
            button.classList.add("extrafield");
            button.setAttribute("id", `extra${input}field`);
            button.setAttribute("name", `extra${input}field`);
            button.textContent = "+";
            container.appendChild(button);
        };
        form.appendChild(buttondiv);
        buttondiv.appendChild(submit);
        buttondiv.appendChild(cancel);
}
