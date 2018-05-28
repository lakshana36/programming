function repeat(){
    var a=document.getElementById("hi").value;
    var k=JSON.parse(a);
    var arr=[];
    var res=[];
    for(key in k)
    {
        arr.push(k[key]);
    }
    document.write("Repeated Elements"+ " ");
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
res.push(arr[i]);
}
}
}
for(var i=0;i<res.length;i++)
if(i==res.length-1)
document.write(res[i]);
else
document.write(res[i]+ ",");
}