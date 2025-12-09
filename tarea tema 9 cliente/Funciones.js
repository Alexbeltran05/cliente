const regex = {
    nombre: /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
    edad: /^\d+$/
};

function mostrar(id) { document.getElementById(id).style.display = 'block'; }
function ocultar(id) { document.getElementById(id).style.display = 'none'; }

function validar(campo) {
    const input = document.getElementById(campo);
    const valor = input.value + "";
    const estado = document.getElementById('estado-' + campo);
    const exp = regex[campo];


    if (valor.length === 0) {
        input.classList.remove('input-ok');
        input.classList.remove('input-err');
        estado.textContent = '';
        estado.className = 'estado';
        return false;
    }

    if (exp.test(valor)) {
        input.classList.add('input-ok');
        input.classList.remove('input-err');
        estado.textContent = 'Correcto';
        estado.className = 'estado ok';
        return true;
    } else {
        input.classList.add('input-err');
        input.classList.remove('input-ok');
        estado.textContent = 'Formato incorrecto';
        estado.className = 'estado err';
        return false;
    }
}

function guardarCookie(nombre, valor, dias) {
    const v = encodeURIComponent(valor);
    const d = new Date();
    d.setTime(d.getTime() + (dias * 24 * 60 * 60 * 1000));
    document.cookie = nombre + '=' + v + ';expires=' + d.toUTCString() + ';path=/';
}
function leerCookie(nombre) {
    const lista = document.cookie.split(';');
    for (let c of lista) {
        const [k, v] = c.trim().split('=');
        if (k === nombre) return v ? decodeURIComponent(v) : '';
    }
    return null;
}
function borrarCookie(nombre) {
    document.cookie = nombre + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
}


window.onload = function () {
    const user = leerCookie('username');
    if (user) {
        document.getElementById('nombre').value = user;
        validar('nombre');
        document.getElementById('saludo').textContent = 'Bienvenido de nuevo, ' + user;
    }
};

const form = document.getElementById('formulario');
form.addEventListener('submit', function (e) {
    const v1 = validar('nombre');
    const v2 = validar('email');
    const v3 = validar('password');
    const v4 = validar('edad');

    if (!v1 || !v2 || !v3 || !v4) {
        e.preventDefault();
        alert('Debe corregir los errores antes de enviar.');
        return;
    }

    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    guardarCookie('username', nombre, 7);
    document.getElementById('saludo').textContent = 'Formulario enviado correctamente. Bienvenido, ' + nombre;
});

document.getElementById('btnEliminar').addEventListener('click', function () {
    borrarCookie('username');
    alert('La cookie "username" ha sido eliminada.');
    document.getElementById('saludo').textContent = '';
});