export function loadQuestions() {
    return function (dispatch) {
      fetch("/questions")
      .then( (response) => {
        return response.json();
      }).then((questions) => {
        dispatch(questionsLoaded(questions));
      });
    };
  }
  function questionsLoaded(questions) {
    return {
      type: "QUESTIONS_LOADED",
      value: questions
    };
  }
  
  export function getQuestion(id) {
    return function (dispatch) {
      fetch("/questions/" + id)
      .then( (response) => {
        return response.json();
      }).then((question) => {
        dispatch(getQuestionDone(question));
      });
    };
  }
  function getQuestionDone(question) {
    return {
      type: "GET_QUESTION_DONE",
      value: question
    };
  }

  export function createQuestion(c) {
    return function (dispatch) {
      fetch("/questions", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(c)
      }).then(() => dispatch(loadQuestions()));
    };
  }
  
  export function updateQuestion(c) {
    return function (dispatch) {
      fetch("/questions/" + c._id, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(c)
      }).then(() => dispatch(loadQuestions()));
    };
  }

  export function removeQuestion(id) {
    return function (dispatch) {
      fetch("/questions/" + id, {
        method: "DELETE"
      }).then(() => dispatch(loadQuestions()));
    };
  }

  export function setSearchText(txt){
    return {
      type:"SET_SEARCH_TEXT",
      value:txt
    };
  }