import React from 'react';

const Validation = ( props ) => {
let validationMessage = "hold on this text is long enough"; 

if (props.inputLength <= 5 ){
    validationMessage = "This text is as short as a rat";
}
return(
    <div>
        <p> {validationMessage}</p>
    </div>
 )

};
 
export default Validation;