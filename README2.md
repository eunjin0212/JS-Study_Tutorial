# 2 [JavaScript 기초](https://ko.javascript.info/hello-world)

## 2-1 JavaScript 사용

> - 내부스크립트 (HTML>Body) <script>명령어</script>
> - 외부스크립트 <script scr = "파일명/주소"></script>
> - type 속성 : 필수 아님
> - language 속성 : 필수 아님
> - scr 속성 : 이 속성이 있으면 내부 코드는 무시
> - 주석 //, /\*\*/, < !-- -->

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
> - (끝나는 지점); <--세미콜론 : 단, 줄 바꿈이 있을 시 생략 가능
> - (끝나는
>
>   지점) <--이러한 불완전한 표현식은 세미클론이 생략 안 됨
>
> - [명령어] <-- 대괄호 앞에는 세미콜론 생략 안 됨

## 2-3 엄격 모드(strict mode)

> - 'use strict'라는 특별한 지시자를 사용해 엄격 모드를 활성화 했을 때만 새로운 기능들을 추가 할 수 있게 함
> - "use strict"; :반드시 최상단 위치, 취소 불가능
> - 브라우저 콘솔 사용시 'use strict'; <Shift+Enter>
> - 브라우저가 오래 됐을 시
>   function() {'use strict'; 코드 }
> - 코드를 클래스와 모듈을 사용한다면 "use strict" 생략 가능

## 2-4 ⭐️변수와 상수

> ### 1. 변수
>
> > - 변수(variable) : 데이터를 저장할 때 쓰이는 ‘이름이 붙은 저장소’
> > - let : 모던한 변수 선언

    let message; // 변수 선언
    message = 'Hello'; // 문자열 저장
    alert(message); // 변수에 저장된 값 보여줌

    - 더 간단하게
    let message = 'Hello!'; // 변수를 선언하고 값을 할당
    alert(message); // Hello!

> > - 변수 선언은 한 줄에 하나씩

    let user = 'John',
        age = 25,
        message = 'Hello';

> > - var : 오래된 변수 선언, 잘 사용하지 않음
> >
> > #### 변수명 짓기
> >
> > - 오직 문자와 숫자, 그리고 기호 \$와 \_만 들어갈 수 있음
> > - 첫 글자는 숫자가 될 수 없음.
> > - 대소문자 구별, 대부분 영어로 변수 명을 지음
> > - let, class, return, function(예약어) 로 지을 수 없음
>
> ### 2. 상수
>
> > - const : 변하지 않는 변수 선언
> >
> > #### 상수명 짓기
> >
> > - const 변수 명은 대문자와 \_ 사용 (코드 가독성 증가)
> > - 변수 명은 간결하게
> > - 사람이 읽을 수 있는 이름을 사용 , 명확히 알고 있지 않을 경우 외에는 줄임말, a, b, c와 같은 짧은 이름X, 최대한 서술적이고 간결하게, 자신만의 규칙이나 소속된 팀의 규칙으로 지을 것

    * 과제 1
    let admin, name;
    name = "John";
    admin = name;
    alert(admin);

    * 과제 2
    let ourPlanet = "Earth";
    let currentUserName = "John";

## 2-5 자료형 [동적 타입(dynamically typed)]

> ### 1. 숫자형
>
> > - 정수, 부동소수점 숫자(floating point number)가 있다
> > - Infinity : 어떤 숫자보다 큰 특수값 무한대(∞) 어느 숫자든 0으로 나누면 무한대를 얻을 수 있음

    alert( 1 / 0 ); // 무한대
    alert( Infinity ); // 무한대

> > - NaN : 특수 숫자 값(special numeric value), NaN과 문자열을 숫자로 나누면 오류 발생, 연산 과정에서 NaN이 반환되었다면, 모든 결과에 영향을 줌

    alert( "숫자가 아님" / 2 ); // 오류

> ### 2. BigInt
>
> > - BigInt : 아주 큰 숫자가 필요한 상황, 아주 높은 정밀도로 작업을 할 때 사용, 길이 상관 없이 정수를 나타낼 수 있음, 정수 리터럴 끝에 n을 붙임

    const bigInt = 1234567890123456789012345678901234567890n;

> ### 3. 문자형
>
> > - "",'',``(백틱)로 묶어서 사용
> > - `${원하는 변수}` 백틱만 사용 가능

