import React from 'react';
import { Selecter, Todo } from './ui';

const App = () => {

  React.useEffect(() => {
    fetch('http://localhost:3000/todos.json')
    .then(response => response.json())
    .then(json => console.log(json));
  }, []);

  const titles : Array<{[key: string] : string}> = [
    {title: "Дом", color: "red"},
    {title: "Учеба", color: "blue"},
    {title: "Список покупок", color: "yellow"},
    {title: "Something else", color: "purple"},
  ];

  const todos = [
    {name: 'Вынести мусор', completed: false},
    {name: 'Вынести мусор и еще кое-что очень длинное как разтоки и потом сделать еще', completed: true},
    {name: 'Вынести мусор ЕЩЕ РАЗ', completed: false}
  ];

  return (
    <main>
      <div className="left">
        <div className="left__container">
          <div className="menu">
            <div className="menu__item menu__item--global">
              <svg width="30" height="30" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.96 8.10001H7.74001C7.24321 8.10001 7.20001 8.50231 7.20001 9.00001C7.20001 9.49771 7.24321 9.90001 7.74001 9.90001H12.96C13.4568 9.90001 13.5 9.49771 13.5 9.00001C13.5 8.50231 13.4568 8.10001 12.96 8.10001V8.10001ZM14.76 12.6H7.74001C7.24321 12.6 7.20001 13.0023 7.20001 13.5C7.20001 13.9977 7.24321 14.4 7.74001 14.4H14.76C15.2568 14.4 15.3 13.9977 15.3 13.5C15.3 13.0023 15.2568 12.6 14.76 12.6ZM7.74001 5.40001H14.76C15.2568 5.40001 15.3 4.99771 15.3 4.50001C15.3 4.00231 15.2568 3.60001 14.76 3.60001H7.74001C7.24321 3.60001 7.20001 4.00231 7.20001 4.50001C7.20001 4.99771 7.24321 5.40001 7.74001 5.40001ZM4.86001 8.10001H3.24001C2.74321 8.10001 2.70001 8.50231 2.70001 9.00001C2.70001 9.49771 2.74321 9.90001 3.24001 9.90001H4.86001C5.35681 9.90001 5.40001 9.49771 5.40001 9.00001C5.40001 8.50231 5.35681 8.10001 4.86001 8.10001ZM4.86001 12.6H3.24001C2.74321 12.6 2.70001 13.0023 2.70001 13.5C2.70001 13.9977 2.74321 14.4 3.24001 14.4H4.86001C5.35681 14.4 5.40001 13.9977 5.40001 13.5C5.40001 13.0023 5.35681 12.6 4.86001 12.6ZM4.86001 3.60001H3.24001C2.74321 3.60001 2.70001 4.00231 2.70001 4.50001C2.70001 4.99771 2.74321 5.40001 3.24001 5.40001H4.86001C5.35681 5.40001 5.40001 4.99771 5.40001 4.50001C5.40001 4.00231 5.35681 3.60001 4.86001 3.60001Z" fill="black"/>
              </svg>
              <h2>Все задачи</h2>
            </div>
            <div className="menu__wrap">
              {titles.map(({title, color}) => <Selecter key={title} title={title} color={color} />)}
            </div>
            <div className="menu__add">
              <input type="text" placeholder="Моя новая папка..." />
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right__container">
          <div className="view">
            <div className="title">
              <h1>Очень очень очень очень длинное название</h1>
              <svg width="28" height="28" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9337 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.638 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825V3.36825Z" fill="#aaa"/>
              </svg>
            </div>
            <div className="todo">
              <div className="todo__wrap">
                {todos.map(({name, completed}) => <Todo key={name} name={name} completed={completed} />)}
              </div>
              <div className="todo__add">
                <input type="text" placeholder="Моя новая задача..." />
                <div className="icon-add">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;