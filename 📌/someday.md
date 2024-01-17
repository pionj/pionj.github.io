---
description: "someday | (2024 January 17 Wednesday)"
date: 2024-01-17T19:01:59+09:00
lastmod: 2024-01-17T19:02:00+09:00
draft: true
---

# someday: 언젠간 할일

- [ ] 체크박스 눈에 띄게 스타일 바꾸기



[est], [est-total], [est-finished] [est-finished-percentage]

The following tokens can be used in 

todo.statistics.project.text, 
todo.statistics.statusbar.text
todo.statistics.statusbar.tooltip, 

they will be replaced with the value they represent.

Token	Value
[comments]	Number of comments
[projects]	Number of projects
[tags]	Number of tags
[pending]	Number of pending todos
[done]	Number of done todos
[cancelled]	Number of cancelled todos
[finished]	Number of finished todos
[all]	Number of todos
[percentage]	Percentage of finished todos
[est]	Estimated time left
[est-total]	Total estimated time
[est-finished]	Estimated time of finished todos
[est-finished-percentage]	Percentage of estimated time in finished todos
[lasted]	Time the task lasted
[wasted]	Time wasted on task
e.g. tag: @wasted(2h)

[elapsed]	Sum of [lasted] and [wasted]
