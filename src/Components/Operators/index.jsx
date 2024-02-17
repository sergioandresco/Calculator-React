import React from "react";
import './Operators.css';

function Operators({ onClickOperator, onClickResult }){

    const handleOperatorClick = (operator) => {
        onClickOperator(operator);
    }

    const handleResultClick = (operator) => {
        onClickResult(operator);
    }

    return(
        <React.Fragment>

            <div className="container-operators">

                <button className="container-operators--button" onClick={() => handleResultClick("delete")} >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAS5JREFUSEvtVUtuwkAMfUbqKUildEm4BCyrwBmAk5SeJL1DG3VJLgFZkkU4RWlcOcho1MzkM1J2ZDmx33t+tmcII380Mj4eBJ0Ot1oUfJ0OICw6UYwABgqqaFeuZ5kcOwl8wJVHSC5x9OIkmKbHhEDbIcr/x5ZxVItvVBB85gtM+GAH53cGbQgI5b8oBTizibESdIGX8XwffufhT3UToF7bKm4QSOK14rPLFlH7NKFl8Tor6tgrQmmkK69B0KepJokIaRPlTWCOoNqlPTGrt1ok3tqCtaEKLsBypnbZ8qxNbiuZwR+XeL7TGNOuXk3W8p7TfMvgxDWmAL2ZCzVoTDUxSI97E8hn4ZyLdp+OX06G3kN3IYysXEXL1ruo9tqDpPdl52OLLefxonU6ObpFfwbSuBm9+rjpAAAAAElFTkSuQmCC"/>
                </button>

                <button className="container-operators--button" onClick={() => handleOperatorClick("/")} >
                    /
                </button>

                <button className="container-operators--button" onClick={() => handleOperatorClick("X")} >
                    X
                </button>

                <button className="container-operators--button" onClick={() => handleOperatorClick("-")} >
                    -
                </button>

                <button className="container-operators--button" onClick={() => handleOperatorClick("+")} >
                    +
                </button>

                <button className="container-operators--button" onClick={() => handleResultClick("=")} >
                    =
                </button>

            </div>

        </React.Fragment>
    );
}

export { Operators };