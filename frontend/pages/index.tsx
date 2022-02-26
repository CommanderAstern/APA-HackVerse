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

let rpcEndpoint = null;
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
		const data = await tokenContract.greet();

		console.log(data);
	}
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<script src="https://cdn.tailwindcss.com"></script>
			</Head>
			<body>

				<img className="mx-auto w-full" src="https://premium-storefronts.s3.amazonaws.com/storefronts/my-store-b83c5e/assets/bg_home_banner.jpeg" alt="cryptocurrency" />

			</body>
		</>
	);
};

export default Home;