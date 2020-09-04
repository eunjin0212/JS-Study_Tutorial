[Go to previous page](README5.md)

# 객체

> ## 원시형
>
> > - 오직 하나의 데이터만 담을 수 있음 (문자, 숫자 등...)
>
> ## 객체형
>
> > - 다양한 데이터를 담을 수 있음
> > - 만드는 방법 : `{키(key 이름, 식별자) : 값(value)}` --> 프로퍼티(property) 모든 자료형이 허용됨
> > - `객체 리터럴(object literal)` : 중괄호를 이용해 객체를 선언하는 것
> > - 프로퍼티 값 얻기 : `alert(name.value);`
> > - value에는 모든 자료형이 올 수 있음
> > - `delete` 사용 하면 프로퍼티 삭제 가능
> > - 여러 단어를 조합해서 이름을 만들었다면 따옴표로 묶어wnrh, 대괄호 안에 넣으면 .으로 읽을 수 있음
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

[Go to Next page](README7.md)
