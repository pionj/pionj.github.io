---
title: "weekly paper 1"
description: "weekly paper 1 | (2025 May 13 Tuesday)"
date: Insert datetime string (Alt+d)
lastmod: Insert datetime string (Alt+d)
categories: 
- 
tags: 
- 
series:
- weekly paper
draft: true
private: false
---

## Weekly Paper 1

🇶 선형대수학이란 어떤 학문이며, 왜 머신러닝에 필요한지 설명해보세요.
- 벡터, 행렬, 텐서 등의 여러 수치적인 값을 가지는 다차원 숫자 뭉치들을 구조적으로 계산하고 다루는 학문.
- 말 그대로 대수학의 연장선에서 우리가 구조적인 객체를 만들고 데이터 집합을 만들고, 타입을 지정하고, 함수라는 연산을 정의하는것처럼, 새로운 수체계를 고안하고, 이를 개념적으로 해석하고 계산할수 있도록 정리한 학문으로 볼 수 있다.
- 머신러닝에서 사용되는 데이터의 표현이나 모델 등이 모두 선형대수학에서 정의하는 시스템 안에서 작동하기 때문에 그 기본 바탕이 되는 원리를 이해하려면 반드시 알아야한다.
- 쉽게 말하자면 일종의 게임 규칙

🇶 EDA(Exploratory Data Analysis)란 무엇인가요?
- 일단 단순히 Data Analysis가 아닌 Exploratory 라는 수식어가 붙은 이유가 무엇인지 궁금했다.
참조된 링크의 문서들에서 확인할 수 없었던 것들도 있지만 일단 위키피디아의 내용 여러 부분을 참고하면 다음과 같다:

> IDA is often mistaken for exploratory data analysis (EDA) as they share a large toolbox, including modern data visualization, but the aims are different. While EDA is a hypothesis-generating activity, IDA primarily ensures transparency and integrity of preconditions to conduct appropriate statistical analyses in a responsible manner to answer predefined research questions. For this purpose, IDA provides data ready for analysis including reliable information on the data properties. IDA could be likened to studying for an exam, reviewing materials, making sure the background is understood, and only then the “exam” is taken—the final analysis. The latter corresponds to executing the statistical analysis plan (SAP).[1][2]

> Exploratory data analysis
> 
> Once the datasets are cleaned, they can then be analyzed. Analysts may apply a variety of techniques, referred to as exploratory data analysis, to begin understanding the messages contained within the obtained data. The process of data exploration may result in additional data cleaning or additional requests for data; thus, the initialization of the iterative phases mentioned in the lead paragraph of this section. Descriptive statistics, such as, the average or median, can be generated to aid in understanding the data. Data visualization is also a technique used, in which the analyst is able to examine the data in a graphical format in order to obtain additional insights, regarding the messages within the data.[3]

결국 어떤 데이터 뭉치에 의미를 부여하는 과정이 아닐까 라고 생각했다.
보다 확실한 용어로 정리하자면 "가설 생성"이다.
데이터가 가진 어떤 메세지를 이해하기 위해 여러가지 통계적 기법이나 시각화 등을 사용한다.

🇶 대표적인 데이터 전처리 방법인 결측값, 중복값, 이상치 처리에 대해 각각 설명해 주세요.

일반적으로 데이터 분석의 순서를 다음과 같이 설명한다:
1. 데이터 탐색
2. 데이터 전처리
    1. 결측치 제거 
    2. 이상값 제거
3. 시각화 및 분석
4. 인사이트(=제언, 결론)

결측값
: missing value(missing data)
일반적으로 컴퓨터 환경에서 비어있는 값은 안전하지 않은 경향이 있다. 해석하다가 에러가 나는 경우가 많기 때문이다.
따라서 이 비어있는 값을 적절한 값으로 바꾸거나 처리할 방법을 고민해야할 필요가 생긴다.

중복값
: duplicates
중복값은 동일한 데이터가 데이터셋에 두 번 이상 나타나는 경우를 나타낸다. 중복되어 입력되었을 가능성이 있다.

이상치
: outlier
다른 데이터와 크게 다른 값을 가지는 데이터

- 이상치 처리:
현실 세계의 이상치는 좋을수도 나쁠수도 있지만, 통계에서는 이상치를 포함할 경우 어떤 데이터가 가지는 대표성을 찾거나, 데이터에 대해 의미를 부여하고, 일종의 **추상화**를 시킬 때, 해당 데이터의 성질 등을 올바르게 반영하지 못할 수 있다. 그래서 과도한 이상치는 배제하는 것이 일반적이라고 한다.(Q1-1.5IQR, Q3+1.5IQR)

우리의 목표는 데이터가 말하고자하는 바를 명확하게 분석하는데에 있으므로 잘못 입력된 값이거나 비어있거나 중복된 값은 우리가 원하는 결과에 영향을 줄 수 있기 때문에 위처럼 전처리 과정에서 필히 다루어야 한다는 직관을 가질 수 있다.


[1] M. Baillie, S. le Cessie, C. O. Schmidt, L. Lusa와/과M. Huebner, “Ten simple rules for initial data analysis”, PLoS Comput Biol, vol 18, 호 2, p e1009819, 2 2022, doi: 10.1371/journal.pcbi.1009819. Available at: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8870512/. [접근된: 2025년 5월 16일]

[2] “Exploratory data analysis”, Wikipedia. 2025년 1월 15일. Available at: https://en.wikipedia.org/w/index.php?title=Exploratory_data_analysis&oldid=1269626762. [접근된: 2025년 5월 16일]

[3] “Data analysis”, Wikipedia. 2025년 3월 30일. Available at: https://en.wikipedia.org/w/index.php?title=Data_analysis&oldid=1283072480. [접근된: 2025년 5월 16일]