import React, { Component, useState } from "react";
import Options from "./Options.js";
import Input from "./Input.js";
import TakeSurvey from "./TakeSurvey";
import "./createSurvey.css"
function CreateSurvey(props) {
  const [btn, setbtn] = useState(false);
  const [slct, setslct] = useState(false);
  const [val, setval] = useState("Select Question Type");
  const [array, setarray] = useState([{ text: "" }]);
  const [surveyList, setsurveyList] = useState([]);
  const [question, setquestion] = useState("");
  const [isPublished, setIsPublished] = useState(true);
  const handleArray = (event) => {
    const arr = array.slice();
    arr.push({ text: "" });
    setarray(arr);
  };
  const change = (event, id) => {
    let text = event.target.value;
    let arrayCopy = [...array];
    arrayCopy[id].text = text;
    setarray(arrayCopy);
  };
  const handleNegative = (event, id) => {
    const arr = array.slice();
    const filteredArray = arr.filter((item, index) => index != id);
    setarray(filteredArray);
  };
  const addobj = () => {
    let obj = {
      questionType: val,
      question: question,
      answer: array,
    };
    setslct(false);
    let copysurveyList = [...surveyList];
    copysurveyList.push(obj);
    setsurveyList(copysurveyList);
    setval("Select Question Type");
    setarray([{ text: "" }]);
    setquestion("");
  };
  const handlePublish = () => {
    let obj = {
      questionType: val,
      question: question,
      answer: array,
    };
    setslct(false);
    let copysurveyList = [...surveyList];
    copysurveyList.push(obj);
    setsurveyList(copysurveyList);
    setval("Select Question Type");
    setarray([{ text: "" }]);
    setquestion("");
    setIsPublished(false);
  };
  return (
    <>
      {isPublished ? (
        <div>
         
          <select
            value={val}
            id="options"
            className="options"
            onChange={(event) => {
              setslct(true);
              setval(event.target.value);
              if (event.target.value === "single-select")
                setarray([{ text: "Yes" }, { text: "No" }]);
            }}
          >
            <option value="do-select">Select Question Type</option>
            <option value="multi-select">multi-select</option>
            <option value="single-select">single-select</option>
          </select>
            
          {slct && (
            <>
              <Input setquestion={setquestion} />
              <h4 className="h1p mt-2 ">Options</h4>
              {val == "multi-select" ? (
                array.map((item, index) => (
                  <Options
                    handleNegative={handleNegative}
                    id={index}
                    key={index}
                    array={array}
                    handleArray={handleArray}
                    change={change}
                  />
                ))
              ) : (
                  <>
                    <Options
                      id={0}
                      handleNegative={null}
                      handleArray={handleArray}
                      change={change}
                      array={array}
                    />
                    <Options
                      id={1}
                      handleNegative={null}
                      handleArray={handleArray}
                      change={change}
                      array={array}
                    />
                  </>
                )}
            </>
          )}
          {(array.length == 4 || val === "single-select") && (
            <div className="buttondiv">
              <button
                className="btn btn-danger m-2"
                onClick={addobj}
              >
                Add Question
              </button>
              <button
                className="btn btn-danger m-2"
                onClick={handlePublish}
              >
                Publish
                </button>
            </div>
          )}
        </div>
      ) : (
          <div>
            <TakeSurvey surveyList={surveyList} />
          </div>
        )}
    </>
  );
}
export default CreateSurvey;