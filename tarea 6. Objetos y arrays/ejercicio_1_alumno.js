/* ===================================
   TEMA 6 - OBJETOS Y ARRAYS
   EJERCICIOS PARA ESTUDIANTES
   ===================================

   INSTRUCCIONES:
   1. Completa cada función siguiendo los comentarios TODO
   2. No modifiques los nombres de las funciones ni variables principales
   3. Usa solo JavaScript vanilla (sin librerías)
   4. Todas las salidas deben mostrarse en el DOM usando innerHTML
   5. Testea cada ejercicio antes de continuar

   RECORDATORIO DE SINTAXIS:
   - Usar function nombreFuncion() {} (NO arrow functions)
   - Usar var para declarar variables
   - Usar document.getElementById() para seleccionar elementos
   - Usar innerHTML para mostrar resultados en el DOM
*/

// ===================================
// EJERCICIO 1: CREAR OBJETO ESTUDIANTE
// ===================================

function ejercicio1() {
    // TODO: Crear un objeto estudiante con las siguientes propiedades:
    // - nombre: "María"
    // - apellidos: "García López"
    // - edad: 20
    // - curso: "2º DAW"
    // - mostrarInfo: function() que retorne HTML con toda la información
        
    var estudiante = {
        nombre: "María", 
        apellidos: "García Lopez", 
        edad: 20, 
        curso: "2º DAW",

        mostrarInfo: function () {
            return '<h3>estudiante:<h3>' +
            '<p><strong>nombre:</strong> ' + this.nombre + '</p>' +
            '<p><strong>apellidos:</strong> ' + this.apellidos + '</p>' +
            '<p><strong>edad:</strong> ' + this.edad + '</p>' +
            '<p><strong>curso:</strong> ' + this.curso + '</p>'; 
        }
        
    };
    document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();
}

// ===================================
// EJERCICIO 2: ARRAY DE COLORES
// ===================================

// Variable global para el array de colores
var colores = ["rojo", "azul", "verde"];

function agregarColor() {
    var input = document.getElementById("color-input");
    var color = input.value.trim();
    colores.push(color);
    document.getElementById("resultado-ej2").innerHTML = '<div class="alert alert-success">color ' + color + ' añadido correctamente</p>';
    color.value='';

}

function eliminarUltimoColor() {
    // TODO: Eliminar el último elemento del array usando pop()
    // TODO: Mostrar mensaje indicando qué color se eliminó
    // TODO: Si el array está vacío, mostrar mensaje apropiado
    var eliminado = colores.pop();
    document.getElementById("resultado-ej2").innerHTML = '<div class="alert alert-danger">color ' + eliminado + ' eliminado correctamente</div>';
     if (colores.length === 0) {
        document.getElementById("resultado-ej2").innerHTML = '<div class="alert alert-warning">la lista de colores está vacía.</div>';
    }

}

function mostrarColores() {
    // TODO: Mostrar todos los colores del array
    // TODO: Crear HTML con la lista de colores
    // Sugerencia: usar un bucle for para crear la lista

    var html = "<h5>Lista de Colores:</h5><ul>";
    // TODO: Completar el bucle para mostrar los colores
    for (var i = 0; i < colores.length; i++){
    html += "<li>" + colores[i] + "</li>";
    }
    html += "</ul>"
    document.getElementById("resultado-ej2").innerHTML = html;
}

// ===================================
// EJERCICIO 3: CATÁLOGO DE PRODUCTOS
// ===================================

var productos = []; // Array que contendrá los objetos producto

function cargarProductos() {
    // TODO: Crear array con al menos 5 objetos producto
    // Cada producto debe tener: nombre, precio, categoria
    productos = [
        { nombre: "ordenador", precio: 899, categoria: "electrónicos" },
        { nombre: "teclado", precio: 35, categoria: "componentes" },
        { nombre: "auriculares", precio: 40, categoria: "audio"},
        { nombre: "silla gaming", precio: 499, categoria: "muebles"},
        { nombre: "monitor", precio: 399, categoria: "televisores"}
    ];

    mostrarProductos(productos);
}

