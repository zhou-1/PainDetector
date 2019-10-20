// JavaScript Document
function clickMe(index,painLevel){
	var s = localStorage.getItem("storage");
	s[index]=painLevel;
	localStorage.setItem("storage",s);
}
function onLoad(){
	var painArea = document.getElementsByClassName("painArea");
	var dict = {};
	for(var i=0; i < painArea.length; i++){
		dict[painArea[i].id] = 0;//Intinital Pain Score
	}
	localStorage.setItem("storage", JSON.stringify(dict));
	return 1;
}
function selectPainLevel(id){
	
}