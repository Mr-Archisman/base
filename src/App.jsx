
import './App.css'
import QuestionsList from './components/QuestionsList'

function App() {

  const data = {
    "questions": [
      {
        "question": "What is the primary function of the mitochondria?",
        "options": [
          "Cellular respiration",
          "Protein synthesis",
          "DNA replication",
          "Cell division"
        ],
        "correct_answer": "Cellular respiration"
      },
      {
        "question": "Which of the following is responsible for carrying oxygen in the blood?",
        "options": [
          "Hemoglobin",
          "Insulin",
          "Glucagon",
          "Thyroxine"
        ],
        "correct_answer": "Hemoglobin"
      },
      {
        "question": "Which organelle is known as the 'powerhouse' of the cell?",
        "options": [
          "Golgi apparatus",
          "Endoplasmic reticulum",
          "Mitochondria",
          "Lysosome"
        ],
        "correct_answer": "Mitochondria"
      },
      {
        "question": "Photosynthesis primarily occurs in which part of a plant?",
        "options": [
          "Stem",
          "Roots",
          "Leaves",
          "Flowers"
        ],
        "correct_answer": "Leaves"
      },
      {
        "question": "What is the largest organ in the human body?",
        "options": [
          "Brain",
          "Skin",
          "Liver",
          "Heart"
        ],
        "correct_answer": "Skin"
      }
    ]
  }
  return (
    <div className='max-w-4xl mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-8 text-center '> Quiz</h1>
      <QuestionsList questions={data.questions}/>
    </div>
  )
}

export default App