function ordenarPorPrecio() {
    // TODO: Ordenar el array productos por precio de menor a mayor
    // Pista: usar el método sort() con función comparadora
    productos.sort(function (a, b) {
        return a.precio - b.precio;
    });
    mostrarProductos(productos);
}

function filtrarProductosCaros() {
    // TODO: Filtrar productos con precio mayor a 50€
    // Pista: usar el método filter()

    var productosCaros = productos.filter(function (producto) {
        return producto.precio > 50;
        });

    mostrarProductos(productosCaros);
}

function mostrarProductos(arrayProductos) {
    // TODO: Mostrar los productos en formato HTML
    // Crear tarjetas o lista con nombre, precio y categoría

    var html = '<h2>Productos Disponibles:</h2>';
    arrayProductos.forEach(function(producto) {
        html += '<h3>' + producto.nombre + '</h3><p>Precio: ' + producto.precio + '</p><p>Categoría: ' + producto.categoria + '</p>';
     });

    // TODO: Recorrer el array y crear HTML para cada producto

    document.getElementById("resultado-ej3").innerHTML = html;
}

// ===================================
// EJERCICIO 4: ESTUDIANTE CON NOTAS
// ===================================

var estudianteNotas = {
    nombre: "Carlos Ruiz",
    notas: [],

    agregarNota: function (nota) {
        // TODO: Validar que la nota esté entre 0 y 10
        // TODO: Agregar la nota al array de notas
        // TODO: Mostrar mensaje de confirmación
        if(nota >= 0 && nota <= 10){
            this.notas.push(nota);
            document.getElementById("resultado-ej4").innerHTML = '<div class="alert alert-success">nota agregada correctamente.</div>';
        } else{
            document.getElementById("resultado-ej4").innerHTML = '<div class="alert alert-warning">solo se permiten notas entre 0 y 10.</div>';
        }
    },

    calcularPromedio: function () {
        // TODO: Calcular el promedio de todas las notas
        // TODO: Retornar el promedio redondeado a 2 decimales
        // Pista: usar reduce() o un bucle for
        var notas = this.notas; 
        let sumaTotal = notas.reduce((a, nota) => {
            return a + nota;
        }, 0); 
        let promedio = sumaTotal / notas.length;
        return promedio.toFixed(2);
    },

    mostrarNotas: function () {
        // TODO: Retornar HTML con todas las notas
        // TODO: Incluir el promedio si hay notas
        if (this.notas.length === 0) return "<p>No hay notas registradas.</p>";
        else{
        var html = '<h3>Notas:</h3><ul>';
        for(var i = 0; i < this.notas.length; i++){
            html += '<li> nota: ' + this.notas[i];
        }
        html += '</ul>'
        return html; // Cambiar esta línea
        }
    }
};

function agregarNota() {
    // TODO: Obtener el valor del input de nota
    // TODO: Convertir a número
    // TODO: Llamar al método agregarNota del objeto
    // TODO: Limpiar el input
    // TODO: Actualizar la visualización
    var input = document.getElementById("nota-input");
    var nota = input.value.trim();
    nota = Number(nota);
    estudianteNotas.agregarNota(nota);
    input.value = '';
}

function calcularPromedio() {
    // TODO: Llamar al método calcularPromedio
    // TODO: Mostrar el resultado en el DOM
    document.getElementById("resultado-ej4").innerHTML = estudianteNotas.calcularPromedio();


}

function mostrarNotasEstudiante() {
    // TODO: Llamar al método mostrarNotas
    // TODO: Mostrar el resultado en el DOM
    document.getElementById("resultado-ej4").innerHTML = estudianteNotas.mostrarNotas();
}

// ===================================
// EJERCICIO 5: GESTIÓN DE EMPLEADOS
// ===================================

var empleados = [];

