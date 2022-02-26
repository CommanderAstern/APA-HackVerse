import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<script src="https://cdn.tailwindcss.com"></script>
				<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
			</Head>
			<body>

				<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
					<div className="rounded overflow-hidden shadow-lg">
						<img className="w-full" src="https://m.media-amazon.com/images/I/71OsDzzqOeL._SL1500_.jpg" alt="football" />
						<div className="px-6 py-4">
							<div className="font-bold italic text-xl mb-2">Football Shaped Bean Bag</div>
							<p className="text-gray-700 italic text-base text-xl">
								This bean bag which is shaped like a football, is a great gift for your friends and family.
							</p>
						</div>
						<div className="px-6 pt-2 pb-2">
							<span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">Token Amt.</span>
							<button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl">Buy</button>
						</div>
					</div>

					<div className="rounded overflow-hidden shadow-lg">
						<img className="w-full" src="https://m.media-amazon.com/images/I/61GENvsCzFL._SL1500_.jpg" alt="footBag" />
						<div className="px-6 py-4">
							<div className="font-bold italic text-xl mb-2">Lounger Bean Bag With Footrest</div>
							<p className="text-gray-700 italic text-base text-xl">
								Soft Comfotable and Relaxable Bean Bag Filled With Beans For Your Desirable Posture And Make You Feel Calm.
							</p>
						</div>
						<div className="px-6 pt-2 pb-2">
							<span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">Token Amt.</span>
							<button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl">Buy</button>
						</div>
					</div>

					<div className="rounded overflow-hidden shadow-lg">
						<img className="w-full" src="https://m.media-amazon.com/images/I/61tBiTS-NJL._SL1144_.jpg" alt="pinkBag" />
						<div className="px-6 py-4 pt-12">
							<div className="font-bold italic text-xl mb-2">Pink Faux Ultra Soft Bean Bag</div>
							<p className="text-gray-700 italic text-base text-xl">
								Add a touch of style and sophistication with this sumptuous faux fur seat and matching pouffe.
							</p>
						</div>
						<div className="px-6 pt-2.5 pb-2">
							<span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">Token Amt.</span>
							<button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl">Buy</button>
						</div>
					</div>
				</div>

			</body>
		</>
	);
};

export default Home;
