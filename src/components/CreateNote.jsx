import React, { useState } from "react";
import { useNotes } from "../contexts/NotesContext";

function CreateNote() {
    const notesManager = useNotes();
    const [note, setNote] = useState("");
    const handleChange = (event) => {
        setNote(event.target.value);
    };
    const addNote = () => {
        notesManager.addNote(note);
        setNote("");
    };
    return (
        <>
            <div className="mt-5 bg-white rounded-xl border-gray-400 border-2 overflow-hidden">
                <textarea
                    className="px-4 py-2 w-full focus:outline-none resize-none"
                    value={note}
                    placeholder="Type your note here..."
                    onChange={handleChange}
                    rows="5"
                />
            </div>
            <div className="flex justify-end mt-2 text-sm">
                <button
                    onClick={() => {
                        setNote("");
                    }}
                    className="px-5 mx-2 py-2 bg-red-300 hover:opacity-80 rounded"
                >
                    Discard
                </button>
                <button
                    onClick={addNote}
                    className="px-5 mx-2 py-2 bg-green-300 hover:opacity-80 rounded"
                >
                    save
                </button>
            </div>
        </>
    );
}

export default CreateNote;
