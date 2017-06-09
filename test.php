<form action="action.php" method="post">
		Вводить метео так, как оно даётся в условии, <br>т.е. "54" вместо "-4"
		<br>
		Метео11XX<br>
		-XX XX X (время)-<br>
		<input class="span" placeholder="XXXX AMC" name="ha">
		<input class="span" placeholder="XXX dH0" name="dHamc">
		<input class="span" placeholder="XX dT" name="dT"><br>

		-02-<br><input class="span" placeholder="XX dT" name="dT02">
		<input class="span" placeholder="XX aw" name="aw02">
		<input class="span" placeholder="XX v" name="v02"><br>

		-04-<br><input class="span" placeholder="XX dT" name="dT04">
		<input class="span" placeholder="XX aw" name="aw04">
		<input class="span" placeholder="XX v" name="v04"><br>
 
		-08-<br><input class="span" placeholder="XX dT" name="dT08">
		<input class="span" placeholder="XX aw" name="aw08">
		<input class="span" placeholder="XX v" name="v08"><br>
	 
		-12-<br><input class="span" placeholder="XX dT" name="dT12">
		<input class="span" placeholder="XX aw" name="aw12">
		<input class="span" placeholder="XX v" name="v12"><br>
 
		-16-<br><input class="span" placeholder="XX dT" name="dT16">
		<input class="span" placeholder="XX aw" name="aw16">
		<input class="span" placeholder="XX v" name="v16"><br>
 
		-20-<br><input class="span" placeholder="XX dT" name="dT20">
		<input class="span" placeholder="XX aw" name="aw20">
		<input class="span" placeholder="XX v" name="v20"><br>

		-24-<br><input class="span" placeholder="XX dT" name="dT24">
		<input class="span" placeholder="XX aw" name="aw24">
		<input class="span" placeholder="XX v" name="v24"><br>

		-30-<br><input class="span" placeholder="XX dT" name="dT30">
		<input class="span" placeholder="XX aw" name="aw30">
		<input class="span" placeholder="XX v" name="v30"><br>
 
		-40-<br><input class="span" placeholder="XX dT" name="dT40">
		<input class="span" placeholder="XX aw" name="aw40">
		<input class="span" placeholder="XX v" name="v40"><br>
 
		-50-<br><input class="span" placeholder="XX dT" name="dT50">
		<input class="span" placeholder="XX aw" name="aw50">
		<input class="span" placeholder="XX v" name="v50"><br>
		</p>

		<p>
			<select onchange="selAlt();" name="zarad">
				<option value="0">Полный</option>
				<option value="1">Уменьшенный</option>
				<option value="2">Первый</option>
				<option value="3">Второй</option>
				<option value="4">Третий</option>
			</select><br>
			Вводить условие так, как оно даётся в условии, <br>т.е. V0=-1.4 ввоится как -1.4<br>ЧЕРЕЗ ТОЧКУ!!!<br>
 
			<input class="span" placeholder="Угол ОН" name="aon"><br>
			<input class="span" placeholder="Тзар" name="Tzar"><br>
			<input class="span" placeholder="Высота ОП" name="Ho"><br>
			<input class="span" placeholder="dV0сум" name="dVsum"><br>
			Сюда указывать среднюю дальность в км, <br>т.е. если условие - на дальности 4,6,8 вводить 6, <br>ЭТО ЧИСЛО УКАЗЫВАЕТСЯ В КМ, а не М, т.е. не 6000!!!<br>
			<input class="span" placeholder="Дальность" name="dist"><br> 
		</p>
		Перед всеми вычислениями нажать эту кнопку <br>и задать данные из таблицы с последней страницы<br>
		<button class="btn btn-large btn-primary" type="button" name="btnMain" onclick="main()">Поправки на ветер</button><br>
		<p name="winder"></p>
		<input class="span" placeholder="Wx" name="wX01">
		<input class="span" placeholder="Wy" name="wY01"><br>

		<input class="span" placeholder="Wx" name="wX02">
		<input class="span" placeholder="Wy" name="wY02"><br>
	
		<input class="span" placeholder="Wx" name="wX03">
		<input class="span" placeholder="Wy" name="wY03"><br>
		<p name="outer"></p>
		<p><input type="submit"/> </p>
		<!--<p><button class="btn btn-large btn-primary" type="button" name="btnMain" onclick="wind()">Рассчитать</button><p>-->
 
</form>
