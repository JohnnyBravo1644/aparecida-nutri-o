var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++){	

	paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;


	var tdImc = paciente.querySelector(".info-imc");
	
	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);


	if (!pesoValido){
		console.log("Peso Invalido!!");
		pesoValido = false;
		tdImc.textContent = "Peso Invalido!!";
		paciente.classList.add("paciente-invalido");
	}
	
	if (!alturaValida){
		console.log("Altura Invalido!!");
		alturaValida = false;
		tdImc.textContent = "Altura Invalida!!";
		paciente.classList.add("paciente-invalido");
	}
	
	if( pesoValido && alturaValida){
		var imc = calculoImc(peso,altura);
		tdImc.textContent = imc;
	}
}

function calculoImc(peso,altura){
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}

function validaPeso (peso){
	if (peso > 0 && peso <= 500) {
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura){
	if (altura > 0 && altura < 3) {
		return true;
	} else {
		return false;
	}

}