import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function GitHubUser({ login }) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, [login]);

    if (data) {
        return <div>
            <h1>{data.login}</h1>
            <img src={data.avatar_url} width={100}  alt={"beebus"}/>
        </div>;
    }
    return null;
}

function App() {
    return <GitHubUser login="beebus" />
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
