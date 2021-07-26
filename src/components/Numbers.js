import React, {useState, useEffect} from "react";

function Numbers(){
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        fetch("/numbers").
            then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setNumbers(jsonRes.numbersList))
    })
    return (
    <div>
        {numbers && numbers.map((number, index) => <li key={index}>{number}</li>)}
    </div>)
}

export default Numbers;