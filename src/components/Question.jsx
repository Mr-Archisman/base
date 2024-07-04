
import Option from './Option';

const Question = ({ questionObj, questionIndex, selectedAnswer, handleChange }) => {
  console.log(questionObj.options); // Debugging: Check options

  return (
    <div className='mb-6'>
      <h2 className='text-2xl font-semibold mb-4'>
        {questionIndex + 1}. {questionObj.question}
      </h2>
      <ul>
        {questionObj.options.map((option, i) => (
          <Option
            key={i}
            option={option}
            questionIndex={questionIndex}
            isSelected={selectedAnswer === option}
            handleChange={handleChange}
          />
        ))}
      </ul>
      {selectedAnswer && (
        <p className='mt-2'>
          {selectedAnswer === questionObj.correct_answer
            ? <span className='text-green-500'>Correct!</span>
            : <span className='text-red-500'>Wrong Answer!</span>
          }
        </p>
      )}
    </div>
  );
};

export default Question;
