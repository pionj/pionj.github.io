---
description: "ChatGPT 질문 아카이브 | (2024 February 27 Tuesday)"
date: 2024-02-27T16:21:18+09:00
lastmod: 2024-02-27T16:21:18+09:00
draft: true
---

# chatgpt 질문 모음

## ZKP, Cryptography, Cryptology
snarkjs.groth16.fullProve what is pa pb pc

Something went wrong. If this issue persists please contact us through our help center at help.openai.com.

There was an error generating a response

Regenerate
ChatGPT can make mistakes. Consider checking important information.

blind evaluation은 blind signature와 가까운 개념인가요? 

동형암호의 한 종류인가요?

(제로, 폴) 제어공학에서의 개념과 유사한 것인가요?

당신이 내 질문에 대한 답을 명확하게 전부 말해주지 않아서 영어로 다시 작성합니다.

영지식 증명의 관점에서 어느 프로젝트가 더 가깝다고 볼수 있을까요? 


ZKP와는 관련이 없을수도 있지만 Collator나 validator 들은 Proof-of-Validity blocks나 zk proof를 이용해서 relay chain 의 연산량을 줄인다고 들었습니다. 사실인가요? 

코스모스에도 비슷한 기능이 있나요?

그래서 PoV는 구체적으로 어떻게 구성됩니까? 머클트리인가요? 

대표적인 예를 하나 구체적으로 들어주세요.

이러면 딱히 성능상의 이점은 없어보입니다. 단지 평범하게 트랜잭션을 검증하는 절차처럼 보이고, 롤업이나 영지식 증명을 사용했을때처럼 여러 트랜잭션에 대한 검증을 한번에 하는 것이 아닌 각각에 대해 그냥 서명을 체크하고 잔액을 체크하는 평범한 절차로 보입니다.

병렬 처리나 하드웨어의 도움없이


---
DKG, SSS, TSS 간에는 어떤 상관 및 포함 관계가 있나요?

그냥 모두가 일종의 딜러의 역할을 겸할수 있다고 생각하는데요, 왜냐하면 어쨌거나 비밀 포인트을 나눠가지고 그것으로 어떤 다항식을 만든다고 한다면 그 다항식의 계수들 같은 벡터 정보를 딜러 없이 알려면 모두가 알고 있어야하고, 구성원이 바뀔 경우는 근접 노드가 해당 정보를 다시 새로 참여한 노드들 간 통신으로 인수인계 해주어야 하기 때문이죠.

저는 그냥 여러 분야에서 알고있는 수학적 지식으로 대충 말했는데 정말 그렇게 동작하나요?

이렇게 간단한데 왜 shamir secret sharing 은 굳이 단일 딜러를 이용했나요? 모델링의 단순성과 편의성? 오래된 논문이라서? 이제 발전된게 DKG일까요?


아니면 혹시 랜덤 계수들은 딜러로부터 참여자들에게 공개되고 상수항은 비밀로 유지되기 때문에 비밀값이라고 말한건가요?

근데 결국 참여자들은 분산된 비밀 점들을 모으면 초기에 설정된 비밀 상수를 알게됩니다. 무슨 의미가 있나요? 보안상 필요합니까? 어차피 알게됩니다.
그러면 애초에 상수항 뿐 아니라 모든 차수의 계수들을 굳이 공개할 필요가 없는데요.

처음에 계수들을 주는 것은 그냥 일종의 지침으로 보입니다. 실제로 비밀키를 나눈 후에 다시 합쳤을때 맞는지를 가늠할 수 있는 무결성에 대한 증명이 아닌가요? 잠시만, 상수항만 빼고 주면 하나의 포인트만 넣어도 상수항을 구할수가 있는데요? 그러면 정말 비밀로 한 의미가 없는데요? 비밀이 아니게 됩니다.
그니까 어쨌거나 참여자라면 비밀값을 유추할수있고, 그렇지않은 사람은 공개된 계수를 알아도 무차별대입을 하지않는 이상 알수가 없겠군요. 내 생각엔 그게 핵심이네요.

