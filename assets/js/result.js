var MBTI = ''
const Title = document.querySelector(".title")
const Ex = document.querySelector(".ex")

function showResult(){
    Title.innerText = R[MBTI].b
    Ex.innerText = R[MBTI].e
}

function init(){
    temp = location.href.split('?')
    MBTI = temp[1]
    showResult();
}

init()