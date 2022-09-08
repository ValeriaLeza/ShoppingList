let btnA = document.getElementById("btnAgregar");



btnA.addEventListener("click",function(e){
    e.preventDefault();
    //Validaciones
    let campo1 = document.getElementById("Name");
    let campo2 = document.getElementById("Number");
    console.log(campo1);
    console.log(campo2);

    if((campo1.value.length >= 3)&&(isNaN(campo1))) {
        campo1.classList.remove("is-invalid");
        campo1.classList.add("is-valid");
    } else {
        campo1.classList.remove("is-valid");
        campo1.classList.add("is-invalid");
    }
    if(isNaN(campo2)&&(campo2.value >= 1)) {
        campo2.classList.remove("is-invalid");
        campo2.classList.add("is-valid");
    } else {
        campo2.classList.remove("is-valid");
        campo2.classList.add("is-invalid");
    }
    //Elementos de la lista
   
    
});

