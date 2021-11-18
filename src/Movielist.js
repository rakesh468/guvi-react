import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import{useEffect,useState} from "react";

import { Movie } from './App';

export function Movielist() {
  const [movies,setMovies]=useState([]);
  const getmovies=()=>{
    fetch("https://6166c4d613aa1d00170a66f1.mockapi.io/movies")
    .then((data)=>data.json())
    .then((mvs)=>setMovies(mvs))
  };
  useEffect(getmovies,[]);
  const deletemovie=(id)=>{
      fetch(`https://6166c4d613aa1d00170a66f1.mockapi.io/movies/${id}`,
            {method:"DELETE",
            }).then(()=>getmovies());
          };
  const history = useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ name, rating, poster, summary,id }) => (
        <Movie key={id} name={name} poster={poster} rating={rating} summary={summary} id={id}
          deletebutton={<IconButton onClick={() => deletemovie(id)}
            className="delete-button"
            color="error" aria-label="delete-content"> <DeleteIcon />
          </IconButton>}
          editbutton={<IconButton style={{ marginLeft: "auto" }} onClick={() => history.push("/movies/edit/" + id)}
            className="edit-button"
            color="secondary" aria-label="edited-content">
            <EditIcon />
          </IconButton>} />
      ))}
    </section>
  );
  }
