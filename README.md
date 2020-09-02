#Study

# 1 [자바 스크립트](https://ko.javascript.info/)

## 1-1 JavaScript 란?

> - Java =/= JavaScript
> - ‘웹페이지에 생동감을 불어넣기 위해’ 만들어진 프로그래밍 언어
> - V8 – Chrome, Opera
> - SpiderMonkey – Firefox
> - Trident, Chakra - IE (Version에 따라 다름)
> - ChakraCore - Microsoft Edge
> - SquirrelFish - Safari
> - 개발자 도구 이용하기 (Windows - F12, Mac/Chrome - Cmd+Opt+J, Safari - Cmd+Opt+C)

## 1-2 JavaScript가 못하는 일

> - 웹페이지 내 스크립트는 디스크에 저장된 임의의 파일을 읽거나 쓰고, 복사하거나 실행할 때
> - 타 사이트나 도메인에서 데이터를 받아오는 건 불가능
> - 도메인이나 프로토콜, 포트가 다르다면 페이지에 접근할 수 없음

## 1-3 JavaScript의 강점

> - HTML/CSS와 완전히 통합할 수 있음
> - 간단한 일은 간단하게 처리할 수 있게 해줌
> - 모든 주요 브라우저에서 지원하고, 기본 언어로 사용됨

## 1-4 알아두면 좋은 사이트

> - [ECMA-262 명세서](https://www.ecma-international.org/publications/standards/Ecma-262.htm)
> - [MDN JavaScript Reference](https://developer.mozilla.org/ko/)
> - [특정 기능 지원 여부](https://caniuse.com/)
> - [암호화 관련 기능 확인](https://caniuse.com/#feat=cryptography)
> - [자바스크립트 기능 목록](https://kangax.github.io/compat-table/es6/)

## 1-5 쓰기 좋은 에디터

> - Atom (크로스 플랫폼, 무료)
> - Visual Studio Code (크로스 플랫폼, 무료)
> - Sublime Text (크로스 플랫폼, 셰어웨어)
> - Notepad++ (Windows, 무료)
> - WebStorm (크로스 플랫폼, 유료)
> - 그 외 Vim, Emacs

---

# 2 [JavaScript 기초](https://ko.javascript.info/hello-world)

## 2-1 JavaScript 사용

> - 내부스크립트 (HTML>Body) <script>명령어</script>
> - 외부스크립트 <script scr = "파일명/주소" ></script>
> - type 속성 : 필수 아님
> - language 속성 : 필수 아님
> - scr 속성 : 이 속성이 있으면 내부 코드는 무시
> - <!--  // 주석 /* ~ */ -->

    *과제 1

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <script>
        alert('자바스크립트!');
        </script>
    </body>
    </html>

    *과제 2

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <script src="assignment.js"></script>
    </body>
    </html>

## 2-2 코드 구조

> - 문(statement) = 문법 구조(syntax structure), 명령어(command)
> - (끝나는 지점); <-세미콜론 : 단, 줄 바꿈이 있을 시 생략 가능
> - (끝나는
>   지점) <-이러한 불완전한 표현식은 세미클론이 생략 안 됨
> - [다른 명령어] <- 대괄호 앞에는 세미콜론 생략 안 됨

## 2-3 엄격 모드(strict mode)

> - 'use strict'라는 특별한 지시자를 사용해 엄격 모드를 활성화 했을 때만 새로운 기능들을 추가 할 수 있게 함
> - "use strict"; :반드시 최상단 위치, 취소 불가능
> - 브라우저 콘솔 사용시 'use strict'; <Shift+Enter>
> - 브라우저가 오래 됐을 시
>   function() {
>   'use strict';
>   코드 }

> - 코드를 클래스와 모듈을 사용한다면 "use strict" 생략 가능

## 2-4 ⭐️변수와 상수

### 변수

> - 변수(variable) : 데이터를 저장할 때 쓰이는 ‘이름이 붙은 저장소’
> - let 키워드를 사용해

    let message; // 변수 선언
    message = 'Hello'; // 문자열 저장
    alert(message); // 변수에 저장된 값 보여줌

    - 더 간단하게
    let message = 'Hello!'; // 변수를 선언하고 값을 할당
    alert(message); // Hello!

> - 변수 선언은 한 줄에 하나씩

    let user = 'John',
        age = 25,
        message = 'Hello';

> - var = let (거의 동일, var 오래됨)
>
> #### 변수명 짓기
>
> > - 오직 문자와 숫자, 그리고 기호 \$와 \_만 들어갈 수 있음
> > - 첫 글자는 숫자가 될 수 없음.
> > - 대소문자 구별, 대부분 영어로 변수 명을 지음
> > - let, class, return, function(예약어) 로 지을 수 없음
