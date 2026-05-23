import { Question } from './question.js';

export class QuestionRetriever {
    constructor() {
        this.url = 'https://desolate-lowlands-13804.herokuapp.com/questions';
        //this.url = 'localhost:5000/questions';
    }

    getAllRows() {
        let results = JSON.parse(this.httpRequest().responseText);
        return this.parseRows(results);        
    }

    parseRows(jsonResult) {
        let qMap = {};
        jsonResult.forEach((question) => {
            qMap = this.addValueToKey(qMap, question.question_id, question);
        });
        return qMap;
    }

    addValueToKey(qMap, key, question) {
        qMap[key] = qMap[key] || new Question(question.question_id, question.question, [], question.answer);
        qMap[key].options.push(question.q_option);
        return qMap;
    }

    httpRequest() {
        var req = new XMLHttpRequest();
        req.open('GET', this.url, false);
        req.send();
        return req;
    }

    insertNewQuestion(question) {
        var req = new XMLHttpRequest();
        console.log(JSON.stringify(question));
        req.open('POST', this.url, true);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(question));

        if (req.status == 200){
            console.log(req.responseText);
        }
        return req;
    }

    updateQuestion(question) {
        var req = new XMLHttpRequest();
        console.log('UPDATE QUESTION: ' + JSON.stringify(question));
        req.open('PUT', this.url, true);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(question));
        
        if (req.status == 200){
            console.log(req.responseText);
        }
    }
}
