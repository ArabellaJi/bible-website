import React, {useState, useEffect} from 'react'; 
import "./App.css"

const Name = () => {
  const [name, setName] = useState('world');
  return (
    <div className="page">
      <form action="/" method="get">
        <label>
          Your Name: <input type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <h1 className="text">Hello {name}!</h1>
      </form>
    </div>
  );
}

export default Name;