function pairpalin(){
    var str=document.getElementById("hi").value;
    var ar=[];
    var res=[];
    var b=JSON.parse(str);
    for(key in b){
        ar.push(b[key]);
    }
    document.write("Palindrome strings are  ");
for(var i=0;i<ar.length;i++){
        ar[i]=ar[i].toLowerCase();
        if(ar[i]==ar[i].split("").reverse().join(""))
        res.push(ar[i]);
    }
for(var i=0;i<res.length;i++)
{
if(i==res.length-1)
document.write(res[i]);
else
document.write(res[i]+",");
}
}
