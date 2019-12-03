var button=document.getElementById('enter')
var input=document.querySelector('#userinput')
var ul=document.getElementsByTagName('ul')[0]
const buttonGenerator=(li)=>{
var btn=document.createElement('button')
btn.textContent='delete'
li.appendChild(btn)

}
const inputLength=()=>{
return input.value.length;
}
const createListElement=()=>{
	var li=document.createElement('li')
li.appendChild(document.createTextNode(input.value))
buttonGenerator(li)
ul.appendChild(li)
input.value='';
}
const clickElement=()=>{
	if(inputLength){
		createListElement()
		  }
}
const enterElement=(e)=>{
	if(inputLength()>0 && e.keyCode===13){
		createListElement()
	}
}

ul.addEventListener('click',(e)=>{
	e.target.classList.toggle('done')
	console.log(e.target.className)
}
)

button.addEventListener('click',clickElement)

input.addEventListener('keypress',enterElement)
