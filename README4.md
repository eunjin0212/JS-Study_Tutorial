[Go to previous page](README3.md)

## 2-15 함수

> - `함수 선언(function declaration)`

     function 함수 이름 // 키워드 ( parameters // 매개변수 ) {
    ...함수 본문...;
    }
    함수 이름(); <-- 호출

> - 매개변수를 여러개 쓸 땐 `,` 로 구분
> - 주요 코드 흐름 중간에 독자적인 구문 형태로 존재
> - 엄격 모드에서 함수 선언문이 코드 블록 내에 위치하면 해당 함수는 블록 내 어디서든 접근할 수 있음, 블록 밖에서는 함수에 접근❌
> - 할당, 복사, 선언⭕️
>
> ### 지역 변수 (local variable)
>
> > - 함수 내에서 선언한 변수, 함수 내에서만 접근 가능
>
> ### 외부 변수 (outer variable) = 전역 변수(global variable)
>
> > - 외부 변수에 접근 가능, 함수 내에서 수정 가능, 지역 변수가 없을 때에만 사용 가능
>
> ### 매개변수 (parameter) = 인수 (argument)
>
> > - 함수 내에서 변경된 변수는 함수 밖에서는 변경 되지 않음
> > - 매개 변수에 값을 전달하지 않으면 `undefined` 가 됨
>
> ### 기본 값 (default value)
>
> > - `undefined`가 나오지 않으려면 기본 값을 선언해주면 됨

    function showMessage(from, text = "no text given"//기본값 선언) {
    alert( from + ": " + text );
    }

    showMessage("Ann" // 하나만 선언해도 `undefined` 가 나오지 않음); // Ann: no text given

> ### 반환 값 (return value)
>
> > - `return`은 함수 내 어디서든 사용할 수 있음
> > - `return` 을 만나면 함수는 즉시 중단, 함수를 호출한 곳에 값을 반환
> > - 여러개의 `return`이 올 수 있음
> > - `return`만 있거나 없으면 `undefined`를 호출함
>
> ### 함수 이름짓기
>
> > - show~ : 무언가를 보여줌
> > - get~ : 값을 반환함
> > - calc~ : 무언가를 계산함
> > - create~ : 무언가를 생성함
> > - check~ : 무언가를 확인하고 불린값을 반환함
> > - 함수는 함수 이름에 언급되어있는 동작을 정확히 수행해야 함, 독립적인 두 개의 동작은 독립된 함수 두 개에 나눠 수행
> > - 예외 \$ : jQuery 프레임워크에서 쓰이는 함수
> >   \_ : Lodash 라이브러리의 핵심 함수
> > - 함수가 길어지면 나누기
>
> ### 함수 표현식 (Function Expression)

    function sayHi() {             let sayHi = function() {
    alert( "Hello" );       =      alert( "Hello" );
    } // 함수 선언                  }; // 함수 표현식

> > - 표현식이나 구문 구성(syntax construct) 내부에 생성
> > - 함수 표현식으로 정의한 함수는 함수가 선언되기 전에 접근하는 게 불가능
> > - 함수가 표현식의 일부로 존재
> > - 실행 흐름이 표현식에 다다랐을 때 만들어짐

> ### 콜백 함수 (called back)
>
> > - 함수 ask의 인수, showOk, showCancel

    function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
    }

> ### 화살표 함수 (arrow function)

    let func = (arg1, arg2, ...argN) =>(return) expression

> > - 인수가 하나밖에 없다면 인수를 감싸는 괄호를 생략⭕️
> > - 인수가 하나도 없을 땐 괄호를 비워놓으면 됨, 이 때 괄호는 생략할 수❌
> >   표현식이나 구문이 여려개인 함수는 중괄호 안에 평가해야 할 코드를 넣기 + return

    let sum = (a, b) => {  // 중괄호는 본문 여러 줄로 구성되어 있음을 알려줍니다.
    let result = a + b;
    return result; // 중괄호를 사용했다면, return 지시자로 결괏값을 반환 필수!
    };

    alert( sum(1, 2) ); // 3

[요약본 다시보기](https://ko.javascript.info/javascript-specials)
[Go to Next page](README5.md)
