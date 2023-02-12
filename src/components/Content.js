import { ThemeContext } from "../context/ThemaContext";
import { useContext } from "react";

const Content = () => {
    const { isDark } = useContext(ThemeContext);

    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black',
            }}
        >
        <p>KHS 오늘도 열공하고, 좋은 하루 되십셔!</p>
        </div>
    )
}

export default Content;