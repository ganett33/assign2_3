import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Scp from '../../pages/Scp';
import "./Scp.css";

function ScpFrom() {
  useEffect(() => {
    fetchItems();
  }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
      const url = 'https://scpdata-1ab1.restdb.io/rest/data';
      const data = await fetch(url, {method: 'GET',
      headers:
        { 'cache-control': 'no-cahe',
          'x-apikey': '609f7d87e3b6e02545eda8fb'}});

          const items = await data.json();
          console.log(items);
          setItems(items);
      };

      return (
<section>
    {items.map(spcs =>(
      <div className="card-container">
      <div v-for="i in items" className="card">
      <div className="card-top">
      </div>
      <h2 clclassNameass="card-title">{spcs.item}</h2>
      <p className="card-body">
       
      </p>
      <div className="card-action">
        <a href="#" className="btn-link">Learn more</a>
        <i className="fas fa-arrow-right"></i>
      </div>
    </div>
  </div>

    ))}
    
</section>
      );
    }
    

  export default ScpFrom;

