import React, { useEffect, useState } from 'react'
import './bithday.css'
import MyObject from './data'
 let value=0
const birthday = () => {
    const [people,setpeople]=useState([])
      const [newname, setNewName] = useState('');
  const [newage, setNewAge] = useState('');
   
useEffect(()=>{
setpeople(MyObject)
},[])
  const clear=()=>{
    setpeople([]);
  }
  
  const done =(id)=>{
    const updatepeople=people.filter((person)=>person.id!==id)
    setpeople(updatepeople);
 people.map((person)=>(
    console.log(person.id)
 ))
  }
  const add=()=>{
if(newname!==''&&newage!==''){
    const newperson={
        id:Date.now(),
        name:newname,
        age:newage,
    };
        setpeople((prevPeople) => [...prevPeople, newperson]);

      
      setNewName('');
      setNewAge('');
    } else {
      alert('Please provide both name and age.');
    }
  };



  
  return (
    <>
    <div className="main">
       <div className="title"> <div className="counter">{people.length}</div> birthdays</div>
       {people.map((person)=>(
       <div key={person.id} className="content">
        <div className="image"></div>
        <div className="name">{person.name}</div>
        <div className="age">{person.age}</div>
        <button onClick={()=>done(person.id)} className='done'>Done</button>
       </div>
       ))}
      <div className='button'> <button className='btn' onClick={clear}>Clear!</button></div>
       </div>
       <div><input type="text" placeholder='name' value={newname} onChange={(e) => setNewName(e.target.value)}/> </div>
              <div><input type="text" placeholder='age' value={newage} onChange={(e) => setNewAge(e.target.value)}/> </div>
      <div className='button' > <button className='btnadd' onClick={add}>ADD</button></div>
    </>
  )
}

export default birthday
