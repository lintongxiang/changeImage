var imgs = null;
var time = null;
var count = 5;
var f = 5;

window.onload = function changeimg() {
	time = window.setInterval("doit()", 1000);
	start(0);
}

function doit() {
	imgs = document.getElementsByTagName("img");
	imgs[f].style.display = "none";
	imgs[count].style.display = "block";
	f = count;
	count = count - 1;

	if(count == -1) {
		count = 5;
	}

}





var curIndex = 1;
var f2;
var time2 = null;
var btn = document.getElementsByTagName("button");

function start(id) {
/*	if(id != 0) {
		btn[id - 1].style.backgroundColor = "#F0F8FF";
	}*/
	time2 = window.setInterval("dochange()", 1000);
}

function dochange() {
	var img2 = document.getElementById("img2");
	if(curIndex == 6) {
		f2 = 6;
		curIndex = 1;
	} else {
		f2 = curIndex;
		curIndex += 1;
	}
	img2.src = "img/" + curIndex + ".jpg";
	btn[f2 - 1].style.backgroundColor = "#F0F8FF";
	btn[curIndex - 1].style.backgroundColor = "#00FFFF";
}

function changeHover(id) {
	document.getElementById("img2").src = "img/" + id + ".jpg";
	window.clearInterval(time2);
	curIndex = id;
	for(var i = 0; i < 6; i++) {
		btn[i].style.backgroundColor = "#F0F8FF";
	}
	btn[id - 1].style.backgroundColor = "#00FFFF";
}