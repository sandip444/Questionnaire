import { computeHeadingLevel } from "@testing-library/react";
import React, { useState } from "react";

const DropdownList = () => {
    const [dropdowns, setDropdowns] = useState([
        { id: 1, value: "" },
    ]);

    const handleAddDropdown = (e) => {
        e.preventDefault()
        const newDropdown = {
            id: dropdowns.length + 1,
            value: "",
        };
        setDropdowns([...dropdowns, newDropdown]);
        console.log(dropdowns)
    };

    const handleRemoveDropdown = (id) => {
        setDropdowns(dropdowns.filter((dropdown) => dropdown.id !== id));
    };

    return (
        <div>
            {dropdowns.map((dropdown) => (
                <div key={dropdown.id} className="checkbox-input">
                <input type="text" placeholder="First Option"/>       
                    <button className="close-icon" onClick={() => handleRemoveDropdown(dropdown.id)}>X</button>
                </div>
            ))}
            <button className="d-flex" onClick={e=>handleAddDropdown(e)}>Add</button>
        </div>
    );
};

export default DropdownList;