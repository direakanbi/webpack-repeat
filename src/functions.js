const setToLocalStorage = (toDo) => {
  console.log(toDo);
  localStorage.setItem('toDo', JSON.stringify(toDo));
};
const getFromLocalStorage = () => {
  const toDo = localStorage.getItem('toDo');
  return JSON.parse(toDo);
};
export { setToLocalStorage, getFromLocalStorage };