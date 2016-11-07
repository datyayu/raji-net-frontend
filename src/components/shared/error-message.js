// @flow
import React from 'react';


type ErrorMessageProps = 
    { text: string
    }
;


export function ErrorMessage({ text='Error at fetching. Try again later.' }: ErrorMessageProps) {
    return (
        <h3 className="error-message"> {text} </h3>
    );
}
