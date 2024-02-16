import React from "react";
import './Display.css'

function Display({ value }){
    return(

        <textarea rows="4" cols="50" value={value}>
        </textarea>

    );
}

export { Display }