[Go to previous page](README.md)

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

```js
    let message; // 변수 선언
    message = 'Hello'; // 문자열 저장
    alert(message); // 변수에 저장된 값 보여줌

    - 더 간단하게
    let message = 'Hello!'; // 변수를 선언하고 값을 할당
    alert(message); // Hello!
```

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
> > - 큰 숫자를 입ㅓ력 할 때 : 숫자 옆에 `e` + 0의 갯수
> > - `e` 왼쪽 숫자에 e 오른쪽에 있는 수만틈 10의 거듭제곱을 곱함
> > - `e` 오른쪽에 `-`음수가 있으면 음수의 절대값 만큼 10을 거듭제곱
> > - 자바스크립트는 특별한 변환 없이 16진수(0x), 8진수(0o), 2진수(0b)를 바로 사용할 수 있게 지원
> > - `parseInt`(str, base)를 사용하면 str을 base진수로 바꿔줌(단, 2 ≤ base ≤ 36).
> > - `num.toString`(base)는 숫자를 base진수로 바꾸고, 이를 문자열 형태로 반환합니다.
> > - `parseInt/parseFloat` 를 사용하면 문자열에서 숫자만 읽고 에러가 발생 전에 '약한'형 변환 사용 가능
> > - 소수를 처리할때 : `Math.floor`, `Math.ceil`, `Math.trunc`, `Math.round`, `num.toFixed(precision)`를 사용하면 어림수를 구할 수 있음

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
> > - symbol : 고유한, 유일한 식별자(unique identifier)를 만들 때 사용
> > - Symbol(이름) 로 만들 수 있음
> > - 동일한 심볼을 여러 개 만들어도 각 심볼값은 다름
> > - 문자형으로 자동 형 변환안됨
> > - 심볼을 호출할때 .toString() 메서드를 명시적으로 호출
> > - 심볼을 이용해 ‘숨김(hidden)’ 프로퍼티를 만들 수 있음
> >   > - 외부코드에서 접근❌
> >   > - 값도 덮어쓸 수❌
> >   > - 객체 리터럴 {...}을 사용해 객체를 만든 경우, 대괄호를 사용해 심볼형 키를 만들어야함
> >   > - for..in 반복문에서 배제됨
> >   > - 이름이 같은 심볼이 같은 개체를 가리키길 원할 때 전역 심볼 레지스트리(global symbol registry) 사용 --> Symbol.for(심볼이름)사용, Symbol.keyFor(sym)을 사용하면 심볼 이름을 얻을 수 있음(전역심볼이, 있는 레지스트리를 뒤져서 해당 심볼의 이름을 얻어냄)
> >   > - `시스템 심볼(system symbol)` : 객체를 미세조정 가능 내부에서 사용되는 시스템 심볼은 `Symbol.*`으로 접근 가능
> >   > - `잘 알려진 심볼(well-known symbols)`
> >   >   > - Symbol.hasInstance
> >   >   > - Symbol.isConcatSpreadable
> >   >   > - Symbol.iterator
> >   >   > - Symbol.toPrimitive
> >   >   > - 기타 등등

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

    ex) alert(2 + 2 + '1'); // '221'이 아니라 '41'이 출력 됨
    ex) alert("$" + 4 + 5); // $45 앞에 "$"가 문자열이므로 뒤에 숫자열들이 문자열로 변환

> > - ⭐️`단항 연산자`에서 `+`가 붙은 숫자형이 아닌 피연산자는 숫자형으로 변환
> >   [ex 1) alert( +true );// 1], [ex 2) alert( +"" );// 0]
> > - 이항 덧셈 연산자 +는 문자열 연결과 변환 가능⭕️
> > - 다른 산술 연산자는 오직 숫자형을 다르고 숫자형이 아닐 시 숫자형으로 바꿈
>
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
> - `쉼표(comma) 연산자 ,` : 코드를 짧게 쓰는 의도로 사용함, 코드를 한 줄에서 볼 수 있게 해줌, 우선순위가 `=` 보다 낮음

    ex) let a = (1 + 2, 3 + 4);
    alert( a );
    // 7 (3 + 4의 결과) 마지막 코드가 반환됨

## 2-9 비교 연산자

> - 불린값을 반환함
> - 보다 큼, 작음 : `a > b`, `a < b`
> - 보다 크거나 같음, 작거나 같음 : `a >= b`, `a <= b`
> - 같음 : `a == b` (`= 할당 연산자`와 주의 )
>   > `동등(equality) 연산자 ==` 는 0과 false를 구별❌

    ex) alert( 0 == false ); // true

> > 피연산자가 공백일떄도 구별❌

    ex) alert( '' == false ); // true
     > > > `==`가 비교할때 숫자형으로 바꾸기 때문!

> - 같지 않음 : `a != b`
>
> - `불린형 반환` true 반환 : ‘긍정’, ‘참’, '사실’
>   false 반환 : ‘부정’, ‘거짓’, '사실이 아님’

    ex) let result = 5 > 4; // 비교 결과를 변수에 할당
    alert( result ); // true

> - `문자열 비교` : 사전 순으로 문자열을 비교, 구성하는 문자 하나하나를 비교해가며 문자열을 비교
>   `사전편집(lexicographical)` : "사전 뒤쪽 문자열" > "사전 앞쪽의 문자열"

    ex) alert( 'Bee' > 'Be' );
    // true 문자옇의 길이가 더 긴 문자열이 크다고 결론을 내림

> 소문자 > 대문자
> 비교 값이 다르면 숫자형으로 변환
> 불린값의 경우 true는 1, false는 0
> ❗️❗️ 동등 비교(==) 시 true를 반환함
> 논리 평가 시 값 하나는 true, 다른 값 하나는 false를 반환함

    ex) let a = 0;
    alert( Boolean(a) ); // false
    let b = "0";
    alert( Boolean(b) ); // true alert(a == b); // true!

> - `일치 연산자 ===`
>   > - 형 변환 없이 값을 비교 가능, 비교가 매우 엄격함, 에러 발생 확률 ↓
> - `불일치 연산자 !==`
>   > - `!==`는 부등 연산자 `!=`의 엄격한 형태
>   > - null과 undefined는 동등 비교(==) 시 서로 같지만 다른 값(0)과는 같지 않음

    ⭐️과제⭐️
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
>
> ### else
>
> - if 뒤에 붙일 수 있음, 코드가 거짓일때 실행
>
> ### if else
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

    ex) let accessAllowed = age > 18 ? true : false;
    // age가 18 이상이면 true,
    그렇지 않으면 false = let accessAllowed = age > 18;
    // 비교 연산자 자체가 true나 false를 반환하기 때문

