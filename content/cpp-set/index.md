---
emoji: ⌨️
title: Set
date: '2022-01-28 12:57:00'
author: JaeseokWoo
tags: CPP
categories: CPP
---

# Set

C++의 Set은 노드 기반 컨테이너이며 균형 이진트리로 구현되어 있습니다.

Key라 불리는 원소들의 집합으로 이루어진 컨테이너 입니다.(Key 중복X)

원소가 삽입되면 자동으로 정렬되고, default 정렬 기준은 오름차순입니다.

## 사용법

<set> 헤더 파일에 들어있습니다.

기본 선언 방법은 `set<[Data Type] > [변수 이름];` 입니다.

### 생성자

```cpp
set<int> s; // 기본 선언
set<int> s2(s1); // s1을 복사한 s2
```

### 멤버 함수

1. begin()

반환: 맨 첫번째 원소를 가리키는 반복자를 리턴(참조)

예시: `set<int>::iterator iter = s.begin();`

2. end()

반환: 맨 마지막 원소의 다음을 가리키는 반복자를 리턴(참조)

예시: `set<int>::iterator iter = s.end();`

3. rbegin(), rend()

begin(), end()와 반대로 작동하는 멤버함수

역으로 출력하고 싶을 때 사용

예시:

```cpp
for(iter = s.rbegin(); iter != s.rend(); iter++){
    cout << * iter << endl;
}
```

4. clear()

모든 원소를 제거, 초기화할 때 사용

예시: `s.clear();`

5. count(k)

원소 k의 갯수를 반환, set은 항상 0, 1을 반환

예시: `int count = s.count(1);`

6. empty()

비어있는지 확인, 반환은 true, false

예시: `if(s.empty()) { ... }`

7. insert(k)

원소 k를 삽입합니다.

반환: `pair<iterator, boo>` pair.first: 삽입한 원소를 가리키는 반복자, pair.second: true(성공) / false(실패)

예시: `s.insert(1);`

8. erase(iter)

iter가 가리키는 원소를 제거

반환: 제거 한 원소의 다음 원소를 가리키는 반복자를 리턴

예시: `iter = s.erase(iter);`

9. find(k)

반환: 원소 k를 가리키는 반복자를 반환, 원소 k가 없으면 s.end()와 같은 반복자를 반환

예시: `iter = s.find(1);`

10. s2.swap(s1)

s1과 s2를 바꾼다.

11. s.upper_bound(k)

원소 k가 끝나는 구간의 반복자를 반환한다.

예시: `iter = s.upper_bound(1);`

12. s.lower_bound(k)

원소 k가 시작하는 구간의 반복자를 반환

예시: `iter = s.lower_bound(1);`

13. s.equal_range(k)

원소 k가 시작하는 구간과 끝나는 구간의 반복자 pair 객체를 반환

lower_bound(k)와 upper_bound(k)를 pair 객체에 담아서 반환한다.

14. s.size()

원소의 갯수를 반환 

# 참조

[[C++] set container 정리 및 사용법 (tistory.com)](https://blockdmask.tistory.com/79)

```toc
```