let body = document.querySelector('body');
body.setAttribute('style','color: Blue');

let newButton = document.createElement('button');
body.appendChild(newButton)
newButton.innerHTML = "Click"; 

let i = 0;

function ButtonClicked(){
    console.log('hit');
    //alert("Great, you clicked the button!");

    let newHeader = document.createElement('h2')
    newHeader.innerHTML = "Deep Sea Blue";
    newHeader.setAttribute('id', i);
    body.appendChild(newHeader);
    
    console.log(newHeader);
}




newButton.addEventListener('click',ButtonClicked);

let newButton2 = document.createElement('button');
body.appendChild(newButton2)
newButton2.innerHTML = "Unclick"; 


function UnclickButtonClicked(){
    //console.log('hit');
    //alert("Great, you clicked the button!");

    let newHeader = document.createElement('h2')
    newHeader.innerHTML = "Deep Sea Blue";
    newHeader.setAttribute('id',i);
    body.appendChild(newHeader);

    console.log(newHeader);
}




newButton2.addEventListener('click',UnclickButtonClicked);

console.log(body);