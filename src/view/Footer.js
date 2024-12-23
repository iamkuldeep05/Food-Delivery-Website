import { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";

const Footer = () => {

    const {LoggedInUser} = useContext(UserContext);


    return (

        <div className="border-b-2 p-2 shadow-2xl bg-[#ffffff]  w-[100%] bottom-0 text-center">
            <div className="text-center">© 2024 {LoggedInUser}. All rights reserved.</div>
        </div>
 
    );
}

export default Footer;
