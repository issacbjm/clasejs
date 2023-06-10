// // promt para infresar valores del usario

// //var nombres = prompt("ingrese su nombre");
// //alert(nombres + " hola perros");
// var numero = parseInt(prompt ("ingrese un numero"));
// var numero2 = parseInt(prompt ("ingrese otro numero "));
// var suma = numero + numero2;
// alert("la suma de los numeros  es" + suma)

function personajes(done) {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
        .then(resp => resp.json())
        .then(data => done(data))
        .catch(error => console.log(error))
        .finally(() => console.log("finalizado"));

    return resultados;
}

function mostrarDatos(data) {
    console.log(data.results);
    const results = data.results;
    const section = document.querySelector('.section');
    let html = '';
   
    results.forEach(element => {
        html +=`
            <div class="card">
                <img src="${element.image}" alt="${element.name}">
                    <h2>${element.name}</h2>
                    <p>${element.species}</p>
            </div>
            `
    }
    );
    section.innerHTML = html;
}


personajes(mostrarDatos);