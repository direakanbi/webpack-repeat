export default function displaylist(todos, list) {
  todos.forEach((task) => {
    const li = document.createElement('li');
    const text = `<div class="list-container"> <input type='checkbox' class='check-input' value='${task.completed}' aria-label='...'>
    <p class="todo-text">${task.description}</p><a class="del-menu" href="#"><i class="fas fa-ellipsis-v"></i></a></div>`;
    li.classList.add('list-item');
    li.innerHTML = text;
    list.appendChild(li);
  });
}
