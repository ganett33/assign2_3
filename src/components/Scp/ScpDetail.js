import React from "react";

class ScpDetail extends React.Component {
    componentDidMount() {
      const { location, history } = this.props;
      if (location.state === undefined) {
        history.push("/");
      }
    }
    render() {
        const {location} = this.props;
        if(location.state) {
            return <span className="movie">
                <h2>SCP - Data </h2>
            <div className="movie__data">
            <h3 className="movie__title">Item: {location.state.item}</h3>
          <h5 className="movie__year">Object Class: {location.state.oclass}</h5>
          <h5 className="movie__year">Special Containment Procedures: {location.state.scp}</h5>
          <p className="movie__summary">Description: {location.state.des.slice(0, 200)}...</p>
    </div>
    </span>
        } else {
            return null;
        }
    }
}

export default ScpDetail;

