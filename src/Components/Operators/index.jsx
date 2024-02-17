import React from "react";
import './Operators.css';

function Operators({ onClickOperator }){

    const handleOperatorClick = (operator) => {
        onClickOperator(operator);
    }

    return(
        <React.Fragment>

            <div className="container-operators">

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

                <button className="container-operators--button" onClick={() => handleOperatorClick("=")} >
                    =
                </button>

            </div>

        </React.Fragment>
    );
}

export { Operators };