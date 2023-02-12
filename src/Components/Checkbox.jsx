import React, { useState } from "react";

const CheckboxList = (props) => {
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, value: "", isChecked: false },
    ]);

    const handleAddCheckbox = (e) => {
        e.preventDefault()
        const newCheckbox = {
            id: checkboxes.length + 1,
            value: "",
            isChecked: false,
        };

        props.sendDataToParent(checkboxes)
        setCheckboxes([...checkboxes, newCheckbox]);
    };

    const handleRemoveCheckbox = (id) => {
        setCheckboxes(checkboxes.filter((checkbox) => checkbox.id !== id));
    };

    const handleChange = (event, id) => {
        const updatedCheckboxes = checkboxes.map((checkbox) => {
            if (checkbox.id === id) {
                return { ...checkbox, value: event.target.value };
            }
            return checkbox;
        });
        setCheckboxes(updatedCheckboxes);
    };

    const handleCheckboxClick = (id) => {
        const updatedCheckboxes = checkboxes.map((checkbox) => {
            if (checkbox.id === id) {
                return { ...checkbox, isChecked: !checkbox.isChecked };
            }
            return checkbox;
        });
        setCheckboxes(updatedCheckboxes);
    };

    return (
        <div>
            {checkboxes.map((checkbox) => (
                <div key={checkbox.id} className="checkbox-input">
                    <input
                        type="checkbox"
                        checked={checkbox.isChecked}
                        onChange={() => handleCheckboxClick(checkbox.id)}
                    />
                    <input
                        type="text"
                        value={checkbox.value}
                        onChange={(event) => handleChange(event, checkbox.id)}
                    />
                    <button className="close-icon" onClick={() => handleRemoveCheckbox(checkbox.id)}>X</button>
                </div>
            ))}
            <button className="d-flex" onClick={e => handleAddCheckbox(e)}>Add</button>
        </div>
    );
};

export default CheckboxList;
