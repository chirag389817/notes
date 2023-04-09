import React, { useEffect, useState } from "react";
import { useNotes } from "../contexts/NotesContext";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Toolbar from "./Toolbar";

function Home() {
    const { notes, active, setActive } = useNotes();

    return (
        <div className="w-5/6 h-[85%] lg:w-1/2 p-5">
            <Toolbar />
            <CreateNote />
            {notes.length > 0 && (
                <div className="mt-5 bg-white rounded-xl border-gray-400 border-2 overflow-hidden">
                    {notes.map((note, index) => {
                        console.log(note + " " + index);
                        return (
                            <Note
                                key={index}
                                value={note}
                                index={index}
                                active={active === index}
                                setActive={setActive}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Home;
