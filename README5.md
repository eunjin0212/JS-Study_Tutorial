[Go to previous page](README4.md)

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

# 스펙에 테스트 추가 하는 방법

1. 기존 it 블록에 assert를 하나 더 추가하기
2. 테스트를 하나 더 추가하기

> - 테스트는 하나에 한가지만 확인 하기
> - makeTest는 for 문에서만 사용
> - 중첩 describe를 쓰면 그룹을 만들 수 있음
> - 중첩 describe는 새로운 테스트 '하위 그룹(subgroup)'을 정의할 때 사용

### before/after와 beforeEach/afterEach

> - 함수 before는 (전체) 테스트가 실행되기 전에 실행
> - 함수 after는 (전체) 테스트가 실행된 후에 실행
> - 함수 beforeEach는 매 it이 실행되기 전에 실행
> - 함수 afterEach는 매 it이 실행된 후에 실행
> - beforeEach/afterEach와 before/after는 대개 초기화 용도로 사용

### 테스트 도움되는 사이트

[karma](https://karma-runner.github.io/latest/index.html)
[Mocha](https://mochajs.org/)
[Chai](https://www.chaijs.com/)
[Sinon](https://sinonjs.org/)

### 다양한 assertion

> - assert.isNaN : NaN인지 아닌지 확인
> - assert.equal(value1, value2) : value1과 value2의 동등성을 확인(value1 == value2)
> - assert.strictEqual(value1, value2) : value1과 value2의 일치성을 확인 (value1 === value2)
> - assert.notEqual, assert.notStrictEqual : 비 동등성, 비 일치성을 확인
> - assert.isTrue(value) : value가 true인지 확인 (value === true)
> - assert.isFalse(value) : value가 false인지 확인 (value === false)
> - 기타 [docs](https://www.chaijs.com/api/assert/)확인

[Go to Next page](README6.md)
