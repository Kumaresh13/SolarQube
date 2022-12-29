const oBtn = document.getElementById("see-results-btn");
const cBtn = document.getElementById("close-btn");
const sBtn = document.getElementById("overlay-btn");
const oForm = document.getElementById("overlay-container");



oBtn.addEventListener("click", function(){
    oForm.style.display="block";
})

cBtn.addEventListener("click", function(){
    oForm.style.display="none";
})

sBtn.addEventListener("click", function(){
    oForm.style.display="none";
})
