import React from 'react';

function ModalConductor(state={
    modal: false
}){ switch (state.modal){
    case 'false':
        return {...state}

    // case 'p1i1'

        

    default:
        return state;
}}