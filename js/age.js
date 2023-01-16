function calc() {
    var currentYear = 2023; //올해 년도를 저장을 변수 currentYear에 저장하는 것이다.
    var birthyear = prompt("태어난 연도를 입력하세요.","YYYY"); //뒤에 yyyy는 어떤 형식으로 할건지 알려주는 역할을 한다.

    var age=0; //age 변수를 선언과 동시에 0으로 초기화 한다.
    age = currentYear - birthyear + 1;
    document.querySelector("#result").innerHTML = "당신의 나이는 "+ age + "세입니다.";
    //document는 현재 웹 브라우저의 페이지를 의미한다.
    // querySelector()는 웹브라우저 구성요소의 id가 result인 웹 요소를 가지고 와라 라는 뜻!
    //innerHTML은 대입한 값으로 html문서에 대체하라 라는 뜻이다.
}