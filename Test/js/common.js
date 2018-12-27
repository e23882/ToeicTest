
//flag(判斷是否已經開始計時 避免setInterval重複觸發)
var isClick = 0;
var totalTime = 1800;
function sendAnswer()
{
	document.getElementById("errMsg").style.display = "flex";	
}

function chgBtnColor(objName)
{
	var item = document.getElementsByClassName("errBtn");
	for(var i = 0; i<item.length;i++)
	{
		item[i].style.backgroundColor = "white";
		item[i].style.color = "#E45304";
		item[i].style.border = "1px #E45304 solid";
	}
	
	document.getElementById(objName).style.backgroundColor = "#E45304";	
	document.getElementById(objName).style.color = "white";	
	document.getElementById(objName).style.border = "none";	
}

function closeMsg()
{
	document.getElementById("errMsg").style.display = "none";	
}

function submitAnswer()
{
	alert("implement yourself");
}

function nextPage()
{
	//檢查答案 先不要刪掉以後可能會用到
	// //所有的input(radio button)
	// var totalInput = document.getElementsByTagName("INPUT");
	// //所有的問題區塊
	
	// //邏輯判斷所有input有被選取的數量是不是跟問題區塊的數量一樣
	// //一樣的話表示問題都有回答 
	
	// var totalQ = document.getElementsByClassName("questionBlock");
	// var answerCount =0;
	// for (var i = 0; i < totalInput.length; i++) 
	// {
		// if(totalInput[i].checked)
		// {
			// answerCount++;
		// }
	// }
	// if(answerCount == totalQ.length)
		// alert("y");
	// else
		// alert("n");
	document.location.href="testPart07.html";
}

function initPage(pageIndex)
{
	//初始化tab顏色設定
	changeTab(pageIndex);
	//倒數計時
	if(!isClick)
	{
		setInterval(function(){calTime()},1000);
		isClick = 1;
	}
		
}

function changeTab(tabIndex)
{
	if(tabIndex!=0)
	{
		var headerItem = document.getElementsByClassName("liTopLine");
		var contentItem = document.getElementsByClassName("tabItemHeader");
		var i;
		for(i=0;i<headerItem.length;i++)
		{
			headerItem[i].style.backgroundColor = "transparent";
			contentItem[i].style.color = "#D4D4D4";
		}
		var curHeaderItem = document.getElementsByClassName("liTopLine")[tabIndex-1];
		curHeaderItem.style.backgroundColor = "#E45304";
		
		var curContentItem = document.getElementsByClassName("tabItemHeader")[tabIndex-1];
		curContentItem.style.color = "#E45304";
	}
	else
		alert("error input out of index exception");
	
}

function calTime()
{
	if(totalTime>0)
	{
		totalTime--;
		document.getElementById("min").innerHTML = Math.floor(totalTime/60);
		document.getElementById("sec").innerHTML = totalTime%60;
	}	
}