tau는? 비슷한 방식으로 진행되나요?
아니 그러니까, DKG 는 결국 분산된 당사자들이 랜덤점을 생성하고 다시 모아서 어떤 다항식을 만들고, 그 벡터를 개인키로 해서 타원곡선 같은 것에 붙이면 공개키가 나올수 있고, 그걸 일종의 tau값으로 사용하는건 안되나요? tau란 단순히 랜덤한 매개변수 값말고 어떤 함의나 메타데이터를 가지고 있나요?

그니까 당연히 사용되는 맥락은 다르겠지만 제가 궁금한 것은, 사용되는 원리나 방식이 비슷한것인지, 혹은 DKG의 아이디어를 tau 매개변수를 생성할때의 적용가능성에 대해서 궁금한 것입니다.

그리고 tau가 가진 어떤 데이터 필드들, 가령 parameters include proving and verifying keys, as well as other cryptographic parameters needed to construct zk-SNARK circuits, 이것과 DKG가 생성하는 임의의 숫자는 어떻게 다른지도 설명해주세요. proving and verifying key는 공개키암호화와 관련이 전혀 없나요? 영지식 회로를 만드는 파라미터는 R1CS 같은 것을 보면 그것도 일종의 다항식의 계수던데요.

---
무엇인가를 바닥에서부터 직접 만들어보면서 진행하는 학습을 뭐라고 부르나요? 가령 컴파일러를 만들어보면서 컴파일러에 대해 배운다던가 하는 식으로 글로만 읽지않고 직접 해보는 방식이요.설명으로는 잘 이해가 안되고 코드로 보는게 확실할 것 같은데, 가능하다면 go, javascript 중에 적당한 예제로 설명해주세요.


---
설명으로는 잘 이해가 안되고 코드로 보는게 확실할 것 같은데, 가능하다면 go, javascript 중에 적당한 예제로 설명해주세요.


솔직히 composition 이랑 aggregation은 has-a 인지 has-many 인지 정도의 차이만 있을뿐 거의 같아보이네요?

그리고 의존성 주입도 has-a 관계에 있고 함수를 통해 객체를 넘겨준다는 것 말고는 별다른 차이점을 못느끼겠습니다. 차이점이 명확하도록 코드를 짜거나 본질적인 차이를 직관적으로 설명해주세요.


객체를 외부에서 생성하냐 내부에서 생성하냐로 구성과 집계를 구분한다는 것은 알겠습니다. 
다만 아직도 의존성 주입과 집계는 동일해보입니다. 단지 용어의 차이이거나 해석하거나 바라보는 시각의 차이일뿐 구현은 동일한 것인가요? 설명하는 맥락이 단지 다른 것일 뿐입니다. 맞나요?

아 그래 그부분은 내가 오해했다.
하지만 여전히 헷갈린다. 
aggregation도 외부에서 객체가 주입된다. 외부에서 종속성이 관리된다. 
aggregation 이 has-many가 아닌 has-a 관계를 갖는다면 의존성 주입에서의 설명과 실제 코드는 다르지 않아보인다.

잠깐, 컴포지션에서도 외부에서 객체를 주입해줄수 있을것 같아요. 디자인 패턴이니까 그런것 까지 엄격하게 구분하는건 아니죠? 

상속보다 구성이라는 말이 있습니다. 러스트에서는 상속의 개념이 없는데, 반복되는 코드를 trait 를 이용해서 처리해도 객체 지향과 같이 타입을 덕타입 식으로 대충 맞춰주지 않습니다. 지금은 그냥 코드를 중복해서 적고 있는데 더 나은 방법이 있을까요?

1,2,3 번에 대한 예시를 코드로 부탁드립니다.

