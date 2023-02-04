var janelaCirculo = document.querySelector('section#circuloSECT')
var janelaQuadrado = document.querySelector('section#quadradoSECT')
var janelaTriangulo = document.querySelector('section#trianguloSECT')


function chamarJanela(formaG) {
    formaG.classList.toggle('aberta')
}

function calcCirculo(){
    let raio = Number(document.querySelector('input#raio').value)
    let textoResultado = document.querySelector('p#resultadoCIRCULO')

    area = ((raio**2)*3.14)
    textoResultado.innerHTML = `Resultado: ${area}`
}

function calcQuadrado(){
    let lado = Number(document.querySelector('input#ladoquad').value)
    let textoResultado = document.querySelector('p#resultadoQUADRADO')
    
    area = lado*4
    textoResultado.innerHTML = `Resultado: ${area}`
}

function calcTriangulo(){
    let textoResultado = document.querySelector('p#resultadoTRIANGULO')
    let base = Number(document.querySelector('input#baseT').value)
    let altura = Number(document.querySelector('input#alturaT').value)

    area = ((base*altura)/2)
    textoResultado.innerHTML = `Resultado: ${area}`
}
