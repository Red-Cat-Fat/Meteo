var TEMP_CONST = 15,
    POROG = 10;

var dTz, 
    TempZar; //из формы

var dHop, //
    dHamc,
    hamc,
    hop,
    dT;//температура поверхности

var zarad;

var Aw01, Aw02, Aw03, aon;

var gr02 = new Array();
var gr04 = new Array();
var gr08 = new Array();
var gr12 = new Array();
var gr16 = new Array();
var gr20 = new Array();
var gr24 = new Array();
var gr30 = new Array();
var gr40 = new Array();
var gr50 = new Array();

var _gr01 = new Array();
var _gr02 = new Array();
var _gr03 = new Array();

var distance01 = new Array();
var distance02 = new Array();
var distance03 = new Array();

var tabl01 = new Array();
var tabl02 = new Array();
var tabl03 = new Array();

var distanceAllinONE = new Array();

function main(){
	compile(); //создаются константы
	readGroups(); //прочли метео
	calculateDistation();//определили дистанции
	setGroups(); //задали метео на основе дистанций
	calcAw();
	var otw = "Введите данные из таблицы для: " + "<br>Направления 1: " + Aw01 + " Со скоростью " + _gr01[2] + " Группа " + distance01[9];
	otw += "<br>Направления 2: " + Aw02 + " Со скоростью " + _gr02[2]+ " Группа " + distance02[9];
	otw += "<br>Направления 3: " + Aw03 + " Со скоростью " + _gr03[2]+ " Группа " + distance03[9];
	document.getElementById("winder").innerHTML=otw;

    
    //document.write(otv);
}

function wind()
{
	main();
	readData();	//чтение данных с форм - ветер
    calcVariors();
    otv = "Дистанция 01: " + tabl01[5] + " Поворот 01: " + tabl01[6] + "<br>";
    otv += "Дистанция 02: " + tabl02[5] + " Поворот 02: " + tabl02[6] + "<br>";
    otv += "Дистанция 03: " + tabl03[5] + " Поворот 03: " + tabl03[6];
    otv += "<br>Вы получили значение поворота Х - <br>это значит ответ будет вида 0-0Х";
    document.getElementById("outer").innerHTML=otv;
}

function calcStartConst() //считаем пункты 2-3
{
	calcDtZ();
	clacDHop();

	dVsum = parseFloat(document.getElementById('dVsum').value);
}

