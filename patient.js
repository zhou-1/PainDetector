// JavaScript Document
function clickMe(index,painLevel){
	var s = JSON.parse(localStorage.getItem("storage"));
	s[index]=painLevel;
	localStorage.setItem("storage",s);
	document.getElementById(index).innerHTML="";
}
function onLoad(){
	var painAreaList = document.getElementsByClassName("painArea");
	var dict = {};
	for(var i=0; i < painAreaList.length; i++){
		dict[painAreaList[i].id] = 0;//Intinital Pain Score
	}
	localStorage.setItem("storage", JSON.stringify(dict));
	return 1;
}
function selectPainLevel(id){
	document.getElementById(id).innerHTML("<div></div>");
}
function loadStoraged(){
	var s = JSON.parse(localStorage.getItem("storage"));
	for(var element in s){
		document.getElementById(element).!!!!!!addsomecolores""//balabala
	}
}