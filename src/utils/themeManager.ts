// funcion se encarga de cambiar el theme

export const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
};


const setDarkMode = () => {
    const theme = localStorage.getItem("theme"); // Obtener el valor de 'theme' en localStorage

    if (theme === "dark") {
        document.documentElement.classList.add("dark"); // Agregar la clase 'dark' si el tema es 'dark'
    } else {
        document.documentElement.classList.remove("dark"); // Quitar la clase 'dark' si el tema no es 'dark'
    }

    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', handleToggleClick)

};

export const initializeTheme = () => {
    setDarkMode(); // Inicializar el tema al cargar la página
};