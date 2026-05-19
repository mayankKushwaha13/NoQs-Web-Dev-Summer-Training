import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";
import SettingsPage from "./components/SettingsPage";

function App() {

    return (
        <div className="app">
            <Header />
            <ThemeButton />
            <SettingsPage />
        </div>
    );
}

export default App;