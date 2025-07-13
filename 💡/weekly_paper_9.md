---
title: "weekly_paper_9"
description: "weekly_paper_9.md | (2025 July 14 Monday)"
date: 2025-07-14T00:36:34+09:00
lastmod: 2025-07-14T00:36:35+09:00
categories: 
- 
tags: 
- 
series:
- 
draft: false
private: false
---


# Weekly Paper 9

## 🇶 Semantic Segmentation이란 무엇이며, 이미지 분류(Classification)와 어떤 차이가 있나요?

*   **이미지 분류**는 이미지 전체를 하나의 레이블로 구분합니다.
*   반면, **Semantic Segmentation**은 이미지 내 **각 픽셀이 어떤 클래스에 속하는지** 나눕니다.
    *   이때 같은 클래스의 객체들은 구분하지 않습니다. 예를 들어, 사진 속 모든 고양이 픽셀은 '고양이'라는 하나의 클래스로 분류됩니다.

*(참고: 여기서 더 나아가 각 고양이를 개별 객체로 구분하는 것을 **Instance Segmentation**이라고 합니다.)*

## 🇶 Fully Convolutional Networks(FCN)의 주요 특징과 기존 CNN 기반 분류 모델과의 차이점은 무엇인가요?

*   **주요 특징**: 기존 CNN의 마지막 **완전 연결 층(Fully Connected Layer)을 합성곱 층(Convolutional Layer)으로 대체**한 것입니다.
*   **차이점**: 이 구조 덕분에, 기존 분류 모델과 달리 **입력 이미지의 크기에 제약이 없으며**, 공간 정보를 보존하기 때문에 픽셀 단위의 예측이 가능해집니다.

## 🇶 GAN에서 생성자(Generator)와 판별자(Discriminator)의 역할은 각각 무엇인가요?

GAN은 두 네트워크가 **서로 적대적으로 학습하며 성능을 끌어올리는 방식**입니다.

*   **생성자(Generator)**: 판별자를 속여서, 실제 같은 가짜 이미지를 생성하도록 학습합니다.
*   **판별자(Discriminator)**: 생성자가 만든 가짜 이미지와 실제 이미지를 정확히 구분하도록 학습합니다.

## 🇶 Diffusion 모델이 이미지 생성에서 어떻게 활용되며, 어떤 장점이 있나요?

*   **활용 방식**: 이미지에 점진적으로 **노이즈를 추가했다가, 이 노이즈를 다시 제거하는 과정을 역으로 학습**합니다.
    *   이는 **잔차 학습(Residual Learning)과 유사한 개념**으로 볼 수 있습니다. 모델은 추가된 '노이즈'를 예측하고 제거하도록 학습합니다.

*   **장점**:
    *   **높은 성능**: GAN보다 고품질의 이미지를 생성하는 것으로 알려져 있습니다.
    *   **안정적인 학습**: GAN의 적대적 학습 방식보다 학습 과정이 안정적입니다.