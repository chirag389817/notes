import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillSave } from "react-icons/ai";
import { RiEditBoxFill } from "react-icons/ri";
import { useNotes } from "../contexts/NotesContext";

function Note(props) {
    const notesManager = useNotes();
    const [note, setNote] = useState(props.value);

    useEffect(() => {
        setNote(props.value);
    }, [props.value, props.active]);

    return (
        <>
            <div className="px-4 py-2 flex items-center border-b-[1px] border-gray-400">
                <textarea
                    className="w-1 flex-grow resize-none focus:outline-none cursor-text"
                    value={note}
                    rows={props.active ? 5 : 2}
                    onChange={(e) => setNote(e.target.value)}
                    onClick={() => {
                        props.setActive(props.index);
                    }}
                />
                {props.active ? (
                    <AiFillSave
                        className="p-2 text-4xl cursor-pointer hover:bg-blue-500 hover:text-white rounded"
                        onClick={() => {
                            notesManager.updateNote(note, props.index);
                            notesManager.setActive(-1);
                        }}
                    />
                ) : (
                    <AiFillDelete
                        onClick={() => {
                            notesManager.deleteNote(props.index);
                        }}
                        className="p-2 text-4xl cursor-pointer hover:bg-blue-500 hover:text-white rounded"
                    />
                )}
            </div>
        </>
    );
}

export default Note;
