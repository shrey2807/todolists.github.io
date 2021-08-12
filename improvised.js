const cards = document.querySelector('.cards');
const newList = document.querySelector('.fa-plus');
const newTask = document.getElementsByClassName('newTask');
const edit = document.querySelectorAll('.fa-edit');
const trash = document.getElementsByClassName('fa-trash');
const lis = document.getElementsByClassName('lis');
const delList = document.getElementsByClassName('deleteList');
const tasks = document.getElementsByTagName('span');

cards.addEventListener('click', doit);
newList.addEventListener('click', addNewList);

function doit(e) {
    if (e.target.className === 'newTask') {
        const usertask = prompt("enter the task");
        const li = document.createElement('li');
        const span = document.createElement('span');
        const iconedit = document.createElement('i');
        const icontrash = document.createElement('i');

        iconedit.classList.add('fas', 'fa-edit');
        icontrash.classList.add('fas', 'fa-trash');

        span.innerText = usertask;
        li.appendChild(span);
        span.appendChild(iconedit);
        span.appendChild(icontrash);
        e.target.parentElement.children[0].appendChild(li);
        e.stopPropagation();
    }
    else if (e.target.classList[1] === 'fa-trash') {
        e.target.parentElement.remove();
    }
    else if (e.target.classList[0] === 'deleteList') {
        e.target.parentElement.parentElement.remove();
    }
    else if (e.target.localName === 'span')
        e.target.classList.toggle('done');
}

function addNewList() {
    const userTitle = prompt('Enter the title of your new list');

    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('cardTitle');

    const cardTitleh2 = document.createElement('h2');
    cardTitleh2.innerText = userTitle;

    const tasksdiv = document.createElement('div');
    tasksdiv.classList.add('tasks');

    const tasksul = document.createElement('ul');
    const createTaskBtn = document.createElement('button');
    const deleteListBtn = document.createElement('button');

    createTaskBtn.classList.add('newTask');
    createTaskBtn.innerText = 'Add Task';
    deleteListBtn.classList.add('deleteList');
    deleteListBtn.innerText = 'Delete List';

    cards.appendChild(card);

    card.appendChild(cardTitle);
    card.appendChild(tasksdiv);

    cardTitle.appendChild(cardTitleh2);

    tasksdiv.appendChild(tasksul);
    tasksdiv.appendChild(createTaskBtn);
    tasksdiv.appendChild(deleteListBtn);
}