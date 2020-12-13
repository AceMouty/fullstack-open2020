import React from 'react'

export default function ButtonBad(props) {
    const { badHandler } = props;

    function clickHandler() {
        badHandler()
    }
    return <button onClick={clickHandler}>bad</button>
}