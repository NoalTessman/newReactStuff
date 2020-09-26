import React from 'react'

export function dattom(){
    let currdate= Date.now();
    currdate = currdate +24*60*60*1000;
    return `${currdate}`
}
