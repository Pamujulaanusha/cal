
//     document.getElementById("add").onclick=function(){
//     var a=parseInt(document.getElementById("n1").value);
//     var b=parseInt(document.getElementById("n2").value);
//     document.getElementById("result").innerHTML=a+b;
    
// }
// document.getElementById("sub").onclick=function(){
//     var a=parseInt(document.getElementById("n1").value);
//     var b=parseInt(document.getElementById("n2").value);
//     document.getElementById("result").innerHTML=(a-b);
    
// }
// document.getElementById("mul").onclick=function(){
//     var a=parseInt(document.getElementById("n1").value);
//     var b=parseInt(document.getElementById("n2").value);
//     document.getElementById("result").innerHTML=(a*b);
    
// }
// document.getElementById("div").onclick=function(){
//     var a=parseInt(document.getElementById("n1").value);
//     var b=parseInt(document.getElementById("n2").value);
//     document.getElementById("result").innerHTML=(a/b);
    
//  }
var ans=0;
var s="";
document.getElementById("add").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    ans=ans+a;
    if(s.length==0)
    s=s+ans;
    else
    s=s+("+"+a);
    b=document.getElementById("result").innerHTML=ans;

}
document.getElementById("sub").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    ans=ans-a;
    if(s.length==0)
    s=s+ans;
    else
    s=s+("-"+a);
    document.getElementById("result").innerHTML=ans;

}
document.getElementById("mul").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    ans=ans*a;
    if(s.length==0)
    s=s+ans;
    else
    s=s+("*"+a);
    document.getElementById("result").innerHTML=ans;

}
document.getElementById("div").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    ans=ans/a;
    if(s.length==0)
    s=s+ans;
    else
    s=s+("/"+a);
    document.getElementById("result").innerHTML=ans;

}
document.getElementById("equals").onclick=function(){
    b=document.getElementById("result").textContent=(ans);
    b=document.getElementById("equal").textContent=(s);
}