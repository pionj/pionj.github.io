---
title: "foam-tutorials" 
description: "foam-tutorials.md | (2024 January 14 Sunday)"
date: Insert datetime string (Alt+d)
lastmod: Insert datetime string (Alt+d)
draft: false
---

# Foam 사용법

## 위키링크 사용법
1. `[[]]` 안에는 파일 확장자를 빼고 넣자.
2. `[]()` 형식으로 파일 확장자를 넣으면 파일이 나오긴 하지만 raw 포맷으로 나온다(현재 사용 중인 라이브러리에서 인식 못함)

3. 스택 가장 앞에서 열려면 아래와 같이 확장자 없이 작성한다.
```
[TODO](📌/TODO)
[💡](💡/💡)
```
- [ ] 100
- [x] 200
- [ ] ~~300~~

4. ~~그 외 미리보기나 그래프 연결을 위해서는~~ 
위키링크 표기방식을 사용한다
(일반적인 방식 파일 경로 방식도 미리보기나 그래프 연결이 된다. 파일명이 유일한 경우에 입력을 단순화 할 수 있는 장점이 있다)

```md
✔ [[TODO]]
```
단, 위키링크 표기방식에는 파일 경로를 넣지말고 파일명만 넣는다.
```md
✘ [[💡/💡]]
```

5. 무슨 이유에서인지 위키링크의 description 표현이 되지 않는다. 우선 기본 경로 방식을 사용하자.

```
[[📦/index|📦 Assets]]  

[[📦/index| 📦 Assets]]  

➜ `또는(Or)` 으로 인식한다.
```

6. 스타일시트 import
Gatsby는 모든게 plugin 중심이라 단순히 css 하나 추가하는 것도 복잡한 의존성을 요구하는 것 같다.
이미 이 theme 으로도 충분히 복잡하기때문에 스타일은 그냥 인라인으로 직접 넣기로 했다.
```
✘ <link rel="stylesheet" href="../📦/style.css"/>
```
