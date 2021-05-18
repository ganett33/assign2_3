import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

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
        <section className="container">
          <h1>Welcome</h1>
           {items.map(scps => (
            <div className="movies">
              <h1 key={scps.id}>
                <Link to={`/scp/${scps._id}`}>{scps.item}</Link>
              </h1>
              <p>SCP: {scps.des}</p>
            </div>             
              ))}
        </section>
      );
    }

  export default ScpFrom;