function cargarEmpleados() {
    // TODO: Crear array con al menos 6 objetos empleado
    // Cada empleado: nombre, departamento, salario, antiguedad
    empleados = [
        { nombre: "Pepin", departamento: "Ventas", salario: 2000, antiguedad: "6 meses"},
        { nombre: "Lola", departamento: "IT", salario: 3100, antiguedad: "2 años"},
        { nombre: "Amador", departamento: "Ventas", salario: 5000, antiguedad: "4 meses"},
        { nombre: "Alex", departamento: "IT", salario: 3200, antiguedad: "4 años"},
        { nombre: "Truka", departamento: "Recursos Humanos", salario: 1000, antiguedad: "11 meses"},
        { nombre: "Jesuso", departamento: "Recursos Humanos", salario: 1000, antiguedad: "10 meses"}
    ];

    mostrarEmpleados(empleados);
}

function buscarPorDepartamento() {
    // TODO: Obtener el departamento del input
    // TODO: Filtrar empleados por departamento
    // TODO: Mostrar los resultados
    const input = document.getElementById("departamento-input");
    const departamento = input.value.trim();

    var empleadosDepto = empleados.filter(emp =>
    emp.departamento.toLowerCase() === departamento.toLowerCase()
    );

    mostrarEmpleados(empleadosDepto);
}

function filtrarSalarioAlto() {
    // TODO: Filtrar empleados con salario > 3000€
    var empleadosAltoSalario = empleados.filter(emp => emp.salario > 3000); // TODO: Implementar filtro

    mostrarEmpleados(empleadosAltoSalario);
}

function mostrarEmpleados(arrayEmpleados) {
    // TODO: Mostrar empleados en formato HTML
    // Incluir nombre, departamento, salario

    var html = '<h2>Empleados:</h2>';
        html = "<ul>";
        arrayEmpleados.forEach(emp => {
            html += `
                <li>
                    <strong>${emp.nombre}</strong><br>
                    Departamento: ${emp.departamento}<br>
                    Salario: €${emp.salario}<br>
                    Antigüedad: ${emp.antiguedad} años
                </li>
            `;
        });
        html += "</ul>";

    // TODO: Recorrer el array y crear HTML para cada producto

    document.getElementById("resultado-ej5").innerHTML = html;
}

// ===================================
// EJERCICIO 6: MÉTODOS AVANZADOS DE ARRAYS
// ===================================

var ciudades = [];

