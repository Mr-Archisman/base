import { useState } from 'react'
import Question from './Question'

const QuestionsList = ( {questions} ) => {
const [selectedAnswer,setSelectedAnswer] = useState ({})


const handleChange = (questionIndex,option) => {
    setSelectedAnswer({
        ...selectedAnswer,
        [questionIndex]:option
    })
}
  return (
    <div>
        {questions?.map((questionObj,index) => {
            return(
                <Question
                key={index}
                questionObj={questionObj}
                questionIndex={index}
                selectedAnswer={selectedAnswer[index]}
                handleChange={handleChange}
            />
            )
            
        })}
    </div>
  )
}

export default QuestionsList