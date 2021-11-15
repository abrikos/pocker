import React, {useEffect, useState} from 'react';
import Api from "Api";

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

    const getUserList = () => {
        Api.get('/model/user', {name: 'aaaa'})
            .then(res=> {
                console.log('ddddddddddddd', res)
                getData(res)
            })
            .catch(err=>console.warn('ffffffff', err))
    }

    useEffect(() => {
        getUserList();
    }, [])

    function addUser() {
        Api.post('/model/user', {name: new Date(), age: Math.random()})
            .then(getUserList)
    }

    return (
        <div className="App">
            <button onClick={addUser}>Add</button>
            {console.log('zzzzzz', list)}
            {/*{list.map((u: IUser) => <div key={u.id}>{u.age} {u.name}</div>)}*/}
        </div>
    );
}

export default App;
