const button = document.querySelector('button');

console.dir(button);

button.onclick = function () {
    console.log(1);
}
button.onclick = function () {
    console.log(2);
}

button.addEventListener('click', handleClick);

function handleClick(event){
    console.log(3);
    // console.log(this, event.target);
}