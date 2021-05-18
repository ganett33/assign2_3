import React, { Component } from "react";
import scps from "../data.json";
import styled from 'styled-components';



const Section = styled.section`
    background: linear-gradient(220deg, rgba(189,0,255,1) 0%, rgba(0,163,255,1) 100%);
    color: white;
    padding: 1.5rem;
`;

const Container = styled.section`
.container{
    margin: 1em .5em;
    height: calc(100% - 2em);
    background: #221F26 url('../images/bg.jpg');
    background-size: cover;
    background-blend-mode: screen;
    background-position: -100px;
    height: 100%;
    padding: 2em;
    border-radius: 13px;
}

.container__subtitle{
    color: #2D7DFF;
    text-transform: uppercase;
}


`;

const foundation = scps.map(
   (scps) => {
       return(
        <Section>
           <Container>
           <h2>SCP - Data </h2>
            <h2 className="container__Title" id={scps.id}>Item: {scps.item}</h2>
               <div className="container">
                   <div className="conatiner__body" >
                   <h4 className="container__subtitle">Special Containment Procedures:</h4>
                        <p className="container__item">{scps.oclass}</p>
                        <h4 className="container__subtitle">Special Containment Procedures:</h4>
                        <p className="container__item">{scps.scp.slice(0, 180)}...</p>
                        <h4 className="container__subtitle">Description:</h4>
                        <p className="container__item">{scps.des.slice(0, 180)}...</p>
                        </div>
                   </div>
                <br></br>
        </Container>
       </Section>

        );
      }
  );
  class Content extends Component
  {
      render()
      {
          return(
              <div >
                  {foundation}
              </div>
          );
      }
  }
  export default Content;

