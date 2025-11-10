import { useTheme } from "./components/themeContext";

// Use in components that are only rendered on the client side

const Header = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <header>
            <h1>Welcome to My Website</h1>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
    );
}

export default Header;