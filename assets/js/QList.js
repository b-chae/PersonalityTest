const QuestionList = [
    "🏠집에서 뒹굴거리던 찰나에 친구에게 걸려온 전화📱, 😎'지금 나올 수 있어?'",
    "🧑🏻 모르는 사람이 나타나 🗺 길을 물어본다, 혹시 여기 가까운 🏦 은행이 어딘지 아세요?",
    "📝시험 기간 중 할일은 산더미.. 🤕 일단 할 것들을 정리하고 메모장에 쭉 써봤다",
    "친구👧🏻가 요상하게 생긴 어항🐟을 들고와서는 하는 말,,, '내가 요즘 기분이 안좋아서🥲 기분 좋아지는 어항을 사봤어🤗'",
    "새 학기가 🏫 어김없이 시작되는 3월, 새로운 교실에서 🤔친해지고 싶은 친구를 발견한다.",
    "휴-, 한달 동안 열심히 한 프로젝트가 끝났다, 🙃 어떤 칭찬이 나에게 더 기분 좋을까?",
    "집으로 가던 길, 🤔 어제까지만 해도 없었던 통로🛤 가 생겼다,",
    "처음으로 😎혼자 떠나는 유럽여행✈️, 어느 정도로 준비🧳해야 할까?",
    "이런 저런 일로 너무 😫스트레스 받는 날, 어떻게 스트레스를 풀까?😥",
    "👩🏻‍💻일을 할 때 나는 📊팀에서 어떤 사람이 되고 싶을까?",
    "방 청소🧹를 하던 도중, 애매한 물건🎮이 나왔다",
    "우주🪐, 초현실, 영적인 세계👻, 꿈💤 등과 같은 인간의 잠재력에 관심이 있다",
]

const Ans1List = [
    {
        ans: "😅 집에서 나만의 시간을 🛀 보내고 싶어 미안..",
        type: 'I',
    }, {
        ans: "👉🏼(손으로 가르키며) 아 저쪽~ 쯤에 있어요!",
        type: 'N',
    }, {
        ans: "급박하지 않다면 미래의 나에게 맡긴다 😇",
        type: 'P',
    }, {
        ans: "😯 기분 좋아지는 어항? 그게 뭐야 ???",
        type: 'T',
    }, {
        ans: "안녕 ! 🤗 힘차게 말을 걸어 본다",
        type: 'E'
    }, {
        ans: "잘했네! 여기 부분만 수정하면 완벽할 거 같아 😉",
        type: 'T',
    }, {
        ans: "뭔가 재밌는 일이 생길 것 같아! 온갖 💭상상을 해본다",
        type: 'N',
    }, {
        ans: "비행기, 숙소🏨, 할인티켓🎫, 맛집, 들를 곳📝 등 세세하게 준비한다",
        type: 'J',
    }, {
        ans: "친한 친구들을 만나서 하루 종일 💬수다떨며 😡하소연을 한다",
        type: 'E',
    }, {
        ans: "제일 😇믿음이 가는, 없어서는 안 될 필요한 사람",
        type: 'F',
    }, {
        ans: "(고민 없이)오랫동안 안 쓰던 거니까 🗑🧹버리자",
        type: 'J',
    }, {
        ans: "있다!",
        type: 'N',
    }
]
const Ans2List = [
    {
        ans: "친구랑 노는 게 집에 있는 것보다는 낫지, 😝나갈게 !",
        type: 'E',
    }, {
        ans: "✌️두 블럭 직진하셔서 오른쪽으로 꺾으시면 나오는 🏬편의점 바로 맞은편에 있어요",
        type: 'S',
    }, {
        ans: '계획을 세우고 📚 차근차근 실행해본다 😠',
        type: 'J',
    }, {
        ans: '뭐 때문에 기분이 그렇게 안좋아? 😦',
        type: 'F',
    }, {
        ans: "친구가 눈치채지 못하게 주위에서 알짱거린다 🙄",
        type: 'I',
    }, {
        ans: "그동안 고생했던거 알아, 결과물 내느라 진짜 수고했어 😊",
        type: 'F',
    }, {
        ans: "저기로 가면 어디로 이어지지? 🪧이정표를 살펴본다",
        type: 'S',
    }, {
        ans: "비행기, 숙소🛌 등만 대략 정하고 세세한 것은 😗그때그때 정한다",
        type: 'P',
    }, {
        ans: "조용한 집🏠에서 혼자 😋맛있는 걸 먹으며 😌에너지를 비축한다",
        type: 'I',
    }, {
        ans: "많이 📖배우고 참고할 수 있는, 같이 📝일하고 싶은 사람",
        type: 'T',
    }, {
        ans: "(고민중..)잠깐, 이걸 버릴까 말까 🤔 애매한데 ...",
        type: 'P',
    }, {
        ans: "딱히 ..?",
        type: 'S',
    }
]

let questionIndex = 0
let typeCount = {
    I: 0,
    E: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
}