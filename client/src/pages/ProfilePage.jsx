import { Link } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import { useContext, useEffect, useState } from 'react';
import { HookContext } from '../hook/useHookProvider';
import useAllergy from "../hook/useAllergy";

const ProfilPage = () => {

    const { currentUser } = useContext(HookContext); 
    const { createAllergy, updateAllergy, getAllergies } = useAllergy();
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
    }, [])


    const handleAddAllergy = async (e) => {
        e.preventDefault();
        const allergen = e.target.allergy.value;
        try {
            await createAllergy(allergen);
            const allergies = await getAllergies();
            console.log(allergies);
            setUser({ ...user, allergies });
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className=" min-h-screen">
             <div className="container mx-auto flex items-center justify-between px-4 text-black">
                   
                </div>
            <div className="container mx-auto py-8">
            <div className="py-4">
               
            </div>
                <div className="bg-white  rounded-md p-6 ">
                <Link to="/" className="flex items-center text-white text-sm bg-[#0ab3b3]">
                        <SlArrowLeft className="mr-2" /> Retour
                    </Link>
                    <h2 className="text-xl font-bold mb-4 mt-8">Mes informations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nom complet</label>
                            <p className="text-lg font-semibold">{user ? user.fullName : ''}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <p className="text-lg font-semibold">{user ? user.email : ''}</p>
                        </div>
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700">Allergies</label>
                            <p>Ajouter les allergi</p>
                            <form onSubmit={handleAddAllergy}>
                                <input
                                    type="text"
                                    name="allergy"
                                    placeholder="Ajouter une allergie"
                                    className="border border-gray-300 p-2 w-full rounded-md"
                                />
                                <button type="submit" className="bg-[#0ab3b3] text-white p-2 mt-2 rounded-md">Ajouter</button>
                            </form>
                        </div>
                    </div>
                    <div className="bg-[#0ab3b3] w-full mt-8 text-[#0ab3b3]">.</div>
                </div>
            </div>
        </div>
    );
};
    

export default ProfilPage;
