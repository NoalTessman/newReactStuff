import React from 'react';
function App() {
  const [darkMode, setDarkMode] = 
  React.useState(getInitialMode());
  React.useEffect(()=>{
    localStorage.setItem('dark', JSON.stringify(darkMode))
  }, [darkMode])

  function getInitialMode(){
    const savedMode = JSON.parse(localStorage.getItem('dark'))
    getPrefColors()
    return savedMode || false;
  }

  function getPrefColors(){
    if (!window.matchMedia) return;

    window.matchMedia("(prefers-colors-scheme: dark)")
    console.log(window.matchMedia("(prefers-colors-scheme: dark)"))

  }
  return (
    <div className={darkMode ? "dark-mode": "light-mode"}>
      <nav>
        <div className="toggle-container">
          <button onClick={() => setDarkMode(prevMode => !prevMode)}>Toggle Mode</button>
        </div>
      </nav>
      <main>
        <h1>{darkMode ? "Dark Mode": "Light Mode"}</h1>
        <h2>Toggle the switch to see some magic happen!</h2>
      </main>
    </div>)
}

export default App;
