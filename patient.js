// JavaScript Document
function clickMe(index){
	var goDel = document.getElementsByName("delete")[0];
	if(goDel!=null){
		goDel.outerHTML="";
	}
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
	
}
function onLoad(){
	var painAreaList = document.getElementsByClassName("painArea");
	var dict = {};
	for(var i=0; i < painAreaList.length; i++){
		dict[painAreaList[i].id] = 0;//Intinital Pain Score
	}
	localStorage.setItem("storage", JSON.stringify(dict))
	
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