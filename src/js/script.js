
document.getElementById('btn-salvar').addEventListener('click', (event) => {
     event.preventDefault();
     document.querySelector('.resposta').classList.add('aparecer');

     const homem = document.getElementById('homem');
     const mulher = document.getElementById('mulher');
     const crianca = document.getElementById('crianca');

     const carneHomem = 500 ;
     const carneMulher = 300;
     const carneCrianca = 200;
     const frangoHomem = 200 ;
     const frangoMulher = 200;
     const frangoCrianca = 100;
     const linguicaHomem = 200;
     const linguicaMulher = 200;
     const linguicaCrianca = 200;
     const refriHomem = 300;
     const refriMulher = 400;
     const refriCrianca = 200;
     const cervejaHomem = 800;
     const cervejaMulher = 500;
     const cervejaCrianca = 0;


     const carne = (Number(homem.value)) * carneHomem / 1000 + (Number(mulher.value)) * carneMulher / 1000 + (Number(crianca.value)) * carneCrianca / 1000;

     const frango = (Number(homem.value)) * frangoHomem / 1000 + (Number(mulher.value)) * frangoMulher / 1000 + (Number(crianca.value)) * frangoCrianca / 1000;

     const linguica = (parseInt(homem.value)) * linguicaHomem / 1000 + (parseInt(mulher.value)) * linguicaMulher / 1000 + (Number(crianca.value)) * linguicaCrianca / 1000;

     const refri = (Number(homem.value)) * refriHomem / 1000 + (Number(mulher.value)) * refriMulher / 1000 + (Number(crianca.value)) * refriCrianca / 1000;

     const cerva = (Number(homem.value)) * cervejaHomem / 1000 + (Number(mulher.value)) * cervejaMulher / 1000 + (Number(crianca.value)) * cervejaCrianca;

     document.querySelector('.crnBovina').innerHTML = carne;
     document.querySelector('.frango').innerHTML = frango;
     document.querySelector('.linguica').innerHTML = Math.round(linguica) ;
     document.querySelector('.refrigerante').innerHTML = Math.round(refri);
     document.querySelector('.cerveja').innerHTML = cerva;
    
})

document.querySelector('.fechar').addEventListener('click', () => {

    document.querySelector('.resposta').classList.remove('aparecer')
})