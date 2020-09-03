[Go to previous page](README2.md)

## 2-11 논리 연산자

> - ! > && > ||
>
> ### ||(OR)
>
> - 피연산자 불린형❌ --> 평가를 위해 불린형으로 변환, 1 = true 0 = false, 주어진 조건에서 하나라도 참이면 참
> - `단락 평가(short circuit evaluation)`
>   > 왼쪽에서 오른쪽으로 평가 --> 각 피연산자를 불린형으로 변환 --> 맨 처음 ⭐️`true`가 나오면 멈춤 --> 해당 피연산자의 변환 전 원래 값으로 반환 (모든 피연산자가 false일 경우 맨 마지막 값을 반환)
>   > 두 번째 피연산자가 변수 할당과 같은 부수적인 효과(side effect)를 가지는 표현식 일 때 명확히 볼 수 있음

    ex) true || alert("not printed");
    false || alert("printed");
    // 첫 번째 줄의 `||` 연산자는 `true`를 만나자마자 평가를 멈추기 때문에 alert가 실행되지 않음

> > 연산자 왼쪽 조건이 falsy일 때만 명령어를 실행하고자 할 때 쓰임
>
> - 타입에 제약이 없음
>
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
    alert(height || 100); // 100 --> height || 100 : height에 0을 할당, 0을 falsy 한 값으로 취급 alert(height ?? 100); // 0 --> height가 정확하게 null이나 undefined일 경우에만 100이 됨

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
