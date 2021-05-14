import React from "react";
import axios from "axios";
import MovieItem from "../components/MovieItem";

class DetailMovie extends React.Component {
    state = {
      isLoding: true,
      movies:[]
    };
    getMovies = async () => {
      const {
        data: {
          data :{movies}
        }
      } = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
      ); //sort by rating
      
      this.setState({ movies, isLoding: false }); 
      
  
    }
    componentDidMount(){
      this.getMovies();
        }
  
    render() {
      const { isLoding, movies } = this.state;
      return (
        <section className="container">
          {isLoding 
          ? <div className="loader">
            <span className="loader__text">Loading...</span>
          </div> 
          : movies.map(movie => (
            <div className="movies">
              <MovieItem 
                  key ={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                 />
            </div>
                
              )
            )
          }      
        </section>
      );
    }
  }
  
  export default DetailMovie;
  