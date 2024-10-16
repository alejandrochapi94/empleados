// Función asíncrona para obtener datos de la API
async function obtenerDatosApi(url) {
    console.log("Llamando a la API")
  try {
    // Realizar la petición GET a la API con fetch
    const respuesta = await fetch(url);
    
    // Verificar si la respuesta es correcta
    if (respuesta.ok) {
      // Obtener los datos de la respuesta en formato JSON
      const datos = await respuesta.json();
      
      // Retornar los datos
      return datos;
    } else {
      // Retornar un mensaje de error si la respuesta no es correcta
      return `Error: ${respuesta.status} ${respuesta.statusText}`;
    }
  } catch (error) {
    // Retornar un mensaje de error si ocurre un error durante la petición
    return `Error: ${error.message}`;
  }
}

// Ejemplo de uso
const urlApi = 'https://alejandrochapi94.github.io/empleados/db_empleaados.json';
obtenerDatosApi(urlApi)
  .then(datos => console.log(datos))
  .catch(error => console.error(error));

//Código botón male

document.addEventListener('DOMContentLoaded', () => {
  // Obtener el botón "Male"
  const maleButton = document.querySelector('.btn-primary');
    console.log("hola")
  // Agregar evento de clic al botón "Male"
  maleButton.addEventListener('click', async () => {

    const containers = document.querySelectorAll('.container-lg');
  containers.forEach((container) => {
    container.remove();
  });
    // Obtener los datos de la API
    const datos = await obtenerDatosApi('https://alejandrochapi94.github.io/empleados/db_empleaados.json');
    const datosMale = datos.filter((elemento) => elemento.gender === 'male');

    // Crear un contenedor .container
    const container = document.createElement('div');
    container.classList.add('container-lg');

    // Crear un .row dentro del contenedor
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    // Crear tantos .col como elementos hay en la API
    datosMale.forEach((elemento, index) => {
      // Crear un .col para cada elemento
      const col = document.createElement('div');
      col.classList.add('col-4');
      //col.classList.add('m-2');
      col.innerHTML = `
        <h2> ${elemento.name}</h2>
        <p>email: ${elemento.email}</p>
        <p>company: ${elemento.company}</p>
        <p>Phone: ${elemento.phone}</p>
      `;
      row.appendChild(col);
    });

    // Agregar el contenedor al cuerpo del documento
    document.body.appendChild(container);
  });
  // Obtener el botón "Female"
  const femaleButton = document.querySelector('.btn-pink');
  femaleButton.addEventListener('click', async () => {
    const containers = document.querySelectorAll('.container-lg');
  containers.forEach((container) => {
    container.remove();
  });
    // Obtener los datos de la API solo para female
    const datos = await obtenerDatosApi('https://alejandrochapi94.github.io/empleados/db_empleaados.json');
    const datosFemale = datos.filter((elemento) => elemento.gender === 'female');

    // Crear un contenedor .container
    const container = document.createElement('div');
    container.classList.add('container-lg');

    // Crear un .row dentro del contenedor
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    // Crear tantos .col como elementos hay en la API
    datosFemale.forEach((elemento, index) => {
      // Crear un .col para cada elemento
      const col = document.createElement('div');
      col.classList.add('col-4');
      col.innerHTML = `
        <h2> ${elemento.name}</h2>
        <p>email: ${elemento.email}</p>
        <p>company: ${elemento.company}</p>
        <p>Phone: ${elemento.phone}</p>
      `;
      row.appendChild(col);
    });

    // Agregar el contenedor al cuerpo del documento
    document.body.appendChild(container);
  });

});
