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
	if(painLevel == 1){
		document.getElementById(index).style="background:#1E8601";
		}
	if(painLevel == 2){
		document.getElementById(index).style="background:#6FAD01";
		}
	if(painLevel == 3){
		document.getElementById(index).style="background:#ABCE04";
		}
	if(painLevel == 4){
		document.getElementById(index).style="background:#DEEC04";
		}
	if(painLevel == 5){
		document.getElementById(index).style="background:#FAFE03";
		}
	if(painLevel == 6){
		document.getElementById(index).style="background:#FFE00f";
		}
	if(painLevel == 7){
		document.getElementById(index).style="background:#FFB515";
		}
	if(painLevel == 8){
		document.getElementById(index).style="background:#FF8914";
		}
	if(painLevel == 9){
		document.getElementById(index).style="background:#FF6A11";
		}
	if(painLevel == 10){
		document.getElementById(index).style="background:#FF3807";
		}
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
function changeImg(img){
	document.getElementsByClassName("picture")[0].getElementsByTagName("img")[0].src=img;
	document.getElementsByClassName("picture")[0].getElementsByTagName("img")[0].width="608";
	document.getElementsByClassName("picture")[0].getElementsByTagName("img")[0].height="580";
}
