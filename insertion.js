let ids=["one","two","three","four","five","six","seven","eight","nine","ten","ten1","ten2","ten3","ten4","ten5"];
let id=["box1","box2","box3","box4","box5","box6","box7","box8","box9","box10","box11","box12","box13","box14","box15"];
let array=[150,70,120,20,155,105,115,140,130,170,125,65,20,40,80];


for(let h=0;h<=14;h++)
{
  document.getElementById(ids[h]).style.height= array[h]+"px"; 
  
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

 async function move()
 {
     for(let step=1;step<15;step++)
    
     {
      let key=array[step];
      document.getElementById(ids[step]).style.height=0+"px";
      document.getElementById(id[step]).style.height=key+"px";
      await sleep(500);
      let j=step-1;
   
     while(j>=0 && key<array[j])
     {
      document.getElementById(ids[j]).style.height=0+"px";
      document.getElementById(ids[j+1]).style.height=array[j]+"px";

      document.getElementById(id[j+1]).style.height=0+"px";
      document.getElementById(id[j]).style.height=key+"px";
      document.getElementById(ids[j+1]).style.backgroundColor="#ff7200";
      await sleep(500);
      array[j+1]=array[j];
      --j;
     }
      
     await sleep(500);
     document.getElementById(ids[j+1]).style.height=key+"px";
     document.getElementById(ids[j+1]).style.backgroundColor="#ff7200";
     document.getElementById(id[j+1]).style.height=0+"px";
     array[j +1]=key;
     await sleep(500);
    }

 }