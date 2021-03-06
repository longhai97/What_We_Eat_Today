import * as React   from 'react';
import { useState } from 'react';

const defaultMenu = [
    "Bún Cá",
    "Bánh Đa Trộn",
    "Phở Bò",
    "Cơm Rang Thập Cẩm"
]

const MenuToday = () => {
    const [ name, setName ]   = useState('');
    const [ names, setNames ] = useState(() => {
        const storageNames = JSON.parse(localStorage.getItem('names')) ?? defaultMenu;
        return storageNames
    });

    const [ nameForToday, setNameForToday ] = useState('Take a Random');

    const handleSubmit = () => {
        setNames(prev => {
            const newMeal    = [ ...prev, name ]
            const jobsToJson = JSON.stringify(newMeal)
            localStorage.setItem('names', jobsToJson)
            return newMeal
        })
        setName('')
    }

    const handleRandomName = () => {
        const index = Math.floor(Math.random() * names.length);
        setNameForToday(names[index])

    }

    return (
        <div>
            <h1>Menu for lunch :</h1>

            <ul>
                { names.map((name, index) => (
                    <li key={ index }>{ name }</li>
                )) }
            </ul>

            <input
                value={ name }
                onChange={ e => setName(e.target.value) }
            />

            <button style={ { margin: '10px' } } onClick={ handleSubmit }>Add new Food</button>

            <div>
                { nameForToday }
                <button style={ { margin: '10px' } } onClick={ handleRandomName }>Take a random for today</button>
            </div>
        </div>
    );
};

export default MenuToday;
