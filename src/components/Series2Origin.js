import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./Scp.css";

function Series2Origin() {
  useEffect(() => {
    fetchItems();
  }, []);

    const [items, setItems] = useState([],);

    const fetchItems = async () => {
      const url = 'https://scpdata-1ab1.restdb.io/rest/data-1?q={}&sort=id';
      const data = await fetch(url, {method: 'GET',
      headers:
        { 'cache-control': 'no-cahe',
          'x-apikey': '609f7d87e3b6e02545eda8fb'}});

          const items = await data.json();
          console.log();
          setItems(items);
      };

      return (
<div className="section">
    {items.map(spcs =>(
      
      <Link to={`/series2/${spcs._id}`}>
      <div className="card" key={spcs._id} >
        <div className="card-top">
        <h4 className="card-title" id={spcs.id}>{spcs.item}</h4>
        <img src={spcs.image} alt="" />
        </div>
      <div className="card-body">
        <h6 className="card-text">Object Class:</h6>
        <p className="card-text">{spcs.oclass}</p> 
        <h6 className="card-text">Special Containment Procedures: </h6>
        <p className="card-text">{spcs.scp.slice(0, 100)}...</p>
        <h6 className="card-text">Description: </h6>
        <p className="card-text">{spcs.des.slice(0, 100)}...</p>
      </div>
    </div>
    </Link>
    ))}
    
</div>
      );
    }

  export default Series2Origin;

