<?php
		/*echo (int)$_POST['ha'];
		echo (int)$_POST['dHamc'];
		echo (int)$_POST['dT']; 

		//-02- 
		echo (int)$_POST['dT02'];
		echo (int)$_POST['aw02'];
		echo (int)$_POST['v02']; 

		//-04- 
		echo (int)$_POST['dT04'];
		echo (int)$_POST['aw04'];
		echo (int)$_POST['v04']; 
 
		//-08- 
		echo (int)$_POST['dT08'];
		echo (int)$_POST['aw08'];
		echo (int)$_POST['v08']; 
	 
		//-12- 
		echo (int)$_POST['dT12'];
		echo (int)$_POST['aw12'];
		echo (int)$_POST['v12']; 
 
		//-16- 
		echo (int)$_POST['dT16'];
		echo (int)$_POST['aw16'];
		echo (int)$_POST['v16']; 
 
		//-20- 
		echo (int)$_POST['dT20'];
		echo (int)$_POST['aw20'];
		echo (int)$_POST['v20']; 

		//-24- 
		echo (int)$_POST['dT24'];
		echo (int)$_POST['aw24'];
		echo (int)$_POST['v24']; 

		//-30- 
		echo (int)$_POST['dT30'];
		echo (int)$_POST['aw30'];
		echo (int)$_POST['v30']; 
 
		//-40- 
		echo (int)$_POST['dT40'];
		echo (int)$_POST['aw40'];
		echo (int)$_POST['v40']; 
 
		//-50- 
		echo (int)$_POST['dT50'];
		echo (int)$_POST['aw50'];
		echo (int)$_POST['v50']; 
		
		echo (int)$_POST['select_name']; */
		
		$ha = (int)$_POST['ha'];
		$dHamc = (int)$_POST['dHamc'];
		$dT = (int)$_POST['dT']; 

		//-02- 
		$dT02 = (int)$_POST['dT02'];
		$aw02 = (int)$_POST['aw02'];
		$v02 = (int)$_POST['v02']; 

		//-04- 
		$dT04 = (int)$_POST['dT04'];
		$aw04 = (int)$_POST['aw04'];
		$v04 = (int)$_POST['v04']; 
 
		//-08- 
		$dT08 = (int)$_POST['dT08'];
		$aw08 = (int)$_POST['aw08'];
		$v08 = (int)$_POST['v08']; 
	 
		//-12- 
		$dT12 = (int)$_POST['dT12'];
		$dT12 = (int)$_POST['dT12'];
		$v12 = (int)$_POST['v12']; 
 
		//-16- 
		$dT16 = (int)$_POST['dT16'];
		$aw16 = (int)$_POST['aw16'];
		$v16 = (int)$_POST['v16']; 
 
		//-20- 
		$dT20 = (int)$_POST['dT20'];
		$aw20 = (int)$_POST['aw20'];
		$v20 = (int)$_POST['v20']; 

		//-24- 
		$dT24 = (int)$_POST['dT24'];
		$aw24 = (int)$_POST['aw24'];
		$v24 = (int)$_POST['v24']; 

		//-30- 
		$dT30 = (int)$_POST['dT30'];
		$aw30 = (int)$_POST['aw30'];
		$v30 = (int)$_POST['v30']; 
 
		//-40- 
		$dT40 = (int)$_POST['dT40'];
		$aw40 = (int)$_POST['aw40'];
		$v40 = (int)$_POST['v40']; 
 
		//-50- 
		$dT50 = (int)$_POST['dT50'];
		$aw50 = (int)$_POST['aw50'];
		$v50 = (int)$_POST['v50']; 
		
		$zarad = (int)$_POST['zarad']; 
		
		$aon = (int)$_POST['aon'];
		$Tzar =	(int)$_POST['Tzar'];
		$Ho = (int)$_POST['Ho'];
		$dVsum = (int)$_POST['dVsum'];
		$dist = (int)$_POST['dist']; 
		
		$dT = artAroundXX($dT);
	
    //echo $dT;
	//считываем группы
	$gr = array(
		gr02 => array(
		0 => $dT02,
		1 => $aw02,
		2 => $v02,
		),

		gr04 => array( 
		0=> $dT04,
		1=> $aw04,
		2=> $v04
		),

		gr08 => array( 
			0=> $dT08,
			1=> $aw08,
			2=> $v08
		),
		
		gr12 => array( 
			0=> $dT12,
			1=> $aw12,
			2=> $v12
		),
		
		gr16 => array( 
			0=> $dT16,
			1=> $aw16,
			2=> $v16
		),
		
		gr20 => array( 
			0=> $dT20,
			1=> $aw20,
			2=> $v20
		),
		
		gr24 => array( 
			0=> $dT24,
			1=> $aw24,
			2=> $v24
		),
		
		gr30 => array( 
			0=> $dT30,
			1=> $aw30,
			2=> $v30
		),

		gr40 => array( 
			0=> $dT40,
			1=> $aw40,
			2=> $v40
		),
		
		gr50 => array( 
			0=> $dT50,
			1=> $aw50,
			2=> $v50
		)
	);
	
	
	
	$db=mysql_connect("localhost", "boronnikov_a_i", "12345678");
	mysql_select_db("boronnikov_a_i",$db);

	$result=mysql_query("select * from dist where 'zarad' = 0", $db);
	echo $zarad;
	echo "<table border=1>\n";
	echo "<tr><td>Id</td> <td>zarad</td><td>dist</td><td>Id</td></tr>\n";
	while ($myrow = mysql_fetch_array($result))
	{
		printf("<tr><td>%s<td> %s</td><td>%s</td></tr>\n", $myrow[0], $myrow[1], $myrow[2]);
	}
	echo "</table>\n";

	
	
	/*distance01 = distanceAllinONE[zarad][dist-2];
	distance02 = distanceAllinONE[zarad][dist];
	distance03 = distanceAllinONE[zarad][dist+2];*/
	
function artAroundXX ($x) 
{
    if ($x > 50){
        $x = $x - 50;
        return -$x;
    }
    else{
        return $x;
    }
}
//функция на округление для 5**
function artAroundXXX ($x) 
{
    if ($x > 500){
        $x = $x - 500;
        return -$x;
    }
    else{
        return $x;
    }
}
//округляем вращение, направления
function artAroundRotate($x)
{
    if($x<0)
    {
        return $x+60;
    }
    else
    {
        return $x;
    }
}
/**/?>
