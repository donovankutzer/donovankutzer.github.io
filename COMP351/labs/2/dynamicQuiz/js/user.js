import { QuestionStorage } from './question-storage.js';
import { Question } from './question.js';

window.addEventListener('DOMContentLoaded', () => {
    const app = new Student();
    app.init();
});

class Student {
    constructor() {
        this.storage = new QuestionStorage('questions');
    }
    init() {
        this.setupEventListeners();
        this.displayQuestions();
    }

    setupEventListeners() {
        document
            .getElementById('submitAnswers')
            .addEventListener('click', () => this.checkAnswers());
    }

    displayQuestions() {
        let questions = this.storage.getQuestions();
        if (questions.length == 0) {
            this.displayEmptyQuiz();
        } else questions.forEach((question) => this.displayQuestion(question));
    }

    displayQuestion(question) {
        let questionsDiv = document.getElementById('questions');
        let div = document.createElement('div');
        div.classList = ['container py-2'];
        div.id = question.id;

        div.innerHTML = `
            <div class="row mb-3">
                <div class="col">
                    <h3>Question ${question.id}</h3>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <b>${question.question}</b>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-1">
                    <input
                        type="radio"
                        id="radio-${question.id}-1"
                        name="answers-${question.id}"
                        class="form-check-input"
                    />
                </div>
                <div class="col answer-text">
                    ${question.answers[0]}
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-1">
                    <input
                        type="radio"
                        id="radio-${question.id}-2"
                        name="answers-${question.id}"
                        class="form-check-input"
                    />
                </div>
                <div class="col answer-text">
                    ${question.answers[1]}
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-1">
                    <input
                        type="radio"
                        id="radio-${question.id}-3"
                        name="answers-${question.id}"
                        class="form-check-input"
                    />
                </div>
                <div class="col answer-text">
                    ${question.answers[2]}
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-1">
                    <input
                        type="radio"
                        id="radio-${question.id}-4"
                        name="answers-${question.id}"
                        class="form-check-input"
                    />
                </div>
                <div class="col answer-text">
                    ${question.answers[3]}
                </div>
            </div>
        `;

        questionsDiv.appendChild(div);
    }

    checkAnswers() {
        let radios = document.getElementsByTagName('input');
        let questions = this.storage.getQuestions();
        let submitted = [];
        let correct = 0;

        // Gather user input data, checks if answer correct
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                submitted.push(i % 4);
                if (i % 4 == questions[Math.floor(i / 4)].answerIndex)
                    correct++;
            }
        }

        this.printResult(correct, questions.length);
        this.highlightResults(submitted, questions);
    }

    highlightResults(submitted, questions) {
        let answersText = document.getElementsByClassName('answer-text');
        // Reset classes to remove previous highlighting
        for (let i = 0; i < answersText.length; i++) {
            answersText[i].className = 'col answer-text';
        }
        for (let i = 0; i < questions.length; i++) {
            if (submitted[i] == questions[i].answerIndex) {
                answersText[4 * i + submitted[i]].classList.add('bg-success');
            } else {
                answersText[4 * i + submitted[i]].classList.add('bg-danger');
                answersText[4 * i + questions[i].answerIndex].classList.add(
                    'bg-success'
                );
            }
        }
    }

    printResult(mark, total) {
        let res = document.getElementById('results');
        res.innerHTML = `
            <div class="col">
                Final Grade: ${mark} / ${total}
            </div>
        `;
    }

    displayEmptyQuiz() {
        let questionsDiv = document.getElementById('questions');
        let div = document.createElement('div');
        div.classList = ['container py-2'];
        div.id = 'empty-quiz';

        div.innerHTML = `
            <div class="col text-center">
                <h1> Error: No quiz stored in HTML5 LocalStorage</h1>
            </div>
        `;
        
        questionsDiv.appendChild(div);
    }
}
