---
title: AI_math_study_week6
description: AI_math_study_week6.md | (2025 July 14 Monday)
date: 2025-07-13T16:44:23.000Z
categories:
  - AI
tags:
  - null
series:
  - ai math study
draft: false
private: false
lastmod: 2025-07-14T04:40:02.032Z
duration: 3 min
---

# AI 수학 스터디 (6주차) (WIP)

## TOC
- [AI 수학 스터디 (6주차)](#ai-수학-스터디-6주차)
  - [Prologue](#prologue)
  - [행렬 분해 (Matrix Factorization)](#h2-1)
  - [대각 행렬 (Diagonal Matrices)](#h2-2)
  - [선형 변환으로서의 행렬](#h2-3)
    - [특이값 분해를 통한 변환 단계 분석](#h2-3-1)
    - [회전 행렬과 반사 행렬](#h2-3-2)
  - [큰 그림: SVD로 무엇을 알 수 있는가?](#h2-4)
    - [조건수(Condition Number)와 계산 안정성](#h2-4-1)
  - [특이값 분해의 구성 요소 (고유값 분해와의 비교)](#h2-5)
  - [특이값 분해의 계산](#h2-6)
  - [유사 역행렬 (The Pseudoinverse)](#h2-7)
  - [SVD의 응용: 이미지 압축](#h2-8)
  - [주성분 분석 (Principal Component Analysis, PCA)과 차원 축소](#h2-9)
  - [잠재 의미 분석 (Latent Semantic Analysis, LSA)](#h2-10)
  - [무작위 특이값 분해 (Randomized SVD)](#h2-11)
  - [Summary](#summary)
  - [Epilogue](#epilogue)

## Prologue
이전 장들에서 신경망의 구조와 최적화를 배웠다면, 이번 6장 "Singular Value Decomposition(SVD)"에서는 잠시 한 걸음 물러나, 데이터 과학, 머신러닝, 인공지능 분야 전반에 걸쳐 광범위하게 적용되는 선형대수의 강력한 수학적 도구인 **특이값 분해(SVD)**를 깊이 있게 탐구한다. 저자는 "본질적인 것, 오직 본질적인 것만 보여줘.(Show me the essential, and only the essential.)"라는 말로 장을 시작하며, SVD가 복잡한 데이터 행렬에서 핵심 정보를 추출하고 그 본질을 드러내는 강력한 도구임을 암시한다. SVD는 데이터 분석의 **주성분 분석(PCA)**과 자연어 처리의 **잠재 의미 분석(LSA)**의 수학적 기반이 된다.

## 행렬 분해 (Matrix Factorization) [🔝](#toc) <a id="h2-1"></a>
숫자 12를 $4 × 3$ 또는 $2 × 2 × 3$으로 인수분해하듯, 행렬도 여러 개의 행렬 곱으로 분해할 수 있다. 행렬 분해는 복잡한 객체(행렬)를 더 작고 의미 있는 구성 요소로 나누어, 그 객체의 기능과 작용에 대한 통찰력을 얻는 방법이다.
**특이값 분해(SVD)**는 모든 행렬 $C$ (정사각 행렬이 아니어도 됨)를 세 개의 특별한 행렬의 곱으로 분해하는 매우 유용한 행렬 분해 기법이다:

$$
C_{m×n} = U_{m×m} Σ_{m×n} V_{n×n}^T
$$

*   **U (왼쪽 특이 벡터 행렬):** $m \times m$ 크기의 직교 행렬(orthogonal matrix). 열들이 서로 직교하며 단위 길이를 갖는다.
*   **Σ (특이값 행렬):** $m \times n$ 크기의 대각 행렬(diagonal matrix). 대각선 상의 원소(특이값)를 제외하고는 모두 0이다.
*   **V (오른쪽 특이 벡터 행렬):** $n \times n$ 크기의 직교 행렬. V의 전치 행렬 $V^T$가 사용된다.

여기서 $U$와 $V$의 열들은 새로운 '기저(basis)' 역할을 하고, $Σ$는 그 기저 방향으로 데이터를 얼마나 '늘리거나 줄일지'를 나타낸다.

## 대각 행렬 (Diagonal Matrices) [🔝](#toc) <a id="h2-2"></a>
SVD의 핵심에는 대각 행렬 $Σ$가 있다. 대각 행렬은 스칼라 곱셈처럼 매우 단순하게 작동한다. 어떤 벡터에 대각 행렬을 곱하는 것은 각 좌표축 방향으로 벡터를 늘리거나(stretching) 줄이는(squeezing) 것과 같다. 대부분의 행렬은 대각 행렬이 아니지만, SVD는 임의의 행렬이 **특정 방향(특이 벡터 방향)**으로는 대각 행렬처럼 행동한다는 것을 보여준다.

## 선형 변환으로서의 행렬 [🔝](#toc) <a id="h2-3"></a>
행렬은 공간 자체에 작용하여 벡터를 변환시키는 **선형 변환(linear transformation)**으로 볼 수 있다. 선형 변환은 공간을 휘게 하지 않고, 오직 **회전(rotation), 반사(reflection), 늘리기(stretching), 줄이기(squeezing)**만 수행한다.

### 특이값 분해를 통한 변환 단계 분석 [🔝](#toc) <a id="h2-3-1"></a>
행렬 $A$가 벡터 $\vec{v}$에 작용하는 변환 $A \vec{v} = U Σ V^T \vec{v}$는 다음 세 단계로 분석할 수 있다:
1.  **회전/반사 (V<sup>T</sup>):** 먼저 벡터 $\vec{v}$가 직교 행렬 $V^T$에 의해 회전하거나 반사된다.
2.  **늘리기/줄이기 (Σ):** 그 다음, 변환된 벡터가 대각 행렬 $Σ$에 의해 특정 축 방향으로 늘어나거나 줄어든다. 이 늘어남의 정도가 바로 **특이값(singular values)**이다.
3.  **다시 회전/반사 (U):** 마지막으로, 늘어나거나 줄어든 벡터가 또 다른 직교 행렬 $U$에 의해 다시 한번 회전하거나 반사된다.

SVD는 이처럼 복잡한 행렬 변환을 "회전 → 크기 조절 → 회전"이라는 직관적인 세 단계로 분해하여 보여준다.
(책 그림 6-5, 6-7, 6-8 참고)

### (TBC)
