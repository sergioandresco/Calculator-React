import React from "react";
import './Numbers.css'

function Numbers({ onClickNumber }){

    const handleNumberClick = (number) => {
        onClickNumber(number)
    }

    return(
        <React.Fragment>

            <div className="container-numbers">

                <button className="numbers" onClick={() => handleNumberClick(1)} >
                    1
                </button>

                <button className="numbers" onClick={() => handleNumberClick(2)} >
                    2
                </button>

                <button className="numbers" onClick={() => handleNumberClick(3)} >
                    3
                </button>

                <button className="numbers" onClick={() => handleNumberClick(4)} >
                    4
                </button>

                <button className="numbers" onClick={() => handleNumberClick(5)} >
                    5
                </button>

                <button className="numbers" onClick={() => handleNumberClick(6)} >
                    6
                </button>

                <button className="numbers" onClick={() => handleNumberClick(7)} >
                    7
                </button>

                <button className="numbers" onClick={() => handleNumberClick(8)} >
                    8
                </button>

                <button className="numbers" onClick={() => handleNumberClick(9)} >
                    9
                </button>

                <button className="numbers" onClick={() => handleNumberClick(0)} >
                    0
                </button>



            </div>

        </React.Fragment>
    );
}

export { Numbers }