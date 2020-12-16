/* 



{let qbDesktopRadio = document.getElementById ('qbDesktopRadio'),
variantDiv = document.getElementsByClassName ('variantInputBox')[0], 
variantHeader = document.getElementsByClassName('variantHeader')[0],

qbOnline = document.getElementById ('qbOnline'),
qbOnlineDiv = document.getElementsByClassName('qbOnlineHide')[0]
qbOnlineHeader = document.getElementsByClassName('qbOnlineHeader')[0],
imNotSure02 = document.getElementsByClassName('imNotSure02')[0],

secondForm =document.getElementById('requestForQuote');

qbDesktopRadio.addEventListener ('click', ()=>{
    console.log (`I was clicked`)
    if ( (window.getComputedStyle(variantDiv, null).display == 'none')) {
        variantDiv.style.display = 'grid'
        variantHeader.style.display = 'block'
    } else {
        variantDiv.style.display = 'none'
        variantHeader.style.display = 'none'
    }

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



let formParent01 = document.getElementById('formParent01');
let requestSuccessMsg = document.getElementById('requestSuccessMsg')

if(requestSuccessMsg) {
    setTimeout(() => {
      console.log(formParent01)
      requestSuccessMsg.parentNode.removeChild(requestSuccessMsg)
    }, 4000);

}} */