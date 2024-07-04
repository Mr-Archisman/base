

const Option = ({ option, questionIndex, isSelected, handleChange }) => {


  return (
    <li className='mb-2'>
      <label className='flex items-center'>
        <input 
          type="checkbox"
          checked={isSelected}
          onChange={() => handleChange(questionIndex, option)}
          className='mr-2'
        />
        {option}
      </label>
    </li>
  );
};

export default Option;
