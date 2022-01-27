---
emoji: ⌨️
title: Math.max()
date: '2022-01-27 23:57:00'
author: JaeseokWoo
tags: JavaScript
categories: JavaScript
---

# Math.max()

Math.max() 함수는 입력값으로 받은 0개의 이상의 숫자 중 가장 큰 숫자를 반환한다.

```jsx
Math.max(1, 3, 2); // 3

const array1 = [1, 3, 2];
Math.max(...array1); // 3 배열에 전개 구문 사용 Spread syntax
```

## 문법

```jsx
Math.max()
Math.max(값0)
Math.max(값0, 값1)
Math.max(값0, 값1, ... , 값N)
```

### 매개변수

`값1, 값2, ...`

가장 큰 값을 선택하고 반환할 0개 이상의 숫자

### 반환 값

입력된 숫자 중 가장 큰 숫자를 반환한다.

만약 인수 중 하나라도 숫자로 변환하지 못한다면 `NaN`을 반환한다.

매개변수를 제공하지 않은 경우 결과는 `-Infinity` 이다.

## 설명

max()는 Math의 정적 메서드이기 때문에 항상 Math.max()로 사용해야 한다.

## 예제

### 배열에서 최대값 찾기

1. reduce 사용

```jsx
const arr = [1,2,3];
const max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
```

2. spread operator 사용

```jsx
const arr = [1, 2, 3];
const max = Math.max(...arr);
```

3. Function.prototpye.apply() 사용

```jsx
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

⚠️ 배열의 요소가 너무 많으면 잘못된 값을 반환할 수 있다고 한다.

> both spread (`...`) and `apply` will either fail or return the wrong result if the array has too many elements, because they try to pass the array elements as function parameters
> 

[Math.max() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

해결책은 위의 예제 1번 처럼 reduce를 사용하는 방법이다.

# 참조

[Math.max() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

```toc
```