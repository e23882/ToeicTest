
//flag(判斷是否已經開始計時 避免setInterval重複觸發)
var isClick = 0;
var totalTime = 1800;

function initPage()
{
	//初始化tab顏色設定
	changeTab(0);
	//倒數計時
	if(!isClick)
	{
		setInterval(function(){calTime()},1000);
		
		isClick = 1;
	}
		
}
function changeTab(tabIndex)
{
	var headerItem = document.getElementsByClassName("liTopLine");
	var contentItem = document.getElementsByClassName("tabItemHeader");
	var i;
	for(i=0;i<headerItem.length;i++)
	{
		headerItem[i].style.backgroundColor = "transparent";
		contentItem[i].style.color = "#D4D4D4";
	}
	var curHeaderItem = document.getElementsByClassName("liTopLine")[tabIndex];
	curHeaderItem.style.backgroundColor = "#E45304";
	
	var curContentItem = document.getElementsByClassName("tabItemHeader")[tabIndex];
	curContentItem.style.color = "#E45304";
}

function calTime()
{
	totalTime--;
	document.getElementById("min").innerHTML = Math.floor(totalTime/60);
	document.getElementById("sec").innerHTML = totalTime%60;
	
}