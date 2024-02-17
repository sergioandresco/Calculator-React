import React, {useState} from 'react';
import './Calculator.css';
import { Display } from '../Display';
import { Numbers } from '../Numbers';

function Calculator(){

    const[displayValue, setDisplayValue] = useState('');

    const handleClickNumber = (number) => {
        setDisplayValue(displayValue + number)
    };

    return(
        
        <React.Fragment>

            <div className="container-calculator">

                <Display value={displayValue} />
                
                <Numbers onClickNumber={handleClickNumber} />
                
            </div>


        </React.Fragment>

    );
}

export { Calculator };