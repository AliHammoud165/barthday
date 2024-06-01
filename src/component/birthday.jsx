import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './birthday.css';

const Birthday = () => {
    const [people, setPeople] = useState([]);
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');

    useEffect(() => {
        fetchBirthdays();
    }, []);

    const fetchBirthdays = async () => {
        try {
            const response = await axios.get('http://localhost:8082/birthday');
            setPeople(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const clear = () => {
        setPeople([]);
        try{
            axios.delete('http://localhost:8082/birthday/deleteAll')
        }
        catch(error){
            console.error('Error fetching data:', error);

        }
    };

    const done = async (id) => {
        // Filter out the person with the given id
        const updatedPeople = people.filter((person) => person.id !== id);
        
        // Update the state with the filtered list
        setPeople(updatedPeople);
        
        try {
            // Delete all birthdays from the server
            await axios.delete('http://localhost:8082/birthday/deleteAll');
        } catch (error) {
            console.error('Error deleting birthdays:', error);
            // If there's an error deleting birthdays, exit the function
            return;
        }
    
        // Add each person from the updated list back to the server
        for (let i = 0; i < updatedPeople.length; i++) {
            try {
               
                    await axios.post('http://localhost:8082/birthday', updatedPeople[i]);
                } 
            catch (error) {
                console.error('Error adding person:', error);
            }
        }
    
        await fetchBirthdays();
        setNewName('');
        setNewAge('');
    };
    

    const add = async () => {
        try {
            if (newName !== '' && newAge !== '') {
                const newPerson = {
                    name: newName,
                    age: newAge,
                };
                await axios.post('http://localhost:8082/birthday', newPerson);
                await fetchBirthdays(); // Fetch updated list after adding
                setNewName('');
                setNewAge('');
            } else {
                alert('Please provide both name and age.');
            }
        } catch (error) {
            console.error('Error adding person:', error);
        }
    };
    return (
        <>
            <div className="main">
                <div className="title">
                    <div className="counter">{people.length}</div> birthdays
                </div>
                {people.map((person) => (
                    <div key={person.id} className="content">
                        <div className="image"></div>
                        <div className="name">{person.name}</div>
                        <div className="age">{person.age}</div>
                        <button onClick={() => done(person.id)} className='done'>Done</button>
                    </div>
                ))}
                <div className='button'>
                    <button className='btn' onClick={clear}>Clear!</button>
                </div>
            </div>
            <div>
                <input
                    type="text"
                    placeholder='name'
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder='age'
                    value={newAge}
                    onChange={(e) => setNewAge(e.target.value)}
                />
            </div>
            <div className='button'>
                <button className='btnadd' onClick={add}>ADD</button>
            </div>
        </>
    );
}

export default Birthday;
