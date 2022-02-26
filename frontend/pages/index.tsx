import type { NextPage } from 'next';
import Head from 'next/head';

import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

import {
  address
} from '../../hardhat/config'

import test from '../../hardhat/artifacts/contracts/main.sol/HelloWorld.json'

let rpcEndpoint = ""
if (process.env.NEXT_PUBLIC_WORKSPACE_URL) {
  rpcEndpoint = process.env.NEXT_PUBLIC_WORKSPACE_URL
}

	


const Home: NextPage = () => {
	  useEffect(() => {
    loadNFTs();
  }, []);
	  async function loadNFTs() {
    const provider = new ethers.providers.JsonRpcProvider(rpcEndpoint);
    const tokenContract = new ethers.Contract(address, test.abi, provider);
    const data = await tokenContract.getNumber();
	console.log(meta.data);
  }
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="text-center text-2xl">Good luck building those Dapps!</h1>
		</>
	);
};

export default Home;