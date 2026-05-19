import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function SettingsPage() {

    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <h2>Settings Page</h2>
            <p>Current Theme: {theme}</p>
        </div>
    );
}

export default SettingsPage;