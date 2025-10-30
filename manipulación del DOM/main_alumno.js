/* =========================================================================
   Tema 5 – Práctica DOM - Archivo del Alumno
   
   INSTRUCCIONES:
   1. Completa la funcionalidad de cada ejercicio siguiendo los comentarios
   2. Usa solo JavaScript vanilla (sin librerías externas)
   3. Sigue el patrón del Ejercicio 1 que está completado como ejemplo
   ========================================================================= */

/* ==============================================================
   Ejercicio 1 – Selectores y modificación (EJEMPLO COMPLETADO)
   ============================================================== */

// 1. Seleccionamos los elementos que vamos a usar
const contenido = document.getElementById('contenido', 'contenido1');
const btnEj1 = document.getElementById('btn-ej1');

// 2. Añadimos el evento click al botón
btnEj1.addEventListener('click', function () {
    // Cambiar el texto del primer párrafo
    const primerParrafo = contenido.querySelector('p');
    primerParrafo.textContent = 'Este texto ha sido modificado con JavaScript';

    // Cambiar el color del segundo párrafo
    const segundoParrafo = contenido.querySelectorAll('p')[1];
    if (segundoParrafo) {
        segundoParrafo.style.color = 'blue';
    }

    // Añadir clase "resaltado" a todos los párrafos
    const todosLosParrafos = contenido.querySelectorAll('p');
    for (let i = 0; i < todosLosParrafos.length; i++) {
        todosLosParrafos[i].classList.add('resaltado');
    }
});
/* ============================================================
   TODO: Ejercicio 2 – Crear y eliminar elementos del DOM
   ============================================================ */

// TODO: 1. Seleccionar los botones con IDs: btn-add y btn-remove

// TODO: 2. Crear función para el botón "Añadir párrafo"
//         - Crear un nuevo elemento <p>
//         - Asignar texto: "Nuevo párrafo añadido"
//         - Añadir clase Bootstrap: "mb-2"
//         - Agregarlo al contenedor #contenido
//         - Aplicar eventos hover (función del ejercicio 3)

// TODO: 3. Crear función para el botón "Eliminar párrafo"
//         - Buscar todos los párrafos en #contenido
//         - Si hay párrafos, eliminar el último

const btnAdd = document.getElementById('btn-add');
const btnRemove = document.getElementById('btn-remove');
function añadirParrafo(){
   const parrafo = document.createElement('p');
   parrafo.textContent = 'nuevo párrafo añadido';
   parrafo.classList.add('mb-2');
   contenido.appendChild(parrafo);
}
function eliminarParrafo(){
   const parrafo = contenido.querySelector('p:last-of-type');
   if(parrafo){
   contenido.removeChild(parrafo);
   }
}
/* ==========================================
   TODO: Ejercicio 3 – Eventos de ratón (hover)
   ========================================== */

// TODO: 1. Crear función para cuando entra el ratón
//         - Cambiar backgroundColor a '#e7f5ff'

// TODO: 2. Crear función para cuando sale el ratón
//         - Restaurar backgroundColor a ''

// TODO: 3. Crear función para aplicar eventos hover a un párrafo
//         - Usar addEventListener para 'mouseover' y 'mouseout'

// TODO: 4. Aplicar hover a todos los párrafos existentes inicialmente
function aplicarEventosHover(elemento){
   
   elemento.addEventListener('mouseenter', () => {
   elemento.style.backgroundColor = '#e7f5ff';

   });
   elemento.addEventListener('mouseleave', () => {
   elemento.style.backgroundColor = '';

   });

}
document.querySelectorAll('#contenido p').forEach(aplicarEventosHover);

/* ======================================================
   TODO: Ejercicio 4 – Trabajar con inputs y formularios
   ====================================================== */

// TODO: 1. Seleccionar elementos: input (#nuevoTexto), botón (#btn-cambiar), mensaje error (#msg-ej4)

// TODO: 2. Crear función para el botón "Cambiar texto"
//         - Obtener valor del input (usar .trim())
//         - Si está vacío: mostrar mensaje error, enfocar input
//         - Si tiene texto: ocultar error, cambiar texto del primer párrafo


  
   document.getElementById("btn-cambiar").addEventListener("click", function () {
      const nuevoTexto = document.getElementById("nuevoTexto").value.trim();
      const mensajeError = document.getElementById("msg-ej4");
      const primerParrafo = document.querySelector("p");

      if (nuevoTexto === "") {
        mensajeError.style.display = "block";
        
      } else {
        primerParrafo.textContent = nuevoTexto;
        mensajeError.style.display = "none";
        
      }
    });




/* ===================================================
   TODO: Ejercicio 5 – Lista de tareas (To-Do List)
   =================================================== */

// TODO: 1. Seleccionar elementos: input (#tareaInput), botones (#btn-tarea, #btn-borrar-completadas), lista (#listaTareas)

// TODO: 2. Función para añadir tarea
//         - Obtener texto del input
//         - Si no está vacío: crear <li>, añadir texto, agregar evento click para toggle clase 'completada'
//         - Limpiar input y enfocar

// TODO: 3. Función para borrar tareas completadas
//         - Buscar todos los <li> con clase 'completada'
//         - Eliminar cada uno de la lista


/* ===================================================
   CONSEJOS PARA LOS ALUMNOS:
   
   - Usa console.log() para depurar tu código
   - Prueba cada función por separado antes de continuar
   - Recuerda usar IDs únicos para cada elemento
   - Las clases CSS ya están definidas en custom.css
   - Si algo no funciona, revisa la consola del navegador
   =================================================== */
const input = document.getElementById("tareaInput");
const botonBorrar = document.getElementById("btn-borrar-completadas");
const lista = document.getElementById("listaTareas");

document.getElementById("btn-tarea").addEventListener("click", function () {
   const textoInput = input.value.trim();
   if (textoInput === '') return;

   const fila = document.createElement('li');
   fila.textContent = textoInput;
   fila.classList.add("list-group-item");

   fila.addEventListener("click", function () {
      fila.classList.toggle("completada");
      fila.style.background = 'green';
      fila.style.color = 'white';   
   });

   lista.appendChild(fila);
   input.value = '';
});

 document.getElementById('btn-borrar-completadas').addEventListener('click', function () {
   const completadas = document.querySelectorAll(".completada")
   completadas.forEach(li => li.remove());
});

