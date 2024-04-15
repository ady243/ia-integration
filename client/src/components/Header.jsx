import { SlArrowDown, SlArrowUp, SlLogout, SlUser, SlHeart, SlSettings} from "react-icons/sl";
import { HookContext } from '../hook/useHookProvider';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { currentUser, logout } = useContext(HookContext); 
    const [user, setUser] = useState(null);
  
      useEffect(() => {
        if (currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            setUser(currentUser);
        }
    }, [currentUser]);
  
    useEffect(() => {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
          setUser(JSON.parse(storedUser));
      }
    }, []);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    
     const styleButton ={
        backgroundColor: isOpen ? 'white' : '#0ab3b3',
        color: isOpen ? '#000' : '#fff',
        border: isOpen ? '1px solid #000' : '1px solid #fff',
        borderRadius: '9px',
        height:"2.5rem",
        width:"15rem",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    }

    const StyleIcon ={
        marginLeft: "1.7rem",
        fontWeight: "bold",
        fontSize: "1.5rem",
        zIndex: "1",
        transition: "transform 0.3s",
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      
     }


    return (
        <div className="text-left bg-black relative mt-8">
            <div className="absolute top-0 right-12 mr-4 ">
            <button type="button" onClick={toggleMenu} className="inline-flex justify-center items-center text-sm font-medium text-back  focus:outline-none flex "
                style={styleButton}> <pan  style={{marginRight: "10px", fontSize:"1.5rem"}}> <SlSettings /></pan>
               {user ? user.fullName : 'None'} 
                    <span style={StyleIcon}>
                        {isOpen ? <SlArrowUp /> : <SlArrowDown />}
                    </span>
                </button>
            </div>

            {isOpen && (
               <div className="origin-top-right absolute right-12 mt-12 w-56 shadow-lg">
               <div className="py-1 bg-white" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                   <Link to="/favorite" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex" role="menuitem">
                       <span style={{marginRight: "10px"}}><SlHeart /></span> Mes favoris
                   </Link>
                   <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex" role="menuitem">
                    <span style={{marginRight: "10px"}}><SlUser /></span>
                       Mon profil
                   </Link>
                   <a href="#" onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 flex" role="menuitem">
                       <span style={{marginRight: "10px"}}><SlLogout /></span>
                       se déconnecter
                   </a>
               </div>
           </div>
            )}
        </div>
    );
};

export default Header;
