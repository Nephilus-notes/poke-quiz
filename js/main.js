const answers = [
    ['Eevee', 'eevee'],
    ['Alakazam', 'alakazam'],
    ['Feebas', 'feebas'],
    ['Jigglypuff', 'jigglypuff'],
    ['Gyarados', 'gyrados', 'Magikarp', 'magikarp'],
    ['Tyranitar', 'tyranitar'],
    ['Steel', 'steel','Steel-type', 'steel-type'],
    ['A mouse','mouse', 'A mouse', 'A Mouse'],
    ['Cloning', 'cloning mew', 'by cloning Mew', 'clone', 'By cloning Mew', 'Cloning mew', 'Cloning Mew', 'cloning'],
    ['to protect the world from devestation', "to unite all people's within our nation",
     "to denounce the evils of truth and love", "to extend our reach to the stars above"],
    ['Create a new world', 'destroy the world', 'destroy the world and rebuild a world of peace'],
    ['Disguise', 'disguise'],
    ["Corviknight", 'corviknight', 'Pawniard', 'Pawniard', 'Bisharp', 'bisharp'],
    ['Kyogre', 'kyogre'],
    ['Dragon', 'dragon']
]

const submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener('click', (e) => {
    event.defaultPrevented
    for (let i = 1; i < 16; i++) {
        const questionDiv = document.getElementById(`question${i}`)
        const inputEl = document.getElementById(`answer${i}`)

        let answerInput = document.getElementsByName(`answer${i}`)[0]

        if (answerInput.value && questionDiv.style.backgroundColor != 'green') {
        if (answers[i-1].includes(answerInput.value)) 
        {
           questionDiv.style.backgroundColor = 'green'
           questionDiv.classList.add('answered')
           questionDiv.classList.remove('unanswered')
           console.log(questionDiv.classList)

           addCorrectAnswer(answers[i-1][0], inputEl)
        } else {
            questionDiv.style.backgroundColor = 'red'
        }}
        let answeredQu = document.getElementsByClassName('answered')
        let unansweredQu = document.getElementsByClassName('unanswered')
        let rightAnswers = answeredQu.length

        const results = document.getElementById('results')
        results.innerHTML = `
        <h2>${rightAnswers}/15<h2>
        `
    }
})

const addCorrectAnswer = (answerText, afterDiv) => {
    const correctAnswerEl = document.createElement('div')
    correctAnswerEl.classList.add('ball')

    correctAnswerEl.innerHTML = `
    <h3 class="d-inline">${answerText}</h3>
    `

    afterDiv.after(correctAnswerEl,)
}




// Button click event listener to hide correctly answered questions
const correctBtn = document.getElementById('correctBtn')
correctBtn.addEventListener('click', (e) => {
    event.defaultPrevented

    let answeredQu = document.getElementsByClassName('answered')
    let unansweredQu = document.getElementsByClassName('unanswered')
    for (let answer of unansweredQu) {
        answer.classList.add('hidden')
        answer.parentNode.style.opacity = '.5'
    }
    for (let question of answeredQu) {
        if (question.classList.contains('hidden')) {
            question.classList.toggle('hidden')
            question.parentNode.style.opacity = '1'
        }
    }
})

// Button click event listener to hide unanswered questions
const unansweredBtn = document.getElementById('unansweredBtn')
unansweredBtn.addEventListener('click', (e) => {
    event.defaultPrevented

    let answeredQu = document.getElementsByClassName('answered')
    let unansweredQu = document.getElementsByClassName('unanswered')
    for (let answer of answeredQu) {
        answer.classList.add('hidden')
        answer.parentNode.style.opacity = '.5'
    for (let question of unansweredQu) {
        if (question.classList.contains('hidden')) {
            question.classList.remove('hidden')
            question.parentNode.style.opacity = '1'
        }
    }
}
})