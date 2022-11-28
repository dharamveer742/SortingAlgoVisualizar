let ids=["one","two","three","four","five","six","seven","eight","nine","ten","ten1","ten2","ten3","ten4","ten5"];
let id=["box7","box1","box6","box3","box3","box6","box4","box5","box4","box3","box6","box2","box6","box7","box1"];
let colr=["chartreuse","yellow", "aqua","red","red","aqua","wheat","#ff7200","wheat","red","aqua","yellowgreen","aqua","chartreuse","yellow"];
let colr2=["yellow","yellow", "yellowgreen","red","red","red","wheat","wheat","#ff7200","aqua","aqua","aqua","aqua","chartreuse","chartreuse"];
let id2=["box1","box1", "box2","box3","box3","box3","box4","box4","box5","box6","box6","box6","box6","box7","box7"];
let array=[165,20,150,70,70,150,110,130,110,70,150,40,150,165,20];


for(let h=0;h<=14;h++)
{
  document.getElementById(ids[h]).style.height= array[h]+"px"; 
  document.getElementById(ids[h]).style.backgroundColor=colr[h]; 
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

 async function move()
 {
    let output=[];

    let max = array[0];
    for(let i=1;i<=14;i++)
    {
      if(array[i]>max)
      {
        max=array[i];
      }
    }

    let count=[];

    for(let i=0;i<=max;++i)
    {count[i]=0;}

    for (let i = 0; i < 15; i++) {
      count[array[i]]++;
      document.getElementById(ids[i]).style.height= 0+"px";
      document.getElementById(array[i]).textContent=count[array[i]];
      document.getElementById(id[i]).style.backgroundColor=colr[i];
      await sleep(1000);
    }
    // mycount<=count
    let mycount=[];
    for (let i = 1; i <= max; i++) {
      mycount[i] = count[i];
    }
   
    for (let i = 1; i <= max; i++) {
      count[i] += count[i - 1];
    }
    
    for (let i = 15 - 1; i >= 0; i--) {
      output[count[array[i]] - 1] = array[i];
      count[array[i]]--;
    }

    for (let i = 0; i < 15; i++) {
      document.getElementById(ids[i]).style.height= output[i]+"px";
      document.getElementById(ids[i]).style.backgroundColor=colr2[i];
      document.getElementById(output[i]).textContent=--mycount[output[i]];
      if(mycount[output[i]]==0)
      {document.getElementById(id2[i]).style.backgroundColor="lightgray";}
      array[i] = output[i];
      await sleep(500);
    }    
 }