// Obtén referencias a los elementos HTML
const linkElements = document.querySelectorAll('.linkTime');
const workDataContainer = document.getElementById('workDataContainer');
const playDataContainer = document.getElementById('playDataContainer');
const studyDataContainer = document.getElementById('studyDataContainer');
const exerciseDataContainer = document.getElementById('exerciseDataContainer');
const socialDataContainer = document.getElementById('socialDataContainer');
const selfDataContainer = document.getElementById('selfDataContainer');


// Función para eliminar la clase activa de todos los elementos de navegación
const removeActiveElements2 = (selector) => {
    const linksActive = document.querySelectorAll(`a.${selector}`); // Añadir "a." para seleccionar solo enlaces

    if (linksActive.length) {
        linksActive.forEach(linkActive => {
            linkActive.classList.remove(selector);
        });
    }
}
// Variable de estado para rastrear si se ha hecho clic en un enlace
let linkClicked = false;
let activeLink = null; // Variable para rastrear el enlace activo

// Carga los datos JSON
fetch("js/data.json")
    .then(response => response.json())
    .then(data => {
        // Inicialmente, muestra los datos diarios de "Work"
        mostrarDatos(data[0].timeframes.daily, 'Work', workDataContainer);
        mostrarDatos(data[1].timeframes.daily, 'Play', playDataContainer);
        mostrarDatos(data[2].timeframes.daily, 'Study', studyDataContainer);
        mostrarDatos(data[3].timeframes.daily, 'Exercise', exerciseDataContainer);
        mostrarDatos(data[4].timeframes.daily, 'Social', socialDataContainer);
        mostrarDatos(data[5].timeframes.daily, 'Self Care', selfDataContainer);

        // Maneja los clics en los enlaces
        linkElements.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault(); // Evita la recarga de la página al hacer clic en el enlace


                removeActiveElements2('text-Blue');
                link.classList.add('text-Blue');

                // Establecer el enlace activo
                activeLink = link;


                const tiempoSeleccionado = event.target.id; // Obtiene el ID del enlace clickeado

                if (tiempoSeleccionado === 'daily') {
                    mostrarDatos(data[0].timeframes.daily, 'Work', workDataContainer);
                    mostrarDatos(data[1].timeframes.daily, 'Play', playDataContainer);
                    mostrarDatos(data[2].timeframes.daily, 'Study', studyDataContainer);
                    mostrarDatos(data[3].timeframes.daily, 'Exercise', exerciseDataContainer);
                    mostrarDatos(data[4].timeframes.daily, 'Social', socialDataContainer);
                    mostrarDatos(data[5].timeframes.daily, 'Self Care', selfDataContainer);
                } else {
                    const datosWork = data[0].timeframes[tiempoSeleccionado];
                    const datosPlay = data[1].timeframes[tiempoSeleccionado];
                    const datosStudy = data[2].timeframes[tiempoSeleccionado];
                    const datosExercise = data[3].timeframes[tiempoSeleccionado];
                    const datosSocial = data[4].timeframes[tiempoSeleccionado];
                    const datosSelf = data[5].timeframes[tiempoSeleccionado];
                    mostrarDatos(datosWork, 'Work', workDataContainer);
                    mostrarDatos(datosPlay, 'Play', playDataContainer);
                    mostrarDatos(datosStudy, 'Study', studyDataContainer);
                    mostrarDatos(datosExercise, 'Exercise', exerciseDataContainer);
                    mostrarDatos(datosSocial, 'Social', socialDataContainer);
                    mostrarDatos(datosSelf, 'Self Care', selfDataContainer);
                }
            });
            // Manejar el evento mouseover solo si no se ha hecho clic en el enlace
            link.addEventListener('mouseover', (e) => {
                if (!link.classList.contains('text-Blue')) {
                    removeActiveElements2('text-Blue');
                    link.classList.add('text-Blue');
                }
            });

            // Manejar el evento mouseout para restablecer el enlace activo
            link.addEventListener('mouseout', () => {
                if (activeLink !== null) {
                    removeActiveElements2('text-Blue');
                    activeLink.classList.add('text-Blue');
                }
            });
        });
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON', error);
    });

// Función para mostrar los datos en el contenedor
function mostrarDatos(datos, categoria, container) {
    container.innerHTML = `
        <div class="flex justify-between items-center">
            <h3 class="text-white font-medium md:text-sm lg:text-lg dark:text-Darkblue">${categoria}</h3>
            <img src="../images/icon-ellipsis.svg" alt="">
        </div>
        <div class="flex justify-between items-center md:items-start md:flex-col md:gap-1">
            <p class="text-4xl font-light text-white xl:text-5xl dark:text-Darkblue">${datos.current}hrs</p>
            <p class="text-PaleBlue md:text-base lg:text-lg dark:text-Darkblue/75">Last Week - <span>${datos.previous}hrs</span></p>
        </div>
    `;
}


// DARK MODE

const toggleDark = document.getElementById('toggleDark');

// Toma un elemento y una cadena separada por espacions  y divide la cadena en clases individuales
// Luego utiliza classList.toggle(), en cada una ade ellas, de esta manera es posible cambiar multiplies clases en una cola línea de código
function toggleClasses(element, classes) {
    classes.split(' ').forEach(className => element.classList.toggle(className));
}

// Agrego un evento para cambiar el tema y guardarlo en el localStorage
toggleDark.addEventListener('click', function() {

    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'dark');
        toggleClasses(toggleDark.querySelector('i:nth-child(1)'), 'bg-Darkblue text-white');
        toggleClasses(toggleDark.querySelector('i:nth-child(2)'), 'bg-Darkblue text-white');
        localStorage.setItem('button1Class', toggleDark.querySelector('i:nth-child(1)').className);
        localStorage.setItem('button2Class', toggleDark.querySelector('i:nth-child(2)').className);
    }else{
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'light');
        toggleClasses(toggleDark.querySelector('i:nth-child(1)'), 'bg-Darkblue text-white');
        toggleClasses(toggleDark.querySelector('i:nth-child(2)'), 'bg-Darkblue text-white');
        localStorage.setItem('button1Class', toggleDark.querySelector('i:nth-child(1)').className);
        localStorage.setItem('button2Class', toggleDark.querySelector('i:nth-child(2)').className);
    }

    
});


// Recupero el tema duardado en el localStorage y lo aplico al cargar la página
// Recupero el tema guardado en el localStorage y lo aplico al cargar la página
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const savedButton1Class = localStorage.getItem('button1Class');
    const savedButton2Class = localStorage.getItem('button2Class');

    if (savedTheme === 'dark') {
        document.documentElement.classList.remove('dark');
    } else if (savedTheme === 'light') {
        document.documentElement.classList.add('dark');
    }

    if (savedButton1Class) {
        toggleDark.querySelector('i:nth-child(1)').className = savedButton1Class;
    }
    if (savedButton2Class) {
        toggleDark.querySelector('i:nth-child(2)').className = savedButton2Class;
    }
}

applySavedTheme();