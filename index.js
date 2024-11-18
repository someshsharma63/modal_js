let target=document.getElementById('mainbox');
let button=document.getElementById('btn');
button.addEventListener('click',()=>
{
   
    target.style="display:block"
})

let icon=document.getElementById('close');
icon.addEventListener('click',()=>
{
    target.style="display:none"
})