제가 원하는 것은 서로 다른 struct 들끼리 각각 더하고 뺀 결과도 동일 struct를 가진 타입이 나와야하는 상황인데, Self 나 impl 을 사용해도 타입이 불명확하다고 나와서 결국 포기했거든요

그니까 그렇게 러스트에서 추천하는 방법으로 위 코드의 중복성을 제거 할 수 있는냐는게 제 질문입니다.

struct의 변수에 접근해야합니다. 그것도 위 코드의 맥락에서 적용 가능한가요?

너무 단순합니다. 필드가 두개 이상 있는 struct에 대한 코드로 바꿔서 적용해보세요.
당연히 OtherStruct도 추가해야합니다.

그러면 결국 다시 원점으로 돌아와서 각 struct에 대해 코드를 따로 작성하는 셈이 됩니다.

굳이 unsafe한 연산을 사용하고 싶지는 않습니다.
그니까 당신의 최선은 결국 따로 작성하는 것 외에는 방법이 없다는 거죠?

방금 전에 위에 코드를 보면 결국 value1과 value2 접근을 위해서 unsafe 기능을 사용하지 않는 이상은 코드 중복을 해소하지 못하는데 없다고 봐야죠, 계속 있다고 말하는 것도 곤란합니다.

중복을 피하지않았습니다. 단지 공통 trait가 있을뿐이죠.
아니죠, 매크로까지 사용할일은 아닙니다.

---
nix 의 초보자용 영상을 봐도 reproducible 패키지 매니저라는 것과 선언적 방식으로 관리한다는 것 외에는 잘 이해가 안됩니다. 왜 업데이트가 자동으로 안되나요? 이를 위해 flake 라는 것을 이용한다고 합니다.
 
초보자를 위한 nix의 영상을 봐도 재현 가능한 패키지 관리자이고 선언적인 방식으로 관리된다는 것 외에는 잘 이해가 되지 않습니다. 업데이트가 자동으로 수행되지 않는 이유는 무엇입니까? 이를 위해 플레이크(flake)라는 것이 사용됩니다.

업데이트를 위해 channel 에 묶여있는 패키지들을 별도로 업데이트 해야한다는데... 

그는 시스템을 재구축한 후에도 패키지가 실제로 채널에 연결되어 있고 채널을 별도로 업데이트해야 하기 때문에 패키지가 버전을 업데이트하지 않는다는 점을 명심해야 한다고 말했습니다.
채널을 별도로 업데이트하는 것은 Nixos의 선언적 방식에 위배되므로 nix 플레이크를 권장합니다.
이 과정이 잘 이해가 안갑니다. 쉬운 사용 설명을 부탁드립니다. 채널과 업데이트, 플레이크는 어떻게 서로 다르고 어떻게 동작하는 것입니까?

권장되는 스크립트가 있다면 알려주세요. 개발자들이 흔히 쓰는 git, vim, curl, lf 외에 또는 추천할만한 추가적인 설정이 있다면 추가해서 적어주세요.

inputs 에서 패키지를 가져오고, outputs 에서 nixpkgs 로 패턴매칭으로 가져오는것 같아 보입니다. self는 무엇인가요? 그리고 mkShell 이라는 쉘 환경설정을 위한 객체를 만드는 것으로 보이고 이를 myEnv라는 환경변수에 저장하는 것입니까? 다시 이것을 packages로 래핑해서 관리하는 것으로 보입니다.

---
일반적으로 블록 바디에 포함된 트랜잭션의 리스트 라는 것은 실제로는 머클 트리 등의 트리 형태로 트랜잭션을 보관하고 헤더에 그 루트 값만 저장하는 식으로 블록체인이 형성되는 것 같습니다. 비트코인을 구현하는 튜토리얼을 보니까 블록 헤더랑 트랜잭션 구조만 있고 블록 바디라는 구조는 따로 없더군요. 
there is no transaction list in bitcoin block body
그러면 네트워크의 분산된 상태에서 어떻게 머클트리에 넣는 트랜잭션의 순서를 결정할수 있나요?

