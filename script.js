const h3 = document.getElementById("title")
const codeType = document.getElementById("code-type")
const dotCode = document.getElementById("code")
const codeText = document.getElementById("code-text")
const keyType = document.getElementById("key-type")
const dotKey = document.getElementById("key")
const keyText = document.getElementById("key-text")
const whichType = document.getElementById("which-type")
const dotWhich = document.getElementById("which")
const whichText = document.getElementById("which-text")
const boxes = document.getElementsByClassName("box")

window.addEventListener("keydown", (event)=>{
    title.style.display = "none"
    for(box of boxes){
        box.style.display = "flex"
    }

    codeType.textContent = "event.code"
    dotCode.textContent = event.code;
    codeText.textContent = "The physical key on the keyboard, ignoring alterations made by Capslock or Shift."

    keyType.textContent = "event.key"
    dotKey.textContent = event.key;
    keyText.textContent = "The key after alterations such as Capslock or Shift, or changes to the keyboard locale or layout."

    whichType.textContent = "event.which"
    dotWhich.textContent = event.which
    whichText.textContent = "The unicode value of the pressed key."
})