function compile()
{
	for(var i = 0; i < 6; i++)
	{
		distanceAllinONE[i] = new Array();
		for(var j = 0; j < 15; j++)
		{
			distanceAllinONE[i][j] = new Array();
		}
	}
	//заряд полный
	var zabZar = 0;
	//1км
	var zabDist = 1;
	distanceAllinONE[zabZar][zabDist][0] = 0;
	distanceAllinONE[zabZar][zabDist][1] = 1;
	distanceAllinONE[zabZar][zabDist][2] = 2;
	distanceAllinONE[zabZar][zabDist][3] = 1;
	distanceAllinONE[zabZar][zabDist][4] = 2;
	distanceAllinONE[zabZar][zabDist][5] = 15;
	distanceAllinONE[zabZar][zabDist][6] = 19;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;
	//2км
	zabDist = 2;
	distanceAllinONE[zabZar][zabDist][0] = 0;
	distanceAllinONE[zabZar][zabDist][1] = 2;
	distanceAllinONE[zabZar][zabDist][2] = 6;
	distanceAllinONE[zabZar][zabDist][3] = 4;
	distanceAllinONE[zabZar][zabDist][4] = 8;
	distanceAllinONE[zabZar][zabDist][5] = 28;
	distanceAllinONE[zabZar][zabDist][6] = 35;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;

	//3км 
	zabDist = 3;
	distanceAllinONE[zabZar][zabDist][0] = 1;
	distanceAllinONE[zabZar][zabDist][1] = 3;
	distanceAllinONE[zabZar][zabDist][2] = 14;
	distanceAllinONE[zabZar][zabDist][3] = 9;
	distanceAllinONE[zabZar][zabDist][4] = 17;
	distanceAllinONE[zabZar][zabDist][5] = 40;
	distanceAllinONE[zabZar][zabDist][6] = 50;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;

	//4км 
	zabDist = 4;
	distanceAllinONE[zabZar][zabDist][0] = 1;
	distanceAllinONE[zabZar][zabDist][1] = 4;
	distanceAllinONE[zabZar][zabDist][2] = 26;
	distanceAllinONE[zabZar][zabDist][3] = 15;
	distanceAllinONE[zabZar][zabDist][4] = 30;
	distanceAllinONE[zabZar][zabDist][5] = 50;
	distanceAllinONE[zabZar][zabDist][6] = 62;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;

	//5км 
	zabDist = 5;
	distanceAllinONE[zabZar][zabDist][0] = 1;
	distanceAllinONE[zabZar][zabDist][1] = 5;
	distanceAllinONE[zabZar][zabDist][2] = 42;
	distanceAllinONE[zabZar][zabDist][3] = 23;
	distanceAllinONE[zabZar][zabDist][4] = 46;
	distanceAllinONE[zabZar][zabDist][5] = 58;
	distanceAllinONE[zabZar][zabDist][6] = 73;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;

	//6км 
	zabDist = 6;
	distanceAllinONE[zabZar][zabDist][0] = 2;
	distanceAllinONE[zabZar][zabDist][1] = 7;
	distanceAllinONE[zabZar][zabDist][2] = 64;
	distanceAllinONE[zabZar][zabDist][3] = 31;
	distanceAllinONE[zabZar][zabDist][4] = 66;
	distanceAllinONE[zabZar][zabDist][5] = 66;
	distanceAllinONE[zabZar][zabDist][6] = 83;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 4;

	//7км 
	zabDist = 7;
	distanceAllinONE[zabZar][zabDist][0] = 3;
	distanceAllinONE[zabZar][zabDist][1] = 8;
	distanceAllinONE[zabZar][zabDist][2] = 91;
	distanceAllinONE[zabZar][zabDist][3] = 39;
	distanceAllinONE[zabZar][zabDist][4] = 88;
	distanceAllinONE[zabZar][zabDist][5] = 72;
	distanceAllinONE[zabZar][zabDist][6] = 90;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 4;

	//8км 
	zabDist = 8;
	distanceAllinONE[zabZar][zabDist][0] = 4;
	distanceAllinONE[zabZar][zabDist][1] = 9;
	distanceAllinONE[zabZar][zabDist][2] = 123;
	distanceAllinONE[zabZar][zabDist][3] = 47;
	distanceAllinONE[zabZar][zabDist][4] = 113;
	distanceAllinONE[zabZar][zabDist][5] = 77;
	distanceAllinONE[zabZar][zabDist][6] = 96;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 8;

	//9км 
	zabDist = 9;
	distanceAllinONE[zabZar][zabDist][0] = 5;
	distanceAllinONE[zabZar][zabDist][1] = 10;
	distanceAllinONE[zabZar][zabDist][2] = 159;
	distanceAllinONE[zabZar][zabDist][3] = 55;
	distanceAllinONE[zabZar][zabDist][4] = 139;
	distanceAllinONE[zabZar][zabDist][5] = 81;
	distanceAllinONE[zabZar][zabDist][6] = 101;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 12;

	//10км 
	zabDist = 10;
	distanceAllinONE[zabZar][zabDist][0] = 7;
	distanceAllinONE[zabZar][zabDist][1] = 12;
	distanceAllinONE[zabZar][zabDist][2] = 198;
	distanceAllinONE[zabZar][zabDist][3] = 62;
	distanceAllinONE[zabZar][zabDist][4] = 164;
	distanceAllinONE[zabZar][zabDist][5] = 85;
	distanceAllinONE[zabZar][zabDist][6] = 106;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 16;

	//11км 
	zabDist = 11;
	distanceAllinONE[zabZar][zabDist][0] = 8;
	distanceAllinONE[zabZar][zabDist][1] = 13;
	distanceAllinONE[zabZar][zabDist][2] = 241;
	distanceAllinONE[zabZar][zabDist][3] = 69;
	distanceAllinONE[zabZar][zabDist][4] = 189;
	distanceAllinONE[zabZar][zabDist][5] = 89;
	distanceAllinONE[zabZar][zabDist][6] = 111;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 20;

	//12км 
	zabDist = 12;
	distanceAllinONE[zabZar][zabDist][0] = 10;
	distanceAllinONE[zabZar][zabDist][1] = 14;
	distanceAllinONE[zabZar][zabDist][2] = 286;
	distanceAllinONE[zabZar][zabDist][3] = 77;
	distanceAllinONE[zabZar][zabDist][4] = 215;
	distanceAllinONE[zabZar][zabDist][5] = 92;
	distanceAllinONE[zabZar][zabDist][6] = 115;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 24;

	//13км 
	zabDist = 13;
	distanceAllinONE[zabZar][zabDist][0] = 11;
	distanceAllinONE[zabZar][zabDist][1] = 15;
	distanceAllinONE[zabZar][zabDist][2] = 334;
	distanceAllinONE[zabZar][zabDist][3] = 87;
	distanceAllinONE[zabZar][zabDist][4] = 240;
	distanceAllinONE[zabZar][zabDist][5] = 97;
	distanceAllinONE[zabZar][zabDist][6] = 121;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 30;

	//14км 
	zabDist = 14;
	distanceAllinONE[zabZar][zabDist][0] = 14;
	distanceAllinONE[zabZar][zabDist][1] = 16;
	distanceAllinONE[zabZar][zabDist][2] = 387;
	distanceAllinONE[zabZar][zabDist][3] = 97;
	distanceAllinONE[zabZar][zabDist][4] = 263;
	distanceAllinONE[zabZar][zabDist][5] = 103;
	distanceAllinONE[zabZar][zabDist][6] = 129;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 40;

	//заряд уменьшенный
	zabZar = 1;
	//1км
	zabDist = 1;
	distanceAllinONE[zabZar][zabDist][0] = 0;
	distanceAllinONE[zabZar][zabDist][1] = 1;
	distanceAllinONE[zabZar][zabDist][2] = 2;
	distanceAllinONE[zabZar][zabDist][3] = 1;
	distanceAllinONE[zabZar][zabDist][4] = 2;
	distanceAllinONE[zabZar][zabDist][5] = 9;
	distanceAllinONE[zabZar][zabDist][6] = 19;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;
	//2км
	zabDist = 2;
	distanceAllinONE[zabZar][zabDist][0] = 1;
	distanceAllinONE[zabZar][zabDist][1] = 3;
	distanceAllinONE[zabZar][zabDist][2] = 10;
	distanceAllinONE[zabZar][zabDist][3] = 5;
	distanceAllinONE[zabZar][zabDist][4] = 9;
	distanceAllinONE[zabZar][zabDist][5] = 17;
	distanceAllinONE[zabZar][zabDist][6] = 34;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;
	//3км
	zabDist = 3;
	distanceAllinONE[zabZar][zabDist][0] = 1;
	distanceAllinONE[zabZar][zabDist][1] = 4;
	distanceAllinONE[zabZar][zabDist][2] = 21;
	distanceAllinONE[zabZar][zabDist][3] = 10;
	distanceAllinONE[zabZar][zabDist][4] = 21;
	distanceAllinONE[zabZar][zabDist][5] = 24;
	distanceAllinONE[zabZar][zabDist][6] = 48;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;
	//4км
	zabDist = 4;
	distanceAllinONE[zabZar][zabDist][0] = 2;
	distanceAllinONE[zabZar][zabDist][1] = 6;
	distanceAllinONE[zabZar][zabDist][2] = 40;
	distanceAllinONE[zabZar][zabDist][3] = 16;
	distanceAllinONE[zabZar][zabDist][4] = 37;
	distanceAllinONE[zabZar][zabDist][5] = 29;
	distanceAllinONE[zabZar][zabDist][6] = 58;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;
	//5км
	zabDist = 5;
	distanceAllinONE[zabZar][zabDist][0] = 3;
	distanceAllinONE[zabZar][zabDist][1] = 7;
	distanceAllinONE[zabZar][zabDist][2] = 67;
	distanceAllinONE[zabZar][zabDist][3] = 22;
	distanceAllinONE[zabZar][zabDist][4] = 58;
	distanceAllinONE[zabZar][zabDist][5] = 34;
	distanceAllinONE[zabZar][zabDist][6] = 67;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 4;
	//6км
	zabDist = 6;
	distanceAllinONE[zabZar][zabDist][0] = 4;
	distanceAllinONE[zabZar][zabDist][1] = 9;
	distanceAllinONE[zabZar][zabDist][2] = 99;
	distanceAllinONE[zabZar][zabDist][3] = 29;
	distanceAllinONE[zabZar][zabDist][4] = 81;
	distanceAllinONE[zabZar][zabDist][5] = 37;
	distanceAllinONE[zabZar][zabDist][6] = 74;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 4;
	//7км
	zabDist = 7;
	distanceAllinONE[zabZar][zabDist][0] = 5;
	distanceAllinONE[zabZar][zabDist][1] = 10;
	distanceAllinONE[zabZar][zabDist][2] = 134;
	distanceAllinONE[zabZar][zabDist][3] = 35;
	distanceAllinONE[zabZar][zabDist][4] = 105;
	distanceAllinONE[zabZar][zabDist][5] = 40;
	distanceAllinONE[zabZar][zabDist][6] = 80;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 8;
	//8км
	zabDist = 8;
	distanceAllinONE[zabZar][zabDist][0] = 6;
	distanceAllinONE[zabZar][zabDist][1] = 11;
	distanceAllinONE[zabZar][zabDist][2] = 173;
	distanceAllinONE[zabZar][zabDist][3] = 41;
	distanceAllinONE[zabZar][zabDist][4] = 130;
	distanceAllinONE[zabZar][zabDist][5] = 43;
	distanceAllinONE[zabZar][zabDist][6] = 86;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 12;
	//9км
	zabDist = 9;
	distanceAllinONE[zabZar][zabDist][0] = 7;
	distanceAllinONE[zabZar][zabDist][1] = 12;
	distanceAllinONE[zabZar][zabDist][2] = 214;
	distanceAllinONE[zabZar][zabDist][3] = 48;
	distanceAllinONE[zabZar][zabDist][4] = 155;
	distanceAllinONE[zabZar][zabDist][5] = 46;
	distanceAllinONE[zabZar][zabDist][6] = 91;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 12;
	//10км
	zabDist = 10;
	distanceAllinONE[zabZar][zabDist][0] = 8;
	distanceAllinONE[zabZar][zabDist][1] = 13;
	distanceAllinONE[zabZar][zabDist][2] = 258;
	distanceAllinONE[zabZar][zabDist][3] = 54;
	distanceAllinONE[zabZar][zabDist][4] = 182;
	distanceAllinONE[zabZar][zabDist][5] = 48;
	distanceAllinONE[zabZar][zabDist][6] = 96;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 20;

	//11км
	zabDist = 11;
	distanceAllinONE[zabZar][zabDist][0] = 10;
	distanceAllinONE[zabZar][zabDist][1] = 14;
	distanceAllinONE[zabZar][zabDist][2] = 305;
	distanceAllinONE[zabZar][zabDist][3] = 61;
	distanceAllinONE[zabZar][zabDist][4] = 207;
	distanceAllinONE[zabZar][zabDist][5] = 51;
	distanceAllinONE[zabZar][zabDist][6] = 101;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 24;
	//12км
	zabDist = 12;
	distanceAllinONE[zabZar][zabDist][0] = 13;
	distanceAllinONE[zabZar][zabDist][1] = 15;
	distanceAllinONE[zabZar][zabDist][2] = 356;
	distanceAllinONE[zabZar][zabDist][3] = 70;
	distanceAllinONE[zabZar][zabDist][4] = 229;
	distanceAllinONE[zabZar][zabDist][5] = 54;
	distanceAllinONE[zabZar][zabDist][6] = 108;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 30;

	//заряд первый
	zabZar = 2;
	//1км
	zabDist = 1;
	distanceAllinONE[zabZar][zabDist][0] = 1;
	distanceAllinONE[zabZar][zabDist][1] = 1;
	distanceAllinONE[zabZar][zabDist][2] = 3;
	distanceAllinONE[zabZar][zabDist][3] = 1;
	distanceAllinONE[zabZar][zabDist][4] = 3;
	distanceAllinONE[zabZar][zabDist][5] = 9;
	distanceAllinONE[zabZar][zabDist][6] = 18;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;
	//2км
	zabDist = 2;
	distanceAllinONE[zabZar][zabDist][0] = 1;
	distanceAllinONE[zabZar][zabDist][1] = 3;
	distanceAllinONE[zabZar][zabDist][2] = 11;
	distanceAllinONE[zabZar][zabDist][3] = 5;
	distanceAllinONE[zabZar][zabDist][4] = 11;
	distanceAllinONE[zabZar][zabDist][5] = 17;
	distanceAllinONE[zabZar][zabDist][6] = 33;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;
	//3км
	zabDist = 3;
	distanceAllinONE[zabZar][zabDist][0] = 2;
	distanceAllinONE[zabZar][zabDist][1] = 5;
	distanceAllinONE[zabZar][zabDist][2] = 28;
	distanceAllinONE[zabZar][zabDist][3] = 9;
	distanceAllinONE[zabZar][zabDist][4] = 24;
	distanceAllinONE[zabZar][zabDist][5] = 23;
	distanceAllinONE[zabZar][zabDist][6] = 46;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;
	//4км
	zabDist = 4;
	distanceAllinONE[zabZar][zabDist][0] = 2;
	distanceAllinONE[zabZar][zabDist][1] = 6;
	distanceAllinONE[zabZar][zabDist][2] = 56;
	distanceAllinONE[zabZar][zabDist][3] = 14;
	distanceAllinONE[zabZar][zabDist][4] = 43;
	distanceAllinONE[zabZar][zabDist][5] = 29;
	distanceAllinONE[zabZar][zabDist][6] = 57;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;
	//5км
	zabDist = 5;
	distanceAllinONE[zabZar][zabDist][0] = 3;
	distanceAllinONE[zabZar][zabDist][1] = 8;
	distanceAllinONE[zabZar][zabDist][2] = 89;
	distanceAllinONE[zabZar][zabDist][3] = 20;
	distanceAllinONE[zabZar][zabDist][4] = 65;
	distanceAllinONE[zabZar][zabDist][5] = 31;
	distanceAllinONE[zabZar][zabDist][6] = 62;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 4;
	//6км
	zabDist = 6;
	distanceAllinONE[zabZar][zabDist][0] = 5;
	distanceAllinONE[zabZar][zabDist][1] = 9;
	distanceAllinONE[zabZar][zabDist][2] = 125;
	distanceAllinONE[zabZar][zabDist][3] = 25;
	distanceAllinONE[zabZar][zabDist][4] = 89;
	distanceAllinONE[zabZar][zabDist][5] = 34;
	distanceAllinONE[zabZar][zabDist][6] = 67;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 4;
	//7км
	zabDist = 7;
	distanceAllinONE[zabZar][zabDist][0] = 6;
	distanceAllinONE[zabZar][zabDist][1] = 10;
	distanceAllinONE[zabZar][zabDist][2] = 164;
	distanceAllinONE[zabZar][zabDist][3] = 30;
	distanceAllinONE[zabZar][zabDist][4] = 114;
	distanceAllinONE[zabZar][zabDist][5] = 36;
	distanceAllinONE[zabZar][zabDist][6] = 73;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 8;
	//8км
	zabDist = 8;
	distanceAllinONE[zabZar][zabDist][0] = 7;
	distanceAllinONE[zabZar][zabDist][1] = 11;
	distanceAllinONE[zabZar][zabDist][2] = 205;
	distanceAllinONE[zabZar][zabDist][3] = 36;
	distanceAllinONE[zabZar][zabDist][4] = 139;
	distanceAllinONE[zabZar][zabDist][5] = 40;
	distanceAllinONE[zabZar][zabDist][6] = 80;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 12;
	//9км
	zabDist = 9;
	distanceAllinONE[zabZar][zabDist][0] = 9;
	distanceAllinONE[zabZar][zabDist][1] = 12;
	distanceAllinONE[zabZar][zabDist][2] = 247;
	distanceAllinONE[zabZar][zabDist][3] = 42;
	distanceAllinONE[zabZar][zabDist][4] = 164;
	distanceAllinONE[zabZar][zabDist][5] = 43;
	distanceAllinONE[zabZar][zabDist][6] = 85;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 16;
	//10км
	zabDist = 10;
	distanceAllinONE[zabZar][zabDist][0] = 11;
	distanceAllinONE[zabZar][zabDist][1] = 13;
	distanceAllinONE[zabZar][zabDist][2] = 292;
	distanceAllinONE[zabZar][zabDist][3] = 50;
	distanceAllinONE[zabZar][zabDist][4] = 189;
	distanceAllinONE[zabZar][zabDist][5] = 46;
	distanceAllinONE[zabZar][zabDist][6] = 91;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 20;
	//11км
	zabDist = 11;
	distanceAllinONE[zabZar][zabDist][0] = 15;
	distanceAllinONE[zabZar][zabDist][1] = 15;
	distanceAllinONE[zabZar][zabDist][2] = 340;
	distanceAllinONE[zabZar][zabDist][3] = 57;
	distanceAllinONE[zabZar][zabDist][4] = 212;
	distanceAllinONE[zabZar][zabDist][5] = 49;
	distanceAllinONE[zabZar][zabDist][6] = 98;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 30;

	//заряд второй
	zabZar = 3;
	//1км
	zabDist = 1;
	distanceAllinONE[zabZar][zabDist][0] = 1;
	distanceAllinONE[zabZar][zabDist][1] = 1;
	distanceAllinONE[zabZar][zabDist][2] = 4;
	distanceAllinONE[zabZar][zabDist][3] = 1;
	distanceAllinONE[zabZar][zabDist][4] = 4;
	distanceAllinONE[zabZar][zabDist][5] = 7;
	distanceAllinONE[zabZar][zabDist][6] = 18;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;
	//2км
	zabDist = 2;
	distanceAllinONE[zabZar][zabDist][0] = 2;
	distanceAllinONE[zabZar][zabDist][1] = 3;
	distanceAllinONE[zabZar][zabDist][2] = 20;
	distanceAllinONE[zabZar][zabDist][3] = 4;
	distanceAllinONE[zabZar][zabDist][4] = 14;
	distanceAllinONE[zabZar][zabDist][5] = 13;
	distanceAllinONE[zabZar][zabDist][6] = 32;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;
	//3км
	zabDist = 3;
	distanceAllinONE[zabZar][zabDist][0] = 2;
	distanceAllinONE[zabZar][zabDist][1] = 5;
	distanceAllinONE[zabZar][zabDist][2] = 47;
	distanceAllinONE[zabZar][zabDist][3] = 7;
	distanceAllinONE[zabZar][zabDist][4] = 32;
	distanceAllinONE[zabZar][zabDist][5] = 17;
	distanceAllinONE[zabZar][zabDist][6] = 42;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;
	//4км
	zabDist = 4;
	distanceAllinONE[zabZar][zabDist][0] = 3;
	distanceAllinONE[zabZar][zabDist][1] = 5;
	distanceAllinONE[zabZar][zabDist][2] = 81;
	distanceAllinONE[zabZar][zabDist][3] = 12;
	distanceAllinONE[zabZar][zabDist][4] = 55;
	distanceAllinONE[zabZar][zabDist][5] = 19;
	distanceAllinONE[zabZar][zabDist][6] = 48;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;
	//5км
	zabDist = 5;
	distanceAllinONE[zabZar][zabDist][0] = 4;
	distanceAllinONE[zabZar][zabDist][1] = 7;
	distanceAllinONE[zabZar][zabDist][2] = 120;
	distanceAllinONE[zabZar][zabDist][3] = 15;
	distanceAllinONE[zabZar][zabDist][4] = 78;
	distanceAllinONE[zabZar][zabDist][5] = 21;
	distanceAllinONE[zabZar][zabDist][6] = 53;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 4;
	//6км
	zabDist = 6;
	distanceAllinONE[zabZar][zabDist][0] = 6;
	distanceAllinONE[zabZar][zabDist][1] = 8;
	distanceAllinONE[zabZar][zabDist][2] = 157;
	distanceAllinONE[zabZar][zabDist][3] = 20;
	distanceAllinONE[zabZar][zabDist][4] = 103;
	distanceAllinONE[zabZar][zabDist][5] = 24;
	distanceAllinONE[zabZar][zabDist][6] = 61;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 8;
	//7км
	zabDist = 7;
	distanceAllinONE[zabZar][zabDist][0] = 7;
	distanceAllinONE[zabZar][zabDist][1] = 9;
	distanceAllinONE[zabZar][zabDist][2] = 197;
	distanceAllinONE[zabZar][zabDist][3] = 26;
	distanceAllinONE[zabZar][zabDist][4] = 126;
	distanceAllinONE[zabZar][zabDist][5] = 27;
	distanceAllinONE[zabZar][zabDist][6] = 67;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 8;
	//8км
	zabDist = 8;
	distanceAllinONE[zabZar][zabDist][0] = 9;
	distanceAllinONE[zabZar][zabDist][1] = 10;
	distanceAllinONE[zabZar][zabDist][2] = 238;
	distanceAllinONE[zabZar][zabDist][3] = 31;
	distanceAllinONE[zabZar][zabDist][4] = 150;
	distanceAllinONE[zabZar][zabDist][5] = 29;
	distanceAllinONE[zabZar][zabDist][6] = 73;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 12;
	//9км
	zabDist = 9;
	distanceAllinONE[zabZar][zabDist][0] = 11;
	distanceAllinONE[zabZar][zabDist][1] = 11;
	distanceAllinONE[zabZar][zabDist][2] = 277;
	distanceAllinONE[zabZar][zabDist][3] = 38;
	distanceAllinONE[zabZar][zabDist][4] = 172;
	distanceAllinONE[zabZar][zabDist][5] = 32;
	distanceAllinONE[zabZar][zabDist][6] = 81;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 20;
	//10км
	zabDist = 10;
	distanceAllinONE[zabZar][zabDist][0] = 16;
	distanceAllinONE[zabZar][zabDist][1] = 13;
	distanceAllinONE[zabZar][zabDist][2] = 320;
	distanceAllinONE[zabZar][zabDist][3] = 46;
	distanceAllinONE[zabZar][zabDist][4] = 191;
	distanceAllinONE[zabZar][zabDist][5] = 36;
	distanceAllinONE[zabZar][zabDist][6] = 89;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 30;

	//заряд третий
	zabZar = 4;
	//1км
	zabDist = 1;
	distanceAllinONE[zabZar][zabDist][0] = 1;
	distanceAllinONE[zabZar][zabDist][1] = 1;
	distanceAllinONE[zabZar][zabDist][2] = 12;
	distanceAllinONE[zabZar][zabDist][3] = 1;
	distanceAllinONE[zabZar][zabDist][4] = 7;
	distanceAllinONE[zabZar][zabDist][5] = 6;
	distanceAllinONE[zabZar][zabDist][6] = 16;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;
	//2км
	zabDist = 2;
	distanceAllinONE[zabZar][zabDist][0] = 2;
	distanceAllinONE[zabZar][zabDist][1] = 2;
	distanceAllinONE[zabZar][zabDist][2] = 30;
	distanceAllinONE[zabZar][zabDist][3] = 2;
	distanceAllinONE[zabZar][zabDist][4] = 18;
	distanceAllinONE[zabZar][zabDist][5] = 12;
	distanceAllinONE[zabZar][zabDist][6] = 30;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;
	//3км
	zabDist = 3;
	distanceAllinONE[zabZar][zabDist][0] = 3;
	distanceAllinONE[zabZar][zabDist][1] = 3;
	distanceAllinONE[zabZar][zabDist][2] = 57;
	distanceAllinONE[zabZar][zabDist][3] = 4;
	distanceAllinONE[zabZar][zabDist][4] = 32;
	distanceAllinONE[zabZar][zabDist][5] = 16;
	distanceAllinONE[zabZar][zabDist][6] = 41;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;
	//4км
	zabDist = 4;
	distanceAllinONE[zabZar][zabDist][0] = 4;
	distanceAllinONE[zabZar][zabDist][1] = 4;
	distanceAllinONE[zabZar][zabDist][2] = 85;
	distanceAllinONE[zabZar][zabDist][3] = 7;
	distanceAllinONE[zabZar][zabDist][4] = 49;
	distanceAllinONE[zabZar][zabDist][5] = 21;
	distanceAllinONE[zabZar][zabDist][6] = 52;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 2;
	//5км
	zabDist = 5;
	distanceAllinONE[zabZar][zabDist][0] = 5;
	distanceAllinONE[zabZar][zabDist][1] = 5;
	distanceAllinONE[zabZar][zabDist][2] = 114;
	distanceAllinONE[zabZar][zabDist][3] = 11;
	distanceAllinONE[zabZar][zabDist][4] = 68;
	distanceAllinONE[zabZar][zabDist][5] = 25;
	distanceAllinONE[zabZar][zabDist][6] = 62;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 4;
	//6км
	zabDist = 6;
	distanceAllinONE[zabZar][zabDist][0] = 7;
	distanceAllinONE[zabZar][zabDist][1] = 6;
	distanceAllinONE[zabZar][zabDist][2] = 143;
	distanceAllinONE[zabZar][zabDist][3] = 15;
	distanceAllinONE[zabZar][zabDist][4] = 88;
	distanceAllinONE[zabZar][zabDist][5] = 29;
	distanceAllinONE[zabZar][zabDist][6] = 72;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 8;
	//7км
	zabDist = 7;
	distanceAllinONE[zabZar][zabDist][0] = 9;
	distanceAllinONE[zabZar][zabDist][1] = 7;
	distanceAllinONE[zabZar][zabDist][2] = 172;
	distanceAllinONE[zabZar][zabDist][3] = 19;
	distanceAllinONE[zabZar][zabDist][4] = 100;
	distanceAllinONE[zabZar][zabDist][5] = 33;
	distanceAllinONE[zabZar][zabDist][6] = 83;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 12;
	//8км
	zabDist = 8;
	distanceAllinONE[zabZar][zabDist][0] = 14;
	distanceAllinONE[zabZar][zabDist][1] = 8;
	distanceAllinONE[zabZar][zabDist][2] = 201;
	distanceAllinONE[zabZar][zabDist][3] = 24;
	distanceAllinONE[zabZar][zabDist][4] = 114;
	distanceAllinONE[zabZar][zabDist][5] = 38;
	distanceAllinONE[zabZar][zabDist][6] = 94;

	distanceAllinONE[zabZar][zabDist][7] = 0;
	distanceAllinONE[zabZar][zabDist][8] = 0;
	distanceAllinONE[zabZar][zabDist][9] = 16;


	//fs=require("fs")
	//fs.writeFileSync("txt.txt", "my text",  "ascii")

}
//================================================================//
//=======================  Чтение данных  ========================//
//================================================================//
//определяем дистанцию
function calculateDistation()
{
	var dist = parseInt(document.getElementById('dist').value);
	zarad = parseInt(document.getElementById('select_id').value);
	distance01 = distanceAllinONE[zarad][dist-2];
	distance02 = distanceAllinONE[zarad][dist];
	distance03 = distanceAllinONE[zarad][dist+2];
}
//чтение данных из таблицы стрельбы
function readData() 
{
	//var zarad = document.getElementById('select_id').value;
	//var dist = parseInt(document.getElementById('dist').value);

    distance01[7] = document.getElementById('wX01').value;
    distance01[8] = document.getElementById('wY01').value;

    distance02[7] = document.getElementById('wX02').value;
    distance02[8] = document.getElementById('wY02').value;

    distance03[7] = document.getElementById('wX03').value;
    distance03[8] = document.getElementById('wY03').value;


    /*
    distance01[0] = document.getElementById('z01').value;
    distance01[1] = document.getElementById('dZw01').value;
    distance01[2] = document.getElementById('dXw01').value;
    distance01[3] = document.getElementById('dXh01').value;
    distance01[4] = document.getElementById('dXt01').value;
    distance01[5] = document.getElementById('dXtZ01').value;
    distance01[6] = document.getElementById('dXv01').value;

    distance01[7] = document.getElementById('wX01').value;
    distance01[8] = document.getElementById('wY01').value;


    distance02[0] = document.getElementById('z02').value;
    distance02[1] = document.getElementById('dZw02').value;
    distance02[2] = document.getElementById('dXw02').value;
    distance02[3] = document.getElementById('dXh02').value;
    distance02[4] = document.getElementById('dXt02').value;
    distance02[5] = document.getElementById('dXtZ02').value;
    distance02[6] = document.getElementById('dXv02').value;

    distance02[7] = document.getElementById('wX02').value;
    distance02[8] = document.getElementById('wY02').value;


    distance03[0] = document.getElementById('z03').value;
    distance03[1] = document.getElementById('dZw03').value;
    distance03[2] = document.getElementById('dXw03').value;
    distance03[3] = document.getElementById('dXh03').value;
    distance03[4] = document.getElementById('dXt03').value;
    distance03[5] = document.getElementById('dXtZ03').value;
    distance03[6] = document.getElementById('dXv03').value;

    distance03[7] = document.getElementById('wX03').value;
    distance03[8] = document.getElementById('wY03').value;
    */
}

