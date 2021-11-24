const darkBtn = document.getElementById('darkbtn')
const form = document.getElementById('form')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')

darkBtn.addEventListener("click", ()=>{
    document.body.classList.toggle('dark')
    form.classList.toggle('dark')
    input1.classList.toggle('dark')
    input2.classList.toggle('dark')
    input3.classList.toggle('dark')
})

