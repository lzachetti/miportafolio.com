//variables
const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const celular = document.querySelector('#celular');
const correo = document.querySelector('#correo');
const direccion = document.querySelector('#direccion');
const pais = document.querySelector('#pais');


//funcion
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

//////btn read text /////////

let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');
hideText_btn.addEventListener('click', toggleText);
function toggleText(){
    hideText.classList.toggle('show');
    if(hideText.classList.contains('show')){
        hideText_btn.innerHTML = 'Read Less';
    }else{
        hideText_btn.innerHTML = 'Read More';
    }
}



