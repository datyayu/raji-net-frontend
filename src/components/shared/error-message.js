// @flow
import React from 'react';


type ErrorMessageProps = 
    { text: string
    }
;


export function ErrorMessage({ text='Error at fetching. Try again later.' }: ErrorMessageProps) {
    return (
        <h2> {text} </h2>
    );
}
