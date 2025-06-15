---
title: "weekly_paper_5"
description: "weekly_paper_5.md | (2025 June 15 Sunday)"
date: 2025-06-15T23:02:03+09:00
lastmod: 2025-06-15T23:02:04+09:00
categories: 
- 
tags: 
- 
series:
- weekly paper
draft: false
private: false
---

#  Weekly Paper 5


## 🇶 딥러닝 프레임워크인 PyTorch와 TensorFlow를 비교해보세요.

-   **과거 주요 차이 (TF v1 vs. PyTorch)**:
    *   **TensorFlow v1**: **정적 그래프** (Define-and-Run). 먼저 계산 그래프를 정의하고, 나중에 데이터를 넣어 실행. (비유: 전체 요리 계획을 미리 다 짜고, 재료를 넣어 한 번에 요리)
    *   **PyTorch**: **동적 그래프** (Define-by-Run). 코드가 실행되는 시점에 그래프가 정의되고 유연하게 변경 가능. (비유: 요리하면서 다음 단계를 즉석에서 결정하고 조리)

-   **현재 (TF v2 이후)**:
    *   **TensorFlow v2**: 기본적으로 **즉시 실행 (Eager Execution)** 채택, Keras를 핵심 고수준 API로 완전히 통합하여 PyTorch처럼 동적 그래프 방식으로 동작하며 사용 편의성도 크게 향상.
    *   **유사성 증가**: 개발 방식 및 유연성 면에서 두 프레임워크가 매우 유사해짐.
    *   **차이점 여전히 존재**: 세부 API, 커뮤니티 성향, 생태계, 배포 환경 지원, 특정 고급 기능 등에서는 차이가 있을 수 있음.

## 🇶 PyTorch에서 텐서란 무엇이고, NumPy의 Array(배열)과 어떤 차이가 있나요?

-   **PyTorch 텐서(Tensor)**:
    *   PyTorch의 핵심 데이터 구조. 다차원 배열. (비유: 숫자를 담는 유연한 상자, 여러 겹으로 쌓을 수 있음)
    *   벡터(1D), 행렬(2D) 등을 포괄하는 일반화된 개념.

-   **NumPy 배열(Array)과의 주요 차이점**:
    1.  **GPU 지원**:
        *   **PyTorch 텐서**: GPU를 활용한 빠른 연산 가능. (딥러닝의 대규모 계산에 필수)
        *   **NumPy 배열**: CPU에서만 주로 사용.
    2.  **자동 미분 (Autograd)**:
        *   **PyTorch 텐서**: 연산 기록을 추적하여 자동으로 기울기(gradient) 계산 가능. (신경망 학습의 핵심 기능)
        *   **NumPy 배열**: **자동 미분** 기능 없음.

    *(두 객체는 서로 쉽게 변환 가능: `tensor.numpy()`, `torch.from_numpy()`)*
