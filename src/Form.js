
function Form(props) {

    function click(params) {
        props.a(
            document.getElementById('name').value,
            document.getElementById('amount').value,
            document.getElementById('store').value
        );
        document.getElementById('name').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('store').value = '';

    }

    return <div className="form">
        <div>
            <label for="name">name</label><br />
            <input id="name" placeholder="name"></input>
        </div>
        <div>
            <label for="amount">amount</label><br />
            <input id="amount" placeholder="amount"></input>
        </div>
        <div>
            <label for="store">store</label><br />
            <input id="store" placeholder="store"></input>
        </div>
        <button className="buttonAdd" onClick={click}>ADD</button>
    </div>;
}
export default Form;