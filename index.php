<!DOCTYPE html>
<html>
 <head>
 	<title>Вычисление поправок</title>
 	<style>
 		.span2 {
 			width: 65px; /* Ширина поля в пикселах */
 		} 
 	</style>
 </head>
 <body>
 	<div class="container">
 		<p>
		Вводить метео так, как оно даётся в условии, <br>т.е. "54" вместо "-4"
		<br>
		Метео11XX<br>
		-XX XX X (время)-<br>
		<input class="span2" placeholder="XXXX AMC" id="ha">
		<input class="span2" placeholder="XXX dH0" id="dHamc">
		<input class="span2" placeholder="XX dT" id="dT"><br>

	-02-<br><input class="span2" placeholder="XX dT" id="dT02">
	<input class="span2" placeholder="XX aw" id="aw02">
	<input class="span2" placeholder="XX v" id="v02"><br>

	-04-<br><input class="span2" placeholder="XX dT" id="dT04">
	<input class="span2" placeholder="XX aw" id="aw04">
	<input class="span2" placeholder="XX v" id="v04"><br>
 
	-08-<br><input class="span2" placeholder="XX dT" id="dT08">
	<input class="span2" placeholder="XX aw" id="aw08">
	<input class="span2" placeholder="XX v" id="v08"><br>
	 
	-12-<br><input class="span2" placeholder="XX dT" id="dT12">
	<input class="span2" placeholder="XX aw" id="aw12">
	<input class="span2" placeholder="XX v" id="v12"><br>
 
	-16-<br><input class="span2" placeholder="XX dT" id="dT16">
	<input class="span2" placeholder="XX aw" id="aw16">
	<input class="span2" placeholder="XX v" id="v16"><br>
 
	-20-<br><input class="span2" placeholder="XX dT" id="dT20">
	<input class="span2" placeholder="XX aw" id="aw20">
	<input class="span2" placeholder="XX v" id="v20"><br>

	-24-<br><input class="span2" placeholder="XX dT" id="dT24">
 	<input class="span2" placeholder="XX aw" id="aw24">
 	<input class="span2" placeholder="XX v" id="v24"><br>

	-30-<br><input class="span2" placeholder="XX dT" id="dT30">
	<input class="span2" placeholder="XX aw" id="aw30">
	<input class="span2" placeholder="XX v" id="v30"><br>
 
	-40-<br><input class="span2" placeholder="XX dT" id="dT40">
	<input class="span2" placeholder="XX aw" id="aw40">
	<input class="span2" placeholder="XX v" id="v40"><br>
 
    -50-<br><input class="span2" placeholder="XX dT" id="dT50">
	<input class="span2" placeholder="XX aw" id="aw50">
	<input class="span2" placeholder="XX v" id="v50"><br>
	</p>

		 <p>
		 <select onchange="selAlt();" id="select_id">
		 <option value="0">Полный</option>
		 <option value="1">Уменьшенный</option>
		 <option value="2">Первый</option>
		 <option value="3">Второй</option>
		 <option value="4">Третий</option>
	</select><br>
 
	Вводить условие так, как оно даётся в условии, <br>т.е. V0=-1.4 ввоится как -1.4<br>ЧЕРЕЗ ТОЧКУ!!!<br>
 
	<input class="span2" placeholder="Угол ОН" id="aon"><br>
	<input class="span2" placeholder="Тзар" id="Tzar"><br>
	<input class="span2" placeholder="Высота ОП" id="Ho"><br>
	<input class="span2" placeholder="dV0сум" id="dVsum"><br>
 <!-- достаточно указать центральную дальность, вторые две будут +-2км --> 
	Сюда указывать среднюю дальность в км, <br>т.е. если условие - на дальности 4,6,8 вводить 6, <br>ЭТО ЧИСЛО УКАЗЫВАЕТСЯ В КМ, а не М, т.е. не 6000!!!<br>
	<input class="span2" placeholder="Дальность" id="dist"><br> 
	</p>
	Перед всеми вычислениями нажать эту кнопку <br>и задать данные из таблицы с последней страницы<br>
	<button class="btn btn-large btn-primary" type="button" id="btnMain" onclick="main()">Поправки на ветер</button><br>
	<p id="winder"></p>
	<input class="span2" placeholder="Wx" id="wX01">
	<input class="span2" placeholder="Wy" id="wY01"><br>

	<input class="span2" placeholder="Wx" id="wX02">
	<input class="span2" placeholder="Wy" id="wY02"><br>
	
	<input class="span2" placeholder="Wx" id="wX03">
	<input class="span2" placeholder="Wy" id="wY03"><br>
 <!-- <p>
 Данные для первой дальности<br>
 <input class="span2" placeholder="Z - на деревацию" id="z01"><br>
 <input class="span2" placeholder="dZW - на боковой ветер" id="dZw01"><br>
 <input class="span2" placeholder="dXW - на продольный ветер" id="dXw01"><br>
 <input class="span2" placeholder="dXH - на давление" id="dXh01"><br><!- единственно положительное -> 
 <input class="span2" placeholder="dXT - на температуру" id="dXt01"><br>
 <input class="span2" placeholder="dXTz - на т. заряда" id="dXtZ01"><br>
 <input class="span2" placeholder="dXV - на начальную скорость" id="dXv01"><br>
 <br>
 <input class="span2" placeholder="Wx" id="wX01"><br>
 <input class="span2" placeholder="Wy" id="wY01"><br>
 
 <input class="span2" placeholder="Пиши группу с 0" id="vTr01"><br>
 
 
 <br>Данные для средней дальности<br>
 <input class="span2" placeholder="Z - на деревацию" id="z02"><br>
 <input class="span2" placeholder="dZW - на боковой ветер" id="dZw02"><br>
 <input class="span2" placeholder="dXW - на продольный ветер" id="dXw02"><br>
 <input class="span2" placeholder="dXH - на давление" id="dXh02"><br><!- единственно положительное -> 
 <input class="span2" placeholder="dXT - на температуру" id="dXt02"><br>
 <input class="span2" placeholder="dXTz - на т. заряда" id="dXtZ02"><br>
 <input class="span2" placeholder="dXV - на начальную скорость" id="dXv02"><br>
 <br>
 <input class="span2" placeholder="Wx" id="wX02"><br>
 <input class="span2" placeholder="Wy" id="wY02"><br>
 
 <input class="span2" placeholder="Пиши группу с 0"id="vTr02"><br>
 
 
 <br>Данные для третьей дальности<br>
 <input class="span2" placeholder="Z - на деревацию" id="z03"><br>
 <input class="span2" placeholder="dZW - на боковой ветер" id="dZw03"><br>
 <input class="span2" placeholder="dXW - на продольный ветер" id="dXw03"><br>
 <input class="span2" placeholder="dXH - на давление" id="dXh03"><br><!- единственно положительное -> 
 <input class="span2" placeholder="dXT - на температуру" id="dXt03"><br>
 <input class="span2" placeholder="dXTz - на т. заряда" id="dXtZ03"><br>
 <input class="span2" placeholder="dXV - на начальную скорость" id="dXv03"><br>
 <br>
 <input class="span2" placeholder="Wx" id="wX03"><br>
 <input class="span2" placeholder="Wy" id="wY03"><br>
 
 <input class="span2" placeholder="Пиши группу с 0" id="vTr03"><br>
 </p>--> 
 
		<p id="outer"></p>
		<p><button class="btn btn-large btn-primary" type="button" id="btnMain" onclick="wind()">Рассчитать</button><p>
		</div>
		<script src="main.js"></script>
 	</body>
</html>