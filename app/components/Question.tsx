"use client"
import React, { useState } from 'react';

const QuestionComponent: React.FC = () => {
    const [showAnswers, setShowAnswers] = useState<boolean[]>([false, false, false, false]);

    const handleQuestionClick = (index: number) => {
        const newShowAnswers = [...showAnswers];
        newShowAnswers[index] = !newShowAnswers[index];
        setShowAnswers(newShowAnswers);
    };

    return (
        <div className=' bg-white py-[124px] ml-[16px]'>
            <h1 className="text-dark-green text-2xl font-bold mb-4">F.A.Q</h1>
            <div className=" w-full">
                <div className="grid gap-4">
                    {questions.map((question, index) => (
                        <div
                            key={index}
                            className={`text-dark-green border-b border-grey-pale p-4 cursor-pointer ${showAnswers[index] ? 'w-full float-right' : ''
                                }`}
                            onClick={() => handleQuestionClick(index)}
                        >
                            <h2 className="font-bold mb-2">{question}</h2>
                            {showAnswers[index] && (
                                <div className="mt-4">
                                    <p className="text-dark-green" >{answers[index]}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default QuestionComponent;

// Tableau des questions
const questions = [
    'Qu\'est-ce que Commback ?',
    'Comment fonctionne Commback ?',
    'Comment puis-je trouver des locaux disponibles sur Commback ?',
    'Comment Commback peut-il m\'aider dans mes démarches administratives ?',
];

// Tableau des réponses correspondantes
const answers = [
    'Commback automatise le processus de création de dossiers administratifs pour l\'obtention d\'aides à la création de commerces. Notre plateforme génère les documents nécessaires et vous guide à travers les étapes requises, vous permettant ainsi de gagner du temps et de simplifier vos démarches. Vous pouvez soumettre vos dossiers directement via Commback, ce qui facilite la gestion de vos demandes d\'aides financières.',
    'Réponse à la question 2...',
    'Réponse à la question 3...',
    'Réponse à la question 4...',
];
