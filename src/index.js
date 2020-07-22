import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Checkbox() {
    const [checked, toggle] = useReducer(checked => !checked, false);

    return (
        <React.Fragment>
            <input type="checkbox"
                   value={checked}
                   onChange={toggle}
            />
            {checked ? "checked" : "not checked"}
        </React.Fragment>
    );
}

ReactDOM.render(
    <Checkbox />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
