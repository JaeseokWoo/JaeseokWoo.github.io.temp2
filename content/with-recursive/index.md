---
emoji: 💾
title: WITH RECURSIVE
date: '2022-01-21 14:00:00'
author: JaeseokWoo
tags: SQL
categories: SQL
---

- 메모리 상에 가상의 테이블을 저장
- 재퀴 쿼리를 이용하여 실제로 테이블을 생성하거나 데이터 삽입(INSERT)을 하지 않아도 가상 테이블을 생성할 수 있다.

```sql
WITH RECURSIVE 테이블명 AS (
	SELECT 초기값 AS 컬럼별명1
	UNION ALL
	SELECT 컬럼별명1 계산식 FROM 테이블명 WHERE 제어문
)
```

### 📝예시

hour(컬럼)이  초기값 0부터 제어문에 합당하는 23까지의 데이터를 갖는 가상 테이블 생성

```sql
WITH RECURSIVE MY_HOUR_TABLE AS (
	SELECT 0 AS hour
	UNION ALL
	SELECT hour+1 FROM MY_HOUR_TABLE WHERE hour < 23
)
```

```toc

```