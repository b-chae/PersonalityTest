var MBTI = ''
const Title = document.querySelector(".title")
const Ex = document.querySelector(".ex")
const Wx = document.querySelector(".wx")

function showResult(){
    Title.innerText = R[MBTI].b
    Ex.innerText = R[MBTI].e
    Wx.innerText = R[MBTI].w
}

function init(){
    showResult();
}

init()