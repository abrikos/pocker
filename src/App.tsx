import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

type MyType<T> = (t: T) => any;

const x: MyType<number> = (xx) => {
    console.log('value', xx)
    return xx
};
/*
function gA(...args:string[]): string[];
function gA(args:number): undefined[];
function gA(...args){
    return Array.from(args)
}
*/

function x2<T, S, B>(obj: T, o2:S) {
    return {id: 1, obj, o2};
}

console.log(x2({x: 112}, null))
console.log(typeof x(99))

function App() {
    const [val, setVal] = useState<number>();
    return (
        <div className="App">
            <button onClick={()=>setVal(Math.random())}>Click</button>
            <header className="App-header">
                {val}
            </header>
        </div>
    );
}

export default App;
