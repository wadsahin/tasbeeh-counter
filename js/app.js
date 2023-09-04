// Next Update on...
  // 100 over limit
  // ui update
  // display colored
  // hover effect
  // responsive

// UL element

let display = document.querySelector('#display');
let btn_up = document.querySelector('#count-up');
let btn_down = document.querySelector('#count-down');
let reset = document.querySelector('#reset');
let x = 0;

// event listener
btn_up.addEventListener('click', increment);
btn_down.addEventListener('click', decrement);
reset.addEventListener('click', resetCount);



// difine functions
function increment(){
    x = x + 1;
    display.innerHTML = `
    <h1>${x}</h1>
    `;
}


function decrement(){
    x = x - 1;
    if(x > -1){
      display.innerHTML = `
      <h1>${x}</h1>
      `;
    }else{
        alert('Negative value not Allow!!')
    }
    
}

function resetCount(){
    x = 0;
    display.innerHTML = `<h1>${x}</h1>`;
}