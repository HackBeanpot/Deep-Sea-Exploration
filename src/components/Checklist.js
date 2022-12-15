import '../styles/global.css'
import { useState } from "react";

function Checklist() {
    const checkList = ["hat", "sunglasses", "water"];

    const [toAdd, setToAdd] = useState("");
    return (
        <div className="checklist-card">
            {/* Exercise 2: 
                    Make sure the checkList is apart of the state. Hint: use the useState hook */}
            {createCheckList(checkList)}
            {checkListButtons(toAdd, setToAdd)}
        </div>
    );
}

// Exercise 1:
// Add your name where it says "[Insert Name] Packing List"
function createCheckList(checkList) {
    return <div>
        <h1 className="list-header">[Insert Name] Packing List</h1>
        <ul >
            {checkList.map((item) => (
                <div>
                    <input value={item} type="checkbox" />
                    <span className="list-item">{item}</span>
                </div>
            ))}
        </ul>
    </div>
}

// Exercise 3:
// Enable the Clear All button to clear all items from the list


// Exercise 4: 
// Enable the Add Item button to add items to the checkList


function checkListButtons(toAdd, setToAdd) {
    return <div className="buttons-panel">
        <input className="inputs" value={toAdd} onChange={(e) => setToAdd(e.target.value)} />
        <button
            className="inputs"
            // onClick={}
        >
            Add item
        </button>
        <button
            className="inputs"
            // onClick={}
        >Clear All</button>
    </div>;
}


export default Checklist;