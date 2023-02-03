import React, { useState } from 'react';
import data from './data';
import s from './style.module.css';

function App() {
  const [selectedData, setSelectedData] = useState(null);

  const handleSelect = (item) => {
    setSelectedData(item);
  }

  return (
    <div className={s.app}>
      <h1 className={s.title}>Data List</h1>
      <ul className={s.list}>
        {data.map(item => (
          <li key={item.id} onClick={() => handleSelect(item)}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul>
      {selectedData && <SelectedData data={selectedData} />}
    </div>
  );
}

const SelectedData = ({ data }) => (
  <div>
    <h2>Selected Data</h2>
    <p>Name: {data.name}</p>
    <p>Age: {data.age}</p>
  </div>
);

export default App;
