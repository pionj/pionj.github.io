---
description: "언어 정리 | (2024 February 09 Friday)"
date: 2024-02-09T17:32:12+09:00
lastmod: 2024-02-09T17:32:12+09:00
draft: true
---

# programming-languages

## 5개를 뽑으라면 rust, elixir, elm, haskell, prolog 
어차피 여기서 다 확장가능하다고 생각, 아마도.

(Bold: 기본 언어들)  
Haskell 책 마저 보면서 ocaml 공식 문서 잘 해놨더라 예전보다.  
그니까 그걸로 한번 쭉 학습해보자.
그러려고 했는데 좀 문법이 어색해서, ppx 같은 매크로도 그렇고, 일단 reasonml이나 rescript로 시작하는게 어떨까 싶음.
그리고 다시 ocaml를 보는거지.
어차피 mina 때문에라도 좀 봐야할거 같고.

---

언어에 대한 편견이 조금씩 줄어들긴함.
누군가의 인생에서 영향을 끼친 언어를 썼다고 선입견이나 뭐라고 해선 안돼.
일단 프로그래밍 언어니까.
내가 나중에 만드는 언어는 인공어니까 좀 성격이 다른거야.
자연스럽기도 한 프로그래밍 언어는 어려워.
너는 좀더 넓은 스펙트럼을 수용할 필요가 있어.

---

, , , ,

| backend, performance | frontend |
| :---: | :---: |
| Cpp | **HTML,CSS** |
| Rust | Javascript |
| Elixir | **Prolog(Tau)** |
| \-------------------- | \------------------ |
| (Haskell/Elm) | ((Curry, Mercury)) |
| (Reasonml/Ocaml) | +α (Go) |

ocaml 대신 차라리 reasonml이 더 친숙하긴 하니까...  Reasonml -> Ocaml 이렇게 보는것도 나쁘진 않을것 같기도함. 그러면 ocaml도 자연스럽게 익숙해질것 같고.

typescript도 굳이 깊게 들어가는건 안좋을것 같아.
오히려 too verbose 해서? 프로젝트에서 버리는 경우도 생기는걸 보기도 했고, js 자체가 어차피 쓰이긴해도 그 자체를 파기도 좀 애매해서 그냥 런타임이나 파서를 학습하고 웹 환경을 이해한다가 주목적이지 ECMA나 Javascript의 전문가가 된다는것도 좀 애매하기도 함.

가장 좋은건 prolog나 mercury, curry이고 
나머지는 그냥 곁다리로 생각하는게 좋음.

오히려 템플릿 언어인 HTML을 더 연구해야겠지. Linked data/RDF와 같이.

원래 js를 비중을 뒀는데 마크업 랭귀지에 대해 좀더 파보는것도 좋을것 같아. 
마크다운은 왜 다운이고 업은 왜 업이고 시맨틱에 대해서 좀더 심도깊게 말이야. 
어휘 분석이나 뭐 논리, 그래프, 이런것들 엮어서. 

알고리즘 코딩 테스트용, 그냥 책 보고 참고용으로 Cpp가 있고, 
TypeScript도 깊이 안가고 그냥 쓰자. 기초만 딱 보자. 
React, Vue도 딱 기초 정도만. 
그래도 웹은 좀더 파는게 나을지도. 

깊이를 이제부터 더한다면 프로그래밍 랭귀지로서는 

Rust, Elixir 정도가 개인프로젝트에서 쓰기 딱 좋고,
Javascript는 HTML/CSS와 겸해서 웹 이라는 생태계 이해용으로 하긴 해야할듯. 웹 분야도 전문가가 될거라면 안하기도 애매하고 해야할 기술이라. 

(Haskell 은 LYAH? 내가 봤던거 번역만 지식 저장소, 여기 내 지식베이스에 번역올리고 끝내고. Elm은? 이것도 기초 강의랑 기본 문서만 보고 끝내자. 기초 책이 있거나 튜토리얼이 있다면 딱 그정도만.)
Reasonml/Ocaml/ReScript 를 흥미용으로 공부해도 좋을것 같고.


모바일 쪽은 혼자한다고 가정하고 vue + monaca(cordova) 가 제일 적절해보이고, 어차피 거의 기본 웹이랑 비슷하다고 봐서 기초만 익히고 필요할때마다 그때그때 찾아보면 충분할듯. (framework7 쓰면 템플릿도 가능?)

