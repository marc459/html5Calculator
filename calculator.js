  document.addEventListener("DOMContentLoaded", function(event) {
	var value1 = 0;
	var value2 = 0;
	var operation = null;
	var numBtn = document.getElementsByClassName("num-btn");
	var opBtn = document.getElementsByClassName("op-btn");
	var result = document.getElementById("result");

	Array.from(numBtn).forEach((b)=>{
		b.addEventListener("click", ()=>{
			numClick(b);
		});
	});

	for(let i = 0; i < Array.from(opBtn).length ; i++)
	{
		opBtn[i].addEventListener("click", function (){
			opClick(opBtn[i]);
		});
	}
	
	function numClick(b)
	{
		if(operation)
		{
			switch(operation)
			{
				case "sum":
					value2 = value1 + parseInt(b.value,10);
					break;
				case "minus":
					value2 = value1 - parseInt(b.value,10);
					break;
				case "divide":
					value2 = value1 / parseInt(b.value,10);
					break;
				case "multiply":
					value2 = value1 * parseInt(b.value,10);
					break;
			}
		}
		else
		{
			value1 = parseInt(b.value,10);
			result.value = value1 ;

		}
	}
	function opClick(b)
	{
		switch(b.value)
		{
			case "equals":
					operation = null;
					value1 = value2;
					result.value = value1;
					break;
			case "clear":
					value1 = 0;
					value2 = 0;
					operation = null;
 					result.value = 0;
					break;
			default:
					operation = b.value;
		}
	}
  });