import React, {useState} from 'react';
import './Calculator.css';
import { Display } from '../Display';
import { Numbers } from '../Numbers';
import { Operators } from '../Operators';

function Calculator(){

    const[displayValue, setDisplayValue] = useState('');

    const handleClickNumber = (number) => {
        setDisplayValue(displayValue + number)
    };

    return(
        
        <React.Fragment>

            <div className="container-calculator">

                <Display value={displayValue} />

                <div className="container-calculator--buttons">

                    <Numbers onClickNumber={handleClickNumber} />

                    <Operators onClickOperator={handleClickNumber} />

                </div>
                
            </div>


        </React.Fragment>

    );
}

export { Calculator };