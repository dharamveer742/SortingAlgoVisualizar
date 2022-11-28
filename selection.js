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
    let lastMin=0;
    for(let i=0;i<14;i++)
    {
      let min=i;

      for(let j=i+1;j<15;j++)
      {
        document.getElementById(ids[j]).style.backgroundColor="green";
        await sleep(500);

        if(array[j]<array[min])
        {
          document.getElementById(ids[min]).style.backgroundColor="aqua";
          min=j;
          document.getElementById(ids[min]).style.backgroundColor="red";
          
        }
        if(j!=min)
        {
        document.getElementById(ids[j]).style.backgroundColor="aqua";
        }
      }
      document.getElementById(ids[i]).style.backgroundColor="red";
      await sleep(500);
      document.getElementById(ids[i]).style.height= array[min]+"px";
      document.getElementById(ids[min]).style.height=array[i]+"px";
      await sleep(500);
      document.getElementById(ids[i]).style.backgroundColor="#ff7200";
      document.getElementById(ids[min]).style.backgroundColor="aqua";
              
      let temp=array[i];
      array[i]=array[min];
      array[min]=temp;

      lastMin=min;
    }

    document.getElementById(ids[14]).style.backgroundColor="#ff7200";
    document.getElementById(ids[10]).style.backgroundColor="#ff7200";

    array.forEach(element => {
      console.log(element);
    });
 }