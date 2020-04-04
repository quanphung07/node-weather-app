let text=document.querySelector('#addr');
const sub=document.querySelector('#sub');

sub.addEventListener('click',retrive);
function retrive(e)
{
    e.preventDefault();
    let url = `http://localhost:3000/weather/addr=${text.value}`;
    (async ()=>{
    
        let respone=await fetch(url);
        // let data=await respone.json();
        console.log(respone.temp);
    })();
}

retrive();
