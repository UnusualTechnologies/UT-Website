---
title: "Blockchain Lottery"
type: "projects"
project_type: "Prototype"
tags:
  - "blockchain"
description: "A prototype cryptocurrency lottery built with smart contracts on the Polygon testnet to explore Web3 fundamentals."
prominence: 2
featured_image: "/images/projects/blockchain-lottery.png"
banner_image: "/images/projects/banners/blockchain-lottery.jpg"

overview: "A website using blockchain technology to create a simple cryptocurrency lottery."

technologies: ["Blockchain", "Unity", "Cryptocurrency"]

overview_image:
  src: "/images/projects/blockchain_lottery-1024x638.png"
---

## The Goal

In order to explore the potential of blockchains and cryptocurrency, we made a demo app exploring the fundamental concepts of Web3, from integrating wallets like Metamask into applications to smart contracts that run on blockchains like Ethereum.

The app was developed in Unity using a platform called Moralis, which is a blockchain node provider and also provides APIs and services to facilitate development of Web3-focussed applications.

In the case of this demo project, the application was made using testnet Polygon Mumbai. This uses the same underlying system as the live blockchain, but is designed for testing, meaning you do not have to spend paid cryptocurrency in transactions and gas fees.

![](/images/projects/moralis_code.png)

## Smart Contracts

Smart contracts are pieces of code which reside on a blockchain and are designed to create contracts between users. This acts like a middleman, ensuring a contract is fulfilled between multiple third parties. Because of this code's immutability and visibility on the blockchain, users can be reassured that there is no risk of foul play, allowing for safer, anonymous transactions.

In this case, our smart contracts allow people to pay an entry fee into a lottery. Then, at a set time, the smart contract would trigger its distribution logic and automatically chooses a winner out of everyone who entered, transferring the winnings to that user's wallet.

As all the code is housed inside the smart contract, there is no way for us or anyone else to tamper with it, meaning that users can confidently use the platform without feeling at risk (either from us the developers, or other anonymous players).

Smart contracts differ slightly per blockchain, but as we were targeting Ethereum, our smart contract was written in Solidity.

![Sample of code from smart contract](/images/projects/sol-1.png)
