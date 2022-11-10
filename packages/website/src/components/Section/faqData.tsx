import React from "react";
import { Link, Text } from "@chakra-ui/react";

export const faqData = [
  {
    title: "What is DIVA Protocol?",
    body: (
      <>
        <Text fontSize={["18px", "18px", "20px", "20px", "20px"]}>
          DIVA Protocol is a smart contract that allows its users to create and settle fully
          customizable event-driven products also known as derivatives. It is the operation
          system for all kinds of derivative applications including insurance, prediction markets,
          structured products as well as event-driven conditional donations. Users
          can choose any public data feed as the underlying (e.g., the price of
          an asset or a basket of assets, the TVL locked in DeFi, Ethereum gas
          price, Bitcoin hash rate, the average temperature, etc.) and combine
          it with a wide range of possible payoff profiles (binary, linear,
          convex, or concave) to create truly unique products that do not yet
          exist in DeFi and the traditional financial world.
        </Text>
      </>
    ),
  },
  {
    title: "How can I use DIVA Protocol?",
    body: (
      <Text fontSize={["18px", "18px", "20px", "20px", "20px"]}>
        Head over to the [dApps](https://www.divaprotocol.io/) page to find all the applications that have been built 
        on top of DIVA Protocol. They allow you to create bets, insurances, structured products and 
        conditional donations on virtually anything and share it with anyone.
      </Text>
    ),
  },
  {
    title: "What can I build using DIVA Protocol?",
    body: (
      <Text fontSize={["18px", "18px", "20px", "20px", "20px"]}>
        DIVA Protocol is a decentralized and permissionless piece of
        infrastructure that allows its users to create and settle fully
        customizable event-driven products also known as derivatives. Users can
        choose any public data feed as the underlying (e.g., the price of an
        asset or a basket of assets, the TVL locked in DeFi, Ethereum gas price,
        Bitcoin hash rate, the average temperature, etc.) and combine it with a
        wide range of possible payoff profiles (binary, linear, convex, or
        concave) to create truly unique products that do not yet exist in DeFi
        and the traditional financial world.
      </Text>
    ),
  },
  {
    title: "What are the utilities of DIVA Token?",
    body: (
      <Text fontSize={["18px", "18px", "20px", "20px", "20px"]}>
        DIVA is the native token that is used to govern the DIVA Protocol. 
        There will be a maximum of 100m tokens in circulation. The tokenomics 
        were designed to be simple and at the same time flexible enough to adapt 
        to the various stages of the protocol lifecycle as well as constantly changing market conditions. 
        Holding DIVA tokens allows users to vote protocol parameters such as fees as well as on how to spend 
        the DIVA treasury funds. Latter may include voting on grants, fee rebates, token buyback programs etc.
      </Text>
    ),
  },
];