//чтение групп
function readGroups()
{
    dT = artAroundXX(parseInt(document.getElementById('dT').value));//не трогать!
    

    gr02[0] = document.getElementById('dT02').value;
    gr02[1] = document.getElementById('aw02').value;
    gr02[2] = document.getElementById('v02').value;

    gr04[0] = document.getElementById('dT04').value;
    gr04[1] = document.getElementById('aw04').value;
    gr04[2] = document.getElementById('v04').value;

    gr08[0] = document.getElementById('dT08').value;
    gr08[1] = document.getElementById('aw08').value;
    gr08[2] = document.getElementById('v08').value;

    gr12[0] = document.getElementById('dT12').value;
    gr12[1] = document.getElementById('aw12').value;
    gr12[2] = document.getElementById('v12').value;

    gr16[0] = document.getElementById('dT16').value;
    gr16[1] = document.getElementById('aw16').value;
    gr16[2] = document.getElementById('v16').value;

    gr20[0] = document.getElementById('dT20').value;
    gr20[1] = document.getElementById('aw20').value;
    gr20[2] = document.getElementById('v20').value;

    gr24[0] = document.getElementById('dT24').value;
    gr24[1] = document.getElementById('aw24').value;
    gr24[2] = document.getElementById('v24').value;

    gr30[0] = document.getElementById('dT30').value;
    gr30[1] = document.getElementById('aw30').value;
    gr30[2] = document.getElementById('v30').value;

    gr40[0] = document.getElementById('dT40').value;
    gr40[1] = document.getElementById('aw40').value;
    gr40[2] = document.getElementById('v40').value;

    gr50[0] = document.getElementById('dT50').value;
    gr50[1] = document.getElementById('aw50').value;
    gr50[2] = document.getElementById('v50').value;

}
//установка групп на заданные дальности в соответствии с необходимостью
function setGroups()
{
    var vTt01 = parseInt(distance01[9]);
    switch(vTt01)
    {
        case 2:
            _gr01 = gr02;
            break;
        case 4:
            _gr01 = gr04;
            break;
        case 8:
            _gr01 = gr08;
            break;
        case 12:
            _gr01 = gr12;
            break;
        case 16:
            _gr01 = gr16;
            break;
        case 20:
            _gr01 = gr20;
            break;
        case 24:
            _gr01 = gr24;
            break;
        case 30:
            _gr01 = gr30;
            break;
        case 40:
            _gr01 = gr40;
            break;
        case 50:
            _gr01 = gr50;
            break;
    }
    var vTt02 = parseInt(distance02[9]);
    switch(vTt02)
    {
        case 2:
            _gr02 = gr02;
            break;
        case 4:
            _gr02 = gr04;
            break;
        case 8:
            _gr02 = gr08;
            break;
        case 12:
            _gr02 = gr12;
            break;
        case 16:
            _gr02 = gr16;
            break;
        case 20:
            _gr02 = gr20;
            break;
        case 24:
            _gr02 = gr24;
            break;
        case 30:
            _gr02 = gr30;
            break;
        case 40:
            _gr02 = gr40;
            break;
        case 50:
            _gr02 = gr50;
            break;
    }
    var vTt03 = parseInt(distance03[9]);
    switch(vTt03)
    {
        case 2:
            _gr03 = gr02;
            break;
        case 4:
            _gr03 = gr04;
            break;
        case 8:
            _gr03 = gr08;
            break;
        case 12:
            _gr03 = gr12;
            break;
        case 16:
            _gr03 = gr16;
            break;
        case 20:
            _gr03 = gr20;
            break;
        case 24:
            _gr03 = gr24;
            break;
        case 30:
            _gr03 = gr30;
            break;
        case 40:
            _gr03 = gr40;
            break;
        case 50:
            _gr03 = gr50;
            break;
    }
}


