document.addEventListener('DOMContentLoaded', function() {
    let textoOriginal = document.getElementById('input-text'); // texto ingresado por el usuario
    const btnEncriptar = document.getElementById('boton-encriptar');
    const btnDesencriptar = document.getElementById('boton-desencriptar');
    const btnCopiar = document.getElementById('boton-copiar');
    const outputText = document.getElementById('encripted');
    const msjeEncontrado = document.getElementById('msje-encontrado');
    const ingresaTexto = document.getElementById('ingresa-texto-p');
    const backspace = document.getElementById('backspace');
    const alert = document.getElementById('alert');
    const muneco = document.getElementById('muneco');

    const codificacion = { // Objeto con el código de encriptación
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat'
    }

    function Encriptar() {
        let listaDeCaracteres = textoOriginal.value.split(""); // separa el string y guarda cada caracter en un array

        // recorre cada item del array, y reemplaza las vocales
        for (var posicion = 0; posicion < listaDeCaracteres.length; posicion++) {
            let caracter = listaDeCaracteres[posicion]; // captura el caracter a analizar
            if (caracter in codificacion) {
                listaDeCaracteres[posicion] = codificacion[caracter];
            } else;
        }

        OcultarElementos();

        let textoEncriptado = listaDeCaracteres.join(""); // vuelve a unir los caracteres del array en un nuevo string encriptado
        
        return outputText.innerText = textoEncriptado.toLowerCase();
    }

    function Desencriptar() {
        var textoDesencriptado = textoOriginal.value.replace(/ai/igm, 'a'); // reemplaza los codigos por vocales
        var textoDesencriptado = textoDesencriptado.replace(/enter/igm, 'e');
        var textoDesencriptado = textoDesencriptado.replace(/imes/igm, 'i');
        var textoDesencriptado = textoDesencriptado.replace(/ober/igm, 'o');
        var textoDesencriptado = textoDesencriptado.replace(/ufat/igm, 'u');

        OcultarElementos();

        return outputText.innerText = textoDesencriptado.toLowerCase();
    }

    function Copiar() {
        var copiar = encripted.innerText;
        navigator.clipboard.writeText(copiar);

        alert.classList.remove('d-none');
        
    }

    // muestra icono para borrar texto
    document.getElementById('input-text').addEventListener('input', function(e) {
        if (e.target.value !== '') {
            backspace.classList.remove('oculto');
        }
        else {
            backspace.classList.add('oculto');
        }
      });

      // elimina elementos en el contenedor lateral cuando se muestra el texto encriptado
      function OcultarElementos () {
        msjeEncontrado.classList.add('oculto'); 
        ingresaTexto.classList.add('oculto');
        muneco.classList.add('oculto');
        btnCopiar.classList.remove('oculto'); 
        outputText.classList.remove('oculto'); 
        alert.classList.add('d-none');
      }


      // borra el texto del textarea
      function borrarTexto() {
        textoOriginal.value = "";

        muneco.classList.remove('oculto');
        msjeEncontrado.classList.remove('oculto');
        ingresaTexto.classList.remove('oculto');
        btnCopiar.classList.add('oculto'); 
        outputText.classList.add('oculto');
        alert.classList.add('d-none');
      }


    btnEncriptar.onclick = Encriptar;
    btnDesencriptar.onclick = Desencriptar;
    btnCopiar.onclick = Copiar;
    backspace.onclick = borrarTexto;



});