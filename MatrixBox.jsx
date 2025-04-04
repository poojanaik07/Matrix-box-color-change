import React, { useState } from 'react'

export default function MatrixBox(){
    const size = 3;
    const matrix = size * size;
    const [boxColors , setBoxColors]= useState(Array(matrix).fill("white"));
    const [clickSeq , setClickSeq] = useState([]);

    const handleClick = (index) => {
        if (boxColors[index] === "white"){
            const newColors =[...boxColors];
            newColors[index] = "green";
            setBoxColors(newColors);

            const newClickseq = [...clickSeq, index];
            setClickSeq(newClickseq);
            if (newClickseq.length === matrix) {
                changeCol(newClickseq);
            }
        }
    };
    const changeCol = (sequence) => {
        sequence.forEach((index, i) => {
            setTimeout(()=> {
                setBoxColors((prevCol) => {
                    const updateColors = [...prevCol];
                    updateColors[index] = "orange";
                    return updateColors;
                });
            }, i * 500);
        });
    };
    return (
        <div className='matrix-container'>
            <h1>Click on the Box</h1>
            <div className='matrix-grid'>
                {boxColors.map((color, index)=> (
                    <div key = {index}
                    className='matrix-box'
                    onClick={() => handleClick(index)}
                    style ={{ backgroundColor: color }}/>
                    
                ))}
                
            </div>
        </div>
    )
}