function crearArrayCiudades() {
    // TODO: Crear array con ciudades españolas
    ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga"];

    // TODO: Mostrar el array original
    var html = "<h5>Ciudades originales:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function eliminarDelMedio() {
    // TODO: Usar splice para eliminar elementos del medio
    // TODO: Mostrar qué elementos se eliminaron
    // TODO: Mostrar el array resultante
    var eliminadas = ciudades.splice(2, 2);
    var html = "<h5>Elementos eliminados con splice:</h5>" + eliminadas.join(", ");
    html += "<br><strong>Array resultante:</strong> " + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function extraerConSlice() {
    // TODO: Usar slice para extraer una porción del array
    // TODO: Mostrar la porción extraída
    // TODO: Mostrar que el array original no se modifica
    var porcion = ciudades.slice(1, 4);
    var html = "<h5>Porción extraída con slice:</h5>" + porcion.join(", ");
    html += "<br><strong>Array original sin modificar:</strong> " + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function buscarMadrid() {
    // TODO: Usar find() para buscar "Madrid"
    // TODO: Usar indexOf() para encontrar su posición
    // TODO: Mostrar los resultados
    var encontrada = ciudades.find(ciudad => ciudad === "Madrid");
    var posicion = ciudades.indexOf("Madrid");
    var html = "";
    if (encontrada) {
        html = `<h5>Resultado de la búsqueda:</h5>
                Ciudad encontrada: ${encontrada}<br>
                Posición en el array: ${posicion}`;
    } else {
        html = "<p>Madrid no se encuentra en el array.</p>";
    }
    document.getElementById("resultado-ej6").innerHTML = html;
}


// ===================================
// EJERCICIO 7: CONSTRUCTOR DE VEHÍCULOS
// ===================================

// TODO: Crear función constructora Vehiculo
function Vehiculo(marca, modelo, año) {
this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.velocidad = 0;


    // TODO: Crear método acelerar() que incremente la velocidad
    this.acelerar = function () {
        this.velocidad += 10;
    };


    // TODO: Crear método mostrarInfo() que retorne información
    this.mostrarInfo = function () {
        return `${this.marca} ${this.modelo} (${this.año}) - Velocidad: ${this.velocidad} km/h`;
    };
}


var vehiculos = [];


function crearVehiculos() {
    // TODO: Crear varios objetos usando el constructor
    // TODO: Agregar al array vehiculos
    vehiculos = [
        new Vehiculo("Toyota", "Corolla", 2020),
        new Vehiculo("Ford", "Focus", 2018),
        new Vehiculo("Tesla", "Model 3", 2022),
        new Vehiculo("BMW", "X5", 2019),
        new Vehiculo("Kia", "Sportage", 2021)
    ];


    mostrarInfoVehiculos();
}


function acelerarTodos() {
    // TODO: Llamar al método acelerar() de todos los vehículos
    // TODO: Actualizar la visualización
    vehiculos.forEach(v => v.acelerar());
    mostrarInfoVehiculos();
}


function mostrarInfoVehiculos() {
    // TODO: Mostrar información de todos los vehículos
    var html = "";
    // TODO: Recorrer array y mostrar info de cada vehículo


    if (vehiculos.length === 0) {
        html = "<p>No hay vehículos creados.</p>";
    } else {
        html = "<h5>Información de los vehículos:</h5><ul class='list-group'>";
        vehiculos.forEach(v => {
            html += `<li class='list-group-item'>${v.mostrarInfo()}</li>`;
        });
        html += "</ul>";
    }


    document.getElementById("resultado-ej7").innerHTML = html;
}


// =====================
// Eventos para los botones del HTML
// =====================
document.getElementById("btn-crear-vehiculos").addEventListener("click", crearVehiculos);
document.getElementById("btn-acelerar-todos").addEventListener("click", acelerarTodos);
document.getElementById("btn-info-vehiculos").addEventListener("click", mostrarInfoVehiculos);




// ===================================
// EJERCICIO 8: MATRIZ DE NÚMEROS
// ===================================


var matriz = [];


// Crear matriz 3x3 con números aleatorios del 1 al 9
function crearMatriz() {
    matriz = [];


    for (let i = 0; i < 3; i++) {
        let fila = [];
        for (let j = 0; j < 3; j++) {
            fila.push(Math.floor(Math.random() * 9) + 1);
        }
        matriz.push(fila);
    }


    mostrarMatriz();
}


// Sumar diagonal principal
function sumarDiagonal() {
    if (matriz.length === 0) {
        document.getElementById("resultado-ej8").innerHTML =
            "<div class='text-danger'>Primero debes crear la matriz.</div>";
        return;
    }


    let suma = 0;
    for (let i = 0; i < 3; i++) {
        suma += matriz[i][i];
    }


    document.getElementById("resultado-ej8").innerHTML +=
        `<p><strong>Suma de la diagonal principal:</strong> ${suma}</p>`;
}


// Mostrar matriz en formato tabla
function mostrarMatriz() {
    if (matriz.length === 0) {
        document.getElementById("resultado-ej8").innerHTML =
       
            "<div class='text-danger'>No hay matriz creada.</div>";
        return;
    }


    let html = "<h5>Matriz 3x3:</h5><table class='table table-bordered text-center'>";
    for (let i = 0; i < 3; i++) {
        html += "<tr>";
        for (let j = 0; j < 3; j++) {
            html += `<td>${matriz[i][j]}</td>`;
        }
        html += "</tr>";
    }
    html += "</table>";


    document.getElementById("resultado-ej8").innerHTML = html;
}


// =======================
// Asignar eventos correctamente
// =======================
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-crear-matriz").addEventListener("click", crearMatriz);
    document.getElementById("btn-sumar-diagonal").addEventListener("click", sumarDiagonal);
    document.getElementById("btn-mostrar-matriz").addEventListener("click", mostrarMatriz);
});




