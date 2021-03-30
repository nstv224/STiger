import React from 'react'
import {Link} from "react-router-dom"
function TakeSurvey(props){


  return (
    <form>
     {props.surveyList.map((item,index)=>(
       <div key={index}>
        {item.questionType==='multi-select'?
         <React.Fragment>
         <p>{item.question}</p>
         <div className="checkbox1">{item.answer.map((itm,idx)=>(
           <React.Fragment>
            <label  key={idx}>
               <input
                 name={itm.text}
                 type="checkbox"/>
               {itm.text}
           </label>
           <br></br>
           </React.Fragment>
        
         ))}</div>
        </React.Fragment>:
        <React.Fragment>
        <p>{item.question}</p>
        <div className="checkbox2">{item.answer.map((itm,idx)=>(
          <React.Fragment>
           <label  key={idx}>
              <input
                name={itm.text}
                type="radio"/>
              {itm.text}
          </label>
          </React.Fragment>
       
        ))}</div>
       </React.Fragment>}
       </div>
     ))}
    <div className="buttondiv">
      <Link to="/">
       <button className="btn btn-outline-primary m-4 p-2">Confirm</button>
     </Link>
      </div>
    </form>
  )
}

TakeSurvey.defaultProps={
  surveyList:[
    {
      questionType:'multi-select',
      question:'How could you know about this post ?',
      answer:[{text:'Linkendin'},{text:'Whatsapp'},{text:'Facebook'},{text:'Instagram'}]
    },
    {
      questionType:'single-choice',
      question:'Is Everyone is presesnt here?',
      answer:[{text:'yes'},{text:'no'}]
    }
  ]
}

export default TakeSurvey;