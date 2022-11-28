let ids=["one","two","three","four","five","six","seven","eight","nine","ten","ten1","ten2","ten3","ten4","ten5"];
let array=[85,200,160,50,140,215,185,340,230,250,125,300,99,70,105];


for(let h=0;h<=14;h++)
{
  document.getElementById(ids[h]).style.height= array[h]+"px"; 
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

 async function move()
 {
     for(let i=0;i<14;i++)
     {
        for(let j=0;j<14-i;j++)
        { 
          document.getElementById(ids[j]).style.backgroundColor="green";
          document.getElementById(ids[j+1]).style.backgroundColor="green";
          await sleep(500);
            if(array[j]>array[j+1])
            {
              swap(j);
              document.getElementById(ids[j]).style.height= array[j]+"px";
              document.getElementById(ids[j+1]).style.height=array[j+1]+"px";
            }
            await sleep(500);
            document.getElementById(ids[j]).style.backgroundColor="aqua";
            document.getElementById(ids[j+1]).style.backgroundColor="aqua";
      
        }
        document.getElementById(ids[14-i]).style.backgroundColor="#ff7200";

     }
     document.getElementById(ids[0]).style.backgroundColor="#ff7200";

 }

 function swap(j)
 {
    let temp=array[j]
    array[j]=array[j+1]
    array[j+1]=temp;
 }