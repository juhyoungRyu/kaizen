const quotes = [
    {
        quote: "용의 꼬리는 뱀의 머리를 박살낼 수 있다"
    }, {
        quote: "기회는 사라지지 않는다. 당신이 놓친 건 딴 놈이 잡는다"
    }, {
        quote: "잠을 자면 꿈을 꾸지만, 안 자면 졸리다"
    }, {
        quote: "바보들의 큰 문제는 스스로 똑똑하다고 여기는 것이다"
    }, {
        quote: "나만 힘든 건 아니지만, 네가 더 힘든 걸 안다고 내가 안 힘든 것도 아니다"
    }, {
        quote: "한 번은 실수지만 두 번부터는 고의다"
    }, {
        quote: "안 되면 될 거 해라"
    }, {
        quote: "참을 인(忍)이 3번이면 호구"
    }, {
        quote: "사람은 자신이 목숨 걸만한 것을 찾아야 한다. 아니면 죽게 된다."
    }, {
        quote: "인생이란 공평하지 않으니 익숙해져라"
    }, {
        quote: "내가 깨면 병아리, 남이 깨면 후라이지만 달걀인것은 변하지 않는다"
    }
];

const quote = document.querySelector("#quote span");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;