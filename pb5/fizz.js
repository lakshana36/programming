function fizzbuzz()
{
    var n=document.getElementById("hi").value;
    var i;
    var ans="";
    for(i=1;i<=n;i++)
    {
        if(i % 3 == 0 && i % 5 !=0 )
            ans+="Fizz,";
        else if(i % 5 == 0 && i % 3 !=0)
            ans+="Buzz,";
        else if(i % 3 == 0 && i % 5 == 0)
            ans+="FizzBuzz,";
        else 
            ans+=i+",";   
    }
    alert(ans);
}