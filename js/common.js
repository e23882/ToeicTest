//計數器(秒數)
var counter = 0;
//flag(判斷是否已經開始計時 避免setInterval重複觸發)
var isClick = 0;

function playsound()
{
	document.getElementById("startTest").style.backgroundColor = "#E45304";
	document.getElementById("startTest").style.cursor = "pointer";
	document.getElementById("startTest").onclick=function(){startTest()};
	if(!isClick)
		setInterval(function(){addSec()},1000);
}
function addSec()
{
	isClick = 1;
	if(counter<30)
	{
		counter++;
		if(counter<10)
			document.getElementById("sec").innerHTML = "0:0"+counter;
		else
			document.getElementById("sec").innerHTML = "0:"+counter;
	}	
}

function startTest()
{
	document.location.href="Test/testPart01.html";
}
