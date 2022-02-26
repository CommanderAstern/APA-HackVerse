import type { NextPage } from "next";
import Head from "next/head";

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import { address } from "../../hardhat/config";

import test from "../../hardhat/artifacts/contracts/main.sol/LTYToken.json";

let rpcEndpoint = null;
if (process.env.NEXT_PUBLIC_WORKSPACE_URL) {
  rpcEndpoint = process.env.NEXT_PUBLIC_WORKSPACE_URL;
}

const Home: NextPage = () => {
  useEffect(() => {}, []);

  async function buyItem() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    let price1 = 10;
    const price = ethers.utils.parseUnits("10".toString(), "ether");
    const tokenContract = new ethers.Contract(address, test.abi, signer);
    const transaction = await tokenContract.buying({
      value: price,
    });

    await transaction.wait();
    console.log(signer._address);
  }
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <body>
        <img
          className="mx-auto w-full"
          src="https://premium-storefronts.s3.amazonaws.com/storefronts/my-store-b83c5e/assets/bg_home_banner.jpeg"
          alt="cryptocurrency"
        />

        {/* <button
          className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded"
          onClick={() => buyItem()}
        >
          Buy
        </button> */}
      </body>
    </>
  );
};

export default Home;