> - `다중 ?` : (A) ? (A') : (B) ? (B') : (C) ? (C');
> - `?`를 `if` 대신으로 사용❌ 가독성 떨어짐
>
> [과제](html.html)

## 2-11 논리 연산자

> - ! > && > | |
>
> ### ||(OR)
>
> - 타입에 제약이 없음
> - 피연산자 불린형❌ --> 평가를 위해 불린형으로 변환, 1 = true 0 = false, 주어진 조건에서 하나라도 참이면 참
> - `단락 평가(short circuit evaluation)`
>   > 왼쪽에서 오른쪽으로 평가 --> 각 피연산자를 불린형으로 변환 --> 맨 처음 ⭐️`true`가 나오면 멈춤 --> 해당 피연산자의 변환 전 원래 값으로 반환 (모든 피연산자가 false일 경우 맨 마지막 값을 반환)
>   > 두 번째 피연산자가 변수 할당과 같은 부수적인 효과(side effect)를 가지는 표현식 일 때 명확히 볼 수 있음
>   > 연산자 왼쪽 조건이 falsy일 때만 명령어를 실행하고자 할 때 쓰임

    ex) true || alert("not printed");
    false || alert("printed");
    // 첫 번째 줄의 `||` 연산자는 `true`를 만나자마자 평가를 멈추기 때문에 alert가 실행되지 않음

> ### &&(AND)
>
> - 타입에 제약이 없음
> - AND 연산자는 첫 번째 falsy를 반환
> - 모두 truthy이면(falsy가 없으면) 마지막 피연산자가 반환
> - 두 피연산자가 모두가 참일 때 `true`반환
> - if 대신에 사용❌
> - 왼쪽에서 오른쪽으로 평가 --> 각 피연산자 불린형 변환 --> 변환 후 값이 ⭐️`false` --> 평가를 멈추고 해당 피연산자의 변환 전 원래 값을 반환
>
> ### !(NOT)
>
> - 인수를 하나만 받음
> - 피연산자를 불린형(true / false)으로 변환 --> 변환된 값의 반대를 반환 true <--> false
> - NOT을 두 개 연달아 사용(!!)하면 값을 불린형으로 변환 가능

    과제
    alert( null || 2 || undefined ); // 첫번째 truthy 인 2가 출력
    alert( 1 && null && 2 ); // 첫 번째 falsy인 null이 출력

## 2-12 null 병합 연산자(nullish coalescing operator) `??`

> - '확정되어있는' 변수, '값이 할당된' 변수를 빠르게 찾을 수 있음
> - `a ?? b` : `a`가 `null`도 아니고 `undefined`도 아니면 `a` 그 외의 경우는 `b`
> - ??는 첫 번째 정의된(defined) 값을 반환
> - ||(or) 과 ??(null병합 연산자) 차이점

    ex) let height = 0;
    alert(height || 100); // 100 --> height || 100 : height에 0을 할당, 0을 falsy 한 값으로 취급
    alert(height ?? 100); // 0 --> height가 정확하게 null이나 undefined일 경우에만 100이 됨

> - 우선순위는 낮음
> - &&, || 와 함께 시용❌

## 2-13 while과 for 반복문

> ### while 반복문
>
> - 각 반복이 시작 전 조건을 확인 --> 무한 반복문 만들 때 사용
> - 반복(iteration, 이터레이션) : 반복문 본문이 한 번 실행되는 것
> - while (condition '조건') { // 코드 // '반복문 본문(body)'}
> - while 조건엔 모든 종류의 표현식, 변수가 가능
> - 조건은 while에 평가 후 불린 값으로 변경
> - body가 한 줄이면 대괄호를 쓰지 않아도⭕️
>
> ### do…while 반복문
>
> - 각 반복이 끝난 후에 조건을 확인
> - condition을 반복문 본문 아래로 옮길 수 있음
> - do { //body } while (condition); --> 본문 먼저 실행 --> 조건 확인 --> 조건이 truthy인 동안엔 본문이 계속 실행
> - 본문을 최소한 한 번 이라도 실행 하고 싶을 때 사용
>
> ### for 반복문
>
> - 각 반복이 시작하기 전에 조건을 확인, 추가 세팅 가능, 많이 사용!
> - for (begin; condition; step) { // ... 반복문 본문 ... }
> - 구성 요소
>   > begin - i = 0 반복문에 진입할 때 단 한 번 실행
>   > condition - i < 3 반복마다 해당 조건이 확인됨 --> false시 반복문 멈춤
>   > body - alert(i) condition이 truthy일 동안 계속해서 실행됩니다.
>   > step - i++ 각 반복의 body가 실행된 이후에 실행

      // for (let i = 0; i < 3; i++) alert(i)
      // begin을 실행함
      let i = 0
      // condition이 truthy이면 → body를 실행한 후, step을 실행함
      if (i < 3) { alert(i); i++ }
      // condition이 truthy이면 → body를 실행한 후, step을 실행함
      if (i < 3) { alert(i); i++ }
      // condition이 truthy이면 → body를 실행한 후, step을 실행함
      if (i < 3) { alert(i); i++ }
      // i == 3이므로 반복문 종료

> - ‘인라인’ 변수 선언 : ‘카운터’ 변수 i를 반복문 안에서 선언, 반복문 안에서만 접근할 수 있음, 인라인 변수 선언 대신, 정의되어있는 변수를 사용할 수도 있음
> - 반복문이 시작될 때 아무것도 할 필요가 없으면 begin 생략 가능
> - step도 생략 가능

    [ex) et i = 0; // i 선언, 값 할당
    for (; i < 3; i++) { // 'begin'필요❌
    alert( i ); // 0, 1, 2}]
    [ex) let i = 0; for (; i < 3;) { alert( i++ ); }]

> - `break` : 반복문을 falsy가 없어도 빠져나올 수 있음
> - `continue` : 전체 반복문을 멈추지 않음, 현재 실행 중인 반복을 멈추고 반복문이 다음 반복을 강제로 실행시키도록 함 (조건을 통과할 때)
> - `?` 오른쪽에는 `brake`, `continue` 가 올 수 없음
> - `레이블(label)` : 여러개의, 중첩 반복문을 한 번에 빠져나와야 하는 경우 레이블을 사용하면 전부 빠져나올 수 있음 `labelName: for (...) {...}`

    ex) outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`(${i},${j})의 값`, '');
    // 사용자가 아무것도 입력하지 않거나, Cancel 버튼을 누르면 모든 반복문 빠져나옴
    if (!input) break outer; // (*)
    // 입력받은 값을 가지고 무언가를 함
        }
    }
    alert('완료!');

