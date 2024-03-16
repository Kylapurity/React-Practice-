import React from "react";
function Header() {
    return (
        <div className =" flex justify-around items-center  h-24  max-w-[1240] mx-auto px-4 text-white">
            <h1 className="text-3xl font-bold underline uppercase text-blue-500">Able Tech</h1>
            <ul className=" flex items-center mr-15" >
                <li className="p-6 text-2xl uppercase">Home</li>
                <li className="p-6 text-2xl uppercase">About</li>
                <li className="p-6 text-2xl uppercase">Services</li>
                <li className="p-6 text-2xl uppercase">Projects</li>
                <li className="p-6 text-2xl uppercase">Contact</li>
            </ul>
        </div>
    );
}
export default Header;