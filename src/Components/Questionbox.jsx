import React, { useState } from "react";
import Checkbox from './Checkbox'
import Radio from './Radio'
import Dropdown from './Dropdown'

const DynamicComponent = ({ id, onRemove, selectItem, setAnswer, setQuestion, setSelectItem ,dataFrom, setDataFromChild}) => {

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    console.log(dataFrom)
  };

  return (
    <>
      <form action="">
        <div className='Main-box'>
          <h3 className='text-title'>Question</h3>

          <input className='input-question' type="text" onChange={e => setQuestion(e.target.value)} placeholder='What do you want to ask' /><br />

          <h3 className='text-title'>Answer</h3>

          <select value={selectItem} className='text-select' onChange={e => setSelectItem(e.target.value)}>
            <option value="Short answer text">Short</option>
            <option value="Long answer text">Paragraph</option>
            <option value="Checkbox">Checkbox</option>
            <option value="Mutltiple Choice">Multile Chioce</option>
            <option value="Dropdown">Dropdown</option>
          </select> <br />

          {selectItem === "Short answer text" ? <input className='input-question2' type="text" onChange={e => setAnswer(e.target.value)} placeholder={selectItem} />
            : selectItem === "Long answer text" ? <textarea className='input-question2' type="text" onChange={e => setAnswer(e.target.value)} placeholder={selectItem} />
              : selectItem === "Checkbox" ? <Checkbox sendDataToParent={handleDataFromChild} />
                : selectItem === "Mutltiple Choice" ? <Radio />
                  : <Dropdown />}


          <h6>{id} of {id}</h6>
          {id > 1 ? <button onClick={() => onRemove(id)}>X</button> : ""}
        </div>
      </form>

    </>
  );
};

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
        <DynamicComponent
          dataFrom= {dataFrom}
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
