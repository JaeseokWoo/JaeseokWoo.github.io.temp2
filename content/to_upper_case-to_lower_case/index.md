---
emoji: ⌨️
title: toUpperCase, toLowerCase
date: '2022-01-30 18:45:00'
author: JaeseokWoo
tags: JavaScript
categories: JavaScript
---
# toUpperCase()

toUpperCase() 메서드는 문자열을 대문자로 변환해 반환합니다.

## 구문

```jsx
str.toUpperCase()
```

### 반환값

대문자로 변환한 새로운 문자열

### 예외

`TypeError`

`Function.prototype.call()` 등을 사용해 `null`이나 `undefined`에서 호출 시.

## 예제

### 문자열이 아닌 `this`의 문자열 변환

`toUpperCase()`의 `this`가 문자열이 아니고, `undefined`와 `null`도 아니면 자동으로 문자열로 변환합니다.

```jsx
const a = String.prototype.toUpperCase.call({
  toString: function toString() {
    return 'abcdef';
  }
});

const b = String.prototype.toUpperCase.call(true);

// prints out 'ABCDEF TRUE'.
console.log(a, b);
```

# toLowerCase()

toLowerCase() 메서드는 문자열을 소문자로 변환해 반환합니다.

## 구문

```jsx
str.toLowerCase()
```

### 반환값

호출 문자열의 소문자로 변환한 새로운 문자열

# 참조

[String.prototype.toUpperCase() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

[String.prototype.toLowerCase() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)