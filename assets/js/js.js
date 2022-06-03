let calcular = document.getElementById('calcular');

function imc(){

    let nome  = document.getElementById('nome').value;

    let altura  = document.getElementById('altura').value;

    let peso  = document.getElementById('peso').value;

    let resultado  = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        let valorIMC = (peso / (altura * altura));

        // Se valor entre 18.5 e 24.9
        if (valorIMC >= 18.5  && valorIMC <= 24.9){
            tipoIMC = "Você está equilibrado";
        }
        // Se valor maior que 25 e 30
        else  if(valorIMC >= 25  && valorIMC <=30){
            tipoIMC = "Você esta sobre peso";
        }

        // Se valor maior que 30 e 34.9 
      else if(valorIMC >= 30  && valorIMC <=34.9){
            tipoIMC = "você está sobre peso ( obesidade grau I ) ";
        }

        // Se valor maior que 34.9 e 39.9 
       else if(valorIMC >= 34.9 && valorIMC <= 39.9){
            tipoIMC = "você está sobre peso ( obesidade grau II )";
        }

         // Se valor maior que 39.9 
         else if(valorIMC >= 39.9 ){
          tipoIMC = "você está sobre peso ( obesidade grau III)";
        }

        resultado.textContent = `${nome} o seu IMC é ${valorIMC.toFixed(2)} e você está ${tipoIMC}`;
    }
}

calcular.addEventListener('click',imc);