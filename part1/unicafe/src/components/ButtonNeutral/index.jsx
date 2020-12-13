import React from 'react';

export default function ButtonNeutral(props) {
    const { neutralHandler } = props;

    function clickHandler() {
        neutralHandler()
    }

    return <button onClick={clickHandler}>neutral</button>
}