순서 정렬에 꽤 많은 변수와 난관이 예상됩니다. 어떻게 글로벌한 합의 상태에 도달할수 있을까요? 생각보다 대부분의 노드가 비슷하게 정렬되나요?

잠깐, 지금 보니까 머클트리에도 사실상 트랜잭션의 해시값만 저장이 되네요. 진짜 거래된 내역인 트랜잭션 그 자체는 어디에 저장됩니까?

블록에 실제 트랜잭션의 리스트를 전부 담는다고요? 머클트리의 루트만 담지 않나요? 그러면 실제 트랜잭션은 메모리에만 존재하고 블록에서 해시값을 찾아서 키를 조회해보는 방식인가요?

---
IsZero
즉, constraint는 항상 사실이 됩니다. 왜 필요할까요?

어째서 invalid가 나올수 있나요?

circom은 삼항연산자나 if문의 참 거짓 여부에 관계없이 전부 계산하는가 보군요? short-circuit evaluation 이 없다는 것이겠죠?

혹시 마지막 조건인`in*out === 0;`에 의해 invalid가 아닌 예측가능한 값이 들어가도록 강제하는 것인가요?
Is it possible that the last condition, `in*out === 0;`, forces a predictable value, not an invalid one, to be entered?

혹시 마지막 조건,`in*out === 0;`은 invalid가 아닌, 예측가능한 값이 들어가도록 강제하는 제약인가요?
하지만 invalid가 들어갈 일은 없지않나요?

Is the last condition, `in*out === 0;`, a constraint that forces a predictable value to be entered rather than an invalid one?

사실 아직 마지막 줄이 확실하게 잘 이해가 안갑니다. 없는 경우에 문제가 발생할 여지가 있을까요? 

이렇게 생각해볼까요, 정상적으로 회로가 동작하면 문제가 없지만, 만약 공격자가 의도적으로 inv 값을 변경하여 임의로 할당하면, in이 0이 아니지만 out이 0이 아닌 이상한 값으로 세팅해도 IsZero는 참이 되고 문제가 없게 나오게되니,거짓으로 나오게 만들기 위해  마지막줄, `in*out === 0;`을 첨가하여 확실한 평가를 의도하는 걸로 볼수 있을까요?
 


어떻게 아래 코드가 같다는 것을 판별할수 있나요? 마지막 줄에서 단지 0또는 1을 out으로 출력할 뿐입니다. 
하지만 보세요, 여기 코드에서는 out을 따로 관찰하지 않습니다. 어떻게 이 코드는 정상적으로 동작할수 있죠? 아니, 정상적으로 동작하긴 합니까?

`denominator_inv * n` 가 1이 아니더라도 단지 eq.out이 0일 뿐입니다. 어째서 코드가 평가되지 않을수가 있나요?

그러면 더 이상합니다.
회로에 문제가 있는 것으로 보입니다. 

그렇다면 기본적인 경우에 sanitycheck값을 참 거짓 중에 무엇으로 주어야할까요?

---
2024-03-22T12:31:40+09:00
하나의 메인 네트워크에 여러 응용프로그램이 동시에 실행되는것과 앱체인에 대한 설명은 거의 동일해 보입니다. 스마트 컨트랙트 내부에서 트리 형태의 해시 체인을 형성한다고 봐도 될까요?



---

많은 자바스크립트 상태관리 라이브러리들이 있습니다. 저는 바닐라 자바스크립트의 기본 기능인 프로토타입을 이용한 객체 관리를 사용하면 충분히 전역 상태 관리가 가능하다고 생각합니다. 최대한 단순한 형태로 코드를 작성해주세요. 30줄 미만이 좋겠습니다.

---
어떤 값이 트리에 속하는지 아닌지에 대한 내용입니까?

