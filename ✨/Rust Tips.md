---
description: "Rust Tips | (2024 January 29 Monday)"
date: 2024-01-29T21:35:29+09:00
lastmod: 2024-01-29T21:35:29+09:00
draft: true
---

# Rust Tips
```rs
let mut sentence = String::from("Take care, take care.");
let immutable_reference = &mut sentence;
    
// Swapping the order of these statements will cause our code to not compile.
println!("{}", immutable_reference);
println!("{}", sentence);

let immutable_reference = &mut sentence;
println!("{}", immutable_reference);
```

let mut 에 대한 변경가능참조, 즉, &mut 은 1회성이다. 영구적으로 빌리는 방식이 아니다. 따라서 한번 빌리고 쭉 사용하다가 원본을 사용하려고 하면 빌렸던 권한은 반납된다. 
~~그리고 빌렸으면 꼭 한번 이상은 써야한다.~~ 안써도 된다. 
여하간 원본을 다시 쓰면 반납된다.
읽기, 쓰기 상관없다. 참조 자체가 카운트 된다.
그리고 여러개의 참조도 안된다. 현재 빌린 단 하나만 사용가능하다.

mut 여부에 관계없이, 변수 할당에 대해서는 항상 완전히 권한을 가져가는 방식이다.


---

좀더 정확히 말하자면, rust 의 enum은 모나딕 타입 이라기 보다는 sum type에 가깝습니다 맞습니까?

generic type은 그냥 타입변수니까 관계는 없겠다.

대체 모나딕 이라는 건 무엇일까요 애매한 표현 같습니다.

---

When we have a function that returns a Result,
 **any expression within its body that also returns a Result** 
 can be appended with ? 
 to force any Err result 
 to be returned immediately.

---

lifetime, 
일찍 죽는 요소에 대한 경계, 
함수나 구조체 등의 정의시 사용하며 댕글링 포인터 참조를 방지하여 안전성을 도모하기 위한 장치.

trait, 
객체 지향 개념으로 설명하면, 상태 변수 없는 abstract class.
