const formulario = document.getElementById("contacto");

formulario.addEventListener("submit", (e) => {

  //Se recuperan todos los campos del formulario
  const nombre = formulario.nombre.value;
  const correo = formulario.correo.value;
  const asunto = formulario.asunto.value;
  const opinion = formulario.opinion.value;

  e.preventDefault();
  alert(`
    ${nombre}
    ${correo}
    ${asunto}
    ${opinion}
  `);

})