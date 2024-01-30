---
description: "PoS 몇가지 중요한 개념 정리 | (2024 January 23 Tuesday)"
date: 2024-01-23T23:03:09+09:00
lastmod: 2024-01-23T23:03:09+09:00
draft: true
---

# PoS 블록체인 개념
(정리해야함)  
[PoS Tutorial](https://naivecoinstake.learn.uno/02-Proof-of-Stake/)

## Timestamp validation
In the chapter1 version of the blockchain, the timestamp did not have any role nor validation. In fact it could be anything the client decided to generate. This changes now that the difficulty adjustment is introduced as the timeTaken variable (in the previous code snippet) is calculated based on the timestamps of the blocks.

To mitigate the attack where a false timestamp is introduced in order to manipulate the difficulty the following rules is introduced:

A block is valid, if the timestamp is at most 1 min in the future from the time we perceive. A block in the chain is valid, if the timestamp is at most 1 min in the past of the previous block.
```
const isValidTimestamp = (newBlock: Block, previousBlock: Block): boolean => {
    return ( previousBlock.timestamp - 60 < newBlock.timestamp )
        && newBlock.timestamp - 60 < getCurrentTimestamp();
};
```
## Cumulative difficulty
In the chapter1 version of the blockchain, we chose always the “longest” blockchain to be the valid. This must change now that difficulty is introduced. For now on the “correct” chain is not the “longest” chain, but the chain with the most cumulative difficulty. In other words, the correct chain is the chain which required most resources (= hashRate * time) to produce.

To get the cumulative difficulty of a chain we calculate 2^difficulty for each block and take a sum of all those numbers. We have to use the 2^difficulty as we chose the difficulty to represent the number of zeros that must prefix the hash in binary format. For instance, if we compare the difficulties of 5 and 11, it requires 2^(11-5) = 2^6 times more work to find a block with latter difficulty.

This property is also known as “Nakamoto consensus” and it is one of the most important inventions Satoshi made, when s/he invented Bitcoin. In case of forks, minters must choose on which chain the they decide put their current resources (= hashRate). As it is in the interest of the minters to produce such block that will be included in the blockchain, the minters are incentivized to eventually to choose the same chain.

## Conclusions
The Proof of Stake consensus is a quite interesting alternative to the Proof of Work since it doesn’t use as much energy. Also there are different attacks that can be done, such as changing the timestamp against what this naivecoin is not protecting against.

Also, in the current implementation, the account balance is not calculated based on the blockchain but written and read from the chain itself (for simplification purpose since I was mostly interested about the puzzle itself). It is not good at all and should be solved!
