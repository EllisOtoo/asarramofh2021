let toggleOpenButton = document.getElementById('toggleOpen'),
toggleOpenButton02 = document.getElementById('toggleOpen02'),
successPara   = document.getElementById ('requestSuccessMsg'),

qbDesktopRadio = document.getElementById ('qbDesktopRadio'),
variantDiv = document.getElementsByClassName ('variantInputBox')[0], 
variantHeader = document.getElementsByClassName('variantHeader')[0],

qbOnline = document.getElementById ('qbOnline'),
qbOnlineDiv = document.getElementsByClassName('qbOnlineHide')[0]
qbOnlineHeader = document.getElementsByClassName('qbOnlineHeader')[0],
imNotSure02 = document.getElementsByClassName('imNotSure02')[0],

secondForm =document.getElementById('requestForQuote');

qbDesktopRadio.addEventListener ('click', ()=>{
    if ( (window.getComputedStyle(variantDiv, null).display == 'none')) {
        variantDiv.style.display = 'grid'
        variantHeader.style.display = 'block'
    } else {
        variantDiv.style.display = 'none'
        variantHeader.style.display = 'none'
    }
    /* variantDiv.classList.toggle ('variantInputBoxShow')
    variantHeader.classList.toggle ('variantHeaderShow') */
})

qbOnline.addEventListener ('click', ()=>{
    
    if( (window.getComputedStyle(qbOnlineHeader, null).display == 'none')  &&  (window.getComputedStyle(qbOnlineDiv, null).display == 'none')  ) {
        qbOnlineHeader.style.display = 'block'
        qbOnlineDiv.style.display = 'block'
    } else {
        qbOnlineHeader.style.display = 'none'
        qbOnlineDiv.style.display = 'none'
    }

})


imNotSure02.addEventListener ('click', ()=>{
    if (window.getComputedStyle(qbOnlineHeader, null).display == 'block')  {
        qbOnlineHeader.style.display = 'none';
        qbOnlineDiv.style.display = 'none';
    }
    if (window.getComputedStyle(variantDiv, null).display == 'grid')  {
        variantHeader.style.display = 'none';
        variantDiv.style.display = 'none';
    }
}) 

//* CheckBox Js



toggleOpenButton.addEventListener('click',  ()=>  {
    console.log ('helllo')
    let formDiv = document.getElementsByClassName('formDiv')[0];
    formDiv.classList.toggle("openForm")
    
    console.log ('hello')
   /*  setTimeout(()=> { //*Applies after 3s
        for}mDiv.classList.toggle("addPaddingToForm")
    }, 3000) */
}
)
toggleOpenButton02.addEventListener('click',  ()=>  {
    console.log ('helllo')
    let formDiv = document.getElementsByClassName('formDiv')[1];
    formDiv.classList.toggle("openForm")
    
    console.log ('hello')
   /*  setTimeout(()=> { //*Applies after 3s
        formDiv.classList.toggle("addPaddingToForm")
    }, 3000) */
}
)


let formParent01 = document.getElementById('formParent01');
let requestSuccessMsg = document.getElementById('requestSuccessMsg')

if(requestSuccessMsg) {
    setTimeout(() => {
      console.log(formParent01)
      requestSuccessMsg.parentNode.removeChild(requestSuccessMsg)
    }, 4000);

}



let sillyString = "Ellis "
console.log (sillyString.length);


