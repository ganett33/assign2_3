import React, {useState, useEffect} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Scp.css";

function Detail({match}) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

    const [item, setItem] = useState([[]]);

    const fetchItem = async () => {
      const url = `https://scpdata-1ab1.restdb.io/rest/data/${
        match.params._id
      }`;
      const fetchItem = await fetch(url, {method: 'GET',
      headers:
        { 'cache-control': 'no-cahe',
          'x-apikey': '609f7d87e3b6e02545eda8fb'}
        });
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);

      };

      return (
<div className="section">
<Header />
<div className="card">
  <h1 className="card-title" id={item.id} key={item._id}>{item.item}</h1>
  <div className="card-top">
  <img src="https://picsum.photos/200/300?random=1" alt="" />
        </div>
  <div className="card-body">
        <h6 className="card-text">Object Class:</h6>
        <p className="card-text">{item.oclass}</p> 
        <h6 className="card-text">Special Containment Procedures: </h6>
        <p className="card-text">{item.scp}</p>
        <h6 className="card-text">Description: </h6>
        <p className="card-text">{item.des}</p>
      </div>
      </div>
<Footer />
</div>
      );
    }

  export default Detail;