//================================================================//
//=======================  Вычисления  ===========================//
//================================================================//

function calcVariors()
{
    calcDtZ();//
    clacDHop();
    calcAw();
	dVsum = parseFloat(document.getElementById('dVsum').value);

    calcDdW();
    calcDdH();
    calcDt();
    calcDdTz();
    calcDv();
    calcDsum();

    calcDZ();
}

function calcDtZ()
{
    //считывает температуру заряда
    TempZar = document.getElementById('Tzar').value;
    //вычисляет dT
    dTz = parseInt(TempZar) - TEMP_CONST; //---------------
}

function clacDHop()
{
    //вычисляем разницу атмосферногго давления
    dHamc = document.getElementById('dHamc').value;
    dHamc = artAroundXXX(dHamc);
    //высота позиции метео
    hamc = document.getElementById('ha').value;
    //высота огневой позиции
    hop = document.getElementById('Ho').value;
    //дельта H
    dHop = Math.round(parseInt(dHamc) + (parseInt(hamc) - parseInt(hop))/POROG);//---------------
}

function calcAw()
{
    aon = document.getElementById('aon').value;
    Aw01 = artAroundRotate(parseInt(aon) - parseInt(_gr01[1]));
    Aw02 = artAroundRotate(parseInt(aon) - parseInt(_gr02[1]));
    Aw03 = artAroundRotate(parseInt(aon) - parseInt(_gr03[1]));
}

