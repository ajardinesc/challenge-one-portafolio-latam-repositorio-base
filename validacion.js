//Haz tú validación en javascript acá
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensagem = document.getElementById("mensagem");
const form = document.getElementById("form");



form.addEventListener("submit", e=> {
    let validEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    e.preventDefault()
    if(nombre.value.length <4 ){
        alert("El nombre es demasiado corto")
    }

    if(email.value.match(validEmail)){
        alert("Correo Valido")
    }

     if(asunto.value.length <4 ){
         alert("El nombre es demasiado corto")
     }

     if(asunto.value.length >300 ){
        alert("El mensaje es demasiado largo")
    }
})

