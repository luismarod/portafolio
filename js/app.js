document.addEventListener('DOMContentLoaded', ()=>{
    cargarPortafolio();
});

function cargarPortafolio(){
    fetch('datos.json')
     .then( respuesta => {
         return respuesta.json();
     })
     .then( datos => {
        let html = '';

        datos.portafolio.forEach(portafolio => {

            html += `
                <div class="elemento">
                    <img src="img/${portafolio.id}.jpg">
                    <div class="contenido">
                        <h3>${portafolio.nombre}</h3>
                        <p>${portafolio.desc}</p>
                    </div>
                    <div class="opciones">
                        <button>Ver app</button>
                        <button>Ver repositorio</button>
                    </div>
                </div>
            `
        });

        document.querySelector('#portafolio').innerHTML = html;
     })
}