alert("Klik satu kali pada daftar isi/indeks untuk membuka teks, dan sekali lagi untuk menutup teks");

// make  a floating window
let aside = document.querySelector('#index a');
let index = document.querySelector('#header');
aside.addEventListener('click', (a) => {
	index.classList.toggle('index');
});

// drive into introPage class
let introPage = document.querySelector('#header .introPage');
let isiPage = document.querySelector('#intro1');
introPage.addEventListener('click', (i) => {
	isiPage.classList.toggle('isi1');
});

let isiCWork = document.querySelector('#header .CWork');
let isiPage1 = document.querySelector('#intro2');
isiCWork.addEventListener('click', (i) => {
	isiPage1.classList.toggle('isi2');
});

let isiCCompiler = document.querySelector('#header .CCompiler');
let isiPage2 = document.querySelector('#intro3');
isiCCompiler.addEventListener('click', (i) => {
	isiPage2.classList.toggle('isi3');
});

let isiCVariable = document.querySelector('#header .CVariables');
let isiPage3 = document.querySelector('#intro4');
isiCVariable.addEventListener('click', (i) => {
	isiPage3.classList.toggle('isi4');
});

let isiCType = document.querySelector('#header .CType');
let isiPage4 = document.querySelector('#intro5');
isiCType.addEventListener('click', (i) => {
	isiPage4.classList.toggle('isi5');
});

let isiCConst = document.querySelector('#header .CConst');
let isiPage5 = document.querySelector('#intro6');
isiCConst.addEventListener('click', (i) => {
	isiPage5.classList.toggle('isi6');
});

let isiCOperator = document.querySelector('#header .COperator');
let isiPage6 = document.querySelector('#intro7');
isiCOperator.addEventListener('click', (i) => {
	isiPage6.classList.toggle('isi7');
});

let isiCControl = document.querySelector('#header .CControl');
let isiPage7 = document.querySelector('#intro8');
isiCControl.addEventListener('click', (i) => {
	isiPage7.classList.toggle('isi8');
});

let isiCLoop = document.querySelector('#header .CLoop');
let isiPage8 = document.querySelector('#intro9');
isiCLoop.addEventListener('click', (i) => {
	isiPage8.classList.toggle('isi9');
});

let isiCArray = document.querySelector('#header .CArray');
let isiPage9 = document.querySelector('#intro10');
isiCArray.addEventListener('click', (i) => {
	isiPage9.classList.toggle('isi10');
});

let isiCFunction = document.querySelector('#header .CFunction');
let isiPage10 = document.querySelector('#intro11');
isiCFunction.addEventListener('click', (i) => {
	isiPage10.classList.toggle('isi11');
});