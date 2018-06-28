let btn = document.getElementById('btn');
let numeroTarjeta;
let tarifaAlta = 760;
let tarifaMedio = 680;
let tarifaBajo = 630;
let saldoTarjeta;
let validacionDeCorreo = /\S+@\S+\.\S+/;

let dataApi = fetch('http://www.psep.cl/api/Bip.php?&numberBip=666')
.then(function (response){ 
  return response.json() 
})
.then(function (response){
  dataApi = response;
  console.log(dataApi);
})


// esta funcion valida mail y clave mediante el boton
btn.addEventListener('click',function (){
    let correoUsuario = document.getElementById('exampleInputEmail1').value;
    let claveUsuario = document.getElementById('exampleInputPassword1').value;
    
    if (correoUsuario != validacionDeCorreo  && claveUsuario > 8){
        alert('el email es correcto y clave son correctos')
    } else {
        alert("La dirección de email y tu clave no cumplen con los requisitos");
    }    
 });

//funcion que agrega tarjetas 
// function agregarTarjetas(numeroTarjeta){
//     numeroTarjeta.innerHTML = '';
//     numeroTarjeta.innerHTML += `
//     <tr>
//     <td>${numeroTarjeta}</td>
//     </tr>`;  
// };



