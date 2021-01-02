const QuestionText = document.querySelector(".question_text")
const AnsText1 = document.querySelector(".ans1")
const AnsText2 = document.querySelector(".ans2")
const Panel = document.querySelector(".panel")

function handleMouseEnter(event) {
    if (!event.target.classList.contains("mouseenter"))
        event.target.classList.add("mouseenter")
}

function handleMouseLeave(event) {

    if (event.target.classList.contains("mouseenter"))
        event.target.classList.remove("mouseenter")
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
        // TODO : 결과 페이지로 이동
    }
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
    AnsText1.innerText = "- " + Ans1List[index].ans
    AnsText2.innerText = "- " + Ans2List[index].ans
}

function init() {

    console.dir(document)
    questionIndex = 0
    ShowQuestion(0)

    AnsText1.addEventListener("mouseenter", handleMouseEnter)
    AnsText2.addEventListener("mouseenter", handleMouseEnter)
    AnsText1.addEventListener("mouseleave", handleMouseLeave)
    AnsText2.addEventListener("mouseleave", handleMouseLeave)
    AnsText1.addEventListener("click", handleClick)
    AnsText2.addEventListener("click", handleClick)

}

init()