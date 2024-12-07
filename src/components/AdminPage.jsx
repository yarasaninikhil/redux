import React, { useState } from "react";
import axios from "axios";
import "./AdminPage.css";
import Navbar from "./Navbar";

function AdminPage() {
  const [movieData, setMovieData] = useState({
    id: "",
    Gameimg: "",
   Gamename: "",
    Gameyear: "",
   GameRate: "",
  share:"",
    star: "",
    play: "",
    now: "",
    text: "",
  });

  const [deleteId, setDeleteId] = useState("");
  const [deleteMovie, setDeleteMovie] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({
      ...movieData,
      [name]: value,
    });
  };

  const handleDeleteChange = async (e) => {
    const id = e.target.value;
    setDeleteId(id);
    if (id) {
      try {
        const response = await axios.get(`http://localhost:3000/movies/${id}`);
        setDeleteMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setDeleteMovie(null);
      }
    } else {
      setDeleteMovie(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/movies",
        movieData
      );
      console.log("Movie added:", response.data);
      alert("Movie added successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Adding movie failed!");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:3000/movies/${deleteId}`);
      console.log("Movie deleted:", deleteId);
      alert("Movie deleted successfully!");
      setDeleteMovie(null);
      setDeleteId("");
    } catch (error) {
      console.error("Error:", error);
      alert("Deleting movie failed!");
    }
  };

  const handleAddButtonClick = () => {
    setShowAddForm(true);
    setShowDeleteForm(false);
  };

  const handleDeleteButtonClick = () => {
    setShowDeleteForm(true);
    setShowAddForm(false);
  };

  return (
    <div>
      <div className="add-movies">
        <Navbar />
        <div className="ad-movie">
          <button onClick={handleAddButtonClick}>Add</button>
          <button onClick={handleDeleteButtonClick}>Delete</button>
        </div>
      </div>

      {showAddForm && (
        <div className="shows">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Game Image URL:</label>
              <input
                type="text"
                name="Gameimg"
                value={movieData.movieimg}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Game Name:</label>
              <input
                type="text"
                name="Gamename"
                value={movieData.moviename}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Game Year:</label>
              <input
                type="text"
                name="Gameyear"
                value={movieData.movieyear}
                onChange={handleChange}
                required
              />
            </div>
            
            
       
          
            <div>
              <label>Game Rate:</label>
              <input
                type="text"
                name="movierate"
                value={movieData.movierate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Share:</label>
              <input
                type="text"
                name="shere"
                value={movieData.shere}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Rate:</label>
              <input
                type="text"
                name="rate"
                value={movieData.rate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Star Icon URL:</label>
              <input
                type="text"
                name="star"
                value={movieData.star}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Rating:</label>
              <input
                type="text"
                name="rating"
                value={movieData.rating}
                onChange={handleChange}
                required
              />
            </div>
           
            <div>
              <label>Play Now:</label>
              <input
                type="text"
                name="now"
                value={movieData.now}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                name="text"
                value={movieData.text}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Add Game</button>
          </form>
        </div>
      )}

      {showDeleteForm && (
        <div className="d-shows">
          <form onSubmit={handleDelete}>
            <div>
              <label>ID to Delete:</label>
              <input
                type="text"
                value={deleteId}
                onChange={handleDeleteChange}
                required
              />
            </div>

            {deleteMovie && (
              <div>
                <h2>Movie Details:</h2>
                <p>
                  <strong>ID:</strong> {deleteMovie.id}
                </p>
                <p>
                  <strong>Movie Name:</strong> {deleteMovie.moviename}
                </p>
                <p>
                  <strong>Movie Year:</strong> {deleteMovie.movieyear}
                </p>
                <p>
                  <strong>Movie Quality:</strong> {deleteMovie.moviequlty}
                </p>
              </div>
            )}
            <button type="submit">Delete Movie</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
