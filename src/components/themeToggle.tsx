import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [savedTheme, setSavedTheme] = useState("light"); 

  // This checks if a theme is stored in local storage so the user doesnt have to change it each time if they already chose it before
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme) {
      setSavedTheme(storedTheme);
      document.body.classList.add(`${storedTheme}-theme`);
    }
  }, []);

  // Toggles the theme between dark and light and stores that info in local storage
  //Classes storing the color variables for each theme are in variables.scss
  function toggleTheme() {
    const newTheme = savedTheme === "dark" ? "light" : "dark";
    
    setSavedTheme(newTheme); 
    document.body.classList.remove(`${savedTheme}-theme`);
    document.body.classList.add(`${newTheme}-theme`);
    localStorage.setItem("theme", newTheme); 
  }

  return (
    <>
      <div className="">
        <label className="switch">
          <input type="checkbox" checked={savedTheme === "dark"} onClick={toggleTheme} />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
};

export default ThemeToggle;