회사에서 쓴다면 그냥 써볼만한 것들은
Go, Nest, (Next, React Native, Recoil) 정도
회사가 쓰면 써볼 의향은 있는 딱 그 정도. 


---
프로그래밍 언어 정리! 딱 10개만

언어적 백그라운드로서는  
백엔드에서 기본베이스는 cpp,  
더 상위레벨로 rust ~~cpp2(cpp_front)~~ (➜이것도 좀 애매한게, cpp2가 정말로 좋으면 cpp를 대체하는 방향으로 가는게 맞는거 같고 언어를 익히자면 함수형인 ocaml이 퍼포먼스도 좋고, 무엇보다 mina blockchain protocol 구현체라.. 그래서 그냥 ocaml 생략하려고 했는데 결국 다시 들어오네... 공부 좀 해야겠다. 그러다보면 scala나 clojure같은것도 배워야하나 싶은데 그건 그냥 함수형 산책으로 충분히 커버 될거같아서. 근데 오카멜 왤케 안유명한거지? 이렇게 좋은데? 좀 의심스러울 정도임. 기본서 하나 만들어야하는거 아냐?),  
안정형의 ocaml ~~rust~~ , 병렬의 elixir, 교육용 haskell이 있고

프론트엔드에는  
기본베이스 js에 상위레벨로 ts ~~더 하위레벨의 wasm...~~ (근데 여기서, wasm을 직접 익힐일은 없고 그냥 어셈블리 기초만 익혀놓고 시스템 프로그래밍을 할일은 별로 없으니까. 그 디버깅을 하더라도 왠만하면 그런 레벨은 안건드는게 기본방향이니까, wasm대신에 ts를 넣음.),  
안정형의 타입 기반 ~~ts~~ rescript?!(reasonml),  
병렬 및 frp의 elm,  
교육용의 prolog(tau)가 있음  
Tau가 조금 언어적으로 문법적 차이가 있을수 있을텐데 어차피 비슷은 할거고 linked data svo 나 agent activity entity 모델 등 봐야하니..  
Agent 무슨 회계 모델 있지않았나 그러고보니

이정도면 될듯 싶은데  
추가해봐야 그 무슨 논리형 언어 이름 뭐더라 헤르메스 아닌데 암튼 그런거  
Mercury!  
Haskell, prolog영향 받았대  
여기서 이미 게임끝ㅋ 흥미180퍼센트  
Web prolog나 visual prolog 있다는데 이건 비주얼 로직 공부하면서 그래프나 링크드데이터나 provenance좀더 보면 될거 같고  
그 피셔 교수님꺼 좀더 보고싶고 아마 저장한거 어딘가 있을걸  
Web prolog는 우선 tau먼저 보자 이미 할게 충분히 많아서.. 할수있는거부터 하자.

* * *

정리해보면,  
Mina 프로토콜이 ocaml로 되어있어서 좀 혼란이 왔는데,  
일단 저레벨, 상위레벨로 나누어보면? 아니 그냥 위에 있는거 정리해보자.


---

foundry, jest 를 스펙으로 넣는게 필요할까 싶기도 하네. 어차피 테스트야 다 하는거고..
이 언어들에 대한 전문성을 내세울게 아니라면... 차라리 rust나 다른걸 깊이 파던가. 
move 테스팅은?

---

계약 언어 공부라고 하면 solidity 랑 reach, 그밖에도 뭐 카르다노 말로위? marlowe... 등등 많겠지. 
bamboo, declarative programming in solidity evm 뭐 연구되는거 많더라.
https://github.com/HaoxianChen/declarative-smart-contracts
https://arxiv.org/pdf/2207.13827

Omar Tawfik from Nomic Foundation: solidity도 자바처럼 뭔가 표준은 잡혀가는 느낌이고.. 하지만 싫은 느낌이긴하지.

근데 어차피 llvm, wasm 호환 체인이면.. 음
영지식 호환도 해야하는데 어떡하지.
o1js 랑 tau같은걸로 해서 wasm만들고, mercury to c to wasm 하던가 해서 어떻게든 모으면 되기는 되겠지..

