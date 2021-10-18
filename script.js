let reminder=document.getElementById('reminder');
let submit=document.getElementById('submit');
let list=document.getElementById('list');
let reset=document.getElementById('reset');
let topList=document.getElementById('topList');
let bottom=document.getElementById('bottom');
let btn=document.getElementById('btn');
let select=document.getElementById('select');
let stackArray=[];

submit.addEventListener('click',submitClick);
function submitClick(e){
    e.preventDefault();
if(reminder.value==''){
    alert('Enter reminder')
}else{

   if(select.value=='last'){
    stackArray.push(reminder.value);
    
    let listCount=`<h1>Reminders</h1>`;

    stackArray.forEach((value,index,array)=>{
        listCount+=`<h3>(0${index+1}) ${value}</h3>`
    })
    list.innerHTML=listCount;
   }else if(select.value=='first'){
    stackArray.unshift(reminder.value);
    
    let listCount=`<h1>Reminders</h1>`;

    stackArray.forEach((value,index,array)=>{
        listCount+=`<h3>(0${index+1}) ${value}</h3>`
    })
    list.innerHTML=listCount;
   }
}

reminder.value="";
    }



reset.addEventListener('click',()=>{
    location.reload();
    submitClick();
    
})

topList.addEventListener('click',()=>{
    stackArray.shift();
    let listCount=`<h1>Reminders</h1>`;

    stackArray.forEach((value,index,array)=>{
        listCount+=`<h3>(0${index+1}) ${value}</h3>`
    })
    list.innerHTML=listCount;
})

bottom.addEventListener('click',()=>{
    stackArray.pop();
    let listCount=`<h1>Reminders</h1>`;

    stackArray.forEach((value,index,array)=>{
        listCount+=`<h3>(0${index+1}) ${value}</h3>`
    })
    list.innerHTML=listCount;
})