> - `break`,`continue`는 반복문 안에서만 사용할 수 있고, `레이블`은 반드시 break이나 continue 지시자 위에 있어야 함

    과제
    1. for (let i = 0; i < 5; ++i) alert( i );
    2. for (let i = 0; i < 5; i++) alert( i );
    // 먼저 i = 0 이고 i는 5보다 작다 i는 1만큼 증가 --> 1, 2, 3, 4 까지 출력
    // 증가 연산자가 반환하는 값은 상관 없음 ++i나 i++나 상관 없이 값은 같음

>

    for (let i = 0; i < 3; i++) {            let i = 0;
    alert( `number ${i}!` );         =       while (i < 3) {
    }                                          alert( `number ${i}!` );
                                               i++;

                                             }

## 2-14 switch문

> - 하나 이상의 `case`문으로 구성
> - `default`문도 있지만, 이는 필수는 아님
> - 변수 `x` 와 일치하는 값을 찾으면 해당 `case`의 아래 코드가 실행 됨
> - break문이 있거나, switch 문이 끝나면 코드의 실행 끝
> - 값이 일치하는게 없다면 `default`아래 코드 실행
> - 형이 다르면 코드가 실행되지 못함

    switch(x) {
    case 'value1':  // if (x === 'value1')
        ...
        [break]

    case 'value2':  // if (x === 'value2')
        ...
        [break]

    default:
        ...
        [break]
    }

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

> ### 재귀와 스택
>
> > - 재귀(recursion) : 함수에서 다른 함수를 호출해야할 때, 함수가 자기 자신을 호출 하는 것
> > - 재귀 단계(recursion step) : 함수가 자신을 호출하는 단계
> > - 재귀의 베이스(base) : 작업을 아주 간단하게 만들어서 함수가 더 이상은 서브 호출을 만들지 않게 해주는 인수
> > - 재귀적으로 정의된 자료 구조는 자기 자신을 이용해 자료 구조를 정의, 재귀적으로 정의된 자료구조에 속하는 연결 리스트는 리스트 혹은 null을 참조하는 객체로 이루어진 데이터 구조를 사용해 정의됨

    list = {value, next -> list}

# 스타일 가이드

