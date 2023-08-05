const input = document.querySelector("#qr-form input")
const cont = document.querySelector(".container")
const button = document.querySelector("#qr-form button")
const img = document.querySelector("#qr-code img")

function generateQrCode(){
  const inputval = input.value
  if(!inputval) return

  button.innerHTML = `Gerando Código...`
  img.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputval}`

  img.addEventListener('load',() =>{
    cont.classList.add("active")
    button.innerHTML = `Código criado!`
  })
}

button.addEventListener('click',() =>{
  generateQrCode()
})

input.addEventListener('keyup',() =>{
  if(!input.value){
    cont.classList.remove("active")
    button.innerText = `Gerar QR Code!`
  }
})