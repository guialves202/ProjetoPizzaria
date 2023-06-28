const teste = document.querySelector('#testeDB');

async function testeAPI() {
    const response = await fetch('http://localhost:3000/orders');
    const data = await response.json();
    data.map((content) => {
        teste.innerHTML += Object.values(content);
    })
}

testeAPI();