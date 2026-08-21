import { useContext } from "react"
import { ThemeContext } from "../App"

const Home = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <div>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                style={{
                    padding: "20px 40px",
                    borderRadius: "50px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    backgroundColor: theme === "light" ? "#fff" : "#000",
                    color: theme === "light" ? "#000" : "#fff",
                    cursor: "pointer"
                }}
            >
                Current Theme: {theme}
            </button>
        </div>
    )
}

export default Home