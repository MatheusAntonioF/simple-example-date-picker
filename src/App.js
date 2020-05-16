import React, { useState, useEffect } from 'react';

import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

import { format, addMonths, subMonths } from 'date-fns';

import { ptBR } from 'date-fns/locale';

import data from './data';

import './App.css';

function App() {
  const [date, setDate] = useState(new Date());

  const [content, setContent] = useState([]);

  useEffect(() => {

    // Essa função será executada todas ás vezes que a data do input for alterada
    async function fetchData() {
      return setContent(data.filter(data =>        
        data.date.getMonth() === date.getMonth()
      ));
    }

    fetchData();
  }, [date]);

  return (
    <div className="App">
      <div className="handler">
        <button onClick={() => setDate(date => subMonths(new Date(date), 1))}>
          <AiOutlineCaretLeft size={34} />
        </button>

        <input value={format(date, 'MMMM', {
          locale: ptBR
        })} onChange={() => {}} />

        <button onClick={() => setDate(date => addMonths(new Date(date), 1))}>
          <AiOutlineCaretRight size={34} />
        </button>
      </div>

      <div className="content">
      {content.map(currentValue => 
        <span  key={Math.random()} className="content">
          {`
            ${format(currentValue.date, 'MMMM', {
              locale: ptBR,
            })}
            |
            ${currentValue.label}
          `}
        </span>)}
      </div>
    </div>
  );
}

export default App;
