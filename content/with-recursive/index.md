---
emoji: πΎ
title: WITH RECURSIVE
date: '2022-01-21 14:00:00'
author: JaeseokWoo
tags: SQL
categories: SQL
---

- λ©λͺ¨λ¦¬ μμ κ°μμ νμ΄λΈμ μ μ₯
- μ¬ν΄ μΏΌλ¦¬λ₯Ό μ΄μ©νμ¬ μ€μ λ‘ νμ΄λΈμ μμ±νκ±°λ λ°μ΄ν° μ½μ(INSERT)μ νμ§ μμλ κ°μ νμ΄λΈμ μμ±ν  μ μλ€.

```sql
WITH RECURSIVE νμ΄λΈλͺ AS (
	SELECT μ΄κΈ°κ° AS μ»¬λΌλ³λͺ1
	UNION ALL
	SELECT μ»¬λΌλ³λͺ1 κ³μ°μ FROM νμ΄λΈλͺ WHERE μ μ΄λ¬Έ
)
```

### πμμ

hour(μ»¬λΌ)μ΄  μ΄κΈ°κ° 0λΆν° μ μ΄λ¬Έμ ν©λΉνλ 23κΉμ§μ λ°μ΄ν°λ₯Ό κ°λ κ°μ νμ΄λΈ μμ±

```sql
WITH RECURSIVE MY_HOUR_TABLE AS (
	SELECT 0 AS hour
	UNION ALL
	SELECT hour+1 FROM MY_HOUR_TABLE WHERE hour < 23
)
```

```toc

```