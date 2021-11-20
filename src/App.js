import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import './App.css';

function App() {
  return (
    <div className="cover">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}
// card 1 details//
function Card1(){
  return(
<div className="card-body">
  <div className="title">
<h5 className="color">FREE</h5>
<h5><center>
<span class="period">$0</span>/month</center></h5>
</div>
<Divider></Divider>
<p><CheckIcon></CheckIcon>Single User</p>
<p><CheckIcon></CheckIcon>5GB storage</p>
<p><CheckIcon></CheckIcon>Unlimited Public Project</p>
<p className="edit"><CheckIcon></CheckIcon>Community Access</p>
<p><ClearIcon></ClearIcon>Unlimited Private Project</p>
<p><ClearIcon></ClearIcon>Dedicated Phone Support</p>
<p><ClearIcon></ClearIcon>Unlimited Private Project</p>
<p><ClearIcon></ClearIcon>Free Subdomain</p>
<p><ClearIcon></ClearIcon>Monthly Salary Reports</p>
<Button className="button" variant="contained">BUTTON</Button>
</div>
  )
}
// card 2 details//
function Card2(){
  return(
<div className="card-body">
  <div className="title">
 <h5 className="color">PLUS</h5>
<h5><center>
<span className="period"> $9</span>/month </center></h5>
</div>
<Divider></Divider>
<p><CheckIcon></CheckIcon>5 User</p>
<p><CheckIcon></CheckIcon>5GB storage</p>
<p><CheckIcon></CheckIcon>Unlimited Public Project</p>
<p><CheckIcon></CheckIcon>Community Access</p>
<p><CheckIcon></CheckIcon>Unlimited Private Project</p>
<p><CheckIcon></CheckIcon>Dedicated Phone Support</p>
<p><CheckIcon></CheckIcon>Unlimited Private Project</p>
<p className="edit"><CheckIcon></CheckIcon>Free Subdomain</p>
<p><ClearIcon></ClearIcon>Monthly Salary Reports</p>
<Button  className="button" variant="contained">BUTTON</Button>
</div>
  );
}
// card3 details//
function Card3(){
  return(
<div className="card-body">
<div className="title">
<h5 >PRO</h5>
<h5><center><span className="period"> $49</span>/month</center></h5>
</div>
<Divider></Divider>
<p><CheckIcon></CheckIcon> Unlimited User</p>
<p><CheckIcon></CheckIcon>150p storage</p>
<p><CheckIcon></CheckIcon>Unlimited Public Project</p>
<p><CheckIcon></CheckIcon>Community Access</p>
<p><CheckIcon></CheckIcon>Unlimited Private Project</p>
<p><CheckIcon></CheckIcon>Dedicated Phone Support</p>
<p><CheckIcon></CheckIcon>Unlimited Private Project</p>
<p><CheckIcon></CheckIcon><b>Unlimited</b> Free Subdomain</p>
<p><CheckIcon></CheckIcon>Monthly Salary Reports</p>
<Button className="button" variant="contained">BUTTON</Button>
</div>
  )
}
export default App;


















































