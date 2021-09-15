/**CHGED Users to Users,A,B,C,D,E */

let users = {
  userA: {
    id: 'userA',
    name: 'User A',
    avatarURL: '/images/woman 1.png',
    answers: {},
    questions: []
  },
  userB: {
    id: 'userB',
    name: 'User B',
    avatarURL: '/images/man1.png',
    answers: {},
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
  },
  userC: {
    id: 'userC',
    name: 'User C',
    avatarURL: '/images/man2.png',
    answers: {},
    questions: [],
  }, 
  userD: {
    id: 'userD',
    name: 'User D',
    avatarURL: '/images/woman2.png',
    answers: {},
    questions: []

  }, 
  userE: {
    id: 'userE',
    name: 'User E',
    avatarURL: '/images/woman3.png',
    answers: {},
    questions: []
  }




}


/**CHGED Questions and Authors */

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'userB',
    timestamp: 1467166872634,
    optionOne: {
      votes: [],
      text: 'Have a rewind button ',
    },
    optionTwo: {
      votes: [],
      text: 'Have A pause button on your life?'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'userD',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'Ride a RollerCoaster',
    },
    optionTwo: {
      votes: [],
      text: 'Go Sky Diving'
    }
  },
  
}


function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authUser]: {
          ...users[authUser],
          questions: users[authUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authUser]: {
          ...users[authUser],
          answers: {
            ...users[authUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authUser])
          }
        }
      }

      res()
    }, 500)
  })
}