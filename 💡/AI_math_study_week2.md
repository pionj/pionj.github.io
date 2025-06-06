---
title: "AI_math_study_week2"
description: "AI_math_study_week2.md | (2025 May 19 Monday)"
date: 2025-05-19T06:15:56+09:00
lastmod: 2025-05-26T03:49:56+09:00
categories: 
- AI
tags: 
- 
series:
- ai math study
draft: false
private: false
---

# AI 수학 스터디 (2주차)

## TOC
- [AI 수학 스터디 (2주차)](#ai-수학-스터디-2주차)
  - [Prologue](#prologue)
  - [데이터: AI의 연료](#h2-1)
  - [데이터를 다루는 AI의 과제](#h2-2)
  - [실제 데이터 vs. 시뮬레이션 데이터](#h2-3)
    - [수학적 모델: 선형 vs. 비선형](#h2-3-1)
    - [실제 데이터 예시: 키와 몸무게](#h2-3-2)
    - [시뮬레이션 데이터 예시: 키와 몸무게](#h2-3-3)
  - [수학적 모델, 시뮬레이션, 그리고 AI](#h2-4)
  - [우리의 데이터는 어디에서 오는가?](#h2-5)
  - [데이터 분포, 확률, 통계의 기본 어휘](#h2-6)
    - [핵심 용어 훑어보기](#h2-6-1)
    - [연속 분포 vs. 이산 분포 (밀도 vs. 질량)](#h2-6-2)
    - [결합 확률 밀도 함수의 힘](#h2-6-3)
  - [데이터 분포 살펴보기: 균등 분포와 정규 분포](#h2-7)
    - [균등 분포 (Uniform Distribution)](#h2-7-1)
    - [정규 분포 (Normal/Gaussian Distribution)](#h2-7-2)
    - [기타 중요하고 자주 사용되는 분포들](#h2-7-3)
  - ['분포'라는 단어의 다양한 쓰임새](#h2-8)
  - [A/B 테스팅이란?](#h2-9)
  - [Summary](#summary)
  - [Epilogue](#epilogue)

## Prologue
지난주 1장에 이어 "AI를 위한 필수 수학" 2장 '데이터, 데이터, 또 데이터'를 읽고 리뷰할 차례다. 1장에서는 AI의 거시적인 그림과 '왜 배워야 하는가'에 대한 답을 찾아봤다면, 2장은 AI 시스템의 가장 근본적인 재료이자 심장이라 할 수 있는 '데이터' 그 자체에 집중한다. 더불어 데이터를 이해하고 다루는 데 필요한 기본적인 수학적 언어, 즉 확률과 통계의 기초 어휘들을 소개한다. 본격적으로 수학의 세계에 발을 들여놓는 느낌이다.

## 데이터: AI의 연료 [🔝](#toc) <a id="h2-1"></a>
저자는 책의 서두에서 "데이터는 대부분의 AI 시스템을 움직이는 연료"라고 강조하며 시작한다. 특히 이 장에서는 다양한 AI 유형 중에서도 **인식 AI(Perception AI)**에 초점을 맞춘다. 인식 AI의 핵심 목표는 다음과 같이 요약할 수 있다:
> "주어진 데이터 포인트 집합에 (단순하든 복잡하든) 적절한 수학 함수를 맞추고(fitting), 이 함수가 새로운 데이터에서도 잘 작동하도록 만드는 것."

결국, 데이터로부터 패턴을 학습하고, 이를 일반화하여 미래를 예측하거나 결정을 내리는 것이 인식 AI의 본질이다.

## 데이터를 다루는 AI의 과제 [🔝](#toc) <a id="h2-2"></a>
데이터로부터 의미 있는 함수를 찾는 과정은 말처럼 간단하지 않다. 여러 도전 과제가 존재한다:

*   **가설과 특징(Features):** 어떤 함수가 데이터를 실제로 생성했는지, 데이터의 수많은 특징 중 어떤 것이 중요하고 서로 어떻게 상호작용하는지 우리는 알지 못한다. AI는 이 미지의 함수를 추정하고, 중요한 특징과 그들 간의 관계를 학습해야 한다.
*   **성능(Performance):** 학습된 모델이 새로운, 보지 못한 데이터에서 얼마나 잘 작동할지, 어떤 기준으로 모델의 성능을 평가할지 결정하는 것도 중요한 문제다.
*   **볼륨(Volume)과 차원:** AI는 종종 수백만 개 이상의 데이터 인스턴스와 특징을 다룬다. 이는 고차원의 수학적 공간에서 최적의 함수를 탐색해야 함을 의미하며, '차원의 저주'와 같은 문제를 야기할 수 있다.
*   **구조(Structure):** 현대 데이터의 상당수는 텍스트, 이미지, 오디오 파일과 같은 비정형 데이터(unstructured data)다. 이를 AI가 이해하고 처리할 수 있는 정형화된 형태로 변환하는 과정이 필수적이다.

## 실제 데이터 vs. 시뮬레이션 데이터 [🔝](#toc) <a id="h2-3"></a>
데이터는 크게 두 가지로 나눌 수 있으며, 각각의 특성을 이해하는 것이 중요하다:

*   **실제 데이터(Real Data):** 현실 세계에서의 관찰, 측정, 센서 값 등을 통해 수집된다. 종종 불완전하고, 노이즈가 많으며, 데이터를 생성한 정확한 함수나 확률 분포를 알 수 없다.
*   **시뮬레이션 데이터(Simulated Data):** 알려진 수학 함수나 확률 분포를 사용하여 컴퓨터로 생성한 데이터다. 생성 과정을 우리가 통제할 수 있다는 장점이 있다.

### 수학적 모델: 선형 vs. 비선형 [🔝](#toc) <a id="h2-3-1"></a>
데이터 특징들 간의 관계를 모델링할 때, 그 관계는 크게 선형적이거나 비선형적일 수 있다.
*   **선형(Linear) 모델:** 특징들 간의 관계가 직선이나 평면처럼 '평평한' 경우를 말한다. 예를 들어, `결과 = w0 + w1*특징1 + w2*특징2` 와 같이 표현된다. 여기서 `w` 값들은 각 특징의 중요도(가중치)를 나타낸다.
*   **비선형(Nonlinear) 모델:** 관계가 곡선이나 복잡한 표면처럼 '휘어진' 경우다. 특징들이 단순한 합이나 곱 이상의 복잡한 방식으로 상호작용한다 (예: 거듭제곱, 제곱근, 삼각함수 등). 신경망은 특히 이러한 복잡한 비선형 관계를 잘 포착하는 것으로 알려져 있다.

### 실제 데이터 예시: 키와 몸무게 [🔝](#toc) <a id="h2-3-2"></a>
저자는 캐글(Kaggle)에서 얻은 실제 사람들의 키와 몸무게 데이터를 예시로 든다. 한 데이터셋에서는 키와 몸무게 사이에 뚜렷한 패턴이 보이지 않았지만, 다른 데이터셋에서는 명확한 선형 관계(키가 클수록 몸무게가 증가하는 경향)가 나타났다. 첫 번째 데이터셋도 자세히 살펴보니, 특정 그룹(예: 비만도 지수가 높은 사람들)으로 데이터를 나누자 선형성이 드러났다. 이처럼 실제 데이터는 탐색적 데이터 분석(EDA)을 통해 숨겨진 패턴을 찾아내는 과정이 중요하다.

### 시뮬레이션 데이터 예시: 키와 몸무게 [🔝](#toc) <a id="h2-3-3"></a>
저자는 `몸무게 = w0 + w1*키` 라는 간단한 선형 함수를 가정하고 데이터를 시뮬레이션한다. `w0`와 `w1`에 특정 숫자 값을 할당하면, 생성된 데이터는 완벽한 직선을 이룬다. 여기에 약간의 무작위 노이즈를 추가하면(`몸무게 = w0 + w1*키 + 노이즈`), 실제 데이터와 더 유사한, 직선 주변에 흩뿌려진 형태의 데이터를 얻을 수 있다. 시뮬레이션은 실제 데이터 수집이 어렵거나 특정 가설을 검증하고 싶을 때 매우 유용하다.

## 수학적 모델, 시뮬레이션, 그리고 AI [🔝](#toc) <a id="h2-4"></a>
AI는 수학적 모델 및 시뮬레이션과 매우 밀접하게 연관되어 있으며, 세 가지 주요 방식으로 상호작용한다:

1.  **모델과 시뮬레이션이 AI 학습용 데이터를 생성한다:** 예를 들어, 자율주행 자동차는 실제 도로에서 발생하기 어려운 위험한 상황들을 시뮬레이션 환경에서 학습할 수 있다.
2.  **AI가 기존 수학적 모델 및 시뮬레이션의 성능을 향상시킨다:** 복잡한 모델의 파라미터를 학습하거나, 시뮬레이션 결과를 더 빠르게 도출하는 데 AI가 활용될 수 있다.
3.  **AI 자체가 하나의 거대한 수학적 모델이자 시뮬레이션이다:** 신경망과 같은 AI 시스템은 입력 데이터를 특정 방식으로 처리하여 출력을 내는 정교한 수학적 함수로 볼 수 있으며, 그 학습 과정 자체가 일종의 시뮬레이션이다.

## 우리의 데이터는 어디에서 오는가? [🔝](#toc) <a id="h2-5"></a>
저자는 자신의 경험을 통해 실제 현업에서 유용한 데이터를 확보하는 것이 얼마나 어려운 일인지 토로한다. (스터디를 하는 우리도 각자의 분야에서 비슷한 경험을 했을 것이다!) 다행히 캐글(Kaggle)과 같은 공개 데이터 저장소가 많이 있으며, 웹 크롤링을 통해 데이터를 수집할 수도 있다.
성공적인 AI 시스템들이 어떤 데이터를 사용하여 학습했는지 살펴보는 것만으로도 큰 도움이 된다. 예를 들어, 음성 생성 모델인 WaveNet이나 이미지 분류 모델인 AlexNet이 어떤 종류와 규모의 데이터를 사용했는지 알아보는 것은 데이터의 중요성을 실감하게 한다. 이들 대부분은 비정형 데이터였다는 점도 주목할 만하다.

## 데이터 분포, 확률, 통계의 기본 어휘 [🔝](#toc) <a id="h2-6"></a>
새로운 분야를 배울 때 가장 먼저 부딪히는 장벽 중 하나는 생소한 용어들이다. 저자는 확률과 통계 분야에서 AI를 이해하는 데 필요한 핵심 어휘들을 마치 외국어 단어를 배우듯 하나씩 소개한다. 당장 모든 것을 완벽히 이해하지 못하더라도, 앞으로 계속 반복해서 등장할 개념들이므로 익숙해지는 것을 목표로 하자.

### 핵심 용어 훑어보기 [🔝](#toc) <a id="h2-6-1"></a>
*   **랜덤 변수(Random Variables):** 결과가 특정 값으로 고정되지 않고 무작위성을 가지는 변수. (결과가 고정된 일반 함수와 대비됨)
*   **확률 분포(Probability Distributions):** 랜덤 변수가 특정 값 또는 특정 범위의 값을 가질 확률을 나타내는 함수.
*   **주변 확률(Marginal Probabilities):** 여러 변수가 함께 있는 결합 확률 분포에서, 특정 변수 하나만에 대한 확률 분포.
*   **균등 분포(Uniform Distribution)와 정규 분포(Normal/Gaussian Distribution):** 가장 기본적이고 널리 사용되는 확률 분포.
*   **조건부 확률(Conditional Probabilities)과 베이즈 정리(Bayes' Theorem):** 한 사건이 일어났다는 조건 하에 다른 사건이 일어날 확률을 다루며, 베이즈 정리는 이를 업데이트하는 강력한 도구다.
*   **사전 분포(Prior Distribution), 사후 분포(Posterior Distribution), 우도 함수(Likelihood Function):** 베이즈 정리의 구성 요소들로, 데이터를 통해 우리의 믿음(확률 분포)을 갱신하는 과정을 설명한다.
*   **분포의 혼합(Mixtures of Distributions):** 여러 단순한 분포를 섞어 더 복잡한 분포를 만드는 것 (예: 남성과 여성의 키 분포를 합친 것).
*   **랜덤 변수의 합과 곱:** 단순한 랜덤 변수들을 더하거나 곱해서 새로운 랜덤 변수를 만들고 그 분포를 연구한다.
*   **결합 확률 분포를 표현하는 그래프:** 그래프(다이어그램)를 사용해 여러 변수 간의 복잡한 확률 관계를 효율적으로 나타낼 수 있다.
*   **기댓값(Expectation), 평균(Mean), 분산(Variance), 불확실성(Uncertainty):** 데이터의 중심 경향성, 흩어진 정도, 예측의 불확실성을 정량화한다.
*   **공분산(Covariance)과 상관계수(Correlation):** 두 변수가 함께 변하는 경향성과 그 강도를 나타낸다.
*   **마르코프 과정(Markov Process):** 현재 상태가 주어지면 과거 상태와 무관하게 미래 상태가 결정되는 확률 과정으로, 강화학습 등에서 중요하게 사용된다.
*   **정규화(Normalizing), 스케일링(Scaling), 표준화(Standardizing):** 데이터의 값 범위를 조정하거나 분포의 형태를 바꾸는 데이터 전처리 기법들.
*   **자주 등장하는 예시:** 동전 던지기, 주사위 굴리기 등은 확률 개념을 설명하기 위한 고전적인 예시들이지만, AI에서는 고객 행동, 질병 진단 등 현실 문제에 적용된다.

### 연속 분포 vs. 이산 분포 (밀도 vs. 질량) [🔝](#toc) <a id="h2-6-2"></a>
랜덤 변수가 취할 수 있는 값의 종류에 따라 분포는 크게 두 가지로 나뉜다:
*   **연속 분포(Continuous Distributions):** 키, 몸무게처럼 변수가 연속적인 값을 가질 때 사용. 특정 '정확한' 값을 가질 확률은 0이다. 따라서 특정 '구간'에 속할 확률을 **확률 밀도 함수(Probability Density Function, PDF)**를 적분하여 구한다.
*   **이산 분포(Discrete Distributions):** 주사위 눈금, 동전의 앞/뒤처럼 변수가 셀 수 있는 값을 가질 때 사용. 각 특정 값을 가질 확률을 **확률 질량 함수(Probability Mass Function, PMF)**로 나타낸다.

### 결합 확률 밀도 함수의 힘 [🔝](#toc) <a id="h2-6-3"></a>
여러 랜덤 변수들의 관계를 모두 담고 있는 **결합 확률 (밀도/질량) 함수(Joint Probability (Density/Mass) Function)**를 안다는 것은 매우 강력하다. 이는 각 변수의 개별 분포(주변 분포)뿐 아니라 변수들 간의 모든 가능한 동시 발생 확률(조건부 확률)까지 알 수 있기 때문이다. 마치 도시 전체를 하늘에서 내려다보는 것과 같다. 하지만 변수가 많아질수록 이를 저장하고 계산하는 데 필요한 자원이 기하급수적으로 늘어나는 '차원의 저주' 문제가 발생하기도 한다.

## 데이터 분포 살펴보기: 균등 분포와 정규 분포 [🔝](#toc) <a id="h2-7"></a>
가장 기본적이고 중요한 두 가지 연속 확률 분포를 자세히 살펴보자.

### 균등 분포 (Uniform Distribution) [🔝](#toc) <a id="h2-7-1"></a>
특정 구간 내의 모든 값들이 나타날 확률이 동일한 분포다. 확률 밀도 함수(PDF)는 해당 구간에서 상수 값을 가지며, 마치 평평한 직사각형 모양을 띈다. 예를 들어, 0과 1 사이에서 무작위로 숫자를 뽑을 때, 0.2 근처의 값을 뽑을 확률과 0.75 근처의 값을 뽑을 확률은 같다. 컴퓨터 시뮬레이션에서 다른 분포의 난수를 생성하는 데 기초가 된다.

### 정규 분포 (Normal/Gaussian Distribution) [🔝](#toc) <a id="h2-7-2"></a>
자연 현상이나 사회 현상에서 매우 흔하게 관찰되는 종 모양(bell-shaped)의 분포다. **평균(μ, mu)**을 중심으로 데이터가 모여 있고, 평균에서 멀어질수록 대칭적으로 확률이 낮아진다. 데이터가 퍼진 정도는 **표준편차(σ, sigma)**로 결정된다. **중심 극한 정리(Central Limit Theorem, CLT)**에 따르면, 서로 독립적인 많은 랜덤 변수들의 평균은 (원래 변수들의 분포와 상관없이) 정규 분포를 따르는 경향이 있다. 이것이 바로 정규 분포가 광범위하게 나타나는 이유다.
1차원(단변량) 정규 분포뿐 아니라, 2개 이상의 변수를 다루는 다변량 정규 분포도 있으며, 이때는 평균 벡터와 공분산 행렬(Σ, Sigma)로 분포가 결정된다.

### 기타 중요하고 자주 사용되는 분포들 [🔝](#toc) <a id="h2-7-3"></a>
저자는 균등 분포와 정규 분포 외에도 AI 분야에서 자주 등장하는 여러 이산 분포와 연속 분포들을 간략하게 소개한다:
*   **이산 분포:**
    *   **이항 분포(Binomial):** 정해진 횟수의 독립적인 시도에서 특정 성공 횟수가 나타날 확률.
    *   **푸아송 분포(Poisson):** 특정 시간/공간 단위 내에서 드문 사건이 발생하는 횟수에 대한 분포.
    *   **기하 분포(Geometric):** 성공할 때까지 독립적인 시도를 반복할 때, 첫 성공까지 필요한 시도 횟수.
    *   기타: 음이항 분포, 초기하 분포 등.
*   **연속 분포:**
    *   **지수 분포(Exponential):** 어떤 사건이 발생할 때까지 기다리는 시간에 대한 분포 (메모리 없는 특성).
    *   **베이불 분포(Weibull):** 제품 수명 예측 등 공학 분야에서 널리 사용됨.
    *   **로그-정규 분포(Log-normal):** 값에 로그를 취하면 정규 분포를 따르는 데이터.
    *   **카이제곱 분포(Chi-squared):** 여러 정규 분포 변수들의 제곱 합에 대한 분포로, 분산 추정이나 적합도 검정에 사용됨.
    *   기타: 스튜던트 t-분포, 베타 분포, 코시 분포, 감마 분포 등.

각 분포는 특정 유형의 실제 시나리오를 모델링하는 데 적합하며, 어떤 분포를 선택하느냐에 따라 AI 모델의 성능이 달라질 수 있다.

## '분포'라는 단어의 다양한 쓰임새 [🔝](#toc) <a id="h2-8"></a>
'분포'라는 단어는 문맥에 따라 여러 가지 의미로 사용될 수 있어 혼란을 야기할 수 있다. 저자는 다음과 같이 정리한다:
*   실제 데이터를 히스토그램으로 나타낸 **경험적 분포(empirical distribution)**.
*   이산 랜덤 변수의 **확률 질량 함수(PMF)** 또는 **누적 질량 함수(CMF)**.
*   연속 랜덤 변수의 **확률 밀도 함수(PDF)** 또는 **누적 분포 함수(CDF)**.
*   여러 랜덤 변수가 함께 있을 때의 **결합 확률 분포(joint probability distribution)**.

결국, 수학적 랜덤 변수와 그 분포는 우리가 관찰한 실제 데이터나 현상의 이상적인 모델이라고 생각할 수 있다.

## A/B 테스팅이란? [🔝](#toc) <a id="h2-9"></a>
데이터 과학에서 매우 중요한 개념인 **A/B 테스팅(A/B testing)** 또는 스플릿 테스팅(split testing)에 대해서도 간략히 언급한다. 이는 모집단을 두 그룹(A그룹, B그룹)으로 나누어, 특정 변화(예: 새로운 웹페이지 디자인, 다른 광고 문구)를 한 그룹에만 적용하고 다른 그룹(통제군)과 결과를 비교하여 어떤 버전이 더 나은 성과를 내는지 통계적으로 검증하는 방법이다. 많은 기업들이 사용자 참여도, 매출, 고객 만족도 등을 높이기 위해 수많은 A/B 테스트를 수행한다.

## Summary
2장에서는 AI의 핵심 동력인 '데이터'의 본질과 그 중요성에 대해 깊이 있게 다루었다. 실제 데이터와 시뮬레이션 데이터의 차이점, 선형 및 비선형 모델의 개념, 그리고 정형 데이터와 비정형 데이터의 특성을 명확히 했다. 또한 AI가 수학적 모델 및 시뮬레이션과 어떻게 유기적으로 상호작용하는지 살펴보았다.
무엇보다 이 장의 핵심은 AI를 이해하는 데 필수적인 **확률과 통계의 기본 어휘 및 다양한 데이터 분포**를 소개한 것이다. 랜덤 변수부터 시작하여 각종 분포(균등, 정규, 이항, 푸아송 등)들의 개념과 이들이 어떤 실제 상황을 모델링하는지를 접했다. 이러한 지식은 앞으로 등장할 AI 모델들의 작동 원리를 이해하고, 데이터를 적절히 처리하며, 모델의 결과를 해석하는 데 있어 반석이 될 것이다. '분포'라는 단어가 문맥에 따라 다양하게 쓰일 수 있다는 점과 A/B 테스팅의 개념도 중요한 포인트였다.

## Epilogue
1장이 AI의 '왜?'라는 거시적인 질문에 답하려 했다면, 2장은 AI를 움직이는 '무엇을 가지고?'에 대한 구체적인 탐구였다. 특히 다양한 확률 분포들의 이름과 그 용도가 쏟아져 나올 때는 마치 새로운 언어의 어휘를 한꺼번에 배우는 듯한 느낌이었다. 저자의 말처럼, 지금 당장 모든 분포의 공식을 외우기보다는 각 분포가 어떤 특징을 가지고 어떤 상황에 사용되는지, 그 '느낌'을 익히는 데 집중해야겠다.
데이터의 중요성과 그 데이터를 이해하기 위한 확률/통계적 시각의 필요성을 절감했다. 다음 장에서는 이 데이터들을 실제 '함수'에 맞춰보는(fitting) 과정을 배운다고 하니, 드디어 본격적인 모델링의 세계로 들어서는 것 같아 기대가 된다. 이번 장에서 배운 확률과 통계 용어들이 실제 모델링 과정에서 어떻게 빛을 발할지 궁금하다.
