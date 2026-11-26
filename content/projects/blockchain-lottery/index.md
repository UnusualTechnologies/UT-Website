---
title: "Blockchain Lottery"
type: "projects"
status: live
project_type: "Prototype"
tags:
  - "blockchain"
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

![Unity C# method that calls the lottery's placeBet smart contract function through Moralis, setting the value, gas and gas price.](/images/projects/moralis_code.png)

## Smart Contracts

Smart contracts are pieces of code which reside on a blockchain and are designed to create contracts between users. This acts like a middleman, ensuring a contract is fulfilled between multiple third parties. Because this code can't be changed once deployed and is visible on the blockchain, users can see exactly what a contract will do before they take part.

In this case, our smart contract lets people pay an entry fee of 0.01 ether into a lottery. When the round closes, the lottery's owner selects the winner from everyone who entered, and the contract transfers the whole pot to that person's wallet.

Every entry and payout is recorded on the blockchain, so anyone can check who entered, how much was in the pot and where the winnings went.

Smart contracts differ slightly per blockchain, but as we were targeting Ethereum, our smart contract was written in Solidity.

![Solidity smart contract code with a placeBet function costing 0.01 ether and a distribute function that sends the whole pot to the winner.](/images/projects/sol-1.png "Sample of code from smart contract")
