import React from "react";
import Navbar from "./Navbar";
import "./Render.css";
import { CiShare2 } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItemToCart } from "./CartSlice";

const Render = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.Storeslice.json.movies);
  const Finddata = movies.find((item) => item.id == id);

  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <>
      <div className="disply">
        <Navbar />
        {[Finddata].map((item, index) => (
          <div className="disp" key={index}>
            <div className="dis-img">
              <img src={item.img} alt="" />
            </div>
            <div className="dis-info">
              <div className="dis-nam">
                <h3>{item.name}</h3>
                <div className="dowload">
                <h4>{item.Dow}</h4>
                <img src={item.dow} alt="" onClick={() => handleAddToCart(item)} style={{ cursor: 'pointer' }} />
                </div>
              </div>
              <div className="dis-game">
                
                
                <h4>{item.rate}</h4>
                <div className="share">
                <p><CiShare2 />{item.share}</p>
                <img src={item.icon} alt="" />
              
                </div>
             
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Render;
