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
