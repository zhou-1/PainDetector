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
function getColor(painLevel){
	if(painLevel == 1){
		return "#1E8601";
	}
	if(painLevel == 2){
		return "#6FAD01";
		}
	if(painLevel == 3){
		return "#ABCE04";
		}
	if(painLevel == 4){
		return "#DEEC04";
		}
	if(painLevel == 5){
		return "#FAFE03";
		}
	if(painLevel == 6){
		return "#FFE00f";
		}
	if(painLevel == 7){
		return "#FFB515";
		}
	if(painLevel == 8){
		return "#FF8914";
		}
	if(painLevel == 9){
		return "#FF6A11";
		}
	if(painLevel == 10){
		return "#FF3807";
		}
}
function clinkPainLevel(index,painLevel){
	var s = JSON.parse(localStorage.getItem("storage"));
	s[index]=painLevel;
	localStorage.setItem("storage",JSON.stringify(s));
	document.getElementById(index).firstChild.remove();
	document.getElementById(index).style="background:" + getColor(painLevel)
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
function clickSave(){
	localStorage.setItem(document.getElementById("SaveName").value,localStorage.getItem("storage"));
}
function clickLoad(){
	var s = JSON.parse(localStorage.getItem(document.getElementById("SaveName").value));
	for(var i in s){
		document.getElementById(i).style="background:" + getColor(s[i])
	}
}
