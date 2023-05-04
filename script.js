const formulario = document.getElementById("contacto");
let errores = ``;
let datos = '';
formulario.addEventListener("submit", (e) => {
  //Se frena la reaccion del formulario
  e.preventDefault();

  //Se recuperan todos los campos del formulario
  const nombre = formulario.nombre.value;
  const correo = formulario.correo.value;
  const asunto = formulario.asunto.value;
  const opinion = formulario.opinion.value;

  if (nombre === "") {
    errores += `El campo nombre esta vacio \n`;
  }
  if (correo === "") {
    errores += `El campo correo esta vacio \n`;
  }
  if (asunto === "") {
    errores += `El campo asunto esta vacio \n`;
  }
  if (opinion === "") {
    errores += `El campo opinion esta vacio \n`;
  }
  const datos = new FormData(formulario);
  if(errores.length > 0){
    alert(errores);
    errores = "";
  }else{
    // //Se llama una petición ajax
    enviarDatos(datos);
    formulario.reset();
  }
})


function enviarDatos(datos){
  fetch('correo.php', {
    method: 'POST',
    body: datos
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
}

function enviarDatosX(datos){
  let xmlh = new XMLHttpRequest();
  xmlh.open('POST', 'correo.php', true);
  xmlh.send(datos);
  xmlh.onreadystatechange = () => {
    if(this.readyState == 4 && this.status == 200){
      console.log(JSON.parse(this.responseText));
    }
  }
}