const pantalla = document.querySelector('.pantalla'); // almacena la pantalla
const botones = document.querySelectorAll('.btn'); // Selecciona todos los elementos de la clase

botones.forEach(boton => { // Ejecutar una función distinta para cada botón
    boton.addEventListener('click', () => { // Despues de un click sucede...

        const botonApretado = boton.textContent; // Almacena el click

        if(boton.id === 'c') {
            pantalla.textContent = '0';
            return;
        }

        if(boton.id === "ce") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "ERROR") {
                pantalla.textContent = '0';
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if(boton.id === 'igual') {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = 'ERROR';
            }
            return;
        }

        if (pantalla.textContent === '0' || pantalla.textContent === 'ERROR') {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})