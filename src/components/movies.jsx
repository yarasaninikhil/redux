import React from "react";
import { useSelector } from "react-redux";
import "./Games.css";
import { Link } from "react-router-dom";

const Movies = () => {
  const movie = useSelector((state) => state.Storeslice.json.movies);
  const slides = useSelector((state) => state.Storeslice.json.slides);
  const slides2 = useSelector((state) => state.Storeslice.json.slides2);
  const slide3 = useSelector((state) => state.Storeslice.json.slide3);

  return (
    <>
      <div className="games">
        {movie.map((item, index) => (
          <div className="card" key={index}>
            <div className="game-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="game-ny">
              <h3>{item.name}
              <p className="mb"> {item.mb}</p>

              </h3>
              <h4>{item.rate}</h4>

            </div>

            <div>
              <div className="game-hd">
                <img src={item.icon} alt="icon" />
                <img src={item.img2} alt="additional img" />

              </div>
              <div className="game-ny">
                <p>{item.desc}</p>
              </div>
            </div>
            <div className="game-button">
              <Link to={`/movies/${item.id}`}>View</Link>
            </div>
          </div>
        ))}
      </div>







    </>
  );
};

export default Movies;
