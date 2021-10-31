import React from 'react';

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

    return(
        <>
        </>
    )

}

export default PlanetQuiz