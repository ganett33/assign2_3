import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../Movie/MovieList.css";

function ScpList({ id, item, oclass, scp, des }) {
  return (
    
<div className="movie">
      <Link
        to={{
          pathname: `/scp/${id}`,
          state: {
            item,
            oclass,
            scp,
            des
          }
        }}
      >
        <div className="movie__data">
          <h3 className="movie__title">{item}</h3>
          <h5 className="movie__year">{oclass}</h5>
          <h5 className="movie__genres">{scp} </h5>
          <p className="movie__summary">{des.slice(0, 200)}...</p>
    </div>
    </Link>
    </div>
  );    
}


ScpList.propTypes = {
  id: PropTypes.number.isRequired,
  item: PropTypes.number.isRequired,
  oclass: PropTypes.string.isRequired,
  scp: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
};
export default ScpList;