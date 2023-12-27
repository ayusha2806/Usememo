
import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [DescendingOrder,setDescendingOrder]=useState(false)

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const toggleSortOrderHandler=useCallback(()=>{
    setDescendingOrder((prevOrder) => !prevOrder);
  }, []);


  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} descendingOrder={DescendingOrder}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button><br/><br/>
      <Button onClick={toggleSortOrderHandler}>{DescendingOrder ? 'Change to Aescending order' : 'Change to Descending order' }</Button>
    </div>
  ); 
}

export default App;