> ### 4. 불린형 Boolean(value)
>
> > - 불린형(논리 타입) : true, false 두 가지가 있음

    let nameFieldChecked = true; // 네, name field가 확인되었습니다(checked)
    let ageFieldChecked = false; // 아니요, age field를 확인하지 않았습니다(not checked)

> ### 5. null
>
> > - null 값은 오로지 null 값만 포함하는 별도의 자료형을 만듬
> > - 존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, ‘알 수 없는(unknown)’ 값을 나타내는 데 사용
> >   > alert( null === undefined ); // false --> 다른 자료형이라서 거짓!
> >   > alert( null == undefined ); // true 특별한 규칙이 적용 되어 참!
> > - null = 0 (산술 연산자나 기타 비교 연산자 < > <= >=를 사용하여 null과 undefined를 비교시)

> ### 6. undefined
>
> > - 값이 할당되지 않은 상태, 변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 undefined가 자동으로 할당
> > - undefined = NaN (산술 연산자나 기타 비교 연산자 < > <= >=를 사용하여 null과 undefined를 비교시)

> ### 7. 객체형(object)
>
> > - object : 객체는 데이터 컬렉션이나 복잡한 개체(entity)를 표현할 수 있음

> ### 8. 심볼형(symbol)
>
> > - symbol : 고유한 식별자(unique identifier)를 만들 때 사용

> ### typeof 연산자
>
> > - 인수의 자료형을 반환
> > - typeof x, typeof(x) 형태로 사용
> > - 자료형에 따라 처리 방식을 다르게, 변수의 자료형을 빠르게 알아냄

    typeof undefined // "undefined"
    typeof 0 // "number"
    typeof 10n // "bigint"
    typeof true // "boolean"
    typeof "foo" // "string"
    typeof Symbol("id") // "symbol"
    typeof Math // "object" Math는 수학 연산을 제공하는 내장 객체
    typeof null // "object" 오류, 별도의 고유한 자료형을 가지는 특수값, 객체가 아님, 하위 호환성 유지를 위해 남김
    typeof alert // "function" 오래 전에 만들어진 규칙, 마찬가지로 하위 호환성을 위해 남겨짐

## 2-6 alert, prompt, confirm

> - 모두 모달 창을 띄워주는데, 모달 창이 떠 있는 동안은 스크립트의 실행이 일시 중단됨
> - 사용자가 창을 닫기 전까진 나머지 페이지와 상호 작용이 불가능
> - 모달 창의 위치는 브라우저가 결정하는데, 대개 브라우저 중앙에 위치!
> - 모달 창의 모양은 브라우저마다 다름, 개발자는 창의 모양을 수정할 수 없음

> ### 1. alert
>
> > - 사용자가 ‘확인(OK)’ 버튼을 누를 때까지 메시지를 보여주는 창이 떠 있음

