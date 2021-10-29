import React, {SetStateAction, useEffect, useState} from 'react';
import Api from "./Api";

interface IUser {
    name: string,
    id: string,
    age: number,
    uid: string
}

function App() {
    const [list, setList] = useState<[]>([]);

    function getData(value: {}) {
        setList(value as [])
    }

    useEffect(() => {
        getUserList();
    }, [])

    function getUserList() {
        Api.get('/model/user', {name: 'aaaa'})
            .then(getData)
            .catch(console.log)
    }

    function addUser() {
        Api.post('/model/user', {name: new Date(), age: Math.random()})
            .then(getUserList)
    }

    return (
        <div className="App">
            <button onClick={addUser}>Add</button>
            {list.map((u: IUser) => <div key={u.id}>{u.age} {u.name}</div>)}
        </div>
    );
}

export default App;