제 생각이 맞습니까? 해시 계산 순서가 endianness 와 관련이 있나요? 
그렇다면 little endian 일때는 아까 전의 코드가 맞는건가요? 처음에는 왜 그렇게 코드를 작성하셨나요?

그건 말이 안되는데요, 그렇다면 왜 if *is_left 와 같은 분기를 설정했나요? 순서가 상관이 없다면 애초에 분기할 필요도 없는데요. 무엇이 맞나요?


---
## WASM


partition size change is dangerous job, I think because all disk space is related and dependant with each other. When I downloaded big movie file from google drive, extract the zip file, and move some location of that big movie file, suddenly folder is crashed, even now the ssd hard drive didn't show his drive name at all. anyways, I think their is docker, which is isolated with each other so that we cannot affect the whole files stored in another pod. How about applying this mechanism to operating system? Then it could be more safe and convenient to partitioning, virtually controls the disk storage size, etc.


격리

안전하고 쉽게 파티션을 바꾸고, 큰 파일을 옮기다가 중간에 전력이 바뀌어도 안전한 파일 시스템을 위해서 어떤 방법을 생각해볼 수 있을까요?

Qcon talk held in May by Lin Clark, 
https://www.infoq.com/presentations/wasi-system-interface/

---
패시브 하우스

친환경 목재 환경 등급
Volatile organic compound (VOC) emissions

이러한 성질을 가진 접착제에는 어떤 종류가 있나요?

Polyurethane Adhesives
Polyvinyl Acetate (PVA) Adhesives
Soy-Based Adhesives

Cross Laminated Timber se0 e0

soy-based adhesives CLT cold set pur passive house

2024-03-11T15:58:41+09:00
좋은 재료를 쓰면 나아질까요? 어떤 방법이 더 있을까요?

Borate-based preservatives
Neem oil
metal mesh 

이런 것들은 유지 보수 비용이 얼마나 들까요? 자주 교체해야할까요? 유아에게 안 좋은 영향이 있을까요?


---
pubsub 말고 다른 방식이 있나요? 그것과 비교하면 왜 이러한 구조를 선택하나요? 
그리고 they only receive messages published to the topics they are interested in. 이게 필터링을 의미하지않나요?

2^17 : 100 000 10만대 
2^27 : 100 000 000 1억대 
얼핏 느려보이지만 10만대, 1억대의 모든 노드에 내 소식이 전달하는데에 
고작 1분 안으로 소식이 퍼진다고 생각하면, 그것도 꽤나 엄밀한 약속이라면 
그게 계약이라면 
사기를 과연 칠수 있을까? 
우리가 그동안 너무 빠른 세계에 살아서 그렇지만 
사실 이것도 어마어마하게 빠른 거고 충분히 나는 실용적이라고 생각한다.


---
`export data logs`

9aa16b9c375d878140a7700a82508b16195ebd083a05a90da45e7b95243df347-

Why it called discrete log problem is hard
왜 이산 로그 문제는 어려운 것이고, 그런 이름으로 불리게 되었나요?

그것은 quadratic residue 를 구하는 문제와 비슷한 것인가요? 왜 그게 어렵나요? 계산 시간이 오래 걸리기 때문일까요? 그것을 구하는 일반적인 선형 알고리즘이 없어서?

영지식 증명에서 페어링 연산을 할 때 타원곡선 말고 다른 방법은 없나요?

zk-snark 의 증명 크기는 회로와 퍼블릭 파라미터 등 어떤 요소에 의해 작아지나요?

succinct representation method 에는 어떤 종류가 있나요?

QAP와 PCP의 차이는 무엇인가요?

페어링 연산에서 타원곡선을 사용하면 Succinct 속성이 생길 수 있나요?

---

블파스 댓글:
30:11 비탈릭 부테린이 말한 노드를 빨리 돌리는 롤업은 타원곡선보다는 영지식 증명과 관련이 있는 내용이라고 생각합니다. 페어링 연산에서 타원곡선을 사용하긴 하지만 succinct 속성과 직접적인 관련은 없어 보입니다... 아니다, 관련 있음. 