> ### 2. prompt
>
> > - 텍스트 메시지와 입력 필드(input field), 확인(OK) 및 취소(Cancel) 버튼이 있는 모달 창을 띄움

    result = prompt(title//사용자에게 보여줄 문자열, [default//선택값 <-- 매개변수가 필수가 아닌 선택]);

> > - Internet Explorer(IE)는 '기본값’ 필수

    let test = prompt("Test", ''); // <-- IE 사용자를 위한 매개변수 처리

> ### 3. confirm
>
> > - 질문과 확인 및 취소 버튼이 있음 yes or no
> > - 사용자가 확인버튼를 누르면 true, 그 외의 경우는 false를 반환

## 2-7 형 변환(type conversion)

> ### 1. 문자형으로 변환
>
> > - 무언가 출력할때 자주 일어남
> > - String(value)을 사용하면 명시적 변환 가능
>
> ### 2. 숫자형으로 변환
>
> > - 수학관련 연산시 주로 일어남
> > - Number(value)으로 형 변환 가능
> > - undefined NaN
> > - null 0
> > - true and false 1 과 0
> > - string //문자열 처음, 끝 공백 제거 --> 문자열이 없다면 0 or 있다면 숫자를 읽음 만약 변환 실패면 --> NaN
>
> ### 3. 불린형으로 변환
>
> > - 숫자 0, null, undefined, NaN, "" --> false
> > - 그 외의 값 --> true
> >   예외 : 숫자형으로 변환 시 undefined --> NaN / 문자열 "0"과 " "(공백) --> true

## 2-8 기본 연산자(operator)와 수학

> - 피연산자(operand) : 연산자가 연산을 수행하는 대상 = 인수(argument)
> - 단항(unary) : 피연산자를 하나만 받는 연산자, ' - '는 피연산자의 부호를 뒤집음
> - 이항(binary) : 두 개의 피연산자를 받는 연산자, ' - '는 단향 연산자의 ' - '와 같지만 수행하는 게 다름 구분 하는 방법은 피연산자의 개수
>   > - 단항 연산자 `-` : 부호를 뒤집음
>   > - 이항 연산자 `-` : 뺄셈을 해줌
>
> ### 산술 연산자
>
> - `덧셈 연산자 +` : 숫자를 더한 결과 반환,
>   > - `이항 연산자` '+' 의 피연산자로 문자열 전달해서 문자열을 병합(연결)함,
>   > - ⭐️하나만 문자열이여도 문자열로 변환
>   >   [ex) alert(2 + 2 + '1'); // '221'이 아니라 '41'이 출력됩니다.], [ex) alert("$" + 4 + 5); // $45 앞에 "$"가 문자열이므로 뒤에 숫자열들이 문자열로 변환]
>   > - ⭐️`단항 연산자`에서 `+`가 붙은 숫자형이 아닌 피연산자는 숫자형으로 변환
>   >   [ex 1) alert( +true );// 1], [ex 2) alert( +"" );// 0]
>   > - 이항 덧셈 연산자 +는 문자열 연결과 변환 가능⭕️
>   > - 다른 산술 연산자는 오직 숫자형을 다르고 숫자형이 아닐 시 숫자형으로 바꿈
> - `뺄셈 연산자 -`
> - `곱셈 연산자 *`
> - `나눗셈 연산자 /`
> - `나머지(remainder) 연산자 %` : 비율(퍼센트)과는 관련 없음, 나눈 후 정수 반환
> - `거듭제곱(exponentiation) 연산자 **` : a\*\*b a를 b번 곱한 값이 반환됨
> - `할당(assignment) 연산자 =` : 할당할때 쓰임 우선순위는 거의 마지막
> - 단항 연산자 > 이항 연산자
>   > `+ (단항 덧샘)` > `- (단항 부정)` > `** (지수)` > `* (곱셈)` > `/ (나눗셈)` > `+ (덧셈)` > `- (뺄셈)` > `= (할당)` [우선순위테이블](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
> - `증가(increment) 연산자 ++` : 변수를 1 증가시킴 (변수에만 사용 가능, 변수 앞 뒤)
> - `감소(decrement) 연산자 --` : 변수를 1 감소시킴 (변수에만 사용 가능, 변수 앞 뒤)
>   > - `변수++` : 후위형(postfix form) --> 증가, 감소 전의 기존값을 반환
>   > - `++변수` : 전위형(prefix form) --> 증가, 감소 후의 새로운 값을 반환
> - `비트(bitwise) 연산자` : 인수를 32비트 정수로 변환하여 이진 연산을 수행, 암호를 다룰때 사용 [MDN확인](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
>   > - 비트 AND ( & )
>   > - 비트 OR ( | )
>   > - 비트 XOR ( ^ )
>   > - 비트 NOT ( ~ )
>   > - 왼쪽 시프트(LEFT SHIFT) ( << )
>   > - 오른쪽 시프트(RIGHT SHIFT) ( >> )
>   > - 부호 없는 오른쪽 시프트(ZERO-FILL RIGHT SHIFT) ( >>> )
> - `쉼표(comma) 연산자 ,` : 코드를 짧게 쓰는 의도로 사용함, 코드를 한 줄에서 볼 수 있게 해줌, 우선순위가 `=` 보다 낮음 [ex) let a = (1 + 2, 3 + 4); alert( a ); // 7 (3 + 4의 결과) 마지막 코드가 반환됨]

## 2-9 비교 연산자

> - 불린값을 반환함
> - 보다 큼, 작음 : `a > b`, `a < b`
> - 보다 크거나 같음, 작거나 같음 : `a >= b`, `a <= b`
> - 같음 : `a == b` (`= 할당 연산자`와 주의 )
>   > `동등(equality) 연산자 ==` 는 0과 false를 구별❌ [ex) alert( 0 == false ); // true]
>   > 피연산자가 공백일떄도 구별❌ [ex) alert( '' == false ); // true] > > > `==`가 비교할때 숫자형으로 바꾸기 때문!
> - 같지 않음 : `a != b`
>
> - `불린형 반환` true 반환 : ‘긍정’, ‘참’, '사실’
>   false 반환 : ‘부정’, ‘거짓’, '사실이 아님’
>   [ex) let result = 5 > 4; // 비교 결과를 변수에 할당 alert( result ); // true]
> - `문자열 비교` : 사전 순으로 문자열을 비교, 구성하는 문자 하나하나를 비교해가며 문자열을 비교
>   `사전편집(lexicographical)` : "사전 뒤쪽 문자열" > "사전 앞쪽의 문자열"
>   [ex) alert( 'Bee' > 'Be' ); // true 문자옇의 길이가 더 긴 문자열이 크다고 결론을 내림]
>   소문자 > 대문자
>   비교 값이 다르면 숫자형으로 변환
>   불린값의 경우 true는 1, false는 0
>   ❗️❗️ 동등 비교(==) 시 true를 반환함
>   논리 평가 시 값 하나는 true, 다른 값 하나는 false를 반환함
>
>   > [ex) let a = 0; alert( Boolean(a) ); // false let b = "0"; alert( Boolean(b) ); // true alert(a == b); // true!]
>
> - `일치 연산자 ===`
>   > - 형 변환 없이 값을 비교 가능, 비교가 매우 엄격함, 에러 발생 확률 ↓
> - `불일치 연산자 !==`
>   > - `!==`는 부등 연산자 `!=`의 엄격한 형태
>   > - null과 undefined는 동등 비교(==) 시 서로 같지만 다른 값(0)과는 같지 않음

    ⭐️과제 1⭐️
    * "" + 1 + 0 (""이 '+'와 같이 있어 1,0 모두 문자열로 바꿔버림) = 10
    * "" - 1 + 0 (""은 '-' 때는 0으로 바뀜) = -1
    * true + false (숫자형으로 변환시 true --> 1 false --> 0) = 1
    * 6 / "3" ("3"을 숫자열로 바꾼 후 나누기) = 2
    * "2" * "3" ("2", "3"을 숫자열로 바꾼 후 곱하기) = 6
    * 4 + 5 + "px" (4+5=9 "px"는 그대로) = "9px"
    * "$" + 4 + 5 ("$" 이 문자열이 뒤에 숫자까지 영향을 주어) = "$45"
    * "4" - 2 ('-' 는 문자열에서 숫자열로 변환 시킴 4 - 2) = 2
    * "4px" - 2 ("4px"에 숫자가 없어서 변환 실패) = NaN
    * 7 / 0 (숫자를 0으로 나누면 무한) = Infinity
    * "  -9  " + 5 (앞에 ""가 뒤어 5까지 문자로 바꿈) = " -9 5"
    * "  -9  " - 5 (""를 -9로 변환) = -14
    * null + 1 (null 숫자형으로 변환시 0) = 1
    * undefined + 1 (undefined 숫자형으로 변환시 NaN) = NaN
    * " \t \n" - 2 ('-' 가 숫자형으로 변환시키는데 숫자가 없으므로 0) = -2

## 2-10 if 와 '?'

> ### if
>
> - if (괄호 안에 들어가는 조건을 평가) {
>   }
> - 괄호 안의 조건이 참이면 `true` 거짓이면 `false`
> - 괄호 안의 표현식을 평가하고 그 결과를 불린값으로 변환
> - ‘falsy(거짓 같은)’ 값 : 0, "빈 문자열", null, undefined, NaN --> 불린형으로 변환 = false
> - ‘truthy(참 같은)’ 값 : 이 외의 값은 불린형으로 변환 = true

> ### else
>
> - if 뒤에 붙일 수 있음, 코드가 거짓일때 실행
>
> ### fi else
>
> - 약간 차이가 있는 조건 여러개를 처리할 때

    let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');
    if (year < 2015) {
    alert( '숫자를 좀 더 올려보세요.' );
    } else if (year > 2015) {
    alert( '숫자를 좀 더 내려보세요.' );
    } else {
    alert( '정답입니다!' );

    }

> - if --> if else --> else 순으로 확인
>
> ### 조건부(conditional) 연산자 = 삼항(ternary) 연산자
>
> - `물음표(question mark) 연산자` : `?` 로 명시
> - 피연산자를 세 개 받는 연산자는 조건부 연산자 하나임
>   [ex) let accessAllowed = age > 18 ? true : false; // age가 18 이상이면 true, 그렇지 않으면 false = let accessAllowed = age > 18; // 비교 연산자 자체가 true나 false를 반환하기 때문]
> - `다중 ?` : (A) ? (A') : (B) ? (B') : (C) ? (C');
> - `?`를 `if` 대신으로 사용❌ 가독성 떨어짐
>
> [과제 1](html.html)

## 2-11 논리 연산자
