import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
export function Moviedetails(){
  const history=useHistory();
  const { id } = useParams();
  // const movie = movies[id]
  const [movie,setMovie]=useState({});
  useEffect(()=>{
    fetch(`https://6166c4d613aa1d00170a66f1.mockapi.io/movies/${id}`)
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv))
  },[]);
  console.log(movie);
  const styles = {
    color: movie.rating < 8 ? "crimson" : "green",
    fontWeight: "bold"
  };
  return (
    <div>
      <iframe width="100%" height="550" src={movie.trailer}
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <div className="detail-container">
        <div className="specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating" style={styles}>{movie.rating}⭐</p>
        </div>
        <p className="movie-summary"><b> Summary:</b> {movie.summary}</p>
        <Button onClick={()=>history.goBack()} variant="outlined" startIcon={<KeyboardBackspaceIcon />}>
        Back
      </Button>
      </div>
    </div>
  );
}