/*
 in case of using BigInt,
 bigint를 사용하는 과정에서 문제가 생겼습니다.
  이 숫자를 변수에 대입하려고 했더니 아래와 같은 에러 메세지가 나왔습니다. 어떻게 해결할수 있을까요?
  rust num bigint from 

  만약 위 코드에서 from_bytes_be을 from_bytes_le으로, 즉 big endian을 little endian 으로 바꾸면 문제가 생기나요?

  이 목록 중에서 현재에도 활발하게 커뮤니티가 운영되고 개발 중인 프로젝트는 무엇이 있나요? 혹은 목록 외에 다른 cpu 아키텍처 프로젝트는 있나요?

왜 네트워크와 암호화 쪽에서는 빅엔디안을 쓰고 하드웨어 구조는 리틀 엔디안을 쓰나요? 이 둘 사이의 커뮤니케이션 오버헤드나 발생 가능한 문제는 없나요? 하나로 통일하는게 낫지 않나요?

functional hardware architecture which use big endian?
새롭게 함수형 프로그래밍 패러다임을 적용해서 메모리 구조나 컴퓨터 아키텍처를 설계한 빅 엔디안 cpu 아키텍처 프로젝트가 있을까요? 

 Bluespec SystemVerilog (BSV) and Chisel allow designers to describe hardware using a functional programming style, enabling high-level abstractions, modularity, and reusability.

 아래와 같이 여러번의 ECDSA 포인트 더하기 연산을 정의하였는데, 비교적 작은 1000 정도의 수에서는 금방 나오지만 10000 이상 넘어가면 굉장히 느려집니다. 저는 fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141 수 만큼 반복해야하는데 결과를 빠르게 받을 방법이 있을까요? 


 1. 나는 `%` 가 아니라 rem_euclid 와 같이 나머지가 항상 양수인 결과를 주는 메소드를 쓰고 싶습니다. Rust 의 BigInt에서 이를 사용하는 방법은 무엇입니까? 

1. modpow는 나머지가 항상 양수입니까?

unwrap을 사용하지않고 큰 숫자를 나머지가 양수가 되도록 하는 방법은 없나요? 

그리고 방금 BigInt 숫자끼리 `%`를 사용하니 피제수에 따라 결과가 음수가 나옵니다.
 저는 rem_euclid의 방식을 BigInt에 적용하기를 원합니다.
*/

---
1.작업증명(Proof-of-Work) 과정 구현하기
비트코인 블록 header 자료 구조를 구현합니다(트랜잭션 목록 및 머클 트리는 구현 불필요, 빈 블록으로 가정합니다.)
nonce 값을 변화시키며 유효한 블록 hash를 탐색하는 채굴 과정을 구현하며, 10개의 블록을 생성합니다.

2.경쟁적 채굴 과정 구현하기
2개의 worker가 경쟁적으로 채굴 과정을 수행하며 한 worker는 lower bound부터 1씩 nonce 값을 증가시키고 다른 worker는 upper bound로부터 1씩 nonce 값을 감소시키는 전략을 취합니다(다른 전략을 구현할 수 있는 경우 선택 가능합니다).
두 worker 중 한 worker가 먼저 유효한 블록 hash를 발견하면 이를 다른 worker에게 전달하고 이를 전달받은 worker는 유효성을 검증한 이후 다음 블록 채굴을 시작합니다.
worker간 통신은 프로세스 간 통신이나 소켓 통신 등 자유롭게 선택 가능합니다.


Someone says Block Header is Metadata about the block, including the version, previous block hash, and timestamp.
Here's the code: 

