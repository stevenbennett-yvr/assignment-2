let contactList = [
    {
        name: "Barry Allen",
    }, 
    {
        name: "Beverly Crusher",
    },
    {
        name: "Diana Prince",
    },
  ]

  let contactName = [{
    name: "Raquel Ervin",
    phone: "+1 555 555-5555",
    address: "123 front st, unit #1, Dakota City",
    email: "rocket@gmail.com",
}
  ]

let createList = [
    'Contact Name', 'Contact Phone', 'Contact Address', 'Contact Email'
]


/// Index ///

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

/// View ///

function cleanUpView(){
    let contactinfo = document.querySelectorAll('div.contactinfo');
    while(contactinfo[0]) {
        contactinfo[0].parentNode.removeChild(contactinfo[0]);
    } 
}

function renderView(input){
/*
<div class="contactinfo">
    <div class="contactname">
        Raquel Ervin
        <img src="./img/profile.jpg" class="profilepic" alt="Profile picture">
    </div>
    <div class="contactemail">email: rocket@gmail.com</div>
    <div class="contactphone">cell: +1 555 555-5555</div>
    <div class="contactaddress">address: 123 front st, Unit #1, Dakota City</div>
    <div class="buttons">
        <button class="button edit" value="Edit">Edit</button>
        <button class="button close" value="Close">Close</button>
    </div>
</div>
*/
    main = document.querySelectorAll('div.main');
    let contactinfo = document.createElement('div');
        contactinfo.classList = 'contactinfo';
    let contactname = document.createElement('div');
        contactname.classList = 'contactname';
    let name = document.createTextNode(input[0].name);
    let image = document.createElement('img');
        image.setAttribute('src','./img/profile.jpg');
        image.classList = 'profilepic';
        image.setAttribute('alt','Profile picture');
    let contactemail = document.createElement('div');
        contactemail.classList = 'contactemail';
        email = document.createTextNode(`Email: ${input[0].email}`);
    let contactphone = document.createElement('div');
        contactphone.classList = 'contactphone';
        phone = document.createTextNode(`Phone: ${input[0].phone}`);
    let contactaddress = document.createElement('div');
        contactaddress.classlist = 'contactaddress';
        address = document.createTextNode(`Address: ${input[0].address}`);
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
    let contactedit = document.querySelectorAll('div.contactedit');
    while(contactedit[0]) {
        contactedit[0].parentNode.removeChild(contactedit[0]);
    }
}

function createCreate(input){
/*  
        <div class="inputcontainer">
            <input type="text" id="!!!contactname" name="!!!contactname" placeholder="!!!Contact Name">
            <button class="extrafield" id="extranamefield" name="extranamefield">+</button>
        </div>

        <div class="inputcontainer">
            <input type="tel" id="!!!contactphone" name="!!!contactphone" placeholder="!!!Contact Phone">
            <button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>
        </div>
   
*/ 
    let inputcontainer = document.createElement('div');
        inputcontainer.classlist = 'inputcontainer';
    let inputType = document.createElement('div');
        inputType.classList = input;
        inputType.setAttribute('id',input);
        inputType.setAttribute('name',input);
        inputType.setAttribute('placeholder',input);
    let button = document.createElement('button');
        button.classList = input;
        button.setAttribute('id',input);
        button.setAttribute('name',input);
    plus = document.createTextNode('+');

    button.appendChild(plus);
    inputcontainer.appendChild(inputType);
    inputcontainer.appendChild(button);
    return
}

function renderCreate(input){
/* 
    <div class="contactedit">
        <div class="contactimg">
            <img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
        </div>
        <div class="form">
            <form>
            createCreate()
                <div class="buttons">
                    <button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
                    <button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>                
                </div>
            </form>
        </div>
    </div>
*/
    /// define 
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

    for (let i = 0; i < input.length; i++) {
        var update = createCreate(input[i]);
        let inputcontainer = document.createElement('div');
        inputcontainer.classlist = 'inputcontainer';
        let inputType = document.createElement('div');
        inputType.classList = input;
        inputType.setAttribute('id',input);
        inputType.setAttribute('name',input);
        inputType.setAttribute('placeholder',input);
        let button = document.createElement('button');
        button.classList = input;
        button.setAttribute('id',input);
        button.setAttribute('name',input);
        form.appendChild(update);
        plus = document.createTextNode('+');
        button.appendChild(plus);
        inputcontainer.appendChild(inputType);
        inputcontainer.appendChild(button);
    }
    divform.appendChild(submit)
    divform.appendChild(cancel)

}
