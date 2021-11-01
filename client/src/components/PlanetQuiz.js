import React, { useState } from 'react';

// Create a Quiz function that contains all quiz questions
// Use isCorrect to indicate whether answer is true or false
const PlanetQuiz = () => {
    const questions = [
        {
            questionText: "In order from the sun, where does Earth sit in the order of the planets?",
    
            answerOptions:
                [
                    {answerText: "First", isCorrect: false },
                    {answerText: "Second", isCorrect: false },
                    {answerText: "Third", isCorrect: true },
                    {answerText: "Fourth", isCorrect: false }
                ],
        
        },
        {
            questionText: "Which two planets have no moons?",
    
            answerOptions:
                [
                    {answerText: "Mercury and Venus", isCorrect: true },
                    {answerText: "Venus and Neptune", isCorrect: false },
                    {answerText: "Mars and Saturn", isCorrect: false },
                    {answerText: "Mercury and Mars", isCorrect: false }
                ],
      
        },
        {
            questionText: "What is the Sun mostly made of?",
    
            answerOptions:
                [
                    {answerText: "Molten iron", isCorrect: false },
                    {answerText: "Hydrogen and helium gas", isCorrect: true},
                    {answerText: "Molten Lava", isCorrect: false },
                    {answerText: "Rock", isCorrect: false }
                ],
            
        },
        {
            questionText: "Which planet is closest to the sun?",
    
            answerOptions:
                [
                    {answerText: "Earth", isCorrect: false },
                    {answerText: "Mars", isCorrect: false },
                    {answerText: "Venus", isCorrect: false },
                    {answerText: "Mercury", isCorrect: true }
                ],
            
        },
        {
            questionText: "Which planet is the home of Olympus Mons, the largest volcano in the Solar System?",
    
            answerOptions:
                [
                    {answerText: "Mars", isCorrect: true },
                    {answerText: "Saturn", isCorrect: false },
                    {answerText: "Jupiter", isCorrect: false },
                    {answerText: "Earth", isCorrect: false }
                ],
            
        },
        {
            questionText: "Where is the asteroid belt?",
    
            answerOptions:
                [
                    {answerText: "Between Earth and Venus", isCorrect: false },
                    {answerText: "Between Mars and Jupiter", isCorrect: true },
                    {answerText: "Between Jupiter and Saturn", isCorrect: false },
                    {answerText: "Between Earth and Mars", isCorrect: false }
                ],
            
        },
        {
            questionText: "What is the Great Red Spot on Jupiter?",
    
            answerOptions:
                [
                    {answerText: "A volcano", isCorrect: false },
                    {answerText: "A crater", isCorrect: false },
                    {answerText: "A lake", isCorrect: false },
                    {answerText: "A storm", isCorrect: true }
                ],
            
        },
        {
            questionText: "Which planet has the most moons?",
    
            answerOptions:
                [
                    {answerText: "Neptune", isCorrect: false },
                    {answerText: "Jupiter", isCorrect: false },
                    {answerText: "Saturn", isCorrect: true },
                    {answerText: "Uranus", isCorrect: false }
                ],
            
        },
     
    ];

    // Adding a state object which holds the current question
    // Set to 0 to start the quiz with the first question in the array
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // Add a state object which stores whether we want to display the score
    // Set to false - change the state in the return after last question
    const [showScore, setShowScore] = useState(false);
    // Add a final state object to display the score
    // Set it to 0 to begin
    const [score, setScore] = useState(0);


    // If the answer option button clicked is true/correct, the player gets 1 point.
    // Then go through each question in the array until the end, then display final score.
    // 'if (isCorrect)' is shorthand for 'if (isCorrect === true)'
    const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    return(
        <div className="quiz-section">
            <div className="quiz-header">
                <h2>Astronomy Quiz</h2>
            </div>
            {/* Add showScore first so if we run through all the questions/answers it will
            display the final score */}
            {showScore ? (
				<div className='score-section'>
                    {/* the score over the number of questions */}
                    You scored {score} out of {questions.length}
                </div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
                            {/* Goes through each question - current question index plus 1.
                            This will go through the entire questions array */}
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>
                            {/* For the current question in the question array,
                            display the question text */}
                            {questions[currentQuestion].questionText}
                        </div>
					</div>
					<div className='answer-section'>
                        {/* For the current question in the questions array, we use the map function
                        to loop through the answers for the current question. We then use the function
                        handleAnswerOptionClick to check if answer is true or false, adding one point
                        if it is true. The answer options are displayed as a button */}
						{questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
					</div>
				</>
			)}
        </div>
    )
}

export default PlanetQuiz