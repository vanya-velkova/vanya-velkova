pic= new Image();
	pic.src="design/button.jpg";
	pic1 = new Image();
	pic1.src="design/hover.jpg";
		function hover(s)
		{
			var img = 'url("design/hover.jpg")';
			document.getElementById(s).style.backgroundImage= img;
			
		}
		
		function unhover(s){
		var img = 'url("design/button.jpg")';
			document.getElementById(s).style.backgroundImage= img;
			
		}