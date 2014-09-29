	function equalHeight(){
	var col1 = document.getElementById("col1");
	var col2 = document.getElementById("col2");

		if(col1.offsetHeight > col2.offsetHeight){
			col2.style.height = col1.offsetHeight+"px";
		}else{
			col1.style.height = col2.offsetHeight+"px";
		}
	}

equalHeight();


	
