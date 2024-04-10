

import './App.css'
import ContactHeader from './Components/ContactHeader/ContactHeader';
import Navigation from "./Components/Navigation/Navigation";
import ContactForm from "./Components/ContactForm/ContactForm"



function App() {


  return (
    <>
    <Navigation/>

    <main className='main_container'>
    <ContactHeader/>
    <ContactForm/>
   
    </main>
    
     
       
    </>
  )
}

export default App