// ===================================
// EJERCICIO 9: MÉTODOS FUNCIONALES
// ===================================


var numeros = [];
var ultimoArrayMostrado = null; // guarda el array que se está mostrando (para sumar/encadenar)


// Crear array con números del 1 al 10
function crearArrayNumeros() {
    numeros = [];
    for (let i = 1; i <= 10; i++) {
        numeros.push(i);
    }


    // por defecto mostramos y guardamos el array original
    mostrarArray("Array original", numeros);
}


// Duplicar los números usando map()
// Si hay un array mostrado, operamos sobre él; si no, sobre `numeros`
function duplicarConMap() {
    if ((numeros.length === 0) && !ultimoArrayMostrado) {
        document.getElementById("resultado-ej9").innerHTML =
            "<div class='text-danger'>Primero debes crear el array de números.</div>";
        return;
    }


    const fuente = ultimoArrayMostrado ? ultimoArrayMostrado : numeros;
    // Nos aseguramos de trabajar con números (por si acaso hay strings)
    var duplicados = fuente.map(function (n) {
        return Number(n) * 2;
    });


    mostrarArray("Números duplicados", duplicados);
}


// Filtrar solo los números pares usando filter()
// Opera sobre el array mostrado si existe, si no sobre `numeros`
function filtrarPares() {
    if ((numeros.length === 0) && !ultimoArrayMostrado) {
        document.getElementById("resultado-ej9").innerHTML =
            "<div class='text-danger'>Primero debes crear el array de números.</div>";
        return;
    }


    const fuente = ultimoArrayMostrado ? ultimoArrayMostrado : numeros;
    var pares = fuente.filter(function (n) {
        return Number(n) % 2 === 0;
    });


    mostrarArray("Números pares", pares);
}


// Sumar todos los números usando reduce()
// Suma el array mostrado (si hay), si no suma `numeros`
function sumarConReduce() {
    if ((numeros.length === 0) && !ultimoArrayMostrado) {
        document.getElementById("resultado-ej9").innerHTML =
            "<div class='text-danger'>Primero debes crear el array de números.</div>";
        return;
    }


    const fuente = ultimoArrayMostrado ? ultimoArrayMostrado : numeros;


    // Nos aseguramos de convertir a Number para evitar concatenaciones
    var suma = fuente.reduce(function (acumulador, valorActual) {
        return Number(acumulador) + Number(valorActual);
    }, 0);


    document.getElementById("resultado-ej9").innerHTML +=
        "<div class='alert alert-success mt-2'>Suma total: <strong>" + suma + "</strong></div>";
}


// Mostrar array en el DOM y guardar el array mostrado
function mostrarArray(titulo, array) {
    // guardamos una copia para evitar aliasing accidental
    ultimoArrayMostrado = Array.isArray(array) ? array.slice() : [];
    var html = "<h6>" + titulo + ":</h6><p>" + ultimoArrayMostrado.join(", ") + "</p>";
    document.getElementById("resultado-ej9").innerHTML = html;
}

// ===================================
// EJERCICIO 10: BIBLIOTECA DE LIBROS
// ===================================

var biblioteca = [];

