import React from 'react';
import { Route, Link } from 'react-router-dom';

import { SelecterModel } from './models';
import TodoStore from './stores/TodoStore';
import { Selecter } from './ui';
import { Card } from './components';
import { inject, observer } from 'mobx-react';

type ComponentProps = {
  todoStore?: TodoStore
}

const App = inject('todoStore')(observer(({todoStore}: ComponentProps) => {

  // const [data, setData] = React.useState([]);
  const data: Array<SelecterModel> = todoStore!.getTodos;
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (todoStore) {
      setLoading(true);
      fetch('http://localhost:3000/todos.json')
      .then(response => response.json())
      .then((json) => {
        setLoading(false);
        todoStore.setTodos(json);
      })
      .catch((e) => setError(e));
    }
  }, []);

  console.log(todoStore);

  const handleTodoClick = (selecterId: number) => (name: string) => {
    console.log(selecterId, name);
    todoStore?.setCompleted(selecterId, name);
    console.log(todoStore);
  }

  return (
    <main>
      <div className="left">
        <div className="left__container">
          <div className="menu">
            <Link to="/">
              <div className="menu__item menu__item--global">
                <svg width="30" height="30" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.96 8.10001H7.74001C7.24321 8.10001 7.20001 8.50231 7.20001 9.00001C7.20001 9.49771 7.24321 9.90001 7.74001 9.90001H12.96C13.4568 9.90001 13.5 9.49771 13.5 9.00001C13.5 8.50231 13.4568 8.10001 12.96 8.10001V8.10001ZM14.76 12.6H7.74001C7.24321 12.6 7.20001 13.0023 7.20001 13.5C7.20001 13.9977 7.24321 14.4 7.74001 14.4H14.76C15.2568 14.4 15.3 13.9977 15.3 13.5C15.3 13.0023 15.2568 12.6 14.76 12.6ZM7.74001 5.40001H14.76C15.2568 5.40001 15.3 4.99771 15.3 4.50001C15.3 4.00231 15.2568 3.60001 14.76 3.60001H7.74001C7.24321 3.60001 7.20001 4.00231 7.20001 4.50001C7.20001 4.99771 7.24321 5.40001 7.74001 5.40001ZM4.86001 8.10001H3.24001C2.74321 8.10001 2.70001 8.50231 2.70001 9.00001C2.70001 9.49771 2.74321 9.90001 3.24001 9.90001H4.86001C5.35681 9.90001 5.40001 9.49771 5.40001 9.00001C5.40001 8.50231 5.35681 8.10001 4.86001 8.10001ZM4.86001 12.6H3.24001C2.74321 12.6 2.70001 13.0023 2.70001 13.5C2.70001 13.9977 2.74321 14.4 3.24001 14.4H4.86001C5.35681 14.4 5.40001 13.9977 5.40001 13.5C5.40001 13.0023 5.35681 12.6 4.86001 12.6ZM4.86001 3.60001H3.24001C2.74321 3.60001 2.70001 4.00231 2.70001 4.50001C2.70001 4.99771 2.74321 5.40001 3.24001 5.40001H4.86001C5.35681 5.40001 5.40001 4.99771 5.40001 4.50001C5.40001 4.00231 5.35681 3.60001 4.86001 3.60001Z" fill="black"/>
                </svg>
                <h2>Все задачи</h2>
              </div>
            </Link>
            <div className="menu__wrap">
              {data.map(({id, title, color}) => <Selecter key={title} id={id} title={title} color={color} />)}
            </div>
            <div className="menu__add">
              <input type="text" placeholder="Моя новая папка..." />
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right__container">
          <View data={data} loading={loading} error={error} handleTodoClick={handleTodoClick} />
        </div>
      </div>
    </main>
  );
}))

interface ViewProps {
  data: Array<SelecterModel>,
  loading: boolean,
  error: any,
  handleTodoClick: (id: number) => (name: string) => void;
}

const View : React.FC<ViewProps> = ({data, loading, error, handleTodoClick}) : React.ReactElement => {

  if (error) {
    return (
      <div>Ошибка</div>
    );
  } else if (loading) {
    return (
      <div>Загрузка...</div>
    );
  } else {
    return !data.length
      ? (
        <div className="view--missing">
          <span>Задачи отсутствуют</span>
        </div>
      )
      : (
        <div className="view">
            <Route exact path="/">
              {data.map(({id, title, color, tasks}) => (
                  <Card key={id} title={title} color={color} tasks={tasks} onClick={handleTodoClick(id)} />
                )
              )}
            </Route>
            {data.map(({id, title, color, tasks}) => (
              <Route path={'/' + id}>
                <Card key={id} title={title} color={color} tasks={tasks} onClick={handleTodoClick(id)} adder />
              </Route>
              )
            )}
        </div>
      )
    }
};

export default App;