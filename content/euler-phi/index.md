---
emoji: ๐งฉ
title: Eulerโs phi
date: '2022-01-22 15:00:00'
author: JaeseokWoo
tags: Algorithm
categories: Algorithm
---

n์ด ์์ ์ ์์ผ ๋, ฯ(*n*)๋ฅผ ๊ตฌํ๋ ํจ์์ด๋ค.

ฯ(*n*)์ 1๋ถํฐ n๊น์ง์ n๊ณผ ์๋ก์(์ต๋๊ณต์ฝ์๊ฐ 1์ธ ๊ด๊ณ)์ธ ์๋ฅผ ๋ํ๋ธ๋ค.

## ํญ๋ฑ์

๋ง์ฝ ๋ ์ ์ m, n์ด ์๋ก์๋ผ๋ฉด, ๋ค์์ด ์ฑ๋ฆฝํ๋ค.

ฯ(mn) = ฯ(m)ฯ(*n*)

์ค์ผ๋ฌ ํผ ํจ์ ๊ฐ์ ์์ธ์(์์์ ์ธ์)๋ฅผ ํตํด  ๋ค์๊ณผ ๊ฐ์ด ๊ตฌํ  ์ ์๋ค.

![https://wikimedia.org/api/rest_v1/media/math/render/svg/f435f9cc2f15d34d49245f30d4d85a8cc678fa9d](https://wikimedia.org/api/rest_v1/media/math/render/svg/f435f9cc2f15d34d49245f30d4d85a8cc678fa9d)

์ค์ผ๋ฌ ๊ณฑ ๊ณต์์ด๋ผ๊ณ  ๋ถ๋ฆฐ๋ค.

### ๐ ์์ 

![https://wikimedia.org/api/rest_v1/media/math/render/svg/3ec5709cc7b8119ce7526f223fb42bfd84304286](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ec5709cc7b8119ce7526f223fb42bfd84304286)

### ์๊ณ ๋ฆฌ์ฆ

1. 1๋ถํฐ n๊น์ง ์ฆ๊ฐํ๋ฉด์ ์ต๋๊ณต์ฝ์๊ฐ 1์ธ ํ์ธํ์ฌ ๊ตฌํ๋ ๋ฐฉ๋ฒ

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

2. ์ค์ผ๋ฌ ๊ณฑ ๊ณต์ ๊ตฌํ

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

3. ์์ float ์ฌ์ฉํ์ง ์๋ ๋ฐฉ๋ฒ

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

### ํน์ง

1. p๊ฐ ์์์ผ ๋, p^k์ ์ค์ผ๋ฌ ํผ ํจ์์ ๊ฐ์

![https://wikimedia.org/api/rest_v1/media/math/render/svg/a72a268fc759dddb08a75ea99641b8071f90ec38](https://wikimedia.org/api/rest_v1/media/math/render/svg/a72a268fc759dddb08a75ea99641b8071f90ec38)

1. ์์ p์ ์ค์ผ๋ฌ ํผ ํจ์์ ๊ฐ์

![https://wikimedia.org/api/rest_v1/media/math/render/svg/4c0c04fbbc0accfa891e42552bcdb395604bba12](https://wikimedia.org/api/rest_v1/media/math/render/svg/4c0c04fbbc0accfa891e42552bcdb395604bba12)

## ์ฐธ์กฐ
[Euler's Totient Function - GeeksforGeeks](https://www.geeksforgeeks.org/eulers-totient-function/)

[์ค์ผ๋ฌ ํผ ํจ์ - ์ํค๋ฐฑ๊ณผ, ์ฐ๋ฆฌ ๋ชจ๋์ ๋ฐฑ๊ณผ์ฌ์  (wikipedia.org)](https://ko.wikipedia.org/wiki/%EC%98%A4%EC%9D%BC%EB%9F%AC_%ED%94%BC_%ED%95%A8%EC%88%98)

```toc

```