var n1,n2,n3,n4,n5,r1,r2,r3,r4,r5,total;
function display(){
    n1=document.getElementById("i1").value
    n2=document.getElementById("i2").value
    n3=document.getElementById("i3").value
    n4=document.getElementById("i4").value
    n5=document.getElementById("i5").value
    r1=n1*100;
    r2=n2*200;
    r3=n3*300;
    r4=n4*400;
    r5=n5*500;
    total=r1+r2+r3+r4+r5;
    document.getElementById("final").innerText="Total = "+total;
}
