function pairofsum()
{
    var iparr=[1, 4, 3, 5, 4, 6, 7, 8, 3];
    var sum=document.getElementById("hi").value;
        for(var i=0;i<iparr.length;i++)
        {
            for(var j=i+1;j<iparr.length;j++)
            {
                if(iparr[i]+iparr[j] ==sum)
                {
                    var rslt = ""+iparr[i]+","+iparr[j];
                     document.write(rslt+"\n");
                }
            }
        }
}



