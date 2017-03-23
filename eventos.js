
	var suma = document.getElementById("suma");
	var resta = document.getElementById("resta");
	var multiplicacion = document.getElementById("multiplicacion");
	var division = document.getElementById("division");


    var operar = function (operacion) {
    var entrada = document.getElementById("pantalla").value;
    var largo=entrada.length;
    var operador = entrada.substring(largo-1,largo);
    var numero2 = entrada.substring(0,largo-1);

    console.log(entrada);
    console.log(operador);
    console.log(numero2);
  if(largo>2){
    limpiar(pantalla);
    var numero1 = document.getElementById("pantalla").value;
    var resultado = document.getElementById("resultado");
    console.log(numero1);
		console.log(operacion(numero1, numero2));
  }
    };
    function limpiar(pantalla){
      document.getElementById('pantalla').value ="";
    };




	suma.addEventListener("click", function () {
        operar(sumar);
	});
	resta.addEventListener("click", function () {
        operar(restar);
	});
	 multiplicacion.addEventListener("click", function () {
         operar(multiplicar);
	 });
	division.addEventListener("click", function () {
        operar(dividir);
	});
