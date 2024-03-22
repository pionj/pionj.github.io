---
description: "영지식 증명과 관련된 지식들 | (2024 March 13 Wednesday)"
date: 2024-03-13T02:43:18+09:00
lastmod: 2024-03-13T02:43:18+09:00
draft: true
---

# Trusted Setup
We generated a ptau setup file in the first line with POWERTAU=12. The power of tau determines the size of internal polynomials and restricts maximum number of constraints in the circuit. This affects the sizes of witnesses, proofs, and witness generation code.
https://mixbytes.io/blog/zksnarks-circom-and-go-practice-part-1

Powers of Tau is a ceremony that is used to generate the initial parameters for zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge). The ceremony is used to ensure the security of the initial parameters by using a multi-party computation (MPC) protocol to generate them.2023. 4. 29.

https://medium.com/coinmonks/simplifying-powers-of-tau-and-the-trusted-setup-ceremony-c9a4f1833dc2


Powers of Tau. This is a multi-party computation (MPC) ceremony which constructs partial zk-SNARK parameters for all circuits up to a depth of 2^21. It works by taking a step that is performed by all zk-SNARK MPCs and performing it in just one single ceremony.
https://github.com/ebfull/powersoftau