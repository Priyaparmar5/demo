var num=10;
var n1=0,n2=1,nextnum;

for(let i=1; i<num; i++)
{
    nextnum = n1 + n2;
    n1=n2;
    n2=nextnum;
    console.log(n1)
}