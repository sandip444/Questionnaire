import React, { useState } from "react";

const RadioList = () => {
    const [radios, setRadios] = useState([
        { id: 1, value: "", placeholder:"First Option", isChecked: false },
        // { id: 2, value: "", placeholder: "Second Option", isChecked: false }
    ]);

    const handleAddRadio = (e) => {
        e.preventDefault()
        const newRadio = {
            id: radios.length + 1,
            value: "",
            isChecked: false,
        };
        setRadios([...radios, newRadio]);
        console.log(radios)
    };

    const handleRemoveRadio = (id) => {
        setRadios(radios.filter((radio) => radio.id !== id));
    };

    const handleChange = (event, id) => {
        const updatedRadios = radios.map((radio) => {
            if (radio.id === id) {
                return { ...radio, value: event.target.value };
            }
            return radio;
        });
        setRadios(updatedRadios);
    };

    const handleRadioClick = (id) => {
        const updatedRadios = radios.map((radio) => {
            if (radio.id === id) {
                return { ...radio, isChecked: true };
            }
            return { ...radio, isChecked: false };
        });
        setRadios(updatedRadios);
    };

    return (
        <div>
            {radios.map((radio) => (
                <div key={radio.id} className="checkbox-input">
                    <input
                        type="radio"
                        checked={radio.isChecked}
                        onChange={() => handleRadioClick(radio.id)}
                    />
                    <input
                        type="text"
                        value={radio.value}
                        placeholder={radio.placeholder}
                        onChange={(event) => handleChange(event, radio.id)}
                    />
                    <button className="close-icon" onClick={() => handleRemoveRadio(radio.id)}>X</button>
                </div>
            ))}
            <button className="d-flex" onClick={e=>handleAddRadio(e)}>Add</button>
        </div>
    );
};

export default RadioList;
