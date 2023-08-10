let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string ="";
let arr = Array.from(buttons);
arr.forEach(button => {
	button.addEventListener('click', (a) =>{
		if(a.target.innerHTML == '='){
			string = eval(string);
			input.value = string;
		}
		else if (a.target.innerHTML == 'AC'){
			string ='';
			input.value = string;
		}
		else if (a.target.innerHTML == 'DE'){
			string = string.substring(0, string.length-1);
			input.value = string;
		}
		else{
			string += a.target.innerHTML;
			input.value = string;
		}
	})
})