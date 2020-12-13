import React from 'react'

export default function StatsPanel(props) {

    const { good, neutral, bad, avg, positive, all } = props;

    if (all === 0) return <h2>No feedback given</h2>

    return (
        <div>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            {!isNaN(avg) && <p>average {avg}</p>}
            {!isNaN(parseFloat(positive)) && <p>positive {positive}</p>}
        </div>
    )
}