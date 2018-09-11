import './user.css';

export default function newComponent (name) {
    const add = document.createElement('h1');
    add.innerText = name; 
    add.className = "main-header";  
    document.body.appendChild(add);
}

