---
emoji: 🌐
title: HTTP와 HTTPS
date: '2022-01-19 23:00:00'
author: JaeseokWoo
tags: 네트워크 HTTP HTTPS
categories: 네트워크 면접
---

# 1. HTTP(Hyper Text Transfer Protocol)

서버와 클라이언트가 데이터를 주고받기 위한 프로토콜입니다.

즉 서버는 80번 포트에서 요청을 대기하고 있고, 클라이언트는 80번 포트로 요청을 보내게 됩니다.

## HTTP 구조

HTTP는 애플리케이션 레벨의 프로토콜로 TCP/IP 위에서 동작합니다.

HTTP는 상태를 가지고 있지 않는 Stateless 프로토콜이며, Method, Path, Version, Headers, Body 등으로 구성되어 있습니다.

![사진](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbkdJ4Q%2FbtqK6AXLEtC%2FjBZzMuJBWzdLYmqILo5Ri1%2Fimg.png)

하지만 HTTP는 암호화가 되지 않은 평문 데이트를 전송하는 프로토콜이기 때문에, 제3자가 정보를 조회할 수 있는 보안적인 문제가 있다.

# 2. HTTPS(Hyper Text Transfer Protocol Secure)

HTTP에 데이터 암호화가 추가된 프로토콜입니다. 443번 포트를 사용하며, 제3자가 정보를 볼 수 없도록 암호화를 지원합니다.

## HTTPS의 동작 과정

HTTPS는 대칭키 암호화와 비대칭 키 암호화를 모두 사용하여 암호화를 합니다.

HTTPS 연결 과정(Hand-Shaking)에서는 먼저 서버와 클라이언트 간에 세션키(주고 받는 데이터를 암호화하기 위해 사용되는 대칭키, 빠른 연산 속도가 필요하므로 세션키는 대칭키로 사용)를 교환합니다.

서버와 클라이언트가 세션키를 가지기 위해 비대칭키가 사용됩니다.

즉, 처음 연결을 성립하여 세션키를 공유하기 위해 비대칭키가 사용되고 이후에는 대칭키를 이용하여 데이터를 교환합니다.

### 연결 과정 흐름

1. 클라이언트가 서버로 최초 연결 시도
2. 서버는 공개키(인증서)를 브라우저에게 전달
3. 브라우저는 인증서의 유효성을 검사하고 세션키를 발급
4. 브라우저는 세션키를 보관하고 서버의 공개키로 세션키를 암호화하여 서버로 전송
5. 서버는 개인키로 복호화하여 세션키를 얻음
6. 클라이언트와 서버는 동일한 세션키를 공유하여 데이터를 전달할 때 암호화/복호화를 진행

![사진](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcCodLU%2FbtrqRZnoOFq%2Fe6kFHjADoVby70466Jkq51%2Fimg.png)

### HTTPS 발급 과정

1. A기업은 HTTPS를 적용하기 위해 공개키/개인키를 발급함
2. A기업은 CA(인증기관) 기업에게 공개키를 저장하는 인증서의 발급을 요청
3. CA 기업은 CA 기업의 이름, A 기업 서버의 공개키와 정보 등을 기반으로 인증서를 생성하고, CA 기업의 개인키로 암호화하여 A 기업에게 제공
4. A기업은 클라이언트에게 요청이 오면 암호화된 인증서를 제공
5. 클라이언트 브라우저는 CA 기업의 공개키를 미리 가지고 있고, 암호화된 인증서를 복호화하여 A 기업의 공개키를 얻음

즉, 인증서는 CA의 개인키로 암호화되어있고, 클라이언트는 A 기업의 공개키로 데이터를 암호화하고 A기업만 복호화를 통해 데이터를 얻을 수 있다. 

# 참조

[[Web] HTTP와 HTTPS 및 차이점 - MangKyu's Diary (tistory.com)](https://mangkyu.tistory.com/98)

```toc

```