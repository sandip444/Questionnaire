import React, { useState } from "react";
import Questionbox from "./Questionbox";
const DynamicComponentList = () => {
    const [components, setComponents] = useState([
        { id: 1, value: "" },
    ]);

    const handleAddComponent = () => {
        const newComponent = {
            id: components.length + 1,
            value: ''
        };
        setComponents([...components, newComponent]);
    };

    const handleRemoveComponent = (id) => {
        setComponents(components.filter((component) => component.id !== id));
    };
    const handalChange = (e) => {
        e.preventDefault()
        console.log(question)
        console.log(answer)
        console.log(selectItem)
        console.log(dataFrom)

    }
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [selectItem, setSelectItem] = useState("Short answer text")
    const [dataFrom, setDataFromChild] = useState()

    return (
        <div>
            {components.map((component) => (
                <Questionbox
                    dataFrom={dataFrom}
                    setDataFromChild={setDataFromChild}
                    question={question}
                    answer={answer}
                    selectItem={selectItem}
                    setAnswer={setAnswer}
                    setQuestion={setQuestion}
                    setSelectItem={setSelectItem}
                    key={component.id}
                    id={component.id}
                    onRemove={handleRemoveComponent}
                />
            ))}
            <button className='add-button' onClick={e => handleAddComponent(e)}>+ ADD QUESTION</button>
            <button className='save-button' onClick={e => handalChange(e)}>SAVE & SHARE</button>
        </div>
    );
};

export default DynamicComponentList;