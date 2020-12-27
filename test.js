const QuestionText = document.querySelector(".question_text")
const AnsText1 = document.querySelector(".ans1")
const AnsText2 = document.querySelector(".ans2")

const QuestionList = ["집에서 뒹굴거리던 찰나에 친구에게 걸려온 전화, '지금 나올 수 있어?'", "안녕하세요?", "바보이세요?"]
const Ans1List = ["집에서 나만의 시간을 보내고 싶어 미안..", "안녕하세요", "네"]
const Ans2List = ["친구랑 노는 게 집에 있는 것보다는 낫지, 나갈게 !", "안녕못해요", "바보세요?"]
let questionIndex = 0

function handleMouseEnter(event){

    if(!event.target.classList.contains("mouseenter"))
        event.target.classList.add("mouseenter")
}

function handleMouseLeave(event){

    if(event.target.classList.contains("mouseenter"))
        event.target.classList.remove("mouseenter")
}

function handleClick(event){
    if(questionIndex < 2) questionIndex += 1
    ShowQuestion(questionIndex)
}

function ShowQuestion(index){

    QuestionText.innerText = QuestionList[index]
    AnsText1.innerText = "- " + Ans1List[index]
    AnsText2.innerText = "- " + Ans2List[index]
}

function init(){
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