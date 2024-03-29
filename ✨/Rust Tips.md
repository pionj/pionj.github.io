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

---

`?` 대신 `+`가 들어갔다면 자연스럽게 이해가 되는데, 어째서 물음표를 넣어도 패턴이 여러번 나오는 정상작동이 되는지 알수가 없다.

그럼 러스트 언어의 부족한 부분이라고 봐도 되겠지? 

It does not force the result 0 or 1, when I use `?` in `*` repetition.

use ? within a * repetition in Rust macros can be considered a language feature that might lead to confusion or unintended behavior. 
하지만 당장 고쳐야할 사항으로 보이진 않는게, 매크로 패턴을 알고 쓸 정도면 그런 실수를 하지는 않을테니 당장 중요한 문제는 아닐듯.
그리고 나는 Rust보다는 Curry 나 Mercury 에 기여를 더 하고 싶은데...
이럴 때가 아닌거야. 빨리 기초는 다 끝내버리고 본 게임으로 들어가서 깊이를 더해야지... 

---
Rewind, Remind, 복습 할만한 내용:
Cargo Manifest
Module
Macros
Attributes
Structs and Enums

---
rust codecademy
중요한 내용을 담으려 노력한것이 보인다
too plain and passive but It seems like an effort was made to include important information.

to be more active and hard course

That's all, thank you for sharing! Your feedback helps us improve our courses.
Keep up the great progress!

---

cargo edit
cargo watch
cargo expand
cargo make
cargo geiger
cargo crev

---

languages? algorithm?: 
lookahead distance
lookahead carry
lookahead optimizer
lookahead bias

---


() 를 포함한 타입을 정의하는게 더 나을수도. Option으로 전부 Some 연산 하긴 했는데 
더 나은 점이나 범용성에서는 좋은지 모르겠고 성능도 아직 파악 전이긴 하지만 시도해볼만한듯

Copy clone? Rust

---
가장 쉬운 하스켈 처럼 러스트도 만들어보자. 

... 중략
그래 다음은 뮤텍스야. 
이름이 이상해서 거리감이 있지만 사실 아무것도 아냐. 
우리가 어디에 접근할때 누가 있는지 아닌지 알려면 뭘하는게 좋을까? 
화장실 갈때, 문 앞에 표시를 해놓잖아! 
그거랑 다를게 없어. 아주 단순하지만 대부분의 시스템은 이것을 응용하고 최적화하는 것일뿐(사실 확인 필요) 
뮤텍스란 그런거야. 이렇게 이해하고 나면 아주 쓸모가 많다는걸 알게될거야. 
메모리의 한 부분을 잡아놓고 뭐 크리티컬 섹션? 이런것들 적당히 섞어서 말하면 됨. 운영체제 책이나 강의 자료들 참고해보기.

,
사실 모나드는 완전한 모나드는 아니고 러스트도 함수형은 아니야. 
하지만 이정도 저레벨 퍼포먼스와 메모리 관리를 충족하면서 이정도 편리성과 함수향을 가진 언어는 거의 유일하다고 생각하고 있어. 

새로 연구중인 언어들을 제외하면. 

curry나 mercury? 이것들은 프롤로그라는 조상격 언어에서 출발한 것들인데 나중에 심심하다면 봐바. 내가 좋아하고 또 연구하는 언어들이기도 하지. 
