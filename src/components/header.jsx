import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="bg-transparent text-black">
        <div className="px-4 flex justify-around items-center h-16">
            <Link to="/Home" className="text-2xl font-bold">creativenoodle.</Link>
           
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-4">
                    {['Home', 'About', 'Services', 'Contacts'].map((tab) => (
                        <div key={tab} className="flex flex-col items-center font-bold justify-center">
                            <NavLink
                                to={`/${tab.toLowerCase()}`} // React Router link
                                onClick={() => setActiveTab(tab)}
                                className={({ isActive }) =>
                                    `py-2 px-4 rounded-md border-b-2 border-transparent transition-all duration-300 ${
                                        isActive ? 'text-black border-transparent bg-yellow' : 'hover:bg-yellow hover:text-black'
                                    }`
                                }
                            >
                                {tab}
                            </NavLink>
                            {activeTab === tab && (
                                <div className="w-3 h-3 bg-yellow rounded-full mt-1"></div>
                            )}
                        </div>
                    ))}
                </div>

            {/* Hamburger button */}
            
            <div
                className="lg:hidden flex flex-col justify-between h-6 w-8 cursor-pointer mt-1" 
                onClick={() => setIsOpen(!isOpen)}>

                <span className={`block h-1 bg-black transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-1 bg-black transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-1 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div> 
        </div>

            {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden bg-yellow w-3/5 mx-auto rounded-lg">
                        {['Home', 'About', 'Services', 'Contacts'].map((tab) => (
                        <NavLink
                            key={tab}
                            to={`/${tab.toLowerCase()}`}
                            onClick={() => {
                            setActiveTab(tab);
                            setIsOpen(false);
                            }}
                            className={({ isActive }) =>
                                `block py-2 px-4 text-center rounded-lg justify-center items-center hover:text-black hover:bg-hover w-1/5 mx-auto ${
                            isActive ? 'text-black font-bold bg-yellow-400' : ''
                            }`
                        }
                    >
                        {tab}
                        </NavLink>
                      ))}
               </div>  
            )}   
      </div>
    );
};


export default Header