function agregarLibro() {
    // TODO: Obtener valores de los inputs
    var titulo = ""; // TODO: Obtener del input
    var autor = ""; // TODO: Obtener del input
    var año = 0; // TODO: Obtener y convertir a número
    var genero = ""; // TODO: Obtener del select
    titulo = document.getElementById("libro-titulo").value.trim();
    autor = document.getElementById("libro-autor").value.trim();
    año = parseInt(document.getElementById("libro-year").value);
    genero = document.getElementById("libro-genero").value;

    // TODO: Validar que todos los campos estén completos
    if (titulo === "" || autor === "" || isNaN(año) || genero === "") {
        document.getElementById("resultado-ej10").innerHTML =
            "<div class='alert alert-danger'>Por favor, completa todos los campos.</div>";
        return;
    }

    // TODO: Crear objeto libro y agregarlo a la biblioteca
    var libro = {
        // TODO: Completar propiedades
        titulo: titulo,
        autor: autor,
        año: año,
        genero: genero
    };

    // TODO: Limpiar los inputs
    document.getElementById("libro-titulo").value = "";
    document.getElementById("libro-autor").value = "";
    document.getElementById("libro-year").value = "";
    document.getElementById("libro-genero").value = "";
    // TODO: Mostrar mensaje de confirmación
    // TODO: Actualizar visualización
    biblioteca.push(libro);
    document.getElementById("resultado-ej10").innerHTML =
        "<div class='alert alert-success'>Libro '" + titulo + "' agregado a la biblioteca.</div>";
    mostrarBiblioteca();
}

function eliminarLibro(indice) {
    var eliminado = biblioteca.splice(indice, 1);
    document.getElementById("resultado-ej10").innerHTML =
        "<div class='alert alert-warning'>Libro '" + eliminado[0].titulo + "' eliminado.</div>";
    mostrarBiblioteca();
}

function mostrarBiblioteca() {
    // TODO: Mostrar todos los libros de la biblioteca
    mostrarLibros(biblioteca);
}

function ordenarPorTitulo() {
    // TODO: Ordenar libros por título alfabéticamente
    // TODO: Implementar sort
    var librosOrdenados = biblioteca.slice(); // Crear copia del array
    librosOrdenados.sort(function (a, b) {
        if (a.titulo < b.titulo) return -1;
        if (a.titulo > b.titulo) return 1;
        return 0;
    });

    mostrarLibros(librosOrdenados);
}

function filtrarPorGenero() {
    // TODO: Obtener género seleccionado
    // TODO: Filtrar libros por género
    var librosFiltrados = []; // TODO: Implementar filter
    var generoSeleccionado = document.getElementById("libro-genero").value;

    librosFiltrados = biblioteca.filter(function (libro) {
        return libro.genero === generoSeleccionado;
    });

    mostrarLibros(librosFiltrados);
}

function librosRecientes() {
    // TODO: Filtrar libros publicados después del 2020
    var recientes = []; // TODO: Implementar filter
    recientes = biblioteca.filter(function (libro) {
        return libro.año > 2020;
    });

    mostrarLibros(recientes);
}

function mostrarLibros(arrayLibros) {
    // TODO: Mostrar libros en formato de tarjetas HTML
    var html = "";

    if (arrayLibros.length === 0) {
        html = "<div class='alert alert-warning'>No hay libros para mostrar</div>";
    } else {
        // TODO: Crear HTML para cada libro
    }
    for (var i = 0; i < arrayLibros.length; i++) {
        html += `
            <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">${arrayLibros[i].titulo}</h5>
                    <p class="card-text"><strong>Autor:</strong> ${arrayLibros[i].autor}</p>
                    <p class="card-text"><strong>Año de Publicación:</strong> ${arrayLibros[i].año}</p>
                    <p class="card-text"><strong>Género:</strong> ${arrayLibros[i].genero}</p>
                    <button class="btn btn-danger btn-sm" onclick="eliminarLibro(${i})">
                            Eliminar libro
                        </button>
                </div>
            </div>
        `;
    }

    document.getElementById("resultado-ej10").innerHTML = html;
}


// =======================
// Asignar eventos
// =======================
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-crear-numeros").addEventListener("click", crearArrayNumeros);
    document.getElementById("btn-duplicar-map").addEventListener("click", duplicarConMap);
    document.getElementById("btn-filtrar-pares").addEventListener("click", filtrarPares);
    document.getElementById("btn-sumar-reduce").addEventListener("click", sumarConReduce);
});


