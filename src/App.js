import logo from './logo.svg';
import './App.css';

export default function App() {
  console.log("hi");
  const list=[
    {moviename:"Soorarai Pottru",
    poster:"http://timesofindia.indiatimes.com/photo/72004440.cms",
    rating: "9.1/10",
    date:"04/09/2019",
    summary:"Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.",
    },
    {moviename:"Asuran",
    poster:"https://i2.cinestaan.com/image-bank/1500-1500/149001-150000/149327.jpg",
    rating: "8.5/10",
    summary:"A farmer goes on the run with his family as he is compelled to protect his son, who has murdered a wealthy upper-caste landlord in a fit of vengeance.",
    date:"04/09/2019"},
    {moviename:"Karnan",
    poster:"https://m.media-amazon.com/images/M/MV5BYjI0NDk3MGEtM2FlMy00MDMxLTliN2ItZDU0YmRmMzVhOWQyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
    rating: "8.2/10",
    summary:"A small village in Tamil Nadu is inhabited by people belonging to a lower caste. Karnan, a young man, is revolted by the inhuman treatment given to his villagers and fights for their rights.",
    date:"09/4/2019"},
    {moviename:"Vada Chennai",
     poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjX_XwB62Bu6IMZMPqZQQp_JrY60RaiMXpA&usqp=CAU",
    rating: "8.5/10",
    summary:"A proficient carrom player sets foot in the world of crime and joins forces with local gangsters to settle their feuds. However, he decides to take them down when they plan to wipe out his locality.",
    date:"17/10/2018"},
    {moviename:"Mankatha",
    poster:"https://guessihaveablog.files.wordpress.com/2011/09/sep04dcad.jpg",
    rating:"8.5/10",
    summary:"Inspector Vinayak is suspended after he lets a smuggler escape. He then meets a group of men who plan to whisk away 500 crore belonging to a gangster. He promises to help them for a share in the loot.",
    date:"31/08/2011"},
    {moviename:"Sarpatta Parambarai",
    poster:"https://m.media-amazon.com/images/M/MV5BYmQxNDliY2EtZWFlZS00YWM4LTkzMzAtMWZjNDFmNjkwM2JlXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_FMjpg_UX1000_.jpg",
    rating:"8.7/10",
    summary:"When Sarpatta Parambarai is challenged to a do-or-die match, Kabilan, a young labourer, must choose whether to put on the gloves himself and lead his clan to victory, or be dissuaded by his disapproving mother and dangerous politics.",
  date:"22/07/2021"}]
  return (
    <div className="App">
      {/* <Msg name="Rakesh" />
      <Msg name="Vinay"/>
      <Msg name="Arun"/> 
      <Msg name="Preethi"/>    */}
      {list.map(ur=><Msg moviename={ur.moviename} poster={ur.poster} rating={ur.rating} summary={ur.summary} date={ur.date}/>)}
      <counter />
      </div>
      
  );
}
function Msg({moviename,poster,rating,summary,date}){
  // const name="rakesh"//
  return(
    <div>
      <img class="picture" src= {poster} alt={moviename}/>
      <h2 class="user"> <b>Movie:  {moviename}</b></h2>
      <p><b>Rating: {rating}</b></p>
      <p><b>Release Date:  {date}</b></p>
      <p class="summary">Summary: {summary}</p>
      
  </div>
  );
}


