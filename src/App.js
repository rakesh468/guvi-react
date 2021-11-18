import userEvent from '@testing-library/user-event';
import IconButton from '@mui/material/IconButton';
import { useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MailIcon from '@mui/icons-material/Mail';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {useHistory} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti'


import './App.css';
import { Addmovies } from './Addmovies';
import { Editmovie } from './Editmovie';
import { Moviedetails } from './Moviedetails';
import { Movielist } from './Movielist';
import { Colorbox } from './Colorbox';
import { Basicform } from './Basicform';

export default function App() {
  console.log("hi");
const [movies,setMovies]=useState([]);
const history=useHistory();
const [mode,setmode]=useState("dark")
const Theme = createTheme({
  palette: {
    mode: mode,
  },
});

return (
  <ThemeProvider theme={Theme}>
    <Paper elevation={3} style={{borderRadius:"0px", minHeight:"100vh"}}>
  <div className="App">
    <AppBar position="static" style={{marginBottom:"24px"}}>
  <Toolbar variant="dense">
  <Button variant="text" color="inherit" onClick={()=>history.push("/")} >Home</Button>
  <Button variant="text" color="inherit" onClick={()=>history.push("/AddMovies")}>Add Movies</Button>
  <Button variant="text" color="inherit" onClick={()=>history.push("/Movies")}>Movies</Button>
  <Button variant="text" color="inherit" onClick={()=>history.push("/ColorBox")}>ColorBox</Button>
  <Button variant="text" color="inherit" onClick={()=>history.push("/tic-tac-toe")}>Tic-Tac-Toe</Button>
  <Button variant="text" color="inherit" onClick={()=>history.push("form")}>Form</Button>
  <Button 
  startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}  style={{marginLeft:"auto"}} variant="text" color="inherit" 
  onClick={()=>setmode(mode==="light"?"dark":"light")}>
    {mode==="light"?"dark":"light"} Mode</Button>
  </Toolbar>
</AppBar>
      <Switch>
      <Route exact path="/">
          <Welcome/>
        </Route>
        <Route path="/Films">
          <Redirect to="/Movies"></Redirect>
          </Route>
          <Route path="/movies/edit/:id">
            <Editmovie />
            </Route>
          <Route path="/Movies/:id">
            <Moviedetails movies={movies}/>
            </Route>
        <Route path="/Movies">
        <Movielist /> 
        </Route>
        <Route path="/AddMovies">
        <Addmovies />
        </Route>
        <Route path="/ColorBox">
        <Colorbox/>
        </Route>
        <Route path="/tic-tac-toe">
        <Game/>
        </Route>
        <Route path="/form">
        <Basicform/>
        </Route>
        <Route path="**">
          <Notfound/>
          </Route>
          
</Switch>
  </div>
  </Paper>
  </ThemeProvider>
);
}

function Game(){
  const { width, height } = useWindowSize()
  const [board,setboard]=useState([null,null,null,null,null,null,null,null,null])
  const [isXturn,setisXturn]=useState(true);
  const winner=(board)=>{
    const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for( let i=0;i<lines.length;i++){
      const[a,b,c]=lines[i];
      if(board[a] !==null && board[a]===board[b] && board[b]===board[c]){
      console.log("winner is" , board[a]);
      return board[a];
      }
    }
return null;
  };
   const decidewinner=winner(board);
   const handleClick=(index)=>{
    if(decidewinner===null && !board[index]){
    const boardcopy=[...board];
    boardcopy[index]=isXturn?"X":"O";
    setboard(boardcopy)
    setisXturn(!isXturn);
    }
  };
  return(
   <div className="full-game">
    {decidewinner? <Confetti
      width={width}
      height={height}
      gravity={0.05} />
      :""}
    
<div className="board">
 {board.map((val,index)=>(
 <Gamebox val={val} OnplayerClick={()=>handleClick(index)}/>
 ))}
 </div>
 {decidewinner?<h2> Winner is {decidewinner}</h2>:""}
 </div>
  );
}
function Gamebox({OnplayerClick,val}){
  // const[val,setval]=useState(null);
  const styles={color:val==="X"?"red":"green"}
return(
    <div  style={styles} 
    onClick={OnplayerClick} className="game-box">{val}</div>
  );
}
function Notfound(){
  return(
    <div className="not-found-container">
      <h2>Not Found 404</h2>
      <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="Not Found 404" className="not-found-image"></img>
    </div>
  )
}
function Welcome(){
  return(
  <h2>Welcome Everyone!!!😍</h2>
  );
}

function Counter(){
  const [like,setlike]=useState(0);
  const [dislike,setdislike]=useState(0);
  useEffect(()=>{
    console.log("like updated",like);
  },[like,dislike]);
  return(
    <div className="counter">
     <IconButton className="like" onClick={()=>{ setlike(like+1)}} aria-label="like movie" color="primary">
    <Badge badgeContent={like} color="primary">
      👍
     </Badge>
     </IconButton>
      <IconButton className="like" onClick={()=>{setdislike(dislike+1)}} aria-label="dislike movie" color="error">
      <Badge badgeContent={dislike} color="error">
      👎
      </Badge>
      </IconButton>
    </div>
  );
}
export function Movie({name,rating,poster,summary,id,deletebutton,editbutton}){
const [show,setshow]=useState(true);
const history=useHistory();

 const styles={color: rating <  8 ? "crimson":"green", 
fontWeight:"bold"
};
const stylesummary={
  display: show ? "block":"none",
}
return(
  <Card className="container">
    <img src={poster} 
    alt={name}
    className="movie-poster"/>
   <CardContent>
    <div className="specs">
    <h3 className="movie-name">{name}
    <IconButton onClick={()=>{console.log(id);
    history.push("/Movies/"+ id);
    }}
    className="movie-show-button" color="primary" aria-label="More info">
      <InfoIcon> </InfoIcon>
        </IconButton>
    <IconButton onClick={()=>setshow(!show)}  color="primary" aria-label="hide">
   {show ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
    </IconButton></h3>
    <p  className="movie-rating" style={styles}>{rating}⭐</p>
    </div>
    <p  style={stylesummary}className="movie-summary"><b> Summary:</b> {summary}</p>
    <CardActions>
    <Counter/> {editbutton} {deletebutton}
    </CardActions>
    </CardContent>
  </Card>
);
}


     
