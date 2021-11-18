import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import {useFormik} from 'formik';
import * as yup from 'yup';


const formvalidation= yup.object({
  name:yup.string().required("Name is a required field"),
  poster:yup.string().required("Poster is a required field"),
  rating:yup.number().required("Rating is a required field").min(0).max(10),
  summary:yup.string().required("Summary is a required field"),
  trailer:yup.string().required("Trailer is a required field")
  
})

export function Addmovies() {
  
 const history=useHistory()
  // const [name, setname] = useState("");
  // const [rating, setrating] = useState("");
  // const [summary, setsummary] = useState("");
  // const [poster, setposter] = useState("");
  // const [trailer, settrailer] = useState("");
  const {handleSubmit,handleChange,handleBlur,values,errors,touched}=useFormik({
    initialValues:{name:"", poster:"",summary:"",rating:"",trailer:""},
    // validate:validateform,
    validationSchema:formvalidation,
    onSubmit:(newmovie)=>{
        console.log("onsubmit",newmovie);
        addMovies(newmovie);
    },
  })  
  
  const addMovies = (newmovie) => {
  //   console.log("Movies......", name, summary, rating, poster, trailer);
  //   const newmovie = {
  //     name,
  //     summary,
  //     rating,
  //     poster,
  //     trailer
  //   };
    console.log(newmovie);
    // setMovies([...movies, newmovie]);

    
    // post details//
    fetch(`https://6166c4d613aa1d00170a66f1.mockapi.io/movies`,{ 
    method:"POST",
    body:JSON.stringify(newmovie),
    headers:{
      "Content-Type":"application/json"
    }
}).then(()=>history.push("/movies"));
};

  return (
    <form  onSubmit={handleSubmit} className="movie-form">
      <TextField id="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}  
            label="Movie Name"
            error={errors.name && touched.name}
            variant="standard"
            helperText={errors.name && touched.name ? errors.name : ""} />
           
            
      <TextField id="poster"
            name="poster"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.poster}  
            label="Poster" 
            variant="standard"
            error={errors.poster && touched.poster} 
            helperText={errors.poster && touched.poster? errors.poster :""}/>
            
      <TextField id="rating"
            name="rating"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.rating}  
            label="Rating" 
            variant="standard"
            error={errors.rating && touched.rating}
            helperText={errors.rating && touched.rating ? errors.rating:""} />
            
      <TextField id="summary"
            name="summary"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.summary}  
            label="Summary" 
            variant="standard"
            error={errors.summary && touched.summary}
            helperText={errors.summary && touched.summary ? errors.summary :""} />
            
      <TextField id="trailer"
            name="trailer"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.trailer} 
            label="Trailer" 
            variant="standard"
            error={errors.trailer && touched.trailer}
            helperText={errors.trailer&& touched.trailer? errors.trailer:""} />
           
      <Button type="Submit" variant="outlined">Add Movies</Button>
    </form>
  );
}
