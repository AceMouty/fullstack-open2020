import React from 'react';

export default function ButtonGood(props) {
    const { goodHandler } = props;

    function clickHandler() {
        goodHandler()
    }
    return <button onClick={clickHandler}>good</button>
}