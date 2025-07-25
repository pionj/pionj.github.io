---
title: "AI_math_study_week4"
description: "AI_math_study_week4.md | (2025 June 09 Monday)"
date: 2025-06-09T03:29:00+09:00
lastmod: 2025-06-09T03:29:02+09:00
categories: 
- AI
tags: 
- 
series:
- ai math study
draft: false
private: false
---

# AI 수학 스터디 (4주차)

## TOC
- [AI 수학 스터디 (4주차)](#ai-수학-스터디-4주차)
  - [Prologue](#prologue)
  - [뇌 피질과 인공 신경망](#h2-1)
  - [훈련 함수: 완전 연결(Dense) 순방향 신경망](#h2-2)
    - [신경망은 훈련 함수의 계산 그래프 표현](#h2-2-1)
    - [선형 결합, 편향 추가, 그리고 활성화](#h2-2-2)
    - [주요 활성화 함수 (Activation Functions)](#h2-2-3)
    - [보편적 함수 근사 (Universal Function Approximation)](#h2-2-4)
  - [손실 함수 (Loss Functions)](#h2-3)
  - [최적화 (Optimization)](#h2-4)
    - [신경망의 수학과 신비로운 성공](#h2-4-1)
    - [경사 하강법 (Gradient Descent)](#h2-4-2)
    - [학습률 하이퍼파라미터 η의 역할](#h2-4-3)
    - [볼록 대 비볼록 함수 지형 (Convex vs. Nonconvex Landscapes)](#h2-4-4)
    - [확률적 경사 하강법 (Stochastic Gradient Descent, SGD)](#h2-4-5)
  - [최적화 과정을 위한 가중치 초기화 (Initializing the Weights ω⁰)](#h2-5)
  - [정규화 기법 (Regularization Techniques)](#h2-6)
    - [드롭아웃 (Dropout)](#h2-6-1)
    - [조기 종료 (Early Stopping)](#h2-6-2)
    - [배치 정규화 (Batch Normalization)](#h2-6-3)
    - [가중치 크기 제어: Norm 패널티 (Weight Decay)](#h2-6-4)
      - [l2 Norm vs. l1 Norm 페널티](#h2-6-4-1)
      - [정규화 하이퍼파라미터 α의 역할](#h2-6-4-2)
  - [머신러닝에 등장하는 하이퍼파라미터 예시](#h2-7)
  - [연쇄 법칙과 역전파: ∇L(ω⃗ᵢ) 계산하기](#h2-8)
    - [역전파는 뇌 학습 방식과 크게 다르지 않다](#h2-8-1)
    - [왜 역전파가 더 나은가?](#h2-8-2)
    - [역전파 상세 과정](#h2-8-3)
  - [입력 데이터 특징의 중요도 평가](#h2-9)
  - [Summary](#summary)
  - [Epilogue](#epilogue)

## Prologue
지난 3장에서는 전통적인 머신러닝 모델들을 통해 데이터에 함수를 맞추는 기본적인 원리, 즉 훈련 함수-손실 함수-최적화의 구조를 배웠다. 이번 4장, "Optimization for Neural Networks"에서는 드디어 AI 분야의 현재를 이끌고 있는 **신경망(Neural Networks)**의 세계로 공식적으로 전환한다. 저자는 신경망 또한 이전 장의 모델들과 동일한 수학적 구조(훈련 함수, 손실 함수, 최적화)를 따르지만, 그 복잡성과 능력은 훨씬 뛰어나다고 말하며 시작한다. "나는 평생을 최적화하며 살아왔다... 내 뇌 또한 세상의 모델을 학습한다는 것을 깨달았을 때가 나의 첫 번째 아하! 순간이었다."라는 저자의 말처럼, 신경망 학습 과정은 우리 뇌의 학습 방식과도 유사점을 가진다.

## 뇌 피질과 인공 신경망 [🔝](#toc) <a id="h2-1"></a>
인공 신경망은 수십억 개의 뉴런이 계층적 구조로 배열된 인간의 뇌 피질(brain cortex)을 모델로 한다. 뇌는 이전에 본 개념에 직면했을 때 뉴런 연결을 강화하고, 이전에 학습한 내용과 모순되는 새로운 정보를 학습하면 연결을 약화시키는 방식으로 학습한다. 기계는 숫자만 이해하므로, 수학적으로 더 강한 연결은 더 큰 숫자(가중치)로, 더 약한 연결은 더 작은 숫자로 표현된다.
이 장에서는 완전 연결 신경망(fully connected neural network)의 수학적 작동 방식, 다양한 훈련 및 손실 함수의 설계와 실험, 그리고 신경망 훈련에 사용되는 최적화 및 역전파 단계가 우리 뇌의 학습 방식과 어떻게 유사한지 설명한다. 마지막으로 다양한 정규화 기법들을 살펴본다.

## 훈련 함수: 완전 연결(Dense) 순방향 신경망 [🔝](#toc) <a id="h2-2"></a>
완전 연결(fully connected) 또는 밀집(dense) 인공 신경망에서는 (책 그림 4-2 참고), 각 계층(layer)의 모든 뉴런(노드, 원으로 표현)이 다음 계층의 모든 뉴런과 연결된다. 첫 번째 계층은 입력 계층, 마지막 계층은 출력 계층이며, 중간 계층들은 은닉 계층(hidden layers)이라고 불린다. 신경망 자체는 (완전 연결이든 아니든) 훈련 함수의 공식을 나타내는 **계산 그래프(computational graph)**다.
신경망에서의 훈련은 손실 함수를 최소화하여 훈련 함수의 공식에 포함된 파라미터 값, 즉 **가중치(weights)**를 찾는 것을 의미한다. 이는 3장에서 다룬 선형 회귀, 로지스틱 회귀 등과 수학적 구조는 동일하다: 1. 훈련 함수, 2. 손실 함수, 3. 최적화.
차이점은, 3장의 단순 모델들은 특징들을 선형 결합하고 편향(ω₀)을 더한 후, 최대 하나의 비선형 함수(예: 로지스틱 회귀의 로지스틱 함수)를 통과시키는 매우 간단한 훈련 함수 공식을 가졌다. 반면, 신경망 모델에서는 특징들을 선형 결합하고 편향을 더한 후 비선형 함수(**활성화 함수(activation function)**라고 불림)를 통과시키는 과정이 **단 하나의 뉴런**에서 일어나는 계산이다. 이 단순한 과정이 수십, 수백, 수천, 때로는 수백만 개의 뉴런에 걸쳐 계층적으로 반복되면서 훨씬 더 복잡한 기능을 표현하거나 가능하게 한다.

### 신경망은 훈련 함수의 계산 그래프 표현 [🔝](#toc) <a id="h2-2-1"></a>
뉴런이 5개뿐인 작은 신경망(책 그림 4-3 참고)조차도 훈련 함수의 공식을 직접 쓰는 것은 매우 복잡하다. 이것이 신경망을 체계적이고 쉽게 표현하기 위해 계산 그래프를 사용하는 이유다. 신경망에서 한 계층 `m`의 노드 `i`와 다음 계층 `n`의 노드 `j`를 연결하는 엣지에는 가중치 `ω_mn,ij`가 할당된다. (인덱스가 4개!) 인덱스의 홍수 속에서 익사하지 않으려면 신경망의 가중치를 행렬로 정리해야 한다.

### 선형 결합, 편향 추가, 그리고 활성화 [🔝](#toc) <a id="h2-2-2"></a>
뉴런이 다른 뉴런으로부터 입력을 받을 때 어떤 계산이 일어날까?
1.  **선형 결합 및 편향 추가:** 다른 가중치를 사용하여 입력 정보를 선형 결합하고, 편향 항을 더한다.
    예를 들어, 은닉 계층 1의 첫 번째 노드에서는 입력 `x`와 해당 층의 가중치 행렬 `W¹` 및 편향 벡터 `ω₀¹`을 사용하여 `z¹ = W¹x + ω₀¹`와 같이 계산한다. (책 118-119페이지 참고)
2.  **비선형 활성화 함수 통과:** 결과를 비선형 활성화 함수에 통과시킨다. (미적분의 함수 합성 연산)
    `s¹ = f(z¹) = f(W¹x + ω₀¹)`
    만약 이 비선형 활성화 단계를 건너뛰고 선형 결합만으로 다음 계층으로 정보를 전달한다면, 신경망은 새로운 것을 학습하지 못하고 결국 전체 네트워크는 하나의 선형 변환과 같아져 데이터의 복잡한 비선형 관계를 포착할 수 없게 된다. (책 119페이지 "선형 결합의 선형 결합은 여전히 선형 결합이다" 박스 참고)
이 과정이 여러 은닉 계층을 거쳐 출력 계층까지 연쇄적으로 이어진다. 출력 계층에서의 계산은 네트워크의 작업 목표(회귀, 이진 분류, 다중 클래스 분류)에 따라 달라진다. (책 120-121페이지 참고)

### 주요 활성화 함수 (Activation Functions) [🔝](#toc) <a id="h2-2-3"></a>
이론적으로는 어떤 비선형 함수든 노드를 활성화하는 데 사용할 수 있지만, 실제로는 몇 가지 인기 있는 함수들이 사용된다. (책 그림 4-5 및 122-124페이지 참고)
*   **시그모이드 계열 (Sigmoid-type):** 로지스틱 함수, 하이퍼볼릭 탄젠트(tanh) 함수 등. S자 모양이며, 입력값이 매우 크거나 작으면 그래프가 평평해지는 **포화(saturation)** 현상이 발생한다. 이는 학습을 방해하는 **기울기 소실 문제(vanishing gradient problem)** 를 야기할 수 있다.
*   **ReLU 계열 (ReLU-type):** Rectified Linear Unit (ReLU), Leaky ReLU, ELU 등. 포화되지 않아 기울기 소실 문제를 완화하지만, 때로는 **기울기 폭주 문제(exploding gradient problem)** 를 일으킬 수 있다. ReLU는 현재 가장 널리 사용되는 활성화 함수 중 하나이며, AlexNet의 성공 요인 중 하나로 꼽힌다.
이러한 문제들을 해결하기 위해 그래디언트 클리핑(gradient clipping), 계층별 출력 정규화 등의 기법이 사용된다.

### 보편적 함수 근사 (Universal Function Approximation) [🔝](#toc) <a id="h2-2-4"></a>
신경망(때로는 단일 은닉 계층만 가진 비딥러닝 신경망조차도)이 다양한 작업에서 성공을 거둔다는 사실은 신경망에 어떤 **보편적 근사(universal approximation)** 속성이 있음을 시사한다. 즉, 신경망으로 표현되는 훈련 함수는 (기본적인 선형 결합, 편향, 매우 간단한 활성화 함수로 만들어짐에도 불구하고) 데이터를 실제로 나타내거나 생성하는 미지의 근본 함수를 상당히 잘 근사한다.
**보편적 근사 정리**는 특정 조건 하에서 신경망이 임의의 연속 함수를 원하는 정밀도로 근사할 수 있음을 수학적으로 보장한다. (책 125-130페이지 참고) 이는 우리가 데이터 생성 함수의 정확한 형태를 모르더라도 신경망을 사용하여 그 함수를 효과적으로 모델링할 수 있음을 의미한다. 다만, 어떤 구조의 신경망(층 수, 노드 수, 활성화 함수 종류 등)이 특정 함수를 가장 잘 근사하는지에 대해서는 아직 많은 연구가 진행 중이다.

## 손실 함수 (Loss Functions) [🔝](#toc) <a id="h2-3"></a>
딥러닝 시대로 넘어왔지만, 훈련 함수, 손실 함수, 최적화의 구조는 정확히 동일하다. 신경망에 사용되는 손실 함수는 3장에서 논의된 것들과 다르지 않다. 손실 함수의 목표는 변하지 않았기 때문이다: 훈련 함수가 만든 예측과 실제값(ground truth) 사이의 오차를 포착하는 것.
딥러닝에서 가장 널리 사용되는 손실 함수는 여전히 회귀 작업에는 **평균 제곱 오차(MSE)**, 분류 작업에는 **교차 엔트로피 함수**다. (책 131-132페이지 참고)
좋은 손실 함수는 나쁜 예측에 페널티를 주고, 계산 비용이 비싸지 않으며, 최적화 방법이 잘 작동하도록 (일반적으로) 미분 가능한 매끄러운 지형을 가져야 한다.

## 최적화 (Optimization) [🔝](#toc) <a id="h2-4"></a>
이제 손실 함수 `L(ω)`의 지형을 효율적으로 탐색하여 최소화하는 가중치 `ω`를 찾는 최적화 단계를 논의한다. 신경망의 훈련 함수에서는 가중치 `ω`를 행렬 `W`로, 편향을 벡터 `ω₀`로 묶었지만, 여기서는 표기 간소화를 위해 모든 가중치와 편향을 하나의 매우 긴 벡터 `ω`로 표현한다.

### 신경망의 수학과 신비로운 성공 [🔝](#toc) <a id="h2-4-1"></a>
신경망이 성공적으로 작동한다는 것은 손실 함수 $L(\vec{ω})$의 최소점을 찾아 새로운, 보지 못한 데이터에 잘 일반화되는 훈련 함수를 만들 수 있다는 것을 의미한다. 수학적으로 이는 몇 가지 이유로 여전히 놀라운 일이다:
*   손실 함수의 $\vec{ω}$ 탐색 공간은 매우 고차원적이다 (수십억 차원 가능).
*   손실 함수 자체의 지형은 비볼록(non-convex)하여 국소 최소점이나 안장점(saddle point)에 빠질 위험이 있다.
*   컴퓨터 비전과 같은 일부 AI 응용 분야에서는 미지수(가중치 $\vec{ω}$)의 수가 데이터 포인트(이미지)의 수보다 훨씬 많아, 수학적으로 무한히 많은 해가 가능한 과소 결정 시스템(under-determined system)임에도 불구하고 어떻게 일반화가 잘 되는 좋은 해를 찾는가?
이러한 성공은 정규화, 검증, 테스트 등의 기법 덕분이기도 하지만, 딥러닝은 여전히 견고한 이론적 기반이 부족하며 많은 수학자들이 이에 대한 해답을 찾기 위해 노력하고 있다. (책 134페이지 참고)

### 경사 하강법 (Gradient Descent) [🔝](#toc) <a id="h2-4-2"></a>
딥러닝에서 널리 사용되는 경사 하강법은 손실 함수 `L(ω)`의 지역 최소점을 찾는 간단한 공식을 가진다:
`ωⁱ⁺¹ = ωⁱ - η∇L(ωⁱ)`
이것이 경사 하강법이 손실 함수의 지형을 탐색하는 방법이다:
1.  **ω⁰에서 어딘가 초기화:** 시작 가중치 `ω⁰`를 무작위로 선택한다. (모두 0이나 같은 값으로 초기화하면 안 됨)
2.  **새로운 지점 ω¹로 이동:** 손실 함수의 기울기 벡터의 반대 방향 (`-∇L(ω⁰)`)으로 이동한다. 학습률(learning rate) `η`가 너무 크지 않다면 기울기가 감소하는 것이 보장된다.
3.  **수렴할 때까지 계속:** 점들의 시퀀스 `ω⁰, ω¹, ω², ...`가 수렴할 때까지 반복한다. (실제로는 평탄한 지형 때문에 느려지면 멈추기도 함)
(책 그림 4-7 참고)

### 학습률 하이퍼파라미터 η의 역할 [🔝](#toc) <a id="h2-4-3"></a>
각 반복에서 경사 하강법은 현재 지점 `ωⁱ`에서 다음 지점 `ωⁱ⁺¹`로 이동한다. `-η∇L(ωⁱ)` 항은 스칼라 `η`와 손실 함수의 가장 가파른 감소 방향을 나타내는 음의 기울기 벡터 `-∇L(ωⁱ)`의 곱이다. 즉, `-∇L(ωⁱ)`은 어느 방향으로 갈지, `η`는 그 방향으로 얼마나 멀리 갈지를 제어한다.
*   **너무 큰 η:** 최소점을 지나쳐 버릴 수 있다.
*   **너무 작은 η:** 최소점까지 도달하는 데 시간이 오래 걸린다.
학습률 `η`는 훈련 함수의 가중치가 아닌, 모델 학습 알고리즘 자체의 파라미터이므로 **하이퍼파라미터**다. (책 그림 4-8 참고)
또한, 입력 특징들의 스케일이 매우 다르면 손실 함수의 지형이 길고 좁은 계곡 형태가 되어 경사 하강법이 지그재그로 움직이며 수렴이 느려질 수 있다. 이를 위해 특징 표준화가 권장된다. (책 그림 4-9 참고)

### 볼록 대 비볼록 함수 지형 (Convex vs. Nonconvex Landscapes) [🔝](#toc) <a id="h2-4-4"></a>
신경망 최적화는 일반적으로 **비볼록**이다. 이는 사용하는 활성화 함수(예: 시그모이드 계열)나 손실 함수 자체가 비볼록해서가 아니라, 여러 볼록 함수의 합성 또한 비볼록일 수 있기 때문이다. (ReLU 계열 활성화 함수와 볼록 손실 함수를 사용해도 전체는 비볼록일 수 있음)
비볼록 지형은 국소 최소점, 평탄한 영역, 안장점 등을 가져 최적화가 어려울 수 있다. (책 그림 4-10, 4-11, 4-12 참고)

### 확률적 경사 하강법 (Stochastic Gradient Descent, SGD) [🔝](#toc) <a id="h2-4-5"></a>
훈련 데이터셋이 매우 크고 신경망에 수천 개의 가중치가 있을 때, 전체 데이터셋에 대해 훈련 함수, 손실 함수, 기울기를 계산하는 것은 매우 비용이 많이 든다. 해결책은 과정을 무작위화하는 것이다: 각 단계에서 훈련 데이터셋의 매우 작은 부분집합(미니배치)을 무작위로 선택하여 훈련 함수, 손실 함수, 기울기를 평가한다. 이것이 **확률적 경사 하강법(SGD)** 또는 **미니배치 경사 하강법(mini-batch gradient descent)**이다.
전체 훈련 데이터셋을 한 번 통과하는 것을 **1 에포크(epoch)**라고 한다. SGD는 놀랍도록 잘 작동하며 신경망 훈련의 핵심 요소가 되었다.

## 최적화 과정을 위한 가중치 초기화 (Initializing the Weights ω⁰) [🔝](#toc) <a id="h2-5"></a>
모든 가중치를 0이나 같은 값으로 초기화하는 것은 매우 나쁜 생각임이 이미 밝혀졌다. 2010년 이전의 전통적인 방법은 균등 분포나 가우시안 분포에서 작은 값으로 무작위 샘플링하는 것이었다. 초기 가중치의 스케일은 최적화 과정의 진행과 네트워크의 일반화 능력 모두에 영향을 미치는 것으로 보인다. 현재 최첨단 선택은 활성화 함수의 종류에 따라 달라진다:
*   **Xavier Glorot 초기화:** 주로 시그모이드 계열 활성화 함수에 사용. 이전 계층 노드 수 `n`과 현재 계층 노드 수 `m`을 사용하여 특정 구간의 균등 분포에서 샘플링한다. `[-sqrt(6/(n+m)), sqrt(6/(n+m))]`
*   **Kaiming He 초기화:** 주로 ReLU 계열 활성화 함수에 사용. 이전 계층 노드 수 `n`을 사용하여 평균 0, 분산 `2/n`인 가우시안 분포에서 샘플링한다.

## 정규화 기법 (Regularization Techniques) [🔝](#toc) <a id="h2-6"></a>
정규화는 훈련 데이터에 대한 과적합(overfitting)을 피하면서 훈련 함수의 좋은 가중치를 찾는 데 도움을 준다. 훈련된 함수가 데이터의 노이즈가 아닌 신호를 따르도록 하여 보지 못한 데이터에 잘 일반화되도록 하는 것이 목표다. 다음은 신경망 훈련 시 사용되는 네 가지 간단하면서도 일반적인 정규화 기법이다.

### 드롭아웃 (Dropout) [🔝](#toc) <a id="h2-6-1"></a>
훈련 중 각 계층에서 무작위로 선택된 일부 뉴런을 "제거(drop)"한다. 일반적으로 입력 계층 노드의 약 20%, 각 은닉 계층 노드의 약 절반이 무작위로 제거된다 (출력 계층 노드는 제거되지 않음). 이는 마치 각기 다른 네트워크(각 계층의 노드 수가 다른)를 동시에 훈련시키고 그 결과를 평균내는 효과를 내어 더 신뢰할 수 있는 결과를 생성하는 경향이 있다. 각 노드가 제거될 확률 `p`는 하이퍼파라미터다.

### 조기 종료 (Early Stopping) [🔝](#toc) <a id="h2-6-2"></a>
훈련 중(특히 경사 하강법 사용 시) 각 에포크 후에 검증 데이터셋에 대한 현재 가중치에서의 훈련 함수 오차를 평가한다. 이 오차는 모델이 훈련 데이터를 학습함에 따라 감소해야 하지만, 특정 에포크 수 이후에는 증가하기 시작하는데, 이는 훈련 함수가 훈련 데이터에 과적합되기 시작하고 검증 데이터에 대한 일반화에 실패하고 있음을 나타낸다. 검증 데이터셋에 대한 예측 오차가 증가하는 것을 관찰하면 훈련을 중단하고, 오차가 가장 낮았던 시점(증가하기 직전)의 가중치 세트로 돌아간다.

### 배치 정규화 (Batch Normalization) [🔝](#toc) <a id="h2-6-3"></a>
주요 아이디어는 네트워크의 각 계층에 대한 입력을 정규화하는 것이다. 즉, 각 계층의 입력은 평균 0, 분산 1을 갖게 된다. 이는 일반적으로 각 계층 입력의 평균을 빼고 분산으로 나누어 수행된다.
배치 정규화를 적용하면 드롭아웃이 필요 없어지는 경우가 많고, 초기화에 덜 민감해지며, 기울기 소실 및 폭주 문제로부터 더 안전하고 훈련이 빨라진다. 또한 정규화 효과도 추가로 얻을 수 있다. (Ioffe와 Szegedy의 2015년 논문 참고, 책 146페이지)
훈련 중에는 미니배치 단위로 평균과 분산을 계산하여 정규화를 수행하고, 테스트/예측 시에는 이미 학습된 파라미터(또는 전체 훈련 데이터의 평균/분산)를 사용한다.

### 가중치 크기 제어: Norm 패널티 (Weight Decay) [🔝](#toc) <a id="h2-6-4"></a>
훈련 함수의 과적합을 피하는 또 다른 방법은 최소화 문제에 경쟁 항(competing term)을 도입하는 것이다. 즉, 손실 함수 `L(ω)`만 최소화하는 대신, `L(ω) + α||ω||` 형태를 최소화하는 가중치 `ω`를 찾는다. 여기서 `α`는 정규화 강도를 조절하는 하이퍼파라미터다.

#### l2 Norm vs. l1 Norm 페널티 [🔝](#toc) <a id="h2-6-4-1"></a>
*   **릿지 회귀 (Ridge Regression):** `ω`의 **l2 norm 제곱** (`αΣωᵢ²`)을 손실 함수에 추가한다. l2 norm은 미분 가능하므로 최소화가 더 안정적이다. 모든 가중치를 작게 만들지만 0으로 만들지는 않는 경향이 있다.
*   **라쏘 회귀 (Lasso Regression):** `ω`의 **l1 norm** (`αΣ|ωᵢ|`)을 손실 함수에 추가한다. l1 norm은 0에서 미분 불가능하지만 서브그래디언트를 사용할 수 있다. 덜 중요한 특징의 가중치를 0으로 만들어 **희소성(sparsity)**을 유도하고 특징 선택 효과를 낸다.
*   **엘라스틱 넷 (Elastic Net):** 릿지와 라쏘의 중간 형태로, 두 패널티 항을 결합한다.
어떤 정규화를 사용할지는 문제의 특성에 따라 다르지만, 일반적으로 약간의 정규화는 항상 좋다. (책 그림 4-13 및 150-151페이지 참고)

#### 정규화 하이퍼파라미터 α의 역할 [🔝](#toc) <a id="h2-6-4-2"></a>
*   **큰 α:** 두 번째 항(가중치 크기 제어)이 더 중요해져서 `ω` 값들이 매우 작아지도록 강제한다. 모델이 데이터에 완벽하게 맞춰지지 않을 수 있지만(높은 편향), 일반화 성능은 좋아질 수 있다(낮은 분산).
*   **작은 α (0에 가까움):** 첫 번째 항(손실 함수 최소화)이 더 중요해져서 `ω` 값들이 데이터에 잘 맞도록 결정된다(낮은 편향). 하지만 분산이 높아질 수 있다.
α가 0으로 갈수록 정규화되지 않은 문제의 해로 수렴한다.

## 머신러닝에 등장하는 하이퍼파라미터 예시 [🔝](#toc) <a id="h2-7"></a>
지금까지 많은 하이퍼파라미터들을 접했다. 모델과 함께 그 값들을 기록하는 것이 좋은 습관이다. 주요 하이퍼파라미터는 다음과 같다:
*   경사 하강법의 학습률.
*   가중치 감쇠 계수 (릿지, 라쏘, 엘라스틱 넷).
*   훈련 중지 전 에포크 수.
*   훈련, 검증, 테스트 데이터셋 분할 크기.
*   SGD의 미니배치 크기.
*   모멘텀 방법의 가속 계수.
*   신경망 아키텍처: 계층 수, 각 계층의 뉴런 수, 각 계층에서 일어나는 일(배치 정규화, 활성화 함수 종류), 정규화 종류(드롭아웃 등), 네트워크 종류(순방향, 밀집, 합성곱 등), 손실 함수 종류 등.

## 연쇄 법칙과 역전파: ∇L(ωᵢ) 계산하기 [🔝](#toc) <a id="h2-8"></a>
이제 손실 함수의 기울기 `∇L(ωⁱ)`를 계산하는 중요한 작업을 수행할 시간이다. 손실 함수는 신경망의 훈련 함수를 포함하고, 훈련 함수는 다시 선형 결합과 활성화 함수의 연쇄적인 합성으로 이루어진다. 이는 다변수 **연쇄 법칙(chain rule)**을 영리하게 사용해야 함을 의미한다.
신경망의 계층적 구조는 손실 함수의 기울기를 계산하는 방법에 대해 고민하게 만든다. 이 작업의 핵심 도구는 **역전파 알고리즘(backpropagation algorithm)** (역방향 자동 미분이라고도 불림)이며, 이는 매우 강력하다.

### 역전파는 뇌 학습 방식과 크게 다르지 않다 [🔝](#toc) <a id="h2-8-1"></a>
우리가 새로운 수학 개념을 접할 때 뇌의 뉴런들은 특정 연결을 만든다. 같은 개념을 다시 보면 그 연결은 더 강해진다. 신경망에서의 유사점은 뉴런을 연결하는 엣지의 가중치 `ω` 값이 증가하는 것이다. 반대로, 이전 정보와 모순되는 새로운 정보를 배우면 연결은 약해지고 `ω` 값은 감소한다. 손실 함수를 최소화하여 `ω` 값을 조정하는 것은 정확히 이러한 작업을 수행한다: 뉴런 간의 올바른 연결을 설정하는 것이다.

### 왜 역전파가 더 나은가? [🔝](#toc) <a id="h2-8-2"></a>
역전파는 훈련 함수의 각 노드에 대한 미분을 네트워크를 **역방향**으로 이동하면서 계산한다. 이는 각 노드가 훈련 함수와 손실 함수 모두에 기여하는 정도를 측정한다.
미분을 네트워크를 통해 순방향으로 계산하기로 결정한다면, 각 변수에 대한 이러한 미분이 최종 결과에 기여할지 여부를 알 수 없다. 그래프가 완전히 연결된 경우에도 깊은 계층의 가중치는 초기 계층에 존재하지 않으므로 초기 계층에서 그들에 대한 미분을 계산하는 것은 큰 낭비다.
역방향으로 미분을 계산할 때는 출력에서 시작하여 네트워크 그래프의 엣지를 따라 역추적하며 각 노드에서 미분을 계산한다. 각 노드의 기여도는 오직 그 노드로 들어오고 나가는 엣지로부터만 계산된다. 이는 계산적으로 훨씬 저렴하다.

### 역전파 상세 과정 [🔝](#toc) <a id="h2-8-3"></a>
(책 155-157페이지는 `h`개의 은닉 계층을 가진 회귀 신경망에 대한 손실 함수의 편도함수를 역방향으로 계산하는 과정을 자세히 보여준다. 여기서는 요약만 한다.)
역전파는 출력 계층에서 시작하여 손실 함수의 기울기를 계산하고, 연쇄 법칙을 사용하여 이전 계층으로 오차를 전파하며 각 가중치 행렬과 편향 벡터에 대한 기울기를 순차적으로 계산한다. 이 과정은 입력 계층에 도달할 때까지 체계적으로 계속된다.

## 입력 데이터 특징의 중요도 평가 [🔝](#toc) <a id="h2-9"></a>
데이터 분석가의 목표 중 하나는 출력 또는 목표 변수에 대한 입력 변수(데이터 특징)의 중요도를 평가하는 것이다. 주요 질문은 "특정 입력 변수의 값을 약간 변경하면 출력의 상대적 변화는 얼마나 될까?"이다.
수학적으로 이는 출력의 특정 입력 변수에 대한 **편도함수**를 찾는 문제다. 모델이 선형이면 통계학의 민감도 분석이 유용하지만, 신경망 모델과 같이 비선형 모델의 경우 문헌이 많지 않다.

## Summary
4장에서는 3장에서 소개된 전통적인 머신러닝 모델에서 AI 분야의 딥러닝 시대로 공식적으로 전환했다. 신경망 또한 훈련 함수-손실 함수-최적화라는 일반적인 수학적 구조로 모델을 구축하지만, 각 요소는 특정 작업과 모델에 맞게 조정된다.
여러 계층에 걸쳐 각 뉴런에서 비선형 활성화 함수를 사용함으로써, 신경망의 훈련 함수는 명시적인 비선형 함수 공식 없이도 데이터의 복잡한 특징을 포착할 수 있다. 수학적 분석, 특히 신경망에 대한 보편적 근사 정리는 이러한 직관을 뒷받침하고 신경망의 놀라운 성공에 대한 이론적 배경을 제공한다.
신경망은 대규모 데이터셋을 가진 큰 문제에 잘 맞춰져 있다. 이러한 문제의 최적화 작업은 효율적이고 계산적으로 저렴한 방법을 필요로 한다. 확률적 경사 하강법이 널리 사용되는 최적화 방법이며, 역전파 알고리즘이 이 방법의 핵심이다. 더 구체적으로, 역전파 알고리즘은 현재 가중치 선택에서 손실 함수(또는 목적 함수)의 기울기를 계산한다.

## Epilogue
3장에서 다양한 기본 '요리법(모델)'들을 배웠다면, 4장에서는 여러 재료를 층층이 쌓아 올리고 복잡한 조리 과정을 거치는 '정찬 요리(신경망)'의 세계로 들어섰다. 단순한 선형 결합과 활성화 함수의 반복이 어떻게 그토록 강력한 표현력을 갖게 되는지, 그리고 보편적 근사 정리라는 든든한 이론적 배경이 있다는 사실이 놀라웠다.
경사 하강법이라는 기본적인 최적화 도구가 거대한 신경망을 학습시키는 핵심 역할을 한다는 점, 그리고 그 기울기를 효율적으로 계산하는 역전파 알고리즘의 중요성을 다시 한번 확인했다. 또한, 모델이 데이터의 '신호'만을 학습하도록 돕는 다양한 정규화 기법들은 현실적인 문제 해결에 있어 필수적인 요소임을 깨달았다.
4장은 이 책의 마지막 기초 (그리고 긴) 장이라고 한다. 이제 더 전문화된 AI 모델과 필요에 따라 더 깊이 있는 수학을 논의할 준비가 된 것 같다. 다음 장들은 서로 독립적이므로 관심 있는 분야부터 읽어나갈 수 있다고 하니, 지금까지 배운 지식들을 바탕으로 어떤 응용 분야를 먼저 탐험할지 기대된다.