move 가 그나마 rust 기반이고 그 계열이라 더 친숙할거야. solidity보다 그쪽을 하는게 나을까?

아니 근데 그러면 elisp 도 할거야? clojure는? 그냥 이거는 함수형 책 보는걸로 마무리하고, 차라리 지금 정 하나를 양보해야한다면,  
어차피 코테 준비하느라 c++도 하고 저레벨언어를 할테니  
그리고 꽤나 많은 go기반 코드들도 있으니  
go를 해보는건? 음... 자바는 아무래도 흥미가 안붙으니? 객체지향 조교는 했지만 개념만 익혔다치고 functional c++ 책 참고해서 go기반으로 바꿔보든가..  
차라리 rust가 당연히 낫긴하지만. 채용을 안해, 사람을 안뽑아!

---
깊이 배우기에 적절한 것 끼리 묶음, 괄호는 얕게 배울거고 비슷한 컨셉을 나타냄.
실전용 2 묶음
(cpp)  
rust haskell (reasonml/ocaml)  

UI 2 묶음
vanilla ts/js,   webcomponent,lit   html/css(sass)  
(elm, vue)

react는 elm으로 바꾸자.  
angular는 lit로 바꾸던가.  
vue는 이제부터 만들 rdf 형식의 html, css들로 해결.. 스타일은 어트리뷰트 형식으로 하니까 데코레이터나 뭐 인젝션 패턴 같은거 있잖아. 또 뭐 css module이나 후디니? houdini같은게 나오니 점점 언어 형식으로 또 변할거고. 모듈화 될거고. 
lit을 프로토타입객체 형식으로 쓰면 안되나 클래스 좀... 튜토리얼봐도 좀 별로긴한데 lifecycle 같은것도.. 귀찮고. 암튼 lit 써봐야 데코레이터 좀 생기는것 뿐인데 차라리 아예 의존성없이 바닐라로 짜는게 더 낫지않나 싶긴해. 심지어 데코레이터도 타입스크립트 기능이면 그냥 바닐라 타입스크립트를 쓰는게.. 
js/ts도 tau 같은 로직 언어로 해결!

연구,취미용 3 묶음
elixir ((mercury, curry))  
query? : prolog, tau, datalog, sparql, weboql, neo4j, terminusdb, linked-components.js, sql
rule? : linkeddata, solid os, shexj, client-inrupt ...

(~~생각보다 종종 보이니까, 원래 vue가 종종 보였는데 이제는 vue에 대한 생각이 좀 바뀜. 오히려 react가 어정쩡해보이고 차라리 vue가 나아보이는...~~)


괄호는 부가적 주로 하는 언어는 아니지만 필요한 언어들임
이중괄호는 아직 미정. 연구목적.

---

frontend react?next? , js ➜ elm, prolog  
2-2 (+ frameworks : Lit?/stylable? MD,HTML,WebComponent/CSS)  
lit, component 빼도 될듯, 그냥 elm, react hook이나 custom component 보면되고,  
semantic하게만 작성해주면 됨.  react도 별로야! 걍 다시 lit 써! ㅋㅋ.. 다시보니 Sass도 괜찮고 정통, 표준에 가깝고 새로운 패러다임, 그리고 가벼운 생각의 전환, 자연스러움, 이런거에 초점을 맞추다보니.. html에 더 가깝고 한눈에 딱 보기 좋더라 vue도. 

나는 이걸 tau prolog, datalog? 같은걸로 rdf turtle이랑 호환되게끔 만들어볼 생각이고. webcomponent 등 요즘, 그리고 대부분의 프레임워크들이 지원하는 기능을 구현하면 되는거니까 천천히, 확실하게... 우선 기본 기초부터 해나가면됨.


&nbsp;

