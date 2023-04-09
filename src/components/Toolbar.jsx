import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useNotes } from "../contexts/NotesContext";

function Toolbar() {
    const notesManager = useNotes();

    return (
        <div className="flex justify-between">
            <div className="bg-white flex items-center rounded-xl border-gray-400 border-2">
                <BiSearch className="mx-2 text-2xl text-gray-400" />
                <input
                    className="focus:outline-none w-full mr-2"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => notesManager.filterNotes(e.target.value)}
                />
            </div>
            <button
                onClick={notesManager.deleteAll}
                className="px-3 mx-1 py-2 text-sm bg-red-300 hover:opacity-80 rounded flex whitespace-nowrap"
            >
                <AiFillDelete className="text-xl " />
                Delete all
            </button>
        </div>
    );
}

export default Toolbar;
