import React from "react";
import axios from "axios";
import ScpList from "./ScpList";

class ScpFrom extends React.Component {
    state = {
      isLoding: true,
      scps:[]
    };
    getMovies = async () => {
      const {
        data: {
          data :{scps}
        }
      } = await axios.get(
        "https://scpdata-1ab1.restdb.io/rest/data/609f7d87e3b6e02545eda8fb"
      );
      
      this.setState({ scps, isLoding: false }); 
      
    }
    componentDidMount(){
      this.getMovies();
        }
  
    render() {
      const { isLoding, scps } = this.state;
      return (
        <section className="container">
          {isLoding 
          ? <div className="loader">
            <span className="loader__text">Loading...</span>
          </div> 
          : scps.map(scp => (
            <div className="movies">
              <ScpList 
                  key ={scp.id}
                  id={scp.id}
                  item={scp.item}
                  oclass={scp.oclass}
                  scp={scp.scp}
                  des={scp.des}
                 />
            </div>
                
              )
            )
          }      
        </section>
      );
    }
  }
  
  export default ScpFrom;
  