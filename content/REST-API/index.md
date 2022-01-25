---
emoji: 🌐
title: REST API
date: '2022-01-19 23:00:00'
author: JaeseokWoo
tags: 네트워크 API
categories: 네트워크 면접
---
# REST API

REST는 Representational State Transfer라는 용어의 약자이다.

REST API는 REST 아키텍처 스타일의 디자인 원칙을 준수하는 API입니다.

즉, HTTP URI(Uniform Resource Identifier)를 통해 자원(Resource)을 명시하고, HTTP Method를 통해 해당 자원에 CRUD연산을 적용하는 것을 의미한다.

## 구성

REST API는 다음으로 구성되어 있습니다.

- 자원(Resource) - URI
- 행위(Verb) - HTTP Method
- 표현(Representations)

## 디자인 가이드

### 1. REST API 중심 규칙

1. URI는 정보의 자원을 표현해야한다.
2. 자원에 대한 행위는 HTTP Method로 표현한다.

### 2. URI 설계시 주의할 점

1. 슬래시 구분자(/)는 계층 관계를 나타내는데 사용
2. URI 마지막 문자로 슬래시(/)를 포함하지 않는다.
3. 하이픈(-)은 URI 가독성을 높이는데 사용
4. 밑줄(_)은 URI에 사용하지 않는다.
5. URI 경로에는 소문자가 적합
6. 파일 확장자는 포함시키지 않는다.

## 마지막

REST API는 정해진 표준이 없기 때문에 개발하는 서비스의 특징과 팀의 환경과 성향 등이 충분히 고려되어 설계되어야 한다.

# 참조

[REST API 제대로 알고 사용하기 : NHN Cloud Meetup (toast.com)](https://meetup.toast.com/posts/92)

```toc

```