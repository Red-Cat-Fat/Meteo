
<? 
	header('Content-Type: text/html; charset=utf-8'); 
	function calc($r, $a, $sin) { 
		if ($a < 0 || $r < 0 || $sin < 0) { 
			return false; 
		} 
		else { 
			$result = (($r*$r)/2)*(3.14*$a/180 - $sin); 
			return $result; 
		} 
	} 
	$r=$_POST['r']; 
	$a=$_POST['a']; 
	$sin=$_POST['sin']; 

	if(!empty($r) && !empty($a) && !empty($sin)){ 
		$result = calc($r, $a, $sin); 
		if ($result!=false){ 
			echo 'Площадь сегмента круга = '.$result; 
		} 
		else { 
			echo 'Error'; 
		} 	
	}
	else { 
		echo 'Error'; 
	} 
?>