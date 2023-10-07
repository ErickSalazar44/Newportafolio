import { useState } from "react";


const SwitchDarkMode = () => {

    const [isDarkMode, setIsDarkMode] = useState(false); // Estado para controlar el modo oscuro

    // Función para alternar el modo oscuro
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode); // Invierte el estado actual
        const body = document.body;
        if (!isDarkMode) {
            body.classList.add("dark"); // Agrega la clase "dark"
        } else {
            body.classList.remove("dark"); // Quita la clase "dark"
        }
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="fixed bottom-5 right-5">
            <svg strokeWidth="2.21" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="p-2 w-12 h-12 rounded-2xl dark:bg-text2 bg-textDark2 text-text dark:text-textDark dark:stroke-textDark2 stroke-text2 border-x-[1px] border-bMain dark:border-bMainDark"><path d="M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1" strokeWidth="2.21" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </button>
    )
}

export default SwitchDarkMode