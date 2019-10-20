// JavaScript Document
function clickMe(index){
	menuitems = document.getElementsByClassName("ids");
	for(var i = 0;i < menuitems.length; i++){
		menuitems[i].setAttribute("onclick","clinkPainLevel(\"" + index + "\"," + menuitems[i].id + ")");
	}
	document.getElementById("menu").style="position:absolte;bottom:10px";
	document.getElementById(index).innerHTML=document.getElementById("mainmenu").innerHTML;
}
function cancelMe(index){
	
}
function clinkPainLevel(index,painLevel){
	var s = JSON.parse(localStorage.getItem("storage"));
	s[index]=painLevel;
	localStorage.setItem("storage",JSON.stringify(s));
	document.getElementById(index).firstChild.remove();
	document.getElementById(index).style="background:red";
	document.getElementById(index).setAttribute("onclick","cancelMe(\"" + index + "\")")
	shouldReShow = document.getElementsByClassName("painArea");
	
}
function onLoad(){
	var painAreaList = document.getElementsByClassName("painArea");
	var dict = {};
	for(var i=0; i < painAreaList.length; i++){
		dict[painAreaList[i].id] = 0;//Intinital Pain Score
	}
	localStorage.setItem("storage", JSON.stringify(dict));
	$('#myModal').on('shown.bs.modal', function () {
	  $('#myInput').trigger('focus')
	})
	return 1;
}
function loadStoraged(){
	var s = JSON.parse(localStorage.getItem("storage"));
	for(var element in s){
		if(s[element] !=0){
			document.getElementById(element).style="background:black;"//balabala
		}
	}
}
function changeToFem(){
	document.getElementsByClassName("picture")[0].getElementsByTagName("img")[0].src="female_body.png";
	document.getElementsByClassName("picture")[0].getElementsByTagName("img")[0].width="608";
	document.getElementsByClassName("picture")[0].getElementsByTagName("img")[0].height="580";
}function changeTomale(){
	document.getElementsByClassName("picture")[0].getElementsByTagName("img")[0].src="body1.png";
}