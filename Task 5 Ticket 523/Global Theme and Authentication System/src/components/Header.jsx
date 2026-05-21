import { useState } from "react";
// import img from "../assets/image.png"; 
import img from "../assets/image.webp"; // optimisation


function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <header>
            <h1>React Hooks Assessment</h1>

            {/* <img src={img} alt="quote" width = "300"/>  */}
            
            <img src={img} alt="quote" width = "300" loading="lazy"/> 

            {
                isLoggedIn ? (
                    <>
                        <span>👤 User Profile</span>
                        <button onClick={() => setIsLoggedIn(false)}>
                            Logout
                        </button>
                    </>
                ) : (
                    <button onClick={() => setIsLoggedIn(true)}>
                        Sign In
                    </button>
                )
            }
        </header>
    );
}

export default Header;