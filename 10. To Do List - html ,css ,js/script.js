let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let ip = document.querySelector('input');
let delBtn = document.querySelectorAll('button')[1];

btn.addEventListener('click',(event) => {
    let li = document.createElement('li');
    li.innerText = ip.value;
    ul.appendChild(li);
    ip.value = "";
});

delBtn.addEventListener('click',(event) => {
    ul.lastElementChild.remove();
});