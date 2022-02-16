const changTag = document.getElementById('tag-change').innerHTML = 'How to change HTML tag'
const paragraphTag = document.getElementById('p1').innerHTML = 'JavaScript is new for me!';

const firstTitle = document.getElementById('first=title');
firstTitle.style.backgroundColor = 'coral';

// ul li add
const li = document.createElement('li');
li.innerText = 'New li';

const ul = document.getElementById('list-item');
ul.appendChild(li);
// create li
function addli() {
    const li = document.createElement('li');
    li.innerText = 'New li';
    
    const ul = document.getElementById('list-item');
    ul.appendChild(li);
}
