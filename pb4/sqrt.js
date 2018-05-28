function sqrt(){
    var n=document.getElementById("hi").value;
    var j=0;
    for(i=1;i<=n;i++)
    {
        if(Math.pow(2,i)>=n){
    j=i-1;
    break;
        }
    }
    document.write(j);
    }