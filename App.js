import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import TextForm  from  './TextForm';

import Alert from './Alert';

function App() {
  const [mode, setMode]=useState('light');// whether dark mode is enabled or not
const[alert,setAlert]=useState(null);

const showAlert =(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
setAlert(null);
  },2000);
}

const toggleMode = ()=>{
if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor= '#1f275f';
  showAlert("Dark mode has been enabled","success");
  document.title='TextUtils - DarkMode'
 //setInterval(()=>{
  //document.title = 'TextUtils is Amazing Mode';
 //},2000);
 //setInterval(() => {
  //document.title = 'Install TextUtils Now';
 //},1500);
}
else{
  setMode ('light');
  document.body.style.backgroundColor= 'white';
  showAlert("Light mode has been enabled","success");
  document.title='TextUtils - LightMode'
   }
}
return (
    <>
    {/*<Navbar  title="TextUtils" AboutText="About TextUtils"/>*/} 
    {/* <Navbar> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> 
    
    </div>
    </>
  );
}
export default App;
