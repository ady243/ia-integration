import React from 'react';
import { HookContext } from '../hook/useHookProvider';
import { useContext, useEffect, useState } from 'react';


const Sidebar = () => {

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


  return (
    <aside id="separator-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 fix" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto dark:bg-[#01a8a8] flex flex-col justify-between">
        <div>
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="flex items-center p-2 text-black rounded-lg dark:text-white group">
                <svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-black group-hover:text-gray-900 dark:group-hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">{user ? user.fullName : 'None'}</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-black rounded-lg dark:text-white group">
                <svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-black group-hover:text-gray-900 dark:group-hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Mes favoris</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <a href="#"  onClick={logout} className="flex items-center p-2 text-black rounded-lg dark:text-white group">
                <svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-black group-hover:text-red-500 dark:group-hover:text-red-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap ">Se déconnecter</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    
    </aside>
  );
}

export default Sidebar;
