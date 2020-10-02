const eat= document.getElementById('eat');
const drink= document.getElementById('drink');
const tr1= document.getElementById('tr1');
const tr2= document.getElementById('tr2');


const trigger=(type)=>{
    if(type === 'eat'){
        drink.style.display='none';
        eat.style.display='block';
        tr1.classList.add("active");
        tr2.classList.remove("active");
        
    }
    else{
        eat.style.display='none';
        drink.style.display='block';
        tr2.classList.add("active");
        tr1.classList.remove("active");

    }
}