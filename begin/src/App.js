
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Textcomp from './Component/Textcomp';
import React,{ useState } from 'react';  
import Alert from './Component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom"; 





function App() {

        const [mode, setmode] = useState('light');
        const [alert, setalert] = useState(null);
        

       
            
          
        

        const showalert=(messege,type)=>{
          setalert({
            msg:messege,
            type:type
          })
          setTimeout(() => {
            setalert(null)
            
          }, 1000);
        }

        const togglemode=()=>{
          if(mode==='light'){
            setmode('dark');
            document.body.style.backgroundColor='#063966'
            document.body.style.color ='white'; 
            showalert("dark mode activated", "success") 
            document.title='dark mode'  
          }
          else{
            setmode('light');
            document.body.style.backgroundColor='white'
            document.body.style.color ='black';
            showalert("light mode activated", "success")   
            document.title='light mode'
           

 
          }
   
          
           
        }


  return (
    <Router>
    
   <>
    
      <Navbar title="Carnage" home="hommie" mode={mode} tooglemode={togglemode}   />
    
      <Alert alert={alert}/>

       <div className="container my-3">
      <Routes>

          <Route path="/about" element={ <About  mode={mode}/>  }/>
          <Route path="/" element={<Textcomp showalert={showalert} heading="Yo Enter the text here" mode={mode} placeholder="write something"/>}/>
        
      </Routes>
       
        
      </div>

   </>
   </Router>
    
    
  );
}

export default App;
