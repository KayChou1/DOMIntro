let body = document.querySelector('body');
let newButton2 = document.createElement('button');
let newButton = document.createElement('button');
let i = 0;



body.appendChild(newButton)
body.appendChild(newButton2)
body.setAttribute('style','color: Blue');
newButton.innerHTML = "Click"; 
newButton2.innerHTML = "Unclick"; 


newButton.addEventListener('click',ButtonClicked);
newButton2.addEventListener('click',UnclickButtonClicked);


    function ButtonClicked(){
    let newHeader = document.createElement('h2')
    newHeader.innerHTML = "Deep Sea Blue";
    newHeader.setAttribute('id', i);
    body.appendChild(newHeader);
    i++;
}


    function UnclickButtonClicked(){
    let toDelete = document.getElementById(i - 1);
    console.log(toDelete);
    body.removeChild(toDelete);
    i--;
}


function removeButtonClicked(){
    let toDelete = document.getElementById(i - 1);
    
    if(toDelete !== null){
    console.log(toDelete);
    
    body.removeChild(toDelete);
    
    i--;
    } else {
    window.alert('Nothing to delete');
    }
   }




console.log(body);