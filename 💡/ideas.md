---
title: "ideas"
description: "ideas.md | (2024 January 13 Saturday)"
date: 2024-01-13T15:24:57+09:00
lastmod: 2024-01-13T15:24:57+09:00
draft: true
private: true
---

## Lojban 설계할때


Prolog 나 Mercury 같은 언어들을 보면 대문자는 주로 변수로 쓰이니까 
굳이 대문자를 쓰지말고 줄임말들은 t..같은 spread 기호를 사용하는 것도 괜찮아보임.

.만 하면 module 탐색 같은걸로 될수도 있고... namespace는 :: 이렇게 하나.



## 짧은 아이디어 노트

### AutoHotKey 에서 마우스 관련 설정
; MsgBox double click!!
; +WheelUp::Send {Volume_Up}
; ~LButton::
;    if (A_PriorHotkey=A_ThisHotKey && A_TimeSincePriorHotkey<400)   {
;       Send {RButton}
;    }
; Return
