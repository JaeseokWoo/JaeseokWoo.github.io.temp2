---
emoji: ⌨️
title: Number.prototype.toString()
date: '2022-03-21 22:20:00'
author: JaeseokWoo
tags: JavaScript
categories: JavaScript
---

알고리즘 문제를 풀던 중 진법을 바꿔야하는 문제가 있었고, JavaScript의 Number 객체의 toString() 메소드를 이용하여 쉽게 진법을 바꾸는 방법을 알게 되었습니다.

## Number.prototype.toString() 이란?

> 특정한 Number 객체를 나타내는 문자열을 반환합니다.
> 

[Number.prototype.toString() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)

## 구문

```jsx
numObj.toString([radix])
```

### 매개변수

`radix` (Optional)

진수를 나타내는 기수로 2 ~ 36사이의 정수 (default 10)

### 반환 값

Number 객체를 명시하는 문자열

### 예외

`RangeError`

radix에 2 ~ 36사이의 정수가 아닌 값이 주어지면 RangeError 발생

## 예제

```jsx
const num = 17;
num.toString(); // '17'
num.toString(2); // '10001'
num.toString(16); // '11'

const negative = -7;
negative.toString(2); // '-111' -부호 그대로

const floatNumber = 2.5;
floatNumber.toString(2); // '10.1'
```

특이한 점은 음수에 대해서 toString()을 할 경우 -부호가 그대로 유지되고, 음수의 절댓값이 진수 변환을 한다는 것이다.

# 참조

[Number.prototype.toString() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)