function calcDdW()
{
    tabl01[0] = (-1) * parseInt(distance01[2]) * parseInt(distance01[7]) * 0.1;
    tabl02[0] = (-1) * parseInt(distance02[2]) * parseInt(distance02[7]) * 0.1;
    tabl03[0] = (-1) * parseInt(distance03[2]) * parseInt(distance03[7]) * 0.1;
}

function calcDdH()
{
    clacDHop();
    tabl01[1] = parseInt(distance01[3]) * parseInt(dHop) * 0.1;
    tabl02[1] = parseInt(distance02[3]) * parseInt(dHop) * 0.1;
    tabl03[1] = parseInt(distance03[3]) * parseInt(dHop) * 0.1;
}

function calcDt()
{
    tabl01[2] = (-1) * parseInt(distance01[4]) * artAroundXX(parseInt(_gr01[0])) * 0.1;
    tabl02[2] = (-1) * parseInt(distance02[4]) * artAroundXX(parseInt(_gr02[0])) * 0.1;
    tabl03[2] = (-1) * parseInt(distance03[4]) * artAroundXX(parseInt(_gr03[0])) * 0.1;
}

function calcDdTz()
{
    tabl01[3] = (-1) * parseInt(distance01[5]) * parseInt(dTz) * 0.1;
    tabl02[3] = (-1) * parseInt(distance02[5]) * parseInt(dTz) * 0.1;
    tabl03[3] = (-1) * parseInt(distance03[5]) * parseInt(dTz) * 0.1;
}