**Functional logic programming** is the combination, in a single [programming language](https://en.wikipedia.org/wiki/Programming_language "Programming language"), of the paradigms of [functional programming](https://en.wikipedia.org/wiki/Functional_programming "Functional programming") and [logic programming](https://en.wikipedia.org/wiki/Logic_programming "Logic programming").<sup>[\[1\]](https://en.wikipedia.org/wiki/Functional_logic_programming#cite_note-ACM-1)</sup> This style of programming is embodied by [various programming languages](https://en.wikipedia.org/wiki/Category:Functional_logic_programming_languages "Category:Functional logic programming languages"), including [Curry](https://en.wikipedia.org/wiki/Curry_%28programming_language%29 "Curry (programming language)") and [Mercury](https://en.wikipedia.org/wiki/Mercury_%28programming_language%29 "Mercury (programming language)").<sup>[\[2\]](https://en.wikipedia.org/wiki/Functional_logic_programming#cite_note-2)</sup><sup>[\[1\]](https://en.wikipedia.org/wiki/Functional_logic_programming#cite_note-ACM-1)</sup> A more recent example is [Verse](https://en.wikipedia.org/w/index.php?title=Verse_%28programming_language%29&action=edit&redlink=1 "Verse (programming language) (page does not exist)")<sup>[\[3\]](https://en.wikipedia.org/wiki/Functional_logic_programming#cite_note-3)</sup> A [journal](https://en.wikipedia.org/wiki/Scientific_journal "Scientific journal") devoted to the integration of functional and logic programming was published by [MIT Press](https://en.wikipedia.org/wiki/MIT_Press "MIT Press") and the European Association for Programming Languages and Systems between 1995 and 2008.<sup>[\[4\]](https://en.wikipedia.org/wiki/Functional_logic_programming#cite_note-4)</sup>

haskell 확장 curry  
prolog 확장 mercury 이렇게 볼까.  
어차피 erlang, elixir 는 이미 산업에서 잘 쓰이고 있으니까. 그리고 beam vm 쪽이고. 미묘하게 다르지.  
세븐랭귀지에서는 prolog에서 영감을 받았다고는 하지만 다른 계열로 봐야하지않을까? 음..

&nbsp;

<ins>Coq http://coq.inria.fr/</ins>, <ins>Agda http://wiki.portal.chalmers.se/agda/pmwiki.php</ins>, or <ins>Idris http://www.idris-lang.org/</ins>
hoq https://github.com/HoTT/HoTT
cubical https://github.com/simhu/cubical


이런건 좀 마이너 하긴 한데 연구용으로..

backend ts ➜ elixir, ~~reason~~  
1-1

cpp, haskell ➜ ~~cpp2?~~, rust, ocaml(reason)  
2-2

dream ocaml performance ms  
ihp, scotty, dream ocaml web framework performance test

solidity / marlowe (cardano DSL) 등도 공부·연구해봐야할지도.

여기서 공부순서는  
cpp을 아니까 rust로 넘어가고,  
haskell을 아니까 ocaml으로 넘어가고  
prolog를 아니까 elixir 로 넘어가는 식으로 생각하면 될것같아.  
ocaml도 문서 잘되어있더라. 업데이트 많이했더라.

그리고 거기서 이어서 elm rescript ts는 그냥 알고 있는 지식에서 파생할수 있을거 같고...

HTML, CSS

css: stylable? preprocessor  
html은 npm node쓸거면 Nunjucks 가 모질라에서 만들었네. 굿.

다른 언어쓸거면 해당 언어에서 제공하는 템플릿언어 쓰면 될거같고..  
elixir면 eex 쓰면 되지않나 싶네.

embedded elixir 는 nerves랑 다름!

nerves가 진짜 로우레벨 임베디드 소프트웨어에 쓰이는거고  
eex(embedded elixir)는 html template임.

그리고 걍 범용적으로 md나 mdx정도 익혀두면 될듯함.

go ~~dart~~ 를 다시 해야할지도...
sass가 그냥 css랑 js를 분리한다고 생각하면, 
템플릿, 스타일, 로직 이런식으로 말이야.
그래야 생각하기 더 편할것 같기도해.
많이 쓰이기도 하고.

사실상 ts는 js superset 이니까 ts를 한다는건 js랑 같다고 봐도 되나?
더 넓은 범위니까..

clojure / scala

go / java


---

Go 랑 Clojure도 자주 보이는 언어들인데 언제 어떻게 공부하고 접근해야할지 아직은 모르겠다.  
딱히 배우지는 않더라도 그냥 익숙해질거 같은.. 마치 파이썬처럼.  
루비는? 익숙해지기엔 뭔가 많아 믹스인이라던가. 직관적이긴해도..  
언어중에 배웠다라기보단 이러저리(멋사나 뭐 기타 책들, 인터넷서치 등) 접하다가  
그냥 자연스럽게 쓰는 파이썬, 루비.. 이 외 또 뭐있나?  
그것처럼 Go, Clojure도 그냥 접하는걸로 충분하진 않을까? 왜냐면 racket, sml 같은 언어들을  
그 프로그래밍언어 교수님 강의로 일단 해볼거고,  
나중에 뭐 도커 그거 너무 늦기전에 다니한테 질문이나 물어봐야하는데

세븐랭귀지도 한번 더 보자. 객체지향 프로토타입 IO, 루비 같은거 나오기도 하고 prolog나 erlang 예제도 안풀어봤으니 함수형산책으로 elixir 보고 나서 보면 또 새롭게 보이기도 할듯.

go는 c 의 대안으로 사용가능한 쉬운 저수준언어.. 물론 대체불가능하지만.

---

react native가 뭔가 괴상한 NDK같은 접근법을 취하면서 흥미가 다소 사라졌고, 
다시보니 dart 문법이 크게 안 이상하네 업데이트를 한건지 몰라도 
그래서 어차피 모바일 생태계가 지금과 같은 한 dart 같은건 있어야하고 
차라리 nativescript를 오픈소스 대안으로 가지고 있는게 나을것 같아.
근데 그것도 거의 기존 typescript 로 작성할수 있으니 
react, vue 보듯이 사용법만 익히는걸로? 
vue를 봐야하나 싶기도 하긴한데...
내가 어차피 프론트 안할거면 굳이 react 볼 필요가 있긴한가 싶기도함.
그냥 공부용으로 가끔 접하니까 하지만 주로 사용은 할게 아니라서. elm 쓸거잖아? 

(근데 React, Vue 이거 약간 공화당 싫어서 민주당 가봐야 그놈이 그놈 같은 느낌이긴해. 사실 답은 제3지대에 있는것처럼..)
앵귤러는 정말 객체지향의 끝판왕 같지만 자바처럼 뭔가 자체적인 개념도 많아서 쓸데없는 기분.
그럴거면 차라리 lit이나 기본 js가 낫고 프레임워크 종속적이 되면 위험하니까.

react 랑 vue 가 남는데 react는 이번엔 억지로 함수형을 갖다붙이는 느낌.
그럴거면 elm 쓰는게 백번 낫다고 생각하거든.
차라리 쉬운 vue쓰지..

Emit,sass vue

결국 프론트엔드에서 현재의 마크업 언어를 기준으로 스타일을 처리하는게 가장 베스트로 보이는데, 
문제는 어차피 컴포넌트라는건 컨트롤언어(스크립트)에서 기능한다는것이고 결국 css in js로 가게되는건 맞는데 그 자체는 아직 오버헤드가 크다는거고. 반응형 디자인을 만들려면 inline css+ js 가 당연한거 같은데 결국 이건 컴포넌트라는걸로 귀결될수 있다는거지. 
아예 스타일 그자체에서 api를 만드는? houdini 같은 제안이 올라왔는데 아직은 모르겠고..

zola같은 템플릿으로 정적 페이지 만드는 곳들은 어떻게보면 당연히 정해진 양식이 있으니 sass같은걸 쓰는게 맞는것 같기도 하고. 


```
(react,vue) (next,recoil) 
이런 프레임워크들은 최소 3년 이내에 전부 바뀔거고, 오래가지 않을거고, 잘 모르겠고, 더 좋은 개념으로 커버 가능해보여서, react는 어정쩡한 함수형 따라쟁이에, gatsby는 config 복잡하고 쓸데없는 plugin 종속적이고, next는 왜 유명한지 한번정도 써보긴 할건데 어차피 서버용 언어들 있으면 그걸로 템플릿 구성해서 하는게 나을거 같고 vue, elm도 있고 ssr 돌리면 되지않나 싶긴한데. 
아무튼 전체적으로 쉬운 vue쪽으로 차라리 넘어가는게 낫다는 생각.
recoil이나 pinia도 상태관리인데 이거 안써도 된다는 앵귤러 측 얘기를 보면 굳이 필요없는거 같기도해. 필요하면 쓰면되고 vue 자체적으로 제공하는 reactive 상태관리도 있던데.
lit은 사실상 거의 js 표준에 가까운거라 써도 괜찮을거 같고, nest는 서버프레임워크인데 js쪽 서버프레임워크 중에 가장 잘 만든거 아닌가. 다른 대안도 마땅히 없는것 같고. 그리고 어차피 go나 rust 쓸거면 더이상 쓰이지도 않겠지. 이것도 꽤나 내부는 복잡하거든. 그래서 왠만하면 안쓰고 싶긴해. 복잡한 레이어는 컴퓨터공학 컴파일러 레벨 정도로 충분해. 그 이상 애플리케이션 레이어는 최대한 직관적이고 유저 친화적일수록 좋다고 보거든. 그게 곧 사이버 가버넌스의 시작일거고. 그렇게 연결이 되는데 아무튼.

하지만 아래 이유로(공화당, 민주당) 굳이 vue를 하더라도 nuxt,pinia 까지 할필요는 없다는 생각. 개념만 익히면 되니까 next,recoil로 충분할듯해.
```

dart 왜 다시 한다고 했었지... NS 보니까 코딩 스타일은 좀 그렇긴 하던데 아마 Sass 때문에 dart 본다 했던거 같은데 굳이? 
근데 왜 sass가 필요하지?
어차피 모듈이나 컴포넌트 단위로 html/css면 충분하지않던가? dart는 하기싫음. css는 해야될지도. sass는 왜 dart를 쓰지... 여기서 모순이 발생하니까 어떻게 할까.
zola에서도 개인 프로젝트에서 쓰기 충분한 정도니, 나는 복잡한 css 애플리케이션을 원하는게 아냐, 그러니 dart를 버리자. native가 필요하다면 react native가 나은 선택이 되긴함. dart 는 일단... 아무리 봐도 마음이 안가. 
sass는 써도됨. 단 rust 구현체인 rsass나 grass를 사용할것.
RN/expo 도 별로고...
NS/vue 도 모르겠고... 어차피 둘다 제대로 개발 계속 하려면 NDK나 native api 건드려야하고, jdk, android adk, xcode, 등등 플랫폼 라이브러리가 필요하니 종속적일수밖에는 없고, 그나마 expo를 쓰면 잠시나마 expo하나만 의존하면 되지만 결국은 다시 돌아가야하니 
Codename One 이라는 java only 솔루션도 있긴한데...

---
(codecademy 에서 react native 기초 정도 보면 충분함)
vue tuturial 잘되있네
https://vuejs.org/tutorial/#step-1
https://laracasts.com/series/learn-vue-3-step-by-step

가장 중점적으로 보는것은 결국 플랫폼 독립적인것.
xcode나 다른 라이브러리 종속적이려면
아예 커뮤니티도 크고 여러 시행착오가 있는 react 가 차라리 나을거라는것
적어도 expo 쓰면 우선 그런게 최소화 되니까.
nativescript도 되긴하나? 그래도 일단 azure 같은 클라우드에서 설정이 필요하긴 했음.
https://blog.nativescript.org/ios-on-windows/
https://medium.com/nerd-for-tech/your-guide-to-testing-your-expo-react-native-application-on-ios-abbde4086d08
https://medium.com/@aumairasad/how-to-use-native-code-in-react-native-expo-managed-workflow-without-ejecting-or-prebuild-command-3eb93a0672a6


어차피 상업용? 상용? 할거면 
회사가서 해야되면 react native + expo 쓰고 필요하면 적절히 eject? bare native 적용...

그게 아니라면 호중이한테 codename one 부탁하면 될듯

framework7 vs quasar vs onsen
뭐가 많아... vuex? weex?
nativescript 는 좀 애매한 포지셔닝인가
ionic이나 NS는 angular  에 최적화?
https://loovatech.com/blog/nativescript-in-a-cross-platform-development-world
https://blog.woolta.com/categories/7/posts/114
https://dinosaur1.tistory.com/m/88
https://www.codenameone.com/compare.html


---

자바는 교회다...!
솔리디티 같은 부류도 마찬가지.
산업 초창기 널리 퍼져서 신도들이 생긴 신앙이자 교단...
그들이 보기엔 다른 모든 부류들도 그저 종교에 지나지 않겠지만.

quote by Joe Armstrong on IBM and OO programming :

> After its introduction OOP became very popular (I will explain why later) and criticising OOP was rather like “swearing in church”. OOness became something that every respectable language just had to have.
