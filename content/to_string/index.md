---
emoji: ⌨️
title: to_string
date: '2022-01-30 17:17:00'
author: JaeseokWoo
tags: CPP
categories: CPP
---
# to_string
c++에서 int를 string으로 변경하는 함수입니다.

## 함수 원형과 설명

### 헤더파일

<string>

### 함수 원형

- string to_string (int num);
- string to_string (long num);
- string to_string (long long num);
- string to_string (unsigned num);
- string to_string (unsigned long num);
- string to_string (unsigned long long num);
- string to_string (float num);
- string to_string (double num);
- string to_string (long double num);

### 설명

to_string 함수는 숫자 자료형의 데이터를 안전하게 스트링 자료형으로 변경하도록 하는 함수입니다.

함수 오버로딩(overloading)을 통해 하나의 함수명에 다른 매개변수가 올 수 있습니다.
```toc
```