function calcDv()
{
    tabl01[4] = (-1) * parseInt(distance01[6]) * parseFloat(dVsum);
    tabl02[4] = (-1) * parseInt(distance02[6]) * parseFloat(dVsum);
    tabl03[4] = (-1) * parseInt(distance03[6]) * parseFloat(dVsum);
}

function calcDsum()
{
    tabl01[5] = tabl01[0] + tabl01[1] + tabl01[2] + tabl01[3] + tabl01[4];
    tabl02[5] = tabl02[0] + tabl02[1] + tabl02[2] + tabl02[3] + tabl02[4];
    tabl03[5] = tabl03[0] + tabl03[1] + tabl03[2] + tabl03[3] + tabl03[4];
}

function calcDZ()
{
    tabl01[6] = (-1) * parseInt(distance01[0]) + (0.1 * (-1) * parseInt(distance01[1]) * parseInt(distance01[8]))
    tabl02[6] = (-1) * parseInt(distance02[0]) + (0.1 * (-1) * parseInt(distance02[1]) * parseInt(distance02[8]))
    tabl03[6] = (-1) * parseInt(distance03[0]) + (0.1 * (-1) * parseInt(distance03[1]) * parseInt(distance03[8]))
}

//================================================================//
//=======================  Округления  ===========================//
//================================================================//
//функция на округление для 5*
function artAroundXX (x) {
    if (x > 50){
        x = x - 50;
        return -x;
    }
    else{
        return x;
    }
}
//функция на округление для 5**
function artAroundXXX (x) {
    if (x > 500){
        x = x - 500;
        return -x;
    }
    else{
        return x;
    }
}
//округляем вращение, направления
function artAroundRotate(x)
{
    if(x<0)
    {
        return x+60;
    }
    else
    {
        return x;
    }
}