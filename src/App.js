import { useState} from 'react';
import './App.css';

export default function App() {
  console.log("hi");
  const movies=[
    {name:"Soorarai Pottru",
    poster:"http://timesofindia.indiatimes.com/photo/72004440.cms",
    rating: "9.1",
    summary:"Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.",
    },
    {name:"Asuran",
    poster:"https://i2.cinestaan.com/image-bank/1500-1500/149001-150000/149327.jpg",
    rating: "7.2",
    summary:"A farmer goes on the run with his family as he is compelled to protect his son, who has murdered a wealthy upper-caste landlord in a fit of vengeance."},
    {name:"Karnan",
    poster:"https://m.media-amazon.com/images/M/MV5BYjI0NDk3MGEtM2FlMy00MDMxLTliN2ItZDU0YmRmMzVhOWQyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
    rating: "8.2",
    summary:"A small village in Tamil Nadu is inhabited by people belonging to a lower caste. Karnan, a young man, is revolted by the inhuman treatment given to his villagers and fights for their rights.",
    },
    {name:"Vada Chennai",
     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjX_XwB62Bu6IMZMPqZQQp_JrY60RaiMXpA&usqp=CAU",
    rating: "8.5",
    summary:"A proficient carrom player sets foot in the world of crime and joins forces with local gangsters to settle their feuds. However, he decides to take them down when they plan to wipe out his locality.",
    },
    {name:"Mankatha",
    poster:"https://guessihaveablog.files.wordpress.com/2011/09/sep04dcad.jpg",
    rating:"7.9",
    summary:"Inspector Vinayak is suspended after he lets a smuggler escape. He then meets a group of men who plan to whisk away 500 crore belonging to a gangster. He promises to help them for a share in the loot.",
    },
    {name:"Sarpatta Parambarai",
    poster:"https://m.media-amazon.com/images/M/MV5BYmQxNDliY2EtZWFlZS00YWM4LTkzMzAtMWZjNDFmNjkwM2JlXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_FMjpg_UX1000_.jpg",
    rating:"8.7",
    summary:"When Sarpatta Parambarai is challenged to a do-or-die match, Kabilan, a young labourer, must choose whether to put on the gloves himself and lead his clan to victory, or be dissuaded by his disapproving mother and dangerous politics.",
    },
    {name:"Jai Bheem",
    poster:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQXLGPbmYLOJ8SxOmXr9GFZPEmZw16H5MLSvbo1f679nnYRYNTN",
    rating:"9.7",
    summary:"A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them."},
    { name:"Doctor",
    poster:"https://m.media-amazon.com/images/M/MV5BYjI5MDJmZDItMjcyMS00YWY3LTk4ZmMtZTIzOTVjZTlhMDA4XkEyXkFqcGdeQXVyMTI4Nzc4Njg3._V1_.jpg",
    rating:"7.2",
    summary:"An army surgeon assembles a team to help him track down his fiancee's kidnapped niece.",
  }]
// return (
//     <div className="App">
//       <section className="movie-list">
//       {movielist.map((li)=>(
//       /* {list.map(ur=><Msg moviename={ur.moviename} poster={ur.poster} rating={ur.rating} summary={ur.summary} date={ur.date}/>)}
//       // <counter /> */
//       <Movie name={li.moviename} rating={li.rating} summary={li.summary} poster={li.poster} />
//       ))}
//       </section>
//       </div>
//   );
// }

// object desructing//
return (
  <div className="App">
  <Movielist movies={movies} />
  </div>
);
}
function Counter(){
  const [like,setlike]=useState(0);
  const [dislike,setdislike]=useState(0);
  return(
    <div className="counter">
      <button className="like" onClick={()=>{ setlike(like+1)}}>👍{like}</button>
      <button className="like" onClick={()=>{setdislike(dislike+1)}}>👎{dislike}</button>
    </div>
  );
}
function Movielist({movies}){
  return(
    <section className="movie-list">
     {movies.map(({name,rating,poster,summary})=>(
       <Movie name={name} poster={poster} rating={rating} summary={summary} />
       ))}
      </section>
  )
}
function Movie({name,rating,poster,summary}){
const [show,setshow]=useState(true);

 const styles={color: rating <  8 ? "crimson":"green", 
fontWeight:"bold"
};
const stylesummary={
  display: show ? "block":"none",
}
return(
  <div className="container">
    <img src={poster} alt={name}className="movie-poster"/>
    <div className="specs">
    <h3 className="movie-name">{name}</h3>
    <p  className="movie-rating" style={styles}>{rating}⭐</p>
    </div>
    <button onClick={()=>setshow(!show)} className="show">
      {show ? "Hide" :"show"} Description</button>
    <p  style={stylesummary}className="movie-summary"><b> Summary:</b> {summary}</p>
    <Counter/>
  </div>
);
}







