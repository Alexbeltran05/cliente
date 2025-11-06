// Plantilla para alumnos - Tema07 Ejercicio 1
// Completa las funciones marcadas con TODO y ejecuta desde el navegador.

// Ejercicio 1 - raizCuadrada (plantilla)
document.getElementById('run-e1').addEventListener('click', function () {
    const v = parseFloat(document.getElementById('a-e1').value);
    const out = document.getElementById('out-e1');
  // TODO: implementar raizCuadrada(numero) 
  function raizCuadrada(numero) {
    if (isNaN(numero) || numero === '') {
      return "Error: ingrese un número válido";
    } else {
      return Math.sqrt(numero);
    }
  }
  const res = raizCuadrada(v);
  out.textContent = `Resultado: ${res}`;
});

// Ejercicio 2 - alerta (plantilla)
document.getElementById('run-e2').addEventListener('click', function () {
  const msg = document.getElementById('a-e2').value || 'Mensaje de ejemplo';

  function alerta(mensaje) {
    alert(mensaje);
  }
  alerta(msg);

  document.getElementById('out-e2').textContent = 'Implementa la función alerta(mensaje) para mostrar un alert en el navegador.';
});

// Ejercicio 3 - new Function (plantilla)
document.getElementById('run-e3').addEventListener('click', function () {

  // TODO: usa new Function para construir y ejecutar una función que sume a y b
  const a = parseFloat(document.getElementById('a-e3a').value);
  const b = parseFloat(document.getElementById('a-e3b').value);
  const suma = new Function('a', 'b', 'return a + b;');
  const res = suma(a, b);
  document.getElementById('out-e3').textContent = `Resultado: ${res}`;
});

// Ejercicio 4 - Hoisting con var (plantilla)
document.getElementById('run-e4').addEventListener('click', function () {
  // TODO: reproduce el ejemplo en el código editando esta función.
  function hoistingEjemplo() {
    console.log(valor);
    var valor = "Ejemplo de hoisting con var";
    console.log(valor);
    return "El primer console.log muestra undefined porque la declaración con var se eleva pero no su asignación.";
  }
  const res = hoistingEjemplo();
  document.getElementById('out-e4').textContent = res;
});

// Ejercicio 5 - IIFE (plantilla)
document.getElementById('run-e5').addEventListener('click', function () {

  // TODO: crea una IIFE que haga console.log y devuelva un valor. Luego muestra el resultado aquí.
  const resultadoIIFE = (function () {
    console.log("Ejecutando IIFE");
    return "Valor retornado por la IIFE";
  })();
  document.getElementById('out-e5').textContent = resultadoIIFE;
});

// Ejercicio 6 - Función anónima dividir (plantilla)
document.getElementById('run-e6').addEventListener('click', function () {

  // TODO: define y usa esa función para devolver el resultado
  const a = parseFloat(document.getElementById('a-e6a').value);
  const b = parseFloat(document.getElementById('a-e6b').value);
  const dividir = function (a, b) {
    if (b === 0) return "División por cero";
    return a / b;
  };
  const res = dividir(a, b);
  document.getElementById('out-e6').textContent = `Resultado: ${res}`;
});

// Ejercicio 7 - Función flecha multiplicar (plantilla)
document.getElementById('run-e7').addEventListener('click', function () {

  // TODO: implementa una función flecha multiplicar = 
  const a = parseFloat(document.getElementById('a-e7a').value);
  const b = parseFloat(document.getElementById('a-e7b').value);
  const multiplicar = (a, b) => a * b;
  const res = multiplicar(a, b);
  document.getElementById('out-e7').textContent = `Resultado: ${res}`;
});

// Ejercicio 8 - Parámetros por defecto (plantilla)
document.getElementById('run-e8').addEventListener('click', function () {
  const nombreInput = document.getElementById('a-e8').value.trim();

  function saludar(nombre = 'Invitado') {
    return `Hola, ${nombre}`;
  }

  const nombre = nombreInput || undefined;
  const res = saludar(nombre);
  document.getElementById('out-e8').textContent = res;
});
// Ejercicio 9 - Funciones anidadas (plantilla)
let contador = 0;
document.getElementById('run-e9').addEventListener('click', function () {

  // TODO: implementar función externa e interna

  const out = document.getElementById('out-e9');

  function externa() {
    contador++;
    function interna() {
      return `interno: ${contador}`;
    }
    return interna();
  }
  out.textContent = externa();
});

// Ejercicio 10 - Métodos nativos (plantilla)
document.getElementById('run-e10').addEventListener('click', function () {

  // TODO: usa los métodos nativos vistos (length, toUpperCase, trim, indexOf, Math.random, Date.now)
  const texto = document.getElementById('a-e10').value;
  const longitud = texto.length;
  const mayus = texto.toUpperCase();
  const sinEspacios = texto.trim();
  const indice = texto.indexOf('Mundo');
  const aleatorio = Math.random().toFixed(4);
  const tiempo = Date.now();
  const res = `
length: ${longitud}
toUpperCase: '${mayus}'
trim: '${sinEspacios}'
indexOf 'Mundo': ${indice}
Math.random(): ${aleatorio}
Date.now(): ${tiempo}
`;
  document.getElementById('out-e10').textContent = res;
});
