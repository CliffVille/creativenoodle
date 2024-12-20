import React, { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="bg-transparent text-black">
        <div className="container mx-auto px-4 flex justify-around items-center h-16">
            <a href="#home" className="text-2xl font-bold">creativenoodle.</a>
           
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
                {['Home', 'About', 'Services', 'Contacts'].map((tab) => (
                    <div key={tab} className="flex flex-col items-center font-bold justify-center">
                   <a
                        key={tab}
                        href={`#${tab.toLowerCase()}`}
                        onClick={() => setActiveTab(tab)}
                        className={`py-2 px-4 rounded-md border-b-2 border-transparent transition-all duration-300 ${
                        activeTab === tab
                        ? 'text-black border-transparent bg-yellow'
                        : 'hover:bg-yellow hover:text-black'
                        }`}
                        >
                        {tab}
                    </a>
                    {activeTab === tab && (
                        <div className="w-3 h-3 bg-yellow rounded-full mt-1"></div>
                    )}
                 </div>
                ))}
            </div>


            {/* Hamburger button */}
            
            <div
                className="md:hidden flex flex-col justify-between h-6 w-8 cursor-pointer mt-1" 
                onClick={() => setIsOpen(!isOpen)}>

                <span className={`block h-1 bg-black transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-1 bg-black transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-1 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div> 
        </div>

            {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white">
                        {['Home', 'About', 'Services', 'Contacts'].map((tab) => (
                        <a
                            key={tab}
                            href={`#${tab.toLowerCase()}`}
                            onClick={() => {
                            setActiveTab(tab);
                            setIsOpen(false);
                            }}
                            className={`block py-2 px-4 w-[80px] rounded-md hover:text-black hover:bg-yellow ${
                            activeTab === tab
                            ? 'text-black font-bold bg-yellow-400'
                            : ''
                            }`}
                            >
                            {tab}
                        </a>
                      ))}
               </div>  
            )}   
      </div>
    );
};


export default Header