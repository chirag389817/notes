import Warn from "./components/Warn";
import React, { useState } from "react";
import Home from "./components/Home";
import NotesContextProvider from "./contexts/NotesContext";

function App() {
    const [warn, setWarn] = useState({
        show: true,
        msg: "Your notes will be saved locally on your browser"
    });
    const showWarn = (message) => {
        setWarn({
            show: true,
            msg: message
        });
    };
    const hideWarn = () => {
        setWarn({
            show: false
        });
    };
    return (
        <NotesContextProvider>
            {warn.show && <Warn msg={warn.msg} hide={hideWarn} />}
            <div className="h-screen w-screen bg-slate-200 flex justify-center items-center">
                <Home />
            </div>
        </NotesContextProvider>
    );
}

export default App;
