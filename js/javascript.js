const container = document.querySelector('.etch-a-sketch');
const btn = document.querySelector('#btn');

function removeCurrentGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
function createNewGrid(squares) {
    removeCurrentGrid();
    for (let i = 0; i < squares * squares; ++i) {
        const div = document.createElement('div');
        div.classList.add('etch-block');
        div.style.width = `calc(100%/${squares})`;
        div.style.height = `calc(100%/${squares})`;
        div.addEventListener('mouseenter', () => {
            div.classList.add('hover');
        });
        // div.addEventListener('mouseleave', () => {
        //     div.classList.remove('hover');
        // });
        container.appendChild(div);
    }
}

btn.addEventListener('click', () => {
    let squares = prompt('How many squares do you want?', 'max 100');
    if(squares < 101 && squares > 0){
        createNewGrid(squares);
    } else {
        alert('Please enter a valid value!');
    }
    
}
);