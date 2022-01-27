---
emoji: ⌨️
title: EOF
date: '2022-01-27 23:08:00'
author: JaeseokWoo
tags: CPP
categories: CPP
---

# EOF

가끔 백준 알고리즘 문제를 풀다보면 입력의 마지막 조건을 알려주지 않는 문제들이 있다.

이럴 때 사용하는 케이스들을 정리하려고 한다.

## 1. scanf()가 입력받은 인자의 갯수를 리턴하는 특성 활용

```cpp
#include <cstdio>
int main()
{
    int a, b;
    while (scanf("%d %d", &a, &b) == 2)
        // scanf는 입력받은 갯수를 리턴한다.
        // 만약에 scanf("%d",&a); 에서 입력이 제대로 들어왔다면 1이 리턴된다.
        // 그렇기 때문에 a,b를 입력받는 scanf가 2와 같다면이란 말은 입력이 있다면과 같은 말이다.
        
        printf("%d\n", a + b);
}
```

scanf()는 입력받은 갯수를 리턴하기 때문에 이를 활용하여 입력을 받았는지 확인할 수 있다.

## 2. scanf()를 EOF와 직접 비교

```cpp
#include <stdio.h>
int main(){
    int a,b;
    while(scanf("%d %d",&a,&b) != EOF)
        // EOF == End Of File
        // 말그대로 파일의 끝에 도달하면 EOF를 리턴한다.
        // 윈도우 계열에서 임의로 발생시키기 위해선 Ctrl + Z를 누르면 된다. 
        printf("%d\n",a+b);
    return 0;
}
```

EOF = End Of File을 뜻한다.

즉, 파일의 끝에 도달했는지 확인하여 입력을 받았는지 확인할 수 있다.

## 3. EOF가 상수 -1로 정의되어 있는 특성 활용

```cpp
#include<cstdio>
int a, b;
int main() {
    while (scanf("%d %d", &a, &b) != -1) printf("%d\n", a + b);
    // 'EOF 리턴하기 전까지는 계속 돌아'와 같은 말. EOF는 상수 -1로 정의되어 있기 때문!
    return 0;
}
```

EOF는 상수 -1로 정의 되어 있기 때문에 EOF인지 확인하는 방법과 -1인지 확인하는 방법이 같다.

## 4. cin.eof() 활용

```cpp
#include <iostream>
using namespace std;
 
int main(void) {
   int a,b;
 
   while(true) {
       cin >> a >> b;
       if(cin.eof() == true) {
        // cin으로 입력받은 값이 없으면
        // cin.eof()는 true를 반환한다. 당연히 그렇지 않으면 false 반환
           break;
       }
       cout << a + b << endl;
   }
}
```

cin으로 입력 받은 값이 없으면 cin.eof()는 true를 반환한다. 이것을 활용하여 입력을 받았는지 확인할 수 있다.

# 참조

[C++ EOF 처리 방법 ( 백준 10951 A+B - 4 ) (tistory.com)](https://takeknowledge.tistory.com/20)

```toc
```