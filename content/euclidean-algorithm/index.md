---
emoji: 🧩
title: Euclidean algorithm
date: '2022-01-22 17:49:00'
author: JaeseokWoo
tags: Algorithm
categories: Algorithm
---

유클리드 호제법 또는 유클리드 알고리즘은 2개의 자연수의 최대공약수를 구하는 알고리즘의 하나이다.

호제법이란? 두 수를 나누어 결국 원하는 수를 얻는 알고리즘을 나타낸다.

### 정의

2개의 자연수 a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면 a와 b의 최대공약수는 b와 r의 최대공약수와 같다.

### 정리

a와 b의 최대공약수를 (a, b) = r이라고 하면

(a, b) = (b, r)

### 📝예제

(1071, 1029) = (1029, 42) = (42, 21) = (21, 0) = 21

### 증명

a, b가 정수이고 a≥b라고 하자.

그러면 a = bq + r을 만족하는 유일한 q, r이 존재한다. (0≤ r < b)

(a, b)의 최대공약수가 d이면,

a = dα, b = dβ이고 α, β는 서로소(최대공약수가 1)이다.

```
a = bq + r
=> dα = dβq + r // a = dα, b = dβ 대입
=> r = d(α-βq) // 이항 & d로 묶기

그러면,
r = d(α-βq), b = dβ이고 둘 사이에는 d라는 공통의 약수가 있다는 것입니다.

이제 r와 b의 최대공약수가 d라는 것을 증명하면, a, b의 최대공약수와 같다는 것을 알 수 있습니다.
r와 b의 최대공약수가 d인 것을 증명하려면
α-βq와 β가 서로소라는 사실을 증명하면 됩니다.

여기서 서로소를 증명하기 위해
'서로소가 아니다'라는 사실이 틀렸음을 보이면 됩니다.
즉, 서로소가 아니게 가정을 했을 때 모순이 발생하면 틀린 것입니다.
== 이러한 방법을 귀류법이라고 합니다.

서로소가 아니라고 가정을 했기때문에
둘 사이에 1보다 큰 최대공약수 t가 존재합니다.
α-βq = mt, β = nt
=> α-ntq = mt // β = nt을 대입
=> α = t(nq+m)

여기서 모순이 발생합니다.
바로 위에서 α, β는 서로소인데, 결과는 서로소가 아니라고 나오기 때문입니다.
α = t(nq+m)
β = nt

따라서 α-βq와 β가 서로소이고 a, b의 최대공약수 d는 b, r의 최대공약수와 같습니다.
```

### 알고리즘

알고리즘을으로 나타내면 다음과 같습니다.

```cpp
int gcb(int a, int b) {
	if (b == 0) return a;
	return gcb(b, a%b);
}
```

## 참조
[썽 :: [대수학&정수론]유클리드 호제법의 증명 (tistory.com)](https://sseong40.tistory.com/3)

[유클리드 호제법 - 위키백과, 우리 모두의 백과사전 (wikipedia.org)](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95)

```toc

```
