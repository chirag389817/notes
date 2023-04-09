import React from "react";
import { MdClose } from "react-icons/md";

function Warn({ msg, hide }) {
    return (
        <div className="absolute top-0 left-0 w-full p-3 lg:p-5 bg-orange-200 rounded flex lg:text-xl items-center justify-between">
            <p>{msg}</p>
            <MdClose
                className="text-3xl text-red-600 cursor-pointer hover:bg-white hover:text-black rounded p-1"
                onClick={hide}
            />
        </div>
    );
}

export default Warn;
