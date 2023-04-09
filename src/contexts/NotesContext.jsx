import React, { createContext, useContext, useEffect, useState } from "react";

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

function NotesContextProvider({ children }) {
    const [notes, setNotes] = useState([]);
    const [active, setActive] = useState(-1);

    const loadNotes = () => {
        let data = localStorage.getItem("saved_notes");
        if (data) {
            setNotes(JSON.parse(data));
        }
    };

    const filterNotes = (searchTxt) => {
        loadNotes();
        setNotes((prevNotes) => {
            return prevNotes.filter((note, index) => {
                if (note.toLowerCase().includes(searchTxt.toLowerCase())) {
                    return true;
                } else {
                    return false;
                }
            });
        });
    };

    const addNote = (note) => {
        setNotes((prevNotes) => {
            let newNotes = [...prevNotes, note];
            localStorage.setItem("saved_notes", JSON.stringify(newNotes));
            return newNotes;
        });
        console.log(note);
    };

    const deleteNote = (index) => {
        let newNotes = [...notes];
        newNotes.splice(index, 1);
        localStorage.setItem("saved_notes", JSON.stringify(newNotes));
        setNotes(newNotes);
    };

    const updateNote = (note, index) => {
        setNotes((prevNotes) => {
            let newNotes = [...prevNotes];
            newNotes[index] = note;
            localStorage.setItem("saved_notes", JSON.stringify(newNotes));
            return newNotes;
        });
    };

    const deleteAll = () => {
        setNotes([]);
        localStorage.removeItem("saved_notes");
    };

    useEffect(() => {
        loadNotes();
    }, []);
    useEffect(() => {
        if (notes.length == 0) {
            setActive(-1);
        }
    }, [notes]);

    return (
        <NotesContext.Provider
            value={{
                notes,
                addNote,
                deleteNote,
                deleteAll,
                filterNotes,
                updateNote,
                active,
                setActive
            }}
        >
            {children}
        </NotesContext.Provider>
    );
}

export default NotesContextProvider;
