import React, { useContext , useState} from "react";
import { HookContext } from "../hook/useHookProvider";
import ChatBot from "./ChatBotPage";
import DotLoad from "../components/load/DotLoad";
import Navbar from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Navbar as BootstrapNavbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";



export const HomePage = () => {
  // const { currentUser } = useContext(HookContext);
  const [visible, setVisible] = useState(false);

  const [searchText, setSearchText] = useState("");

  const handleSearchInput = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Logique de soumission de la recherche
  };

  const handleRoute = (route) => {
    // Logique de routage
  };



  return (
    
    <div style={{ display: "flex" }}>
    {/* Intégration du composant Sidebar */}
    <Sidebar />
    {/* Contenu principal */}
    <div style={{ flex: 1 }}>
      <BootstrapNavbar style={{ backgroundColor: "#712cf9", height: "74px" }}>
        <Nav className="mr-auto">
          {/* <Nav.Link onClick={() => handleRoute("/")} style={{  color:"white"}}>Accueil</Nav.Link>
          <Nav.Link onClick={() => handleRoute("/about")} style={{  color:"white"}}>A propos</Nav.Link> */}
        </Nav>
        <Form>
          <SearchBar />
        </Form>
      </BootstrapNavbar>
      {/* Contenu principal de votre application */}
      <div style={{ padding: "20px" }}>
        {/* Placez votre contenu principal ici */}
        



        <div>
   
   {/* <p>Current User: {currentUser ? currentUser.fullName : 'None'}</p>  */}

   {/* <ChatBot /> */}

   <div className="home-page">
  <div className="container">
   <div className="row">
     <div className="col">
       <div className="p-5 text-center bg-light">
         <h1 className="mb-3">I am learning Bootstrap</h1>
         <h4 className="mb-4">... and it's awesome!</h4>
         <a className="btn btn-primary btn-lg" href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" role="button">
           Learn with me
         </a>
       </div>
     </div>
   </div>
   <div className="row mt-5">
     <div className="col-md">
       <div className="card">
         <img src="https://via.placeholder.com/300" className="card-img-top" alt="..." />
         <div className="card-body">
           <h5 className="card-title">Card title</h5>
           <p className="card-text">
             Some quick example text to build on the card title and make up the bulk of the card's content.
           </p>
           <a href="#" className="btn btn-primary">Button</a>
         </div>
       </div>
     </div>
     <div className="col-md">
       <div className="card">
         <img src="https://via.placeholder.com/300" className="card-img-top" alt="..." />
         <div className="card-body">
           <h5 className="card-title">Card title</h5>
           <p className="card-text">
             Some quick example text to build on the card title and make up the bulk of the card's content.
           </p>
           <a href="#" className="btn btn-primary">Button</a>
         </div>
       </div>
     </div>
     <div className="col-md">
       <div className="card">
         <img src="https://via.placeholder.com/300" className="card-img-top" alt="..." />
         <div className="card-body">
           <h5 className="card-title">Card title</h5>
           <p className="card-text">
             Some quick example text to build on the card title and make up the bulk of the card's content.
           </p>
           <a href="#" className="btn btn-primary">Button</a>
         </div>
       </div>
     </div>
   </div>
 </div> 
</div>
</div>







      </div>
    </div>
  </div>



    
  );
};


export default HomePage;