// ===================================
// EVENT LISTENERS - SOLO FALTAN LOS DEL EJERCICIO 10
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    // Ejercicio 1
    document.getElementById("btn-ej1").addEventListener("click", ejercicio1);


    // Ejercicio 2
    document.getElementById("btn-agregar-color").addEventListener("click", agregarColor);
    document.getElementById("btn-eliminar-ultimo").addEventListener("click", eliminarUltimoColor);
    document.getElementById("btn-mostrar-colores").addEventListener("click", mostrarColores);

    // Ejercicio 3
    document.getElementById("btn-cargar-productos").addEventListener("click", cargarProductos);
    document.getElementById("btn-ordenar-precio").addEventListener("click", ordenarPorPrecio);
    document.getElementById("btn-filtrar-caros").addEventListener("click", filtrarProductosCaros);

    // Ejercicio 4
    document.getElementById("btn-agregar-nota").addEventListener("click", agregarNota);
    document.getElementById("btn-calcular-promedio").addEventListener("click", calcularPromedio);
    document.getElementById("btn-mostrar-notas").addEventListener("click", mostrarNotasEstudiante);

    // Ejercicio 5
    document.getElementById("btn-cargar-empleados").addEventListener("click", cargarEmpleados);
    document.getElementById("btn-buscar-depto").addEventListener("click", buscarPorDepartamento);
    document.getElementById("btn-salario-alto").addEventListener("click", filtrarSalarioAlto);

    // Ejercicio 6
    document.getElementById("btn-crear-ciudades").addEventListener("click", crearArrayCiudades);
    document.getElementById("btn-eliminar-medio").addEventListener("click", eliminarDelMedio);
    document.getElementById("btn-extraer-slice").addEventListener("click", extraerConSlice);
    document.getElementById("btn-buscar-ciudad").addEventListener("click", buscarMadrid);

    // Ejercicio 7
    document.getElementById("btn-crear-vehiculos").addEventListener("click", crearVehiculos);
    document.getElementById("btn-acelerar-todos").addEventListener("click", acelerarTodos);
    document.getElementById("btn-info-vehiculos").addEventListener("click", mostrarInfoVehiculos);

    // Ejercicio 8
    document.getElementById("btn-crear-matriz").addEventListener("click", crearMatriz);
    document.getElementById("btn-sumar-diagonal").addEventListener("click", sumarDiagonal);
    document.getElementById("btn-mostrar-matriz").addEventListener("click", mostrarMatriz);

    // Ejercicio 9
    document.getElementById("btn-crear-numeros").addEventListener("click", crearArrayNumeros);
    document.getElementById("btn-duplicar-map").addEventListener("click", duplicarConMap);
    document.getElementById("btn-filtrar-pares").addEventListener("click", filtrarPares);
    document.getElementById("btn-sumar-reduce").addEventListener("click", sumarConReduce);

    // Ejercicio 10
    // TODO: Añadir event listeners para los botones del ejercicio 10
    document.getElementById("btn-agregar-libro").addEventListener("click", agregarLibro);
    document.getElementById("btn-mostrar-biblioteca").addEventListener("click", mostrarBiblioteca);
    document.getElementById("btn-ordenar-titulo").addEventListener("click", ordenarPorTitulo);
    document.getElementById("btn-filtrar-genero").addEventListener("click", filtrarPorGenero);
    document.getElementById("btn-libros-recientes").addEventListener("click", librosRecientes);
});

/* ===================================
   FIN DEL ARCHIVO
   
   RECORDATORIO FINAL:
   - Completa cada TODO siguiendo las instrucciones
   - Usa sintaxis tradicional de JavaScript (no ES6+)
   - Testea cada función antes de continuar
   - Todas las salidas deben ir al DOM, no a la consola
   - ¡Practica y diviértete programando!
   ===================================
*/