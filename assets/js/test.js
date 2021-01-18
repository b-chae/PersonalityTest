const QuestionText = document.querySelector(".question_text")
const AnsText1 = document.querySelector(".ans1")
const AnsText2 = document.querySelector(".ans2")
const Panel = document.querySelector(".panel")
const GoResultButton = document.querySelector(".resbutton")
const MyPage = document.querySelector(".mypage")

var MBTI = ''

function countMBTI(){
    if(typeCount['E'] > typeCount['I']) MBTI += 'E'
    else MBTI += 'I'
    if(typeCount['N'] > typeCount['S']) MBTI += 'N'
    else MBTI += 'S'
    if(typeCount['T'] > typeCount['F']) MBTI += 'T'
    else MBTI += 'F'
    if(typeCount['J'] > typeCount['P']) MBTI += 'J'
    else MBTI += 'P'
}

function handleClick(event) {
    if (event.target.classList.contains("ans1")) {
        typeCount[Ans1List[questionIndex].type] += 1
    }
    else if (event.target.classList.contains("ans2")) {
        typeCount[Ans2List[questionIndex].type] += 1
    }

    if (questionIndex < QuestionList.length - 1) {
        questionIndex += 1
        ShowQuestion(questionIndex)
    }
    else {
        QuestionText.classList.add("hiding")
        AnsText1.classList.add("hiding")
        AnsText2.classList.add("hiding")
        GoResultButton.classList.remove("hiding")
        countMBTI()
        GoResultButton.href = "result/" + MBTI
    }
    window.scrollTo(0,0)
}

function addShowing() {
    if (!Panel.classList.contains("showing"))
        Panel.classList.add("showing")
}

function removeShowing() {
    if (Panel.classList.contains("showing"))
        Panel.classList.remove("showing")
}

function ShowQuestion(index) {
    addShowing()
    setTimeout(removeShowing, 500)
    QuestionText.innerText = QuestionList[index]
    AnsText1.innerText = Ans1List[index].ans
    AnsText2.innerText = Ans2List[index].ans
    MyPage.innerText = (index+1) + "/12"
}

function init() {

    questionIndex = 0
    ShowQuestion(0)

    AnsText1.addEventListener("click", handleClick)
    AnsText2.addEventListener("click", handleClick)

}

init()