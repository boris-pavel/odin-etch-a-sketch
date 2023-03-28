const container = document.querySelector('.etch-a-sketch');



for(let i = 0; i<16*16;++i){
    const div = document.createElement('div');
    div.style.cssText = 'background-color: white; border: 1px solid black; width: calc(100%/16); height: calc(100%/16); box-sizing: border-box;';
    div.addEventListener('mouseover', () =>{
        div.style.backgroundColor = 'black';
    })
    container.appendChild(div);
}