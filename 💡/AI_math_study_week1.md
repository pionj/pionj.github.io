---
title: "AI math study week1"
description: "AI math study week1 | (2025 May 13 Tuesday)"
date: 2025-05-16T00:33:27+09:00
lastmod: 2025-05-19T04:48:15+09:00
categories: 
- AI
tags: 
- 
series:
- ai math study
draft: false
private: false
---

# AI 수학 스터디

## TOC
- [AI 수학 스터디](#ai-수학-스터디)
  - [Prologue](#prologue)
  - [인공지능 수학을 왜 배워야 할까?](#h2-1)
  - [인공지능이 각광받는 이유는 무엇일까?](#h2-2)
  - [인공지능은 무엇을 할 수 있을까?](#h2-3)
  - [인공지능을 활용하는 작업](#h2-4)
  - [인공지능의 한계는 무엇일까?](#h2-5)
  - [인공지능 시스템이 실패하면 어떻게 될까?](#h2-6)
  - [인공지능은 어디로 향하고 있을까?](#h2-7)
  - [현재 인공지능 분야의 가장 큰 기여자는 누구일까?](#h2-8)
  - [수학이 인공지능에 기여한 점은 무엇일까?](#h2-9)
  - [Summary](#summary)
  - [Epilogue](#epilogue)

## Prologue
이번 주부터 [AI를 위한 필수 수학 :AI 시스템에 쓰이는 통계학, 선형 대수학, 미적분학 | 할라 넬슨 | 한빛미디어] 를 한 챕터씩 읽고 리뷰를 하면서 공부하기로 결정했다.  
이는 스터디 모임의 일환으로, 코드잇 스프린트에서 진행하는 AI 엔지니어 부트캠프 내의 챌린지 지원에서 시작되었다.  
목표는 "쉬운 말로 번역해보기" 이다.  
혼자서 하기보다 서로 동기부여를 해줄 수 있으니 완독할 수 있도록 노력해봐야겠다.  

<!--다행히 영문으로 된 PDF 파일도 구할 수 있었고, Ebook으로 대여가 가능했기 때문에 접근성도 좋았다-->

## 인공지능 수학을 왜 배워야 할까? [🔝](#toc) <a id="h2-1"></a>
내가 블록체인과 암호학 분야의 공부를 하고 일을 하던 도중 돌연 인공지능을 하게 된 이유와도 같을 것이다. 누구나 기대와 위기감을 동시에 느낄만큼 이 기술은 현재 최고의 전성기를 누리고 있다. 특히, 이는 구글 검색의 연장선에서, LLM이라 부르는 인공지능 모델을 이용하여 자연어로 웹 사이트의 검색 결과들을 쿼리하는 그 이상으로 그럴듯한 답변을 해주는데, 요새는 코드 또한 꽤나 그럴싸하게 작성해준다. 물론 생성된 모든 지식과 코드는 반드시 크로스 체킹이 필요하다. 100퍼센트의 확률로 답을 생성하기는 불가능하기 때문이다(이는 적절한 수학적•이론적 근거가 부족하지만 현재까지 내가 알고 있는 배경 지식으로는 그렇다.)
이 책의 저자는 그러한 인공지능 열풍 속에서, 인공지능을 정의하고, 인공지능에서 사용되는 수학에 관해 알아보는 것으로 이야기를 시작한다.

오늘날 인공지능은 다음 정의 중 하나를 만족한다고 한다:

- 인공지능은 소프트웨어일 수도 있고 물리적인 로봇일 수도 있다.

- 인공지능은 특정 작업을 위해 조정될 수 있고 환경을 탐색하고 조작할 수도 있으며 특정 목표가 있든 없든 지식을 구축할 수 있다.

- 인공지능은 경험을 통해 학습하며 특정 작업을 반복적으로 연습해 그 작업을 더 잘 수행할 수 있다.

- 인공지능은 환경을 인식한 다음, 해당 환경을 위해 모델을 구축하고 환경을 개선하거나 발전시킬 수 있다.

- 인공지능은 목표를 달성하기 위해 주변을 인식하고 분석하며 의사 결정을 할 수 있다. 달성하고자 하는 목표는 미리 정의될 수 있고 변할 수도 변하지 않을 수도 있으며 추가 입력에 따라 가변적일 수 있다.

- 인공지능은 인과관계를 이해하며 패턴과 원인의 차이를 구분할 수 있다.

## 인공지능이 각광받는 이유는 무엇일까? [🔝](#toc) <a id="h2-2"></a>
위 질문에 대해 저자는 다음과 같은 이유를 언급한다:
- 많은 양의 데이터 생성 및 디지털화
- 연산 능력의 발전
- 빅데이터의 의미를 이해하는 신경망의 성공

저장 장치의 발전으로 수많은 데이터를 저장할 수 있게 되었고, 연산 장치의 발전으로 억겁의 시간이 소요될 일을 수 시간 내로 끝낼 수도 있게 되었으며, 특수한 목적을 가지고 모은 대량의 데이터에 대해 의미와 맥락을 부여할 수 있는 모델이 끊임없이 계속 새롭게 등장하고 있다.

## 인공지능은 무엇을 할 수 있을까? [🔝](#toc) <a id="h2-3"></a>
데이터를 얻을 수 있고, 그것에 기반한 판단이 주를 이루는 모든 지식관련 산업은 사실상 모두 이론적으로 대체가 가능하다고 본다. 책에서 소개된 분야는 일반적인 기업 뿐만아니라, 의료 산업, 금융 산업, 과학 연구, 전력망, 교통, 공급망, 심지어는 자연 보호, 세계 기아, 질병, 기후 변화 까지도 포함하며, 인공지능 그 자체에 대한 적용 또한 가능하다.

## 인공지능을 활용하는 작업 [🔝](#toc) <a id="2-4"></a>
가장 기본적인 작업은 수학 및 알고리즘을 사용해 데이터를 처리하고 인사이트를 제공하며 의사결정을 내리는 것이다.
이는 기존의 소프트웨어와 통계학 분야에서 해오던 것들이지만 인공지능이 수행하는 자동화의 수준은 그것 이상으로 보인다.
또한 두뇌 신경 피질의 여러 고차원 기능들을 수행할 수 있다고 한다.
자연어 처리, 금융 시스템, 네트워크와 그래프, 소셜 미디어, 공급망, 일정 관리와 인력 배치, 일기 예보, 기후 변화, 교육, 심지어 윤리 등 앞서 언급된 주제들을 포함하여 다방면으로 영향을 끼칠 수 있는 것으로 보인다. 여기서 윤리는 사실 좀 이견이 있을 수 있다고 생각하는데, 현재까지도 많은 수의 인공지능이 안전성이나 도덕적인 편향성에 대해서 기대 이하의 투자 규모를 보여주거나 실패한 사례들을 종종 보여 주었기 때문에 아직 많은 노력이 필요한 분야라고 할 수 있다.

## 인공지능의 한계는 무엇일까 [🔝](#toc) <a id="2-5"></a>
인간은 적응의 동물이라고 하던가. 인공지능은 아직까지는 그렇지 않은 경향이 강하다. 하나의 작업에 완전히 최적화 되면 다른 작업에는 완전히 형편없거나 아예 작동조차 되지 않을수 있다. 사실상 그런 목적으로 설계된 기계이기 때문일 수도 있겠다. 물론 인간 또한 한쪽으로만 교육을 시키거나, 편향된 가치관으로 세뇌를 시키거나, 한 분야만 전공한 전문가들은 다른 분야에 대해 올바르게 사고하지 못할 수도 있다. 하지만 한 분야에 통달한 사람은 의외로 쉽게 다른 분야도 성공하는 모습을 보여주는데, 이는 직관과 통찰이라는 인간 내부적인 합리화 엔진의 독보적인 능력이라고 할 수 있겠다(나는 어떤 뇌과학적 지식이 없기 때문에 이 글은 신빙성이 없다. 그냥 적당히 넘어가자.)
이 책의 저자는 지능, 그 중에서 특히 감정 지능에 대해서 만큼은 아직 인간을 대체할 수 없다고 보고 있으며, 흔히 말하는 garbage in, garbage out (GIGO) 이라는 개념처럼 데이터의 전처리 과정이 반드시 필요하다는 것을 한계로 지적한다.
그리고 아직 인간의 몫으로 남아있는 분야가 있다: 예를 들면, 어떤 환자에게 특정 질병이 있음에도 그렇지 않다고 말하는 경우, 재소자가 재범 가능성이 높은 것으로 잘못 분류되어 가석방이 거부되는 경우, 대출 자격이 있음에도 대출이 거부되는 경우 등에서 주의깊게 설계되지않은 알고리즘이나 하이퍼파라미터에 의해 자칫 걷잡을 수 없는 문제가 터질 수 있다.
물론 인간의 판단 또한 불완전하지만 인공지능은 이러한 판단이 굉장히 빠르고 또 자동화되어 있기 때문에 대량으로 처리하게 되는데, 인간에게는 굉장히 자명해보이는 결과를 얼마든지 잘못 평가할 수도 있기 마련이다. 이러한 경우에는 사람이 충분히 개입하여 적절히 사후 검토를 해야한다고 생각한다. 이 책에서도 이 주제에 대해 자세히 설명할 예정이라고 한다.
그리고 무엇보다도 이 모든것들은 지구에서 채취한 물리적 재료로 만들어진다. 지구가 이런 물질을 만드는 데는 수백만 년이 걸리며, 이 물질들은 우리의 장비와 기술을 영원히 유지하기 위해 무한히 공급되지 않는다는 점을 저자는 날카롭게 지적하고 있다.
보안 이슈 또한 주요한 관심사이다. 인공지능의 광범위한 자동화가 가능해지려면 사실상 신뢰가능해야한다. 역설적이게도 그러한 인공지능의 효용을 얻기 위해서는 그와 대비되는 지속적인 모니터링 및 업데이트 또한 반드시 필요하다.
계속 등장하는 말이지만 광범위한 자동화와 인간의 그렇지 못한 제한적인 자원은 상충한다. 견제할 수 없는 영향력을 정말 가만히 내버려만 둘 수 있는걸까. 인간은 통제 불가능한 불확실성에 불안함과 심리적 압박을 느낀다고 한다. 인공지능의 미래는 인공지능 전문가들조차 불확실하다고 표현하는데 이게 정말로 괜찮은 걸까.

## 인공지능 시스템이 실패하면 어떻게 될까? [🔝](#toc) <a id="2-6"></a>
[인공지능 장애 데이터베이스](https://incidentdatabase.ai)라 불리는 온라인 저장소에는 천 건 이상의 사고가 기록되어 있다고 한다. 이전 섹션에서 언급된 인공지능의 한계로 지적된 경우들 외에도 참 다양하고 치명적인 사건 사고가 있었다는 것을 알 수 있다.
이러한 나쁜 결과가 발생할 가능성을 줄이려면 모든 제작 단계에서 인공지능 시스템이 작동하는 방식과 배포되는 환경 및 사용자에 대한 깊은 이해가 필요한데, 인공지능의 이면에 있는 **수학**을 이해하는 것은 이런 인사이트가 필요한 프로세스에서 매우 중요한 단계라고 한다.

## 인공지능은 어디로 향하고 있을까? [🔝](#toc) <a id="2-7"></a>
인공지능은 규칙과 논리를 이용하여 인간의 지능을 모방하려는 시도에서 시작됐다(&lt;Chaper 12 수학적 논리&gt;에서 더 다뤄진다.)
1990년대 후반부터 2000년대 초반에는 데이터를 바탕으로 규칙을 추론하는 다양한 머신러닝 방법이 대중화되었다.
2010년 이후, 특히 2012년에 이미지 인식 분야에서 AlexNet의 합성 신경망이 성공을 거둔 이후 신경망과 딥러닝 물결이 일었다.
2016년 딥마인드의 알파고가 매우 복잡한 바둑 게임에서 세계 챔피언을 이긴 후에는 강화 학습이 인기를 끌었다.

역사에 대해 조금 더 적어보자면:
> 회귀는 1800년대 르장드르와 가우스 이후부터 사용되었고, 최초의 인공 뉴런과 신경망은 1940 년대 말, 1950년대 초 신경생리학자 워런 맥컬러, 수학자 월터 피츠, 심리학자 도널드 헤브, 프랭크 로젠블랫의 연구로 공식화됐다. 1950년 컴퓨터 과학자이자 암호 분석가, 수학자, 이론 생물학자인 앨런 튜링이 논문 『[Computing Machinery and Inteligence](https://en.wikipedia.org/wiki/Computing_Machinery_and_Intelligence)』 에서 '모방 게임'이라 부르는 튜링 테스트를 소개했다. 튜링은 기계의 반응과 인간의 반응을 구별할 수 없는 경우 기계가 인공지능을 가지고 있다고 주장했다. 즉, 기계가 인간의 반응을 모방할 수 있다면 지능이 있는 것으로 간주된다. 하지만 컴퓨터 과학 분야에 속하지 않은 사람에게는 이러한 지능에 관한 정의가 제한적으로 느껴질 수 있다. 필자(책 저자)는 튜링 테스트가 의도치 않게 인공지능 연구의 목표나 방향을 제한했을 가능성도 있다고 생각 한다.

## 현재 인공지능 분야의 가장 큰 기여자는 누구일까? [🔝](#toc) <a id="2-8"></a>
책에서는 미국, 유럽, 중국의 거대 기업들과 학계 기여자를 언급하고 있지만 나는 이전부터 항상 존경해오던 팀 버너스 리를 언급하지 않을 수가 없다. 그는 웹의 아버지이며 사실상 초기 인공지능의 선구자이기도 하다. 이 모든 거대한 정보가 존재할 수 있었던 이유는 웹 환경의 대중화이다. 그럼에도 불구하고 그의 주장은 대중성을 얻지는 못하였다. 하지만 나는 일부 개발자 커뮤니티와 프로젝트들에 의해 여전히 끊임없이 최근까지도 개발을 이어가고 있다는 것을 종종 목격한다. 물론 이 책에서 다루는 것과는 조금 결이 다를 수는 있다. 이 책과 함께 그의 행보에 더욱 주목해보려 한다.

## 수학이 인공지능에 기여한 점은 무엇일까? [🔝](#toc) <a id="2-9"></a>
다음은 인공지능 구현에서 가장 유용한 수학 주제를 나열한 것이다:  
- 미적분
- 선형 대수
- 최적화
- 확률
- 동계

이들 중 선형 대수는 인공지능 뿐만 아니라 정수론, 추상 대수학 등과 더불어 암호학에서도 사용된다(적어도 내 배경 지식 내에서는 그렇다.)
인공지능의 응용과 구현은 다양하고 밀접하게 상호 작용하는 수학 주제들을 통합하는 것이며, 이 책의 목표는 간단한 설명과 높은 가독성을 유지하면서 인공지능 분야에서 중요한 수학 주제를 다루는 것이다.

## Summary
**인간의 지능**은 미지의 영역으로 일반화할 때 그 가치가 드러나는 한편, **인공의 지능**은 현재까지는 잘 알려진 영역에서 놀라운 업적을 달성해왔다.
내가 부트캠프를 참여한 목적은 자연어에 대한 처리이다. 즉, 언어 모델, 구조화된 언어 등을 비롯한 각종 언어 관련 연구로 초점을 맞추려고 한다. 따라서 수학 역시 이 책을 읽으면서 자연스럽게 해당 분야로 가까워지면 좋겠다는 소망이 있다.
챕터 1에서는 일반적인 질문들과 문제들, 위험들, 수학 주제들에 대해 간략히 살펴보았다. 챕터 2는 데이터의 분포, 즉, 확률과 통계로 이어진다.

## Epilogue
사실 내가 가장 놀랍다고 느끼는 사건은, 최근 노벨상을 받은 사람들 중에서 해당분야의 구루들이 즐비할텐데도 불구하고 그들을 제치고 인공지능을 함께 연구한 사람들이 스포트라이트를 받았다는 것이다. 내 능력으로는 두가지 서로 다른 전문적인 분야를 통달하긴 어려울 것이라 생각하기 때문에, 일을 하면서 기술을 따라가기만도 벅찰 것이라 느꼈다. 사실상 반강제적인 실업 상태이긴 하지만 부트캠프에 매력을 느끼게 된 이유이기도 하다. 암호학과 블록체인 또한 굉장히 빠른 속도로 발전해왔지만 어느정도 기반 지식이 있어서 따라갈수 있을 것이라는 나름의 근자감이 있지만, 인공지능 분야는 사실상 배경 지식이 전무하다. 학부 때는 머신러닝을 배웠지만 그렇게 흥미가 느껴지지 않았다. 하지만 코드까지 분석하고 생성한다는 것은 매우 신선하면서도 충격적으로 다가왔고, 앞서 말한 다른 분야에 끼치는 압도적인 영향력을 보고 있노라면 놀라움을 금할 수가 없었다. 이러한 불확실한 세상에서 나는 적어도 방향성 만큼은 항상 옳다고 믿어왔다. 내가 작성한 석사 논문에서 사용된 Provenance나 RDF는 이러한 혼돈 속에서 꽃피울 한줄기 희망이 될 것이라고 믿는다.


[[AI_math_study_week2]]