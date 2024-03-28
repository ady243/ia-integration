
import { Link } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import { useContext, useEffect, useState } from 'react';
import { HookContext } from '../hook/useHookProvider';

const ProfilPage = () => {

    const { currentUser, logout, updateUser } = useContext(HookContext); 
    const [user, setUser] = useState(null);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
  
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
    }, [])

    const handleBlur = () => {
        updateUser({ ...user, fullName, email });
    }
    
    return (
        <div>
            <div className="mt-12 font-bold text-3xl rounded-full bg-gray">
            <Link to="/" className="flex items-center gap-2 text-[#202142] text-sm flex" style={{
                marginLeft: "1.5rem",
                color: "#202142",
                textDecoration: "none",

            }}>
              <SlArrowLeft/> Retour
            </Link>
            </div>
       <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
    <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
        <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">

            <h2 className="pl-3 mb-4 text-2xl font-semibold">Mes informations</h2>
        </div>
    </aside>
    <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">

                <div className="grid max-w-2xl mx-auto mt-8">

                    <div className="items-center mt-8 sm:mt-14 text-[#202142]">

                        <div
                            className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div className="w-full">
                                <label for="first_name"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black">Votre noms et prénoms
                                    </label>
                                    <input type="text" id="first_name"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                         value={user ? user.fullName : ''} onChange={(e) => setFullName(e.target.value)} onBlur={handleBlur} required/>
                            </div>

                        </div>

                        <div className="mb-2 sm:mb-6">
                            <label for="email"
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black">Votre
                                email</label>
                                <input type="email" id="email"
                                className=" border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="Your email" value={user ? user.email : ''} onChange={(e) => setEmail(e.target.value)} onBlur={handleBlur} required />
                        </div>

                        <div className="mb-2 sm:mb-6">
                            <label for="profession"
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black">Mes allergies</label>
                            <div className="mb-2 sm:mb-6">
                                <label htmlFor="allergies" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Vos allergies</label>
                                <ul>
                                    <li className="mb-1">Allergie aux arachides</li>
                                    <li className="mb-1">Allergie au lait</li>
                                    <li className="mb-1">Allergie aux œufs</li>
                                    <li className="mb-1">Allergie au soja</li>
                                    <li className="mb-1">Allergie au blé</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
</div>
    );
};
    

export default ProfilPage;