[코딩 스타일](https://ko.javascript.info/coding-style)
[Google의 자바스크립트 스타일 가이드](https://google.github.io/styleguide/jsguide.html)
[Airbnb의 자바스크립트 스타일 가이드](https://github.com/airbnb/javascript)
[Idiomatic.JS](https://github.com/rwaldron/idiomatic.js)
[StandardJS](https://standardjs.com/)

# 주석

## 주석에 들어가면 좋은 내용

고차원 수준 아키텍처
함수 용례
당장 봐선 명확해 보이지 않는 해결 방법에 대한 설명

## 주석에 들어가면 좋지 않은 내용

'코드가 어떻게 동작하는지’와 '코드가 무엇을 하는지’에 대한 설명
코드를 간결하게 짤 수 없는 상황이나 코드 자체만으로도 어떤 일을 하는지 충분히 판단할 수 없는 경우에만 주석을 넣으세요.

# ❗️❗️ NO ❗️❗️

- 코드 짧게 쓰기
- 글자 하나만 사용하기
- 약어 사용
- 포괄적인 명사
- 철자 유사한 단어
- 동의어 사용
- 이름 재사용
- 필요하지 않은데 언더스코어 쓰기
- 과장 형용사 쓰기
- 외부 변수 덮어쓰기
- 부작용이 있는 코드 작성
- 함수에 여러 기능 넣기

[Chrome으로 디버깅하기](https://ko.javascript.info/debugging-chrome)

# 개발 순서

1. 명세서 초안을 작성합니다. 초안엔 기본적인 테스트도 들어갑니다.
2. 명세서 초안을 보고 코드를 작성합니다.
3. 코드가 작동하는지 확인하기 위해 Mocha라 불리는 테스트 프레임워크를 사용해 명세서를 실행합니다.(Mocha에 대해선 아래에서 다룰 예정입니다.) 이때, 코드가 잘못 작성되었다면 에러가 출력됩니다. 개발자는 테스트를 모두 통과해 에러가 더는 출력되지 않을 때까지 코드를 수정합니다.
4. 모든 테스트를 통과하는 코드 초안이 완성되었습니다.
5. 명세서에 지금까진 고려하지 않았던 유스케이스 몇 가지를 추가합니다. 테스트가 실패하기 시작할 겁니다.
6. 세 번째 단계로 돌아가 테스트를 모두 통과할 때까지 코드를 수정합니다.
7. 기능이 완성될 때까지 3~6단계를 반복합니다.

# Behavior Driven Development

[BDD](https://en.wikipedia.org/wiki/Behavior-driven_development)에선 스펙을 먼저 작성하고 난 후에 구현을 시작합니다. 구현이 종료된 시점에는 스펙과 코드 둘 다를 확보할 수 있습니다.

1. 테스트 – 함수가 의도하는 동작을 제대로 수행하고 있는지 보장함
2. 문서 – 함수가 어떤 동작을 수행하고 있는지 설명해줌. describe와 it에 설명이 들어감
3. 예시 – 실제 동작하는 예시를 이용해 함수를 어떻게 사용할 수 있는지 알려줌

# 스펙

- Mocha – 핵심 테스트 프레임워크로, describe, it과 같은 테스팅 함수와 테스트 실행 관련 주요 함수를 제공합니다.
- Chai – 다양한 assertion을 제공해 주는 라이브러리입니다.
- Sinon – 함수의 정보를 캐내는 데 사용되는 라이브러리로, 내장 함수 등을 모방합니다.

    <!DOCTYPE html>
    <html>
    <head>
    <!-- 결과 출력에 사용되는 mocha css를 불러옵니다. -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">
    <!-- Mocha 프레임워크 코드를 불러옵니다. -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
    <script>
        mocha.setup('bdd'); // 기본 셋업
    </script>
    <!-- chai를 불러옵니다 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
    <script>
        // chai의 다양한 기능 중, assert를 전역에 선언합니다.
        let assert = chai.assert;
    </script>
    </head>

    <body>

    <script>
        function pow(x, n) {
        /* 코드를 여기에 작성합니다. 지금은 빈칸으로 남겨두었습니다. */
        }
    </script>

    <!-- 테스트(describe, it...)가 있는 스크립트를 불러옵니다. -->
    <script src="test.js"></script>

    <!-- 테스트 결과를 id가 "mocha"인 요소에 출력하도록 합니다.-->
    <div id="mocha"></div>

    <!-- 테스트를 실행합니다! -->
    <script>
        mocha.run();
    </script>
    </body>

    </html>

1. <head> – 테스트에 필요한 서드파티 라이브러리와 스타일을 불러옴
2. <script> – 테스트할 함수(pow)의 코드가 들어감
3. 테스트 – describe("pow", ...)를 외부 스크립트(test.js)에서 불러옴
4. HTML 요소 <div id="mocha"> – Mocha 실행 결과가 출력됨
5. mocha.run() – 테스트를 실행시켜주는 명령어

> ### 스펙에 테스트 추가 하는 방법

> > 1. 기존 it 블록에 assert를 하나 더 추가하기
> >    . 2. 테스트를 하나 더 추가하기

> > - 테스트는 하나에 한가지만 확인 하기
> > - makeTest는 for 문에서만 사용
> > - 중첩 describe를 쓰면 그룹을 만들 수 있음
> > - 중첩 describe는 새로운 테스트 '하위 그룹(subgroup)'을 정의할 때 사용

> ### before/after와 beforeEach/afterEach

> > - 함수 before는 (전체) 테스트가 실행되기 전에 실행
> > - 함수 after는 (전체) 테스트가 실행된 후에 실행
> > - 함수 beforeEach는 매 it이 실행되기 전에 실행
> > - 함수 afterEach는 매 it이 실행된 후에 실행
> > - beforeEach/afterEach와 before/after는 대개 초기화 용도로 사용

> ### 테스트 도움되는 사이트

> > - [karma](https://karma-runner.github.io/latest/index.html)
> > - [Mocha](https://mochajs.org/)
> > - [Chai](https://www.chaijs.com/)
> > - [Sinon](https://sinonjs.org/)

> ### 다양한 assertion

> > - assert.isNaN : NaN인지 아닌지 확인
> > - assert.equal(value1, value2) : value1과 value2의 동등성을 확인(value1 == value2)
> > - assert.strictEqual(value1, value2) : value1과 value2의 일치성을 확인 (value1 === value2)
> > - assert.notEqual, assert.notStrictEqual : 비 동등성, 비 일치성을 확인
> > - assert.isTrue(value) : value가 true인지 확인 (value === true)
> > - assert.isFalse(value) : value가 false인지 확인 (value === false)
> > - 기타 [docs](https://www.chaijs.com/api/assert/)확인

# 바벨

> - [바벨(Babel)](https://babeljs.io/)은 트랜스파일러(transpiler)로, 모던 자바스크립트 코드를 구 표준을 준수하는 코드로 바꿔줌
> - 트랜스파일러 : 기존 코드가 구 표준을 준수하는 코드로 변경
> - 폴리필
>   > - 명세서엔 새로운 문법이나 기존에 없던 내장 함수에 대한 정의가 추가됨
>   > - 새로운 제안이 정기적으로 등록, 분석
>   > - [가치있는 제안들은 등록됨](https://tc39.github.io/ecma262/)
>   > - 그리고 [명세서](http://www.ecma-international.org/publications/standards/Ecma-262.htm)에 등록됨
>   > - [core js](https://github.com/zloirock/core-js) : 다양한 폴리필을 제공합니다. 특정 기능의 폴리필만 사용하는 것도 가능합니다.
>   > - [polyfill.io](https://polyfill.io/v3/) : 기능이나 사용자의 브라우저에 따라 폴리필 스크립트를 제공해주는 서비스입니다.

# 객체

> ## 원시형
>
> > - 오직 하나의 데이터만 담을 수 있음 (문자(string), 숫자(number), bigint, 불린(boolean), 심볼(symbol), null, undefined)
>
> ## 객체형
>
> > - 다양한 데이터를 담을 수 있음
> > - 만드는 방법 : `{키(key 이름, 식별자) : 값(value)}`
> > - 값(value) --> 프로퍼티(property) 모든 자료형이 허용됨
> > - 키(key) --> 문자형과 심볼형만 가능
> > - `객체 리터럴(object literal)` : 중괄호를 이용해 객체를 선언하는 것
> > - 프로퍼티 값 얻기 : `alert(name.value);`
> > - `delete` 사용 하면 프로퍼티 삭제 가능
> > - 여러 단어를 조합해서 이름을 만들었다면 따옴표로 묶어, 대괄호 안에 넣으면 .으로 읽을 수 있음
> > - 참조에 의해(by reference)’ 저장되고 복사됨
> > - 객체가 할당된 변수를 복사할 땐 객체의 참조 값이 복사되고 객체는 복사되지 않음

    ex) alert(user["likes birds"]);

> > - 마지막 프로퍼티 끝은 쉼표로 끝낼 수 있음(trailing쉼표 or hanging쉼표)
> > - let bag = { [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 옴}; --> 계산된 프로퍼티 (computed property)
> > - 대괄호 표기법은 프로퍼티 이름과 제약을 없애줌 --> 예약어도 사용 가능(let, for...)
> > - **proto** 특별 대우를 받는 이름
> > - 존재하지 않는 프로퍼티에 접근 하면 `undefined` 가 반환됨
> > - 연산자 in을 사용하면 프로퍼티 존재 여부를 알 수 있음

    "key" in object

> > - `for in` 을 사용하면 객체의 모든 키를 순회 가능

    for (let key in user) {}

> > - 객체는 특별한 방식으로 정렬 됨 : 정수 프로퍼티(정수에서 왔다 갔다 할 수 있는 문자열)는 자동 정렬 --> 나머지는 추가한 순서대로
> > - 정수 프로퍼티로 취급하지 않게 하려면 `+` 를 붙이자
> > - 자바스크립트에는 일반 객체 이외에도 다양한 종류의 객체가 있음
> >   > - Array – 정렬된 데이터 컬렉션을 저장할 때 쓰임
> >   > - Date – 날짜와 시간 정보를 저장할 때 쓰임
> >   > - Error – 에러 정보를 저장할 때 쓰임
> >   > - 기타 등등

> ## 객체 복사 병합과 Object.assign
>
> (너무 어렵다 이 부분)
>
> - 새로운 객체를 만들고 기존 객체를 순회 (for in)후 복사

    let user = {
    name: "John",
    age: 30
    };

    let clone = {}; // 새로운 빈 객체

    // 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
    for (let key in user) {
    clone[key] = user[key];
    }

    // 이제 clone은 완전히 독립적인 복제본이 되었습니다.
    clone.name = "Pete"; // clone의 데이터를 변경합니다.

    alert( user.name ); // 기존 객체에는 여전히 John이 있습니다.

> - `Object.assign` 을 사용 해도 됨

    Object.assign(dest <-- 목표로 하는 객체, [src1, src2, src3... <-- 복사하고자 하는 객체 ])

> - 객체 src1, ..., srcN의 프로퍼티 --> dest에 복사 --> dest를 제외한 인수(객체)의 프로퍼티 전부가 첫 번째 인수(객체)로 복사됨 --> 마지막으로 dest를 반환

    let user = { name: "John" };
    let permissions1 = { canView: true };
    let permissions2 = { canEdit: true };
    Object.assign(user, permissions1, permissions2); <-- 프로퍼티를 유저로 복사
    // now user = { name: "John", canView: true, canEdit: true }

> - 목표 객체(user)에 동일한 이름을 가진 프로퍼티가 있는 경우엔 기존 값이 덮어씌워 짐
> - Object.assign을 사용하면 반복문 없이도 간단하게 객체를 복사가능

    let user = {
    name: "John",
    age: 30
    };

    let clone = Object.assign({}, user);

> - 프로퍼티가 다른 객체에 대한 참조값일 때
>   > - user[key]의 각 값을 검사 --> 그 값이 객체인 경우 객체의 구조도 복사해주는 반복문을 사용(깊은 복사(deep cloning)) : [\_.cloneDeep(obj)](https://lodash.com/docs/4.17.15#cloneDeep)

## 가비지 컬렉션

> - 더는 쓸모 없어지게 된 것들을 처리하는 방법
> - 자바스크립트는 도달 가능성(reachability)(‘도달 가능한(reachable)’ 어떻게든 접근하거나 사용할 수 있는 값) 이라는 개념을 사용해 메모리 관리를 수행
>
> ### 도달 가능 한 값 = root (루트가 참조하는 값이나 체이닝으로 루트에서 참조할 수 있는 값은 도달 가능한 값이 됨)
>
> > - 현재 함수의 지역 변수와 매개변수
> > - 중첩 함수의 체인에 있는 함수에서 사용되는 변수와 매개변수
> > - 전역 변수
> > - 기타 등등
>
> - 가비지 컬렉터는 루트(root) 정보를 수집하고 ‘mark(기억)’
> - 루트가 참조하고 있는 모든 객체를 방문하고 이것들을 ‘mark’
> - mark 된 모든 객체에 방문하고 그 객체들이 참조하는 객체도 mark 한번 방문한 객체는 전부 mark 하기 때문에 같은 객체를 다시 방문하는 일은 없음
> - 루트에서 도달 가능한 모든 객체를 방문할 때까지 위 과정을 반복
> - mark 되지 않은 모든 객체를 메모리에서 삭제
> - 참조된다고 해서 도달 가능한 것은 아님! 서로 연결된 객체들도 도달 불가능할 수 있다

## this

> - 메서드 내부에서 this 키워드를 사용하면 객체에 접근가능
> - 'this'는 '현재 객체'를 나타냄
> - 화살표 함수는 일반 함수와는 달리 ‘고유한’ this를 가지지 않음
> - ‘평범한’ 외부 함수에서 this 값을 가져옴
> - this 값은 런타임에 결정
> - 함수를 선언할 때 this를 사용할 수 있음, 함수가 호출되기 전까지 this엔 값이 할당되지 않음
> - 함수를 복사해 객체 간 전달할 수 있음
> - 함수를 객체 프로퍼티에 저장해 object.method()같이 ‘메서드’ 형태로 호출하면 this는 object를 참조

## 메서드

> - 객체 프로퍼티에 저장된 함수
> - `object.doSomthing()`은 객체를 행동할 수 있게 해줌
> - 메서드는 this로 객체를 참조

## `new` 연산자와 생성자 함수

> - 유사한 객체를 여러개 만들어야 할때 사용
>
> ### 생성자 함수 (= 일반함수)
>
> > - `new` 와 함께 호출하면 내부에서 `this`를 호출하고 마지막에 `this`가 반환됨
> > - 함수 이름 첫 글자는 대문자
> > - 반드시 앞에 `new` 를 붙일것
> > - 인수가 없는 생산자 함수는 괄호를 생략 가능
>
> ### new.target
>
> > - 함수가 `new`와 함께 호출 되었는지 알 수 있음

    function User() {
    alert(new.target);
    }

    // "new" 없이 호출함
    User(); // undefined

    //"new"를 붙여 호출함
    new User(); // function User { ... }

> ### return
>
> > - this 가 있을 때
> >   > - 객체를 return 한다면, this 대신 객체가 반환
> >   > - 원시형을 return 한다면, return문이 무시

## 옵셔널 체이닝 `?.`

> - 최근에 추가된 문법 폴리필(명세서엔 새로운 문법이나 기존에 없던 내장 함수에 대한 정의가 추가) 필요함
> - ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환
> - ?.앞의 변수는 꼭 선언되어 있어야함
> - 연산자❌ 함수, 대괄호와 함께 동작하는 특별한 문법 구조체(syntax construct)임
>
> ### ?.()
>
> > - 존재 여부가 확실치 않은 함수를 호출할 때 쓸 수 있음
> > - .대신 대괄호 []를 사용해 객체 프로퍼티에 접근하는 경우엔 ?.[]를 사용할 수도 있음
> > - delete와도 함께 사용할 수 있음
> > - ?.은 읽기나 삭제하기에는 사용할 수 있지만 쓰기에는 사용할 수❌
> > - ?.은 할당 연산자 왼쪽에서 사용할 수❌

## 객체 원시형으로 변환

> - 자동으로 형 변환
>   > - "string" (alert 같이 문자열을 필요로 하는 연산)
>   > - "number" (수학 연산)
>   > - "default" (드물게 발생함)
> - 객체는 논리 평가시 `true` 반환
> - 객체는 숫자형, 문자형으로만 형 변환이 일어남
> - `alert(obj)` 객체를 출력할 때 대개 문자형으로 형 변환
> - `hint` : 목표로 하는 자료형
> - 이항 덧셈 연산을 제외한 수학 연산에서 `hint`가 number가 됨
> - `boolean` `hint`는 없음 --> 그냥 `true`로 평가
> - ⭐️형 변환이 필요할때
>   > - 객체에 obj[Symbol.toPrimitive](hint)메서드가 있는지 찾음 --> 있다면 메서드를 호출 --> `Symbol.toPrimitive`는 시스템 심볼로, 심볼형 키로 사용됨
>   > - 첫 번째에 해당하지 않고 hint가 `string`이라면, `obj.toString()`나 `obj.valueOf()`를 호출함 (존재하는 메서드만 실행됨)
>   > - 위의 둘에 해당하지 않고, `hint`가 `number`나 `default`라면 `obj.valueOf()`나 `obj.toString()`을 호출(존재하는 메서드만 실행됨)

## Symbol.toPrimitive

> > - JavaScript에 존재하는 내장 심볼
> > - 목표로 하는 자료형 `hint`를 명명하는데 사용

    obj[Symbol.toPrimitive] = function(hint) {
    // 반드시 원시값을 반환해야 합니다.
    // hint는 "string", "number", "default" 중 하나가 될 수 있습니다.
    };

> > - hint가 'string’인 경우: toString -> valueOf 순(toString이 있다면 toString을 호출, toString이 없다면 valueOf를 호출함)
> > - 그 외: valueOf -> toString 순
> > - 위의 메서드들은 반드시 원시값을 반환
> > - `toString`, `valueOf`가 객체를 반환하면 무시됨
> > - `toString` : 문자열 "[object Object]"을 반환
> > - `valueOf` : 객체 자신을 반환

> - 원시 래퍼 객체(object wrapper) : 원시값을 객체처럼 사용하기 위해 추가 기능을 제공해주는 특수한 객체, 이 객체는 곧 삭제됨
>   > - 원시 자료형의 이름을 그대로 따옴 --> String,Number,Boolean, Symbol

## 문자열

> - `템플릿 리터럴(template literal)` : 표현식을 \${…}로 감싸고 이를 백틱으로 감싼 문자열 중간에 넣어주면 해당 표현식을 문자열 중간에 쉽게 삽입 가능
> - `태그드 템플릿(tagged template)` : 백틱 않에 문자열 조각이나 표현식 평가 결과를 인수로 받아 자동 호출하는 기능
> - `\n` : 작은따옴표나 큰따옴표로도 여러 줄 문자열을 만들 수 있음, 줄 바꿈
> - `\r` : 캐리지 리턴(carriage return). Windows에선 캐리지 리턴과 줄 바꿈 특수 문자를 조합(\r\n)해 줄을 바꿈, 단독으로 사용❌
>   `\', \"` : 따옴표
>   `\\` : 역슬래시
>   `\t` : 탭
>   `\b` : 백스페이스(Backspace) 호환성 유지를 위해 남아있는 기호
>   `\f` : 폼 피드(Form Feed) 호환성 유지를 위해 남아있는 기호
>   `\v` : 세로 탭(Vertical Tab) 호환성 유지를 위해 남아있는 기호
>   `\xXX` : 16진수 유니코드 XX로 표현한 유니코드 글자 (예시: 알파벳 'z'는 '\x7A'와 동일)
>   `\uXXXX` : UTF-16 인코딩 규칙을 사용하는 16진수 코드 XXXX로 표현한 유니코드 기호, XXXX는 반드시 네 개의 16진수로 구성 (예시: \u00A9는 저작권 기호 ©의 유니코드임).
>   `\u{X…XXXXXX}` : (한 개에서 여섯 개 사이의 16진수 글자) UTF-32로 표현한 유니코드 기호, 몇몇 특수한 글자는 두 개의 유니코드 기호를 사용해 인코딩되므로 4바이트를 차지, 이 방법을 사용하면 긴 코드를 삽입 가능
> - 모든 특수문자는 역슬래시 (backslash character) `\`로 시작
> - `length` : 문자열의 길이가 저장 --> 프로퍼티⭕️, 함수❌
> - 특정 글자에 접근 : `[]`를 쓰거나 `str.charAt(특정글자)` 쓰기, 위치는 0
> - `for..of` : 문자열을 구성하는 글자를 대상으로 반복 작업 가능
> - 문자열은 수정 불가능
> - `toLowerCase()`,`toUpperCase()` : 대문자를 소문자로 소문자를 대문자로 변경
>   > - 글자 한글자만 변경 하려면 [글자 차례 번호]

    alert( 'Interface'[0].toLowerCase() ); // 'i'

> - 부분 문자열 찾기
>   > - `str.indexOf(A, pos)` : `A`의 `pos`에서부터 시작해 `A`가 어디에 위치하는지 찾아줌
> - 부분 문자열 추출
>   > - slice(start, end) start부터 end까지(end는 미포함) 음수 허용
>   > - substring(start, end) start와 end 사이 음수는 0으로 취급함, start가 end보다 커도 괜찮음
>   > - substr(start, length) start부터 length개의 글자 음수 허용, 첫번째 인수가 음수면 뒤에서부터 개수를 셈
> - 문자열 비교
>   > - 소문자 > 대문자
>   > - 발음 구별 기호(diacritical mark)가 붙은 문자는 알파벳 순서 기준❌
> - str.trim() – 문자열 앞과 끝의 공백 문자를 다듬어 줌(제거함).
> - str.repeat(n) – 문자열을 n번 반복

## 배열

> - 배열 선언

    let arr = new Array();
    let arr = [];

> - 대괄호 안에 초기 요소를 넣을 수 있음
> - 배열 내에 특정 요소를 얻으려면 : 배열 내 순서대로 순서를 넣어주기
> - `lenght`를 이용하면 배열에 요소가 몇개 있는지 알아낼 수 있음, 프로퍼티를 자동으로 조정해줌, 값을 수동으로 줄이묜 배열 끝이 잘림
> - 배열 요소의 자료형에는 제약이 없음
> - `push` : 맨 끝에 요소를 추가
> - `shift` : 제일 앞 요소를 꺼내 제거한 후 남아있는 요소들을 앞으로 밀어줌 --> 두 번째 요소가 첫 번째 요소가 됨
> - `push` : 요소를 스택 끝에 집어넣음
> - `pop` : 끝 요소를 제거헤서 반환
> - `unshift` : 배열 앞에 요소를 추가
> - `for (let i=0; i < arr.length; i++)` : 가장 빠른 방법이고 오래된 브라우저와도 호환
> - `for (let item of arr)` : 배열 요소에만 사용되는 모던한 문법
> - `for (let i in arr)` : 배열엔 절대 사용❌

> - `arr.splice(start)` : 요소를 자유자재로 다룰 수 있게 해줌, 추가 삭제 교체 가능

     let arr = ["I", "study", "JavaScript", "right", "now"];
    // 처음(0) 세 개(3)의 요소를 지우고, 이 자리를 다른 요소로 대체합니다.
    arr.splice(0, 3, "Let's", "dance");
    alert( arr ) // now ["Let's", "dance", "right", "now"]

> - `arr.slice` : arr.slice([start], [end]) --> "start" 인덱스부터 ("end"를 제외한) "end"인덱스까지의 요소를 복사한 새로운 배열을 반환
> - `arr.conca` : 기존 배열의 요소를 사용해 새로운 배열을 만들거나 기존 배열에 요소를 추가하고자 할 때 사용 --> arr.concat(arg1, arg2...)
> - `arr.forEach` 주어진 함수를 배열 요소 각각에 대해 실행 할 수 있음

    arr.forEach(function(item, index, array) {
    // 요소에 무언가를 할 수 있습니다.
    });

> - `arr.indexOf(item, from)` : 인덱스 from부터 시작해 item(요소)을 찾음
> - `arr.lastIndexOf(item, from)` : 검색을 끝에서부터 시작함
> - `arr.includes(item, from)` : 검색 후 해당하는 요소를 발견하면 true를 반환
> - ` arr.find(fn)` : 특정 조건에 부합하는 객체를 배열내에서 찾음

    let result = arr.find(function(item(함수를 호출할 요소), index(요소의 인덱스), array(배열 자기 자신)) {
    // true가 반환되면 반복이 멈추고 해당 요소를 반환합니다.
    // 조건에 해당하는 요소가 없으면 undefined를 반환합니다.
    });

> - ` arr.filter(fn)` : 조건을 충족하는 요소가 여러 개일때 조건에 맞는 요소 전체를 담은 배열을 반환함
> - `arr.map` : 배열 요소 전체를 대상으로 함수를 호출 --> 함수 호출 결과를 배열로 반환
> - `arr.sort()` : 배열의 요소를 정렬해줌, 배열 자체가 변경
> - `arr.reverse` : arr의 요소를 역순으로 정렬
> - `arr.split/join` : 문자열을 배열로, 배열을 문자열로 변환함
> - `arr.reduce(func, initial)` : 요소를 차례로 돌면서 func을 호출함, 반환값은 다음 함수 호출에 전달, 최종적으로 하나의 값이 도출
> - `Array.isArray(arr)` : arr이 배열인지 여부를 판단함
> - `sort`, `reverse`, `splice` : 기존 배열을 변형시킴
> - `arr.some(fn)` : 함수의 반환 값을 `true`로 만드는 요소가 하나라도 있는지 여부를 확인
> - `arr.every(fn)` : 모든 요소가 함수의 반환 값을 `true`로 만드는지 여부를 확인
> - `arr.fill(value, start, end)` : start부터 end까지 value를 채워 넣음
> - `arr.copyWithin(target, start, end)` : start부터 end까지 요소를 복사, 복사한 요소를 target에 붙여넣음, 기존 요소가 있다면 덮어씀

## iterable 객체

> - 반복 가능한(iterable, 이터러블) 객체는 배열을 일반화한 객체
> - 어떤 객체에든 `for..of` 반복문을 적용 가능
> - 메서드 `Symbol.iterator`가 구현된 객체
> - `유사 배열(array-like) `과 헷갈리지 말것, 인덱스와 length 프로퍼티가 있어서 배열처럼 보이는 객체
> - 이터레이터 : `obj[Symbol.iterator]`의 결과, 이어지는 반복 과정을 처리, 객체 {done: Boolean, value: any}을 반환하는 메서드 `next()`가 반드시 구현
> - `done:true` : 반복이 끝났음을 알려줌 --> 그렇지 않으면 `value`가 다음값이 됨
> - 문자열 이터레이터는 서로게이트 쌍을 지원
> - `Array.from(obj[, mapFn, thisArg])` : 이터러블이나 유사 배열인 obj를 진짜 Array로 만들 수 있음, obj에도 배열 메서드를 사용가능, 선택 인수 `mapFn`와 `thisArg` --> 각 요소에 함수를 적용 시킬수 있음

## 맵(Map)

> - `new Map()` : 맵을 만듬
> - `map.set(key, value)` : `key`를 이용해 `value`를 저장
> - `map.get(key)` : `key`에 해당하는 값을 반환, `key`가 존재하지 않으면 `undefined`를 반환
> - `map.has(key)` : `key`가 존재하면 `true`, 존재하지 않으면 `false`를 반환
> - `map.delete(key)` : `key`에 해당하는 값을 삭제
> - `map.clear()` : 맵 안의 모든 요소를 제거
> - `map.size` : 요소의 개수를 반환
> - `map`을 사용할 땐 map전용 메서드 `set`, `get` 등을 사용
> - 객체를 `key`로 사용 가능
> - `map.keys()` : 각 요소의 키를 모은 반복 가능한(iterable, 이터러블) 객체를 반환
> - `map.values()` : 각 요소의 값을 모은 이터러블 객체를 반환
> - `map.entries()` : 요소의 [키, 값]을 한 쌍으로 하는 이터러블 객체를 반환, 이 이터러블 객체는 `for..of`반복문의 기초로 쓴다
> - `Object.entries` : 객체를 맵으로 바꾸기
>   > - 메서드는 객체의 키-값 쌍을 요소([key, value])로 가지는 배열을 반환
> - `Object.fromEntries` : 맵을 객체로 바꾸기
> - 키 타입에 제약이 없음, 객체도 키가 가능

## 셋(Set)

> - 중복을 허용하지 않는 값을 모아놓음, 셋에 키가 없는 값이 저장
> - `new Set(iterable)` : 셋을 만듬, 이터러블 객체를 전달받으면(대개 배열을 전달받음) 그 안의 값을 복사해 셋에 넣어줌
> - `set.add(value)` : 값을 추가하고 셋 자신을 반환
> - `set.delete(value)` : 값을 제거, 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환
> - `set.has(value)` : 셋 내에 값이 존재하면 true, 아니면 false를 반환
> - `set.clear()` : 셋을 비움
> - `set.size` : 셋에 몇 개의 값이 있는지 세줌
> - `for..of`, `forEach` : 사용하면 `set`에 반복 작업 가능
> - `set.keys()` : 셋 내의 모든 값을 포함하는 이터러블 객체를 반환
> - `set.values()` : `set.keys`와 동일한 작업을 함, 맵과의 호환성을 위해 만들어진 메서드
> - `set.entries()` : 셋 내의 각 값을 이용해 만든 [value, value] 배열을 포함하는 이터러블 객체를 반환, 맵과의 호환성을 위해 만듬

## 위크맵

> - 구성하는 요소의 키는 오직 객체만 가능
> - `weakMap.get(key)`, `weakMap.set(key, value)`, `weakMap.delete(key)`, `weakMap.has(key)`
> - 키로 사용된 객체가 메모리에서 삭제되면 이에 대응하는 값 역시 삭제

## 위크셋

> - 객체만 저장할 수 있음, 원시값 저장❌
> - `add`, `has`, `delete`를 사용할 수 있고, `size`, `keys()`나 반복 작업 관련 메서드는 사용할 수 없음

## Object.keys, values, entries

> - `Object.keys(obj)` : 키가 담긴 배열을 반환
> - `Object.values(obj)` : 값이 담긴 배열을 반환
> - `Object.entries(obj)` : [key, value] 쌍이 담긴 배열을 반환, 객체에도 배열 전용 매서드를 사용 가능하게 함
>   > 1. `Object.entries(obj)`를 사용해 객체의 키-값 쌍을 요소로 갖는 배열을 얻음
>   > 2. 1.에서 만든 배열에 `map` 등의 배열 전용 메서드를 적용
>   > 3. 2.에서 반환된 배열에 `Object.fromEntries(array)`를 적용해 배열을 다시 객체로 되돌림
> - 심볼형 프로퍼티는 무시함

## 구조 분해 할당 (destructuring assignment)

> ### 배열 분해
>
> - 어떤 것을 복사한 이후에 변수로 '분해(destructurize)'해준다는 의미
> - 쉼표를 사용하면 필요하지 않은 배열 요소를 버릴 수 있음
> - 할당 연산자 우측엔 모든 이터러블이 올 수 있음
> - 할당 연산자 좌측엔 뭐든지 올 수 있음

    let [item1 = default, item2, ...rest] = array

> - `array`의 첫 번째 요소는 `item1`에, 두 번째 요소는 변수 `item2`에 할당되고, 이어지는 나머지 요소들은 배열 `rest` 저장
> - 할당 연산자 좌측의 패턴과 우측의 구조가 같으면 중첩 배열이나 객체가 있는 복잡한 구조에서도 원하는 데이터를 뽑아낼 수 있음
>
> ### 객체 분해

    let {prop : varName = default, ...rest} = object

> - `object`의 프로퍼티 `prop`의 값은 변수 `varName`에 할당되는데, `object`에 `prop`이 없으면 `default`가 `varName`에 할당
> - 연결할 변수가 없는 나머지 프로퍼티들은 객체 `rest`에 복사

## Date 객체와 날짜

> - `new Date()` : 인수 없이 호출하면 현재 날짜와 시간이 저장된 Date 객체가 반환
> - `new Date(milliseconds)` : UTC 기준(UTC+0) 1970년 1월 1일 0시 0분 0초에서 milliseconds 밀리초(1/1000 초) 후의 시점이 저장된 Date 객체가 반환
> - `타임스탬프(timestamp)` : 1970년의 첫날을 기준으로 흘러간 밀리초를 나타내는 정수
>   > - `new Date(timestamp)` 로 만들고 `date.getTime()` 메서드를 사용해 `Date` 객체에서 타임스탬프를 추출하는 것도 가능
> - `new Date(datestring)` : 인수가 하나인데, 문자열이라면 해당 문자열은 자동으로 구문 분석(parsed)됨
> - `new Date(year, month, date, hours, minutes, seconds, ms)` : 주어진 인수를 조합해 만들 수 있는 날짜가 저장된 객체가 반환, 첫 번째와 두 번째 인수만 필수값
>   > - `year`는 반드시 네 자리 숫자
>   > - `month`는 0(1월)부터 11(12월) 사이의 숫자
>   > - `date`는 일을 나타내는데, 값이 없는 경우엔 1일로 처리
>   > - `hours/minutes/seconds/ms`에 값이 없는 경우엔 0으로 처리
>
> ### 날짜 구성요소 얻기
>
> - `getFullYear()` : 연도(네 자릿수)를 반환합니다.
> - `getMonth()` : 월을 반환합니다(0 이상 11 이하)
> - `getDate()` : 일을 반환합니다(1 이상 31 이하)
> - `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()` : 시, 분, 초, 밀리초를 반환
> - `getTime()` : 주어진 일시와 1970년 1월 1일 00시 00분 00초 사이의 간격(밀리초 단위)인 타임스탬프를 반환
> - `getTimezoneOffset()` : 현지 시간과 표준 시간의 차이(분)를 반환
> - `Date.now()` : 현재 타임 스탬프를 반환하는 메서드
> - ` Date.parse(str)` : 문자열에서 날짜를 읽어올 수 있음, 문자열의 형식은 YYYY-MM-DDTHH:mm:ss.sssZ처럼 생겨야함
>   > - YYYY-MM-DD – 날짜(연-월-일)
>   > - "T" – 구분 기호로 쓰임
>   > - HH:mm:ss.sss – 시:분:초.밀리초
>   > - 'Z'(옵션) – +-hh:mm 형식의 시간대를 나타냄. Z 한 글자인 경우엔 UTC+0을 나타냄
> - 자바스크립트의 타임스탬프는 초가 아닌 밀리초 기준이라는 점을 항상 유의

## JSON과 메서드

> - JSON (JavaScript Object Notation)은 값이나 객체를 나타내주는 범용 포맷
> - 주석을 지원하지 않음
>   > - `JSON.stringify` : 객체를 JSON으로 바꿔줌 이렇게 바뀐 객체를 JSON으로 인코딩된(JSON-encoded), 직렬화 처리된(serialized), 문자열로 변환된(stringified), 결집된(marshalled) 객체라고 부름
>   >   > - JSON으로 인코딩된 객체는 문자열은 큰따옴표로 감싸야 함, JSON에선 작은따옴표나 백틱을 사용할 수 없음
>   >   > - toJSON 메서드가 있으면 이를 자동으로 호출
>   >   > - 객체 프로퍼티 이름은 큰따옴표로 감싸야 함
>   >   > - 적용 할 수 있는 자료형 : 객체 {...}, 배열 [...], 원시형 (문자형, 숫자형, 불린형, null)

    let json = JSON.stringify(value(인코딩 하려는 값)[, replacer(JSON으로 인코딩 하길 원하는 프로퍼티가 담긴 배열. 또는 매핑 함수 function(key, value)
    ), space(서식 변경 목적으로 사용할 공백 문자 수)])

> > - `JSON.parse` : JSON을 객체로 바꿔줌, JSON으로 인코딩된 객체를 다시 객체로 디코딩 할 수 있음

    let value = JSON.parse(str(JSON 형식의 문자열), [reviver(모든 (key, value) 쌍을 대상으로 호출되는 function(key,value) 형태의 함수로 값을 변경가능)]);
