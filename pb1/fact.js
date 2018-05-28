function calculate()
{
    var n=document.getElementById("hi").value;
    var f=1;
    var i;
    if(n<0)
    alert("INVALID or Negative no");
    else if(n==0)
    alert("0! is 1");
    else{
        for(i=1;i<=n;i++)
        {
            f=f*i;
        }
        alert("Factorial of a "+n+" is "+f); 
    }
  }