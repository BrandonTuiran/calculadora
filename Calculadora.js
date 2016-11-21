window.onload=manejarClics;

var cifra1="";
var control=true;

function manejarClics() {
	
	var uno=document.getElementById("tamaño11");
	uno.addEventListener("click",function() {
								clicEn("1");
								});
	var dos=document.getElementById("tamaño12");
	dos.addEventListener("click",function() {
								clicEn("2");
								});
		var tres=document.getElementById("tamaño13");
	tres.addEventListener("click",function() {
								clicEn("3");
								});
		var cuatro=document.getElementById("tamaño6");
    cuatro.addEventListener("click",function() {
								clicEn("4");
								});
		var cinco=document.getElementById("tamaño7");
	cinco.addEventListener("click",function() {
								clicEn("5");
								});
		var seis=document.getElementById("tamaño8");
	seis.addEventListener("click",function() {
								clicEn("6");
								});
    	var siete=document.getElementById("tamaño1");
	siete.addEventListener("click",function() {
								clicEn("7");
								});
		var ocho=document.getElementById("tamaño2");
	ocho.addEventListener("click",function() {
								clicEn("8");
								});
		var nueve=document.getElementById("tamaño3");
	nueve.addEventListener("click",function() {
								clicEn("9");
								});
		var cero=document.getElementById("tamaño16");
	cero.addEventListener("click",function() {
								clicEn("0");
								});



	    var division=document.getElementById("tamaño4");
	division.addEventListener("click",function() {
								clicEn("/");
								});
	var multiplicar=document.getElementById("tamaño5");
	multiplicar.addEventListener("click",function() {
								clicEn("*");
								});
	var resta=document.getElementById("tamaño9");
	resta.addEventListener("click",function() {
								clicEn("-");
								});
	var suma=document.getElementById("tamaño10");
	suma.addEventListener("click",function() {
								clicEn("+");
								});
	
	var punto=document.getElementById("tamaño17");
	punto.addEventListener("click",function() {
								clicEn(".");
								});
	var igual=document.getElementById("tamaño15");
	igual.addEventListener("click",function() {
								calcular();
								});
    var borrar=document.getElementById("tamaño14");
	borrar.addEventListener("click",function() {
								oper();
								});
	
}

function clicEn(num){
   var ver=document.getElementById("tabla");
   cifra1 +=num;
   ver.textContent=cifra1;
}
function calcular(){
   var resul=eval(cifra1);
   var final=document.getElementById("tabla");
   final.textContent=resul;
}
function oper(){
  cifra1="";
  var final=document.getElementById("tabla");
  final.textContent=cifra1;
}
















