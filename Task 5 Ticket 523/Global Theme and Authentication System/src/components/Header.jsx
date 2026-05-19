import { useState } from "react";

function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <header>
            <h1>React Hooks Assessment</h1>

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