unction findsum(){
    var text=document.getElementById("hi").value;
    var sum=0;
    var jh=JSON.parse(text,function(key,value){
        sum=sum+value;
});
    alert("sum of values " + parseInt(sum));
}