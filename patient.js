// JavaScript Document
function clickMe(index){
	menuitems = document.getElementsByClassName("ids");
	for(var i = 0;i < menuitems.length; i++){
		menuitems[i].onclick="clinkPainLevel(" + index + "," + menuitems[i].id + ")"
	}
	document.getElementById("menu").style=""
	document.getElementById(index).innerHTML=document.getElementById("menu")[0].outerHTML;
}
function clinkPainLevel(index,painLevel){
	var s = JSON.parse(localStorage.getItem("storage"));
	s[index]=painLevel;
	localStorage.setItem("storage",s);
	
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