```
use sha2::{Sha256, Digest};
use std::fmt::Write;

// A struct for the Block
#[derive(Debug)]
struct Block {
    timestamp: i64,
    data: String,
    previous_hash: String,
    hash: String,
}
// Implementing the Block
impl Block {
    fn new(timestamp: i64, data: String, previous_hash: String) -> Self {
        let mut block = Block {
            timestamp,
            data,
            previous_hash,
            hash: String::new(),
        };
        block.hash = Block::calculate_hash(&block);
        block
    }
    fn calculate_hash(block: &Block) -> String {
        let mut hasher = Sha256::new();
        hasher.update(block.timestamp.to_string().as_bytes());
        hasher.update(&block.data.as_bytes());
        hasher.update(&block.previous_hash.as_bytes());
        let hash = hasher.finalize();
        let mut hash_str = String::new();
        for byte in hash {
            write!(&mut hash_str, "{:02x}", byte).expect("Unable to write");
        }
        hash_str
    }
}
// A struct for the Blockchain
#[derive(Debug)]
struct Blockchain {
    chain: Vec<Block>,
}
// Implementing the Blockchain
impl Blockchain {
    fn new() -> Self {
        let genesis_block = Block::new(0, "Genesis Block".to_owned(), String::new());
        Blockchain {
            chain: vec![genesis_block],
        }
    }
    fn add_block(&mut self, data: String) {
        let previous_hash = self.chain.last().unwrap().hash.clone();
        let new_block = Block::new(Self::current_timestamp(), data, previous_hash);
        self.chain.push(new_block);
    }
    fn current_timestamp() -> i64 {
        // Use appropriate method to get the current timestamp
        // Here we simply return a placeholder value
        1_617_439_785
    }
}
fn main() {
    let mut lyroncoin = Blockchain::new();
    lyroncoin.add_block("Block 1 Data".to_owned());
    lyroncoin.add_block("Block 2 Data".to_owned());
    println!("{:#?}", lyroncoin);
}
```

What is the Blockheader exactly? Is it a just conceptual thing? There is just Block struct in the code. 
Should I make a method to extract the block struct information? Is that a block header?
자료구조가 어떻게 되나요? 코드로 보여주세요.


트랜잭션의 리스트를 추가하면 어디에 넣어야할까요? data 대신 넣는게 맞나요?

만약에  send 줄이 없고 nonce 만 변경한다고 해도 별 의미가 없어보이는데요.

만약 이 코드에 tokio를 쓴다면, 썼을때와 안쓸때의 차이는 무엇인가요?

많은 사람들이 tokio를 사용하던데 tokio를 안쓰고 할수 있다면, tokio는 대체 무슨 라이브러리 입니까? 

TCP 소켓과 웹소켓의 차이는 무엇이고 러스트 코드로 간단히 표현해주세요.

그럼 일반적인  tcp 연결과, tcp 소켓과 http연결과 websocket의 차이는 간단하게 핵심이 무엇입니까? 프로토콜 상의 어떠한 차이가 그들을 구분하게 만듭니까?

encapsulating 추상화시킨것 뿐인가요?
각각의 용어를 풀어서 설명해주세요.

아직 TCP 소켓과 웹소켓의 정확한 차이를 모르겠네요. 이벤트 드리븐 이라는 점이 차이 같은데 맞나요? 어차피 둘다 TCP 계층을 추상화 합니다. 

생각해보니 여러명이 서로 통신하는 webrtc의 경우 웹소켓을 사용하지않나요? 그렇다면 일반 TCP 소켓보다 웹소켓이 서버 클라이언트가 아닌 p2p나 노드간 통신에 더 적합해보입니다. 아닙니까?

설명을 보니 webrtc는 보다 큰 단위의 데이터 전송에 유리해보이는데 어떤 차이가 웹소켓과 다른 점을 만드나요? 

그렇다면 블록체인에서 서로 데이터를 교환할때 webrtc가 웹소켓보다 더 낫습니까?

