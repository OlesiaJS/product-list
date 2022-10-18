import { useState } from "react";
import './App.css';


function Row({ item, index }) {
    const [status, setStatus] = useState(item.status);
    function handle() {
        if (status) {
            setStatus(0);
        }
        else {
            setStatus(1);
        }
    }
    return (
        <ul className={status ? 'success' : 'ulWrapper'}>
            <li className="liItem">{index}).
                {item.title}-
                {item.amount}-
                ({saleStatus(status)})
                -{item.store}
                {!status ? <button onClick={handle}>:)</button> : <button onClick={handle}>:(</button>}</li>

        </ul>);
}


function saleStatus(status) {
    if (status === 0) {
        return 'to buy';
    }
    return 'done';
}


export default Row;
