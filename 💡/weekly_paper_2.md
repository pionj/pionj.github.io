---
title: "weekly_paper_2"
description: "weekly_paper_2.md | (2025 May 19 Monday)"
date: 2025-05-19T06:14:05+09:00
lastmod: 2025-05-26T05:35:35+09:00
categories: 
- 
tags: 
- 
series:
- weekly paper
draft: false
private: false
---

# Weekly Paper 2

## TOC
- [지도 학습과 비지도 학습의 차이는 무엇인가요?](#)
- [손실 함수(loss function)란 무엇이며, 왜 중요한가요?](#)
- [모델 학습 시 발생할 수 있는 편향과 분산에 대해 설명하고, 두 개념의 관계에 대해 설명해 주세요.](#)
- [K-폴드 교차 검증에서 K의 값을 선택할 때 고려해야 할 점은 무엇인가요?](#)


## 🇶 지도 학습과 비지도 학습의 차이는 무엇인가요?
-   **지도 학습 (Supervised Learning)**:
    -   정답(레이블)이 있는 데이터를 사용해 모델을 학습시킵니다.
    -   목표는 새로운 데이터에 대한 정확한 예측(분류 또는 회귀)입니다.
    -   예: 스팸 메일 분류, 주택 가격 예측.
-   **비지도 학습 (Unsupervised Learning)**:
    -   정답(레이블)이 없는 데이터를 사용합니다.
    -   데이터 내 숨겨진 패턴이나 구조를 발견하는 것이 목표입니다.
    -   예: 고객 그룹화(군집화), 데이터 차원 축소.
-   **핵심 차이**: 학습 데이터에 정답(레이블)의 유무입니다. 지도 학습은 정답을 통해 배우고, 비지도 학습은 데이터 스스로 패턴을 찾습니다(더 정확히 말하자면 "정해진 알고리즘(모델)의 규칙에 따라, 데이터 내에 잠재된 구조나 관계를 외부의 정답(레이블) 도움 없이 찾아낸다.")

## 🇶 손실 함수(loss function)란 무엇이며, 왜 중요한가요?
-   **손실 함수(Loss Function)란?**: 모델의 예측값과 실제 정답 사이의 오차, 즉 모델이 얼마나 '틀렸는지'를 측정하는 함수입니다.
-   **왜 중요한가?**:
    1.  **모델 성능 평가**: 모델이 얼마나 잘 작동하는지 정량적으로 알려줍니다. 손실이 낮을수록 좋은 모델입니다(검증/테스트 손실도 함께 낮게 유지되는 것이 중요.)
    2.  **모델 학습의 길잡이**: 대부분의 모델은 이 손실 함수 값을 최소화하는 방향으로 학습(파라미터 업데이트)됩니다. 즉, 모델이 더 나은 예측을 하도록 이끄는 역할을 합니다.

## 🇶 모델 학습 시 발생할 수 있는 편향과 분산에 대해 설명하고, 두 개념의 관계에 대해 설명해 주세요.
-   **편향 (Bias)**:
    -   모델이 실제 데이터의 관계를 얼마나 단순하게 가정했는지, 그래서 정답에서 얼마나 멀어졌는지를 나타냅니다.
    -   편향이 높으면 모델이 너무 단순해서 데이터의 패턴을 제대로 학습하지 못하는 **과소적합(Underfitting)**이 발생합니다.
    -   **사격 비유**: 총의 '영점 조절' 상태. 영점이 안 맞으면 아무리 잘 쏴도 과녁 중심을 벗어납니다.
    -   모델의 예측이 실제 정답에서 체계적으로 벗어나는 경향입니다.

-   **분산 (Variance)**:
    -   학습 데이터의 작은 변화에 모델이 얼마나 민감하게 반응하는지를 나타냅니다.
    -   분산이 높으면 모델이 학습 데이터의 노이즈까지 학습해버려, 새로운 데이터에 대한 성능이 떨어지는 **과대적합(Overfitting)**이 발생합니다.
    -   **사격 비유**: 사격 시 '탄착군의 크기'. 탄착군이 넓으면 정밀 조준이 어렵습니다.
    -   학습 데이터의 작은 변화에 모델의 예측이 얼마나 크게 달라지는지를 나타냅니다.

-   **편향-분산 관계**:
    -   **일반적인 트레이드오프(Trade-off)**: 모델의 복잡도를 조절할 때 주로 나타납니다.
        -   일반적으로 편향과 분산은 반비례 관계입니다.
        -   단순한 모델: 높은 편향, 낮은 분산 (영점은 안 맞지만 탄착군은 조밀).
        -   복잡한 모델: 낮은 편향, 높은 분산 (영점은 맞춰가지만 탄착군은 넓어짐).
        -   목표는 이 둘 사이의 균형을 찾아 전체 오류를 최소화하는 것입니다.
        -   좋은 모델은 편향과 분산 사이의 적절한 균형을 찾아, 전체 오류를 최소화하는 모델입니다.
    -   **항상 반비례는 아님**: 사격에서 영점 조절과 사격 기술 향상이 별개로 가능하듯, 모델링에서도 편향과 분산이 반드시 반비례하지는 않습니다. 
    -   더 많은/좋은 데이터, 효과적인 특징 공학, 더 적합한 알고리즘 사용 등은 편향과 분산 모두를 개선하는 데 기여할 수 있습니다. 
    -   궁극적으로 좋은 모델은 두 오류 모두를 낮추는 것을 목표로 합니다.

## 🇶 K-폴드 교차 검증에서 K의 값을 선택할 때 고려해야 할 점은 무엇인가요?
-   **K-폴드 교차 검증이란?**: 데이터를 K개의 덩어리(fold)로 나누어, (K-1)개로 학습하고 나머지 1개로 검증하는 과정을 K번 반복하여 모델 성능을 평균 내는 방법입니다.
-   교차 검증(Cross-Validation)을 수행할 때 각 폴드(fold)에서 계산된 검증 손실들의 평균을 내어 모델의 일반화 성능을 추정합니다. 이 평균 검증 손실이 낮은 모델을 선호합니다.
-   좋은 모델은 평균 검증 손실이 낮으면서도, 여러 폴드에 걸쳐 계산된 검증 손실 값들의 분산도 작은 모델이라고 할 수 있습니다. 이는 모델이 다양한 데이터 부분집합에 대해 일관되게 좋은 성능을 보인다는 것을 의미합니다.
-   **K값 선택 시 고려사항**:
    1.  **데이터셋의 크기**: 데이터가 작을수록 K를 크게 (예: N개 샘플이면 N-1 또는 N, LOO(Leave-One-Out[1])) 설정하여 학습 데이터를 더 많이 확보하는 경향이 있습니다. 데이터가 크면 K를 작게 해도 괜찮습니다.
    2.  **계산 비용**: K가 클수록 검증 시간이 오래 걸립니다. 모델 학습 시간이 길다면 K를 너무 크게 잡기 어렵습니다.
    3.  **성능 추정의 안정성**:
        -   K가 너무 작으면 (예: 2 또는 3) 각 폴드의 데이터가 충분하지 않아 성능 추정치가 불안정하고 편향될 수 있습니다[2][3][4].
        -   일반적으로 K=5 또는 K=10이 편향-분산 및 계산 비용 측면에서 적절한 균형을 제공한다고 알려져 많이 사용됩니다.
        -   > As a general rule, most authors, and empirical evidence, suggest that 5- or 10- fold cross validation should be preferred to LOO[1].


## References

[1] “3.1. Cross-validation: evaluating estimator performance”, scikit-learn. Available at: https://scikit-learn/stable/modules/cross_validation.html. [접근된: 2025년 5월 26일]

[2] X. B. Sicotte (https://stats.stackexchange.com/users/192854/xavier-bourret-sicotte), “Bias and variance in leave-one-out vs K-fold cross validation”. Available at: https://stats.stackexchange.com/q/357749

[3] https://stats.stackexchange.com/questions/61783/bias-and-variance-in-leave-one-out-vs-k-fold-cross-validation#MathJax-Element-41-Frame

[4] https://github.com/xavierbourretsicotte/Data-Portfolio/blob/master/Cross_Validation.ipynb

[[weekly_paper_3]]