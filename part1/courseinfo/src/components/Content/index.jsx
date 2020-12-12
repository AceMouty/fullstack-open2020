import React from 'react'
// Components
import Part from './Part'

export default function Content({ course }) {
    // unpack object
    const { parts } = course;
    // unpack array of objects
    const [part1, part2, part3] = parts;

    return (
        <>
            <Part part={part1.name} exercises={part1.exercises} />
            <Part part={part2.name} exercises={part2.exercises} />
            <Part part={part3.name} exercises={part3.exercises} />
        </>
    )
}