일반적으로 네트워크 레이어 에서도 congestion control 이나 Bidirectional Communication 같은 일반적인 기능을 지원한다고 알고 있는데, Configurable Reliability and Ordering 특징이 DataChannel API 가 가진 특별함인가요? 설명으로는 딱히 특별한 기능을 수행하는것 같아보이지 않습니다.

Explain it as simple as possible, or with metaphor:
Futures, streams, sinks, executor, Channels, Sockets, Pipes in Rust.

Websocket 프로토콜은 기본적으로 비동기를 지원하는것 같습니다. websocket crate도 그러합니까? 
in your code, websocket에서도 tokio를 사용할수 있나요? 
너무 복잡해지는 것은 싫고, 가능하면 외부 라이브러리를 안써도 될것 같은데, 만약 사용한다면 tokio를 어떤 상황에서 추가 할수 있나요? websocket 만으로 비동기 작업이 가능하다면 안써도 되지 않을까요? 웹소켓 예제에서 thread는 왜 사용했나요?


2개의 worker가 경쟁적으로 채굴 과정을 수행하며 한 worker는 lower bound부터 1씩 nonce 값을 증가시키고 다른 worker는 upper bound로부터 1씩 nonce 값을 감소시키는 전략을 취합니다.
두 worker 중 한 worker가 먼저 유효한 블록 hash를 발견하면 이를 다른 worker에게 소켓을 통해 전달하고 이를 전달받은 worker는 유효성을 검증한 이후 다음 블록 채굴을 시작합니다.

두개의 터미널을 열고 각각 실행하려고 하는데 굳이 하나의 코드에 여러개의 프로세스를 생성할 필요가 있나요?

async? simultaneous?
소켓 서버를 열고, 채굴을 시작합니다. 블록을 찾으면 브로드캐스팅하는 함수를 러스트로 구현하면 어떻게 되나요?

서버와 마이닝 작업을 비동기적으로 해야 작동할것 같습니다. 어떻게 코드를 짤수 있나요?

만약 이 줄을 비동기로 바꾸면 그 다음 줄을 실행하게 될까요? 

그 줄을 비동기적으로 처리하는 방법은 없나요?
하지만 만약 비어있는 mutex값이면 struct 필드에 접근할 때 런타임 에러가 발생하지 않을까요?

why is calculating significand of your code...
왜 변수값을 구하는 코드에는 007fffff로 되어있나요? 00ffffff가 맞지않나요? 

그리고 target_bytes 의 크기가 u64나 u128로는 부족해보입니다. 160비트 이상 필요하다고 생각하는데 BigInt를 쓰지 않은 이유가 있나요?

여전히 혼란스러운것은, 3바이트인데 어째서 23개의 비트만 가져온 건지 입니다.
0x007fffff 는 비트로 표현하면 0000 0000 0111 1111 _ 1111 1111 1111 1111 이고, 이는 23개 비트를 마스킹 합니다. 조금 더 설명이 필요합니다.

여전히 잘 이해가 안가는데, 어째서 23비트만 마스킹해서 계산한 결과와 8비트 왼쪽 쉬프트, 오른쪽 8비트 쉬프트 해서 계산한 결과가 같게 나오나요? 분명 계산식에는 24번째 비트가 1이라는 조건도 없습니다.

`0x007fffff` 대신 `0x00ffffff` 를 쓰면 어떻게 되나요?

사실 아직도 잘 이해가 안됩니다. 유효숫자를 버린다니, 그니까 3바이트가 아니라 정확히는 23비트의 숫자가 필요한 겁니까? 실제 계산은 23비트 인거죠? 코드에서도 24비트로 계산하지 않습니다. 비트코인의 정의가 모호한겁니까?
24비트 인지 23비트인지 명확히 해주면 좋겠습니다.

그러면 9비트 왼쪽 쉬프트하고 다시 8비트 오른쪽 쉬프트해야하지 않나요? 왜 8비트 왼쪽 쉬프트한 결과가 23비트 마스킹과 같은 결과가 나오나요?
