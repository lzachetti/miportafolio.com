//variables
const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const celular = document.querySelector('#celular');
const correo = document.querySelector('#correo');
const direccion = document.querySelector('#direccion');
const pais = document.querySelector('#pais');
const f_name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

//////btn read more text /////////

let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');
hideText_btn.addEventListener('click', toggleText);
function toggleText() {
    hideText.classList.toggle('show');
    if (hideText.classList.contains('show')) {
        hideText_btn.innerHTML = 'Read Less';
    } else {
        hideText_btn.innerHTML = 'Read More';
    }
}


//funcion API
const generarUsuario = async () => {
    try {
        const url = ' https://randomuser.me/api/ ';
        const respuesta = await fetch(url);
        const { results } = await respuesta.json();
        const datos = results[0];

        foto.src = datos.picture.large;
        nombre.textContent = datos.name.last + " " + datos.name.first;
        telefono.textContent = datos.phone;
        celular.textContent = datos.cell;
        correo.textContent = datos.email;
        direccion.textContent = datos.location.street.number + " " + datos.location.street.name + ", " + datos.location.city;
        pais.textContent = datos.location.country;

    } catch (error) {
        console.log(error);
    }
}
generarUsuario();


//////validation form/////////

function validarform() {
    //e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";
    if(f_name.value.length == 0){
        warnings += "El nombre no es valido <br>";
        entrar = true;
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(message.value.length == 0){
        warnings += "El message no es valido <br>";
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Enviado";
    }
}

