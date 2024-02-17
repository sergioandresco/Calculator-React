import React, {useState} from 'react';
import './Calculator.css';
import { Display } from '../Display';
import { Numbers } from '../Numbers';
import { Operators } from '../Operators';

function Calculator(){

    const[displayValue, setDisplayValue] = useState('');
    const[result, setResult] = useState('');

    const handleClickNumber = (number) => {
        setDisplayValue(displayValue + number)
    };

    const handleClickResult = (operator) => {
        
        if(operator === "="){

            console.log(displayValue);

            const numeros = displayValue.split(/[+\-*/]/).map(num => parseInt(num, 10));
            const signos = displayValue.match(/[+\-*/]/g);
            let resultado = numeros[0];

            for (let i = 0; i < signos.length; i++) {
                if (signos[i] === "+") {
                    resultado += numeros[i + 1];
                } else if (signos[i] === "-") {
                    resultado -= numeros[i + 1];
                } else if (signos[i] === "*") {
                    resultado *= numeros[i + 1];
                } else if (signos[i] === "/") {
                    resultado /= numeros[i + 1];
                }
            }

            console.log(resultado);

        }

    }

    return(
        
        <React.Fragment>

            <div className="container-calculator">

                <Display value={displayValue} />

                <div className="container-calculator--buttons">

                    <Numbers onClickNumber={handleClickNumber} />

                    <Operators 
                        onClickOperator={handleClickNumber}
                        onClickResult={handleClickResult} 
                    />

                </div>
                
            </div>


        </React.Fragment>

    );
}

export { Calculator };