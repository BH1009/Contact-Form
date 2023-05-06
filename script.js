const formulario = document.getElementById("contacto");
let errores = ``;

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
    formulario.action = 'https://formsubmit.co/brayanhernandez.proglunes@gmail.com';
  }
})


