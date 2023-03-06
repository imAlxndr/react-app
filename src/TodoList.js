const TodoList = ({ list, remove }) => {
  return (
    <>
      {list?.length > 0 ? (
        <ul className="todo-list">
          {list.map((todo, index) => (
            <div className="todo">
              <li key={index}> {todo} </li>

              <button
                className="delete-button"
                onClick={() => {
                  remove(todo);
                }}
              >
                Удалить
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>Задач нет</p>
        </div>
      )}
    </>
  );
};

export default TodoList;
