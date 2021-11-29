import './styles.css';
import displaylist from './functions';

export const list = document.querySelector('#todo-data');
const data = [
  {
    description: 'Go swimming',
    completed: true,
    index: 1,
  },
  {
    description: 'Create an animated puppet',
    completed: false,
    index: 2,
  },
  {
    description: 'Hack NASA',
    completed: false,
    index: 2,
  },
];

export const todos = data.sort((a, b) => {
  const indexA = a.index;
  const indexB = b.index;

  if (indexA < indexB) {
    return -1;
  }
  if (indexA > indexB) {
    return 1;
  }
  return 0;
});

window.addEventListener('load', displaylist(todos, list));