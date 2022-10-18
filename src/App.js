import { useState } from "react";
import './App.css';
import Row from './Row';
import Form from './Form';

function App() {
  const [db, setDb] = useState([]);
  let product = {};
  function paseDate(name, amount, store) {
    product = {
      name: name,
      amount: amount,
      store: store
    };
    setDb([...db, ({ title: name, status: 0, amount: amount, store: store })]);
    console.log(db);
    return product;
  }

  return (
    <div className="App">
      <div className="title">What to buy</div>
      <div>{db.map((item, i) =>
        <Row
          item={item}
          index={i + 1}
        />
      )}
      </div>
      <Form a={paseDate} />
    </div>
  );
}

export default App;
