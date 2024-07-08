
var a = 0

function incr()
{
    a =a+1
  var mydata=  document.querySelector("#head")
    mydata.innerHTML=a
}
function decr()
{
    if(a <= 0)
{
    alert("not number")
}
else
{
    a = a-1
    var mydata=  document.querySelector("#head")
    mydata.innerHTML=a
}
}

function Res()
{
    a=0
    var mydata=  document.querySelector("#head")
    mydata.innerHTML=a
}
