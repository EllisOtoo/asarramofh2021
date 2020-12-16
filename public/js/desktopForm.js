let callButton = document.querySelector("#callButton"),
proposalButton = document.querySelector("#proposalButton"),
quoteButton = document.querySelector("#quoteButton"),
transitionBox = document.getElementsByClassName('transitionBox')[0],
formBoxChildren =  formBox.children,

//*  PROPOSAL & QUOTE INPUT ELEMENTS
proposalInputElements = document.getElementsByClassName('proposalInputs')[0],
quoteInputElements = document.getElementsByClassName('quoteInputs')[0],
formButton = document.getElementsByTagName('button')[0];

// console.log ('Children', formBoxChildren.length, formBoxChildren);

let formInputElements = document.getElementsByClassName ('form-input-material')



callButton.addEventListener ('click',  ()=> {
    for ( let i= 0; proposalInputElements.children.length > 0; i++ ) {
        proposalInputElements.removeChild(proposalInputElements.firstChild)
    }
    for ( let i= 0; quoteInputElements.children.length > 0; i++ ) {
        quoteInputElements.removeChild(quoteInputElements.firstChild)
    }
    formBox.style.height = '530px';
    formButton.innerHTML = "Request Call"

})

let proposalInputHtml = `<div class="form-input-material">
<input type="number" name="licenseNumber" placeholder="Number of user licenses required" autocomplete="off" class="form-control-material" required />
</div> 
<div class="form-input-material">
<input type="text" name="AdditionalInformation" placeholder="Additional information" autocomplete="off" class="form-control-material" required />
</div> `

proposalButton.addEventListener ('click', ()=> {
    proposalInputElements.innerHTML = proposalInputHtml;
    for ( let i= 0; quoteInputElements.children.length > 0; i++ ) {
            quoteInputElements.removeChild(quoteInputElements.firstChild)
    }
    formButton.innerHTML = "Request Proposal"
    formBox.style.height = '650.4px';
}) 


quoteButton.addEventListener ('click', ()=> {
    formBox.style.height =  '730px';
    formButton.innerHTML = "Request Quote"
    proposalInputElements.innerHTML ='';  
    quoteInputElements.innerHTML = 
            `<div class="quickBookVersion"> 
                <p >QuickBooks Version:</p>
                <input type="radio" name="quickBooksVersion" id="qbDesktopRadio" value="QuickBooks_Desktop"> 
                <label for="qbDesktopRadio">QB Desktop</label>
                <input type="radio" name="quickBooksVersion" id="qbOnline" value="QuickBooks_Online"> 
                <label for="qbOnline">QB Online</label>
                <input type="radio" name="quickBooksVersion" id="imNotSure" class="imNotSure02" value="QuickBooks_Not_Sure"> 
                <label for="imNotSure">I'm not sure</label>
            </div> 
            <hr style="width: 300px;">
            <div id ="versionOptions"> </div>
            <div class="form-input-material">
            <input type="number" name="licenseNumber" placeholder="Number of user licenses required" autocomplete="off" class="form-control-material" required />
            </div> 
            <div class="form-input-material">
            <input type="text" name="AdditionalInformation" placeholder="Additional information" autocomplete="off" class="form-control-material" required />
            </div>`

          {
            let qbDesktopRadio =  document.getElementById('qbDesktopRadio'),
                qbOnline = document.getElementById('qbOnline'),
                imNotSure =document.getElementById('imNotSure'),
                versionOptions = document.getElementById ('versionOptions')
            
            qbDesktopRadio.addEventListener ('click', ()=>{
                versionOptions.innerHTML = `<div >
                <input type="radio" name="quickBooksVariant" id="qbUk" value="QuickBooks_Desktop"> 
                <label for="qbUk">QuickBooks UK</label>
                <input type="radio" name="quickBooksVariant" id="qbUs" value="QuickBooks_Online"> 
                <label for="qbUs">QuickBooks US</label> 
              <br>  <input type="radio" name="quickBooksVariant" id="qbCanada" value="QuickBooks_Not_Sure"> 
                <label for="qbCanada">QuickBooks Canada</label>
                <input type="radio" name="quickBooksVariant" id="qbAustralia" value="QuickBooks_Not_Sure"> 
                <label id="austraLabel" for="qbAustralia">QuickBooks Australia</label> <br>
                <input type="radio" name="quickBooksNotSure" id="imNotSureVariant" value="QuickBooks_Not_Sure"> 
                <label for="imNotSureVariant">Im not Sure</label>
              </div>`
              formBox.style.height = '830px';
            })
        
            qbOnline.addEventListener ('click', ()=>{
                versionOptions.innerHTML = `<div>
                <input type="radio" name="quickBooksOnline" id="qbUk" value="QuickBooks_Desktop"> 
                <label for="qbUk">QuickBooks Simple</label>
                <input type="radio" name="quickBooksOnline" id="qbUs" value="QuickBooks_Online"> 
                <label for="qbUs">QuickBooks US</label>  <br>
                <input type="radio" name="quickBooksOnline" id="qbCanada" value="QuickBooks_Not_Sure"> 
                <label for="qbCanada">QuickBooks Canada</label>
              </div>`
              formBox.style.height = '810px';
            })

            imNotSure.addEventListener (
                'click',
                 ()=>{ 
                    versionOptions.innerHTML = ``;
                    formBox.style.height = '730px';
                }
            )
          }
});

