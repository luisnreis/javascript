{function calculaimc(){
    altura = document.imcForm.altura.value;
    peso = document.imcForm.peso.value;
    calculo = (peso/(altura*altura))
    if (calculo<18.5) {
        alert("Você está abaixo do peso, índice:" + calculo)
    }
    else if (calculo >=18.5 && calculo<24.9){
        alert("Você está com peso ideal, índice:" + calculo)
    }
    else if (calculo >=25 && calculo<29.9){
        alert("Você está com alguma coisa, índice:" + calculo)
    }
    else if (calculo >=30 && calculo<39.9){
        alert("Você está com alguma coisinha, índice:" + calculo)
    }
    else if (calculo >=40){
        alert("Você está com Obesidade Mórbida, índice:" + calculo)
    }
}
}