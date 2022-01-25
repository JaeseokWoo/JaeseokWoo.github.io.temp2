---
emoji: 🧩
title: Euler’s phi
date: '2022-01-22 15:00:00'
author: JaeseokWoo
tags: Algorithm
categories: Algorithm
---

n이 양의 정수일 때, ϕ(*n*)를 구하는 함수이다.

ϕ(*n*)은 1부터 n까지의 n과 서로소(최대공약수가 1인 관계)인 수를 나타낸다.

## 항등식

만약 두 정수 m, n이 서로소라면, 다음이 성립힌다.

ϕ(mn) = ϕ(m)ϕ(*n*)

오일러 피 함수 값은 소인수(소수의 인수)를 통해  다음과 같이 구할 수 있다.

![https://wikimedia.org/api/rest_v1/media/math/render/svg/f435f9cc2f15d34d49245f30d4d85a8cc678fa9d](https://wikimedia.org/api/rest_v1/media/math/render/svg/f435f9cc2f15d34d49245f30d4d85a8cc678fa9d)

오일러 곱 공식이라고 불린다.

### 📝 예제

![https://wikimedia.org/api/rest_v1/media/math/render/svg/3ec5709cc7b8119ce7526f223fb42bfd84304286](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ec5709cc7b8119ce7526f223fb42bfd84304286)

### 알고리즘

1. 1부터 n까지 증가하면서 최대공약수가 1인 확인하여 구하는 방법

```cpp
int gcd(int a, int b)
{
    if (b == 0)
        return a;
    return gcd(b, a % b);
}

int phi(unsigned int n)
{
    unsigned int result = 1;
    for (int i = 2; i < n; i++)
        if (gcd(i, n) == 1)
            result++;
    return result;
}
```

2. 오일러 곱 공식 구현

```cpp
int phi(int n)
{
     
    // Initialize result as n
    float result = n;
  
    // Consider all prime factors of n
    // and for every prime factor p,
    // multiply result with (1 - 1/p)
    for(int p = 2; p * p <= n; ++p)
    {
         
        // Check if p is a prime factor.
        if (n % p == 0)
        {
             
            // If yes, then update n and result
            while (n % p == 0)
                n /= p;
                 
            result *= (1.0 - (1.0 / (float)p));
        }
    }
  
    // If n has a prime factor greater than sqrt(n)
    // (There can be at-most one such prime factor)
    if (n > 1)
        result *= (1.0 - (1.0 / (float)n));
  
    return (int)result;
}
```

3. 위의 float 사용하지 않는 방법

```cpp
int phi(int n)
{
    // Initialize result as n
    int result = n;
  
    // Consider all prime factors of n
    // and subtract their multiples
    // from result
    for(int p = 2; p * p <= n; ++p)
    {
         
        // Check if p is a prime factor.
        if (n % p == 0)
        {
             
            // If yes, then update n and result
            while (n % p == 0)
                n /= p;
                 
            result -= result / p;
        }
    }
  
    // If n has a prime factor greater than sqrt(n)
    // (There can be at-most one such prime factor)
    if (n > 1)
        result -= result / n;
         
    return result;
}
```

### 특징

1. p가 소수일 때, p^k의 오일러 피 함수의 값은

![https://wikimedia.org/api/rest_v1/media/math/render/svg/a72a268fc759dddb08a75ea99641b8071f90ec38](https://wikimedia.org/api/rest_v1/media/math/render/svg/a72a268fc759dddb08a75ea99641b8071f90ec38)

1. 소수 p의 오일러 피 함수의 값은

![https://wikimedia.org/api/rest_v1/media/math/render/svg/4c0c04fbbc0accfa891e42552bcdb395604bba12](https://wikimedia.org/api/rest_v1/media/math/render/svg/4c0c04fbbc0accfa891e42552bcdb395604bba12)

## 참조
[Euler's Totient Function - GeeksforGeeks](https://www.geeksforgeeks.org/eulers-totient-function/)

[오일러 피 함수 - 위키백과, 우리 모두의 백과사전 (wikipedia.org)](https://ko.wikipedia.org/wiki/%EC%98%A4%EC%9D%BC%EB%9F%AC_%ED%94%BC_%ED%95%A8%EC%88%98)

```toc

```