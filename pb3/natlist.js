function possiblenolist() {
    var n=document.getElementById("hi").value;
    var sum=0;
    var i;
    if(n<0)
    alert("Invalid or Negative no");
    else{
        for(i=1;i<n;i++)
        {
            if(i%3==0 || i%5==0)
            sum=sum+i;
        }
        alert("Sum of natural no list: "+sum);
    }
}