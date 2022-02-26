import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				{/* <link rel="icon" href="/favicon.ico" /> */}
				<script src="https://cdn.tailwindcss.com"></script>
				<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
			</Head>
			<body>


				<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
					<div className="rounded overflow-hidden shadow-lg">
						<img className="w-full" src="https://m.media-amazon.com/images/I/81XSik9qsFL._SL1500_.jpg" alt="table" />
						<div className="px-6 py-4">
							<div className="font-bold italic text-xl mb-2">Home Decor Wooden Stool Set</div>
							<p className="text-gray-700 italic text-base text-xl">
								This Versatile Stool can also be used outdoors in a Garden or a Balcony or cafeterias and lounges.
							</p>
						</div>
						<div className="px-6 pt-2 pb-2">
							<span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">₹700</span>
							<button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl">Buy</button>
						</div>
					</div>

					<div className="rounded overflow-hidden shadow-lg">
						<img className="w-full py-7" src="https://m.media-amazon.com/images/I/51eoKWxpEQL._SL1302_.jpg" alt="River" />
						<div className="px-6 py-4">
							<div className="font-bold italic text-xl mb-2">Antique Wooden Side Table</div>
							<p className="text-gray-700 italic text-base text-xl">
								This multipurpose table can be used for any showpiece on it, plant stand and more.
							</p>
						</div>
						<div className="px-6 pt-2 pb-2">
							<span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">₹500</span>
							<button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl">Buy</button>
						</div>
					</div>

					<div className="rounded overflow-hidden shadow-lg">
						<img className="w-full" src="https://m.media-amazon.com/images/I/61FnRCxpp+L._SL1200_.jpg" alt="Forest" />
						<div className="px-6 py-2.5">
							<div className="font-bold italic text-xl mb-2">Brown Solid Wood Stool</div>
							<p className="text-gray-700 italic text-base text-xl">
								The fiber grains are packed tightly such that the surface has a very high level of polish and is also friendly to waxing.
							</p>
						</div>
						<div className="px-6 pt-2 pb-2">
							<span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">₹1400</span>
							<button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl">Buy</button>
						</div>
					</div>
				</div>


				<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
					<div className="rounded overflow-hidden shadow-lg">
						<img className="w-full" src="https://m.media-amazon.com/images/I/710lt9GF1UL._SL1500_.jpg" alt="Mountain" />
						<div className="px-6 py-4">
							<div className="font-bold italic text-xl mb-2">Home Key Hanger</div>
							<p className="text-gray-700 italic text-base text-xl">
								Perfect for hanging keys and other small objects, with a lovely desgin and finish.
							</p>
						</div>
						<div className="px-6 pt-2 pb-2">
							<span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">₹300</span>
							<button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl">Buy</button>
						</div>
					</div>

					<div className="rounded overflow-hidden shadow-lg">
						<img className="w-full" src="https://m.media-amazon.com/images/I/61R4ABc6VYL._SL1100_.jpg" alt="River" />
						<div className="px-6 py-4">
							<div className="font-bold italic text-xl mb-2">Yellow Bean Bag Pair</div>
							<p className="text-gray-700 italic text-base text-xl">
								This bean bag pair is made of a soft and durable material, a perfect addition to your room.
							</p>
						</div>
						<div className="px-6 pt-2 pb-2">
							<span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">₹2000</span>
							<button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl">Buy</button>
						</div>
					</div>

					<div className="rounded overflow-hidden shadow-lg">
						<img className="w-full py-1" src="https://m.media-amazon.com/images/I/61tL+ARsFdL._SL1000_.jpg" alt="Forest" />
						<div className="px-6 py-1.5">
							<div className="font-bold italic text-xl mb-2">Home Decor Wooden Stool Set</div>
							<p className="text-gray-700 italic text-base text-xl">
								This Versatile Stool can also be used outdoors in a Garden or a Balcony or cafeterias and lounges.
							</p>
						</div>
						<div className="px-6 pt-2 pb-2">
							<span className="italic inline-block px-3 py-1 font-semibold text-gray-700 mb-1 text-xl">₹700</span>
							<button className="inline-block bg-gray-200 rounded-full px-5 py-1 italic font-semibold text-gray-700 mr-2 mb-2 text-2xl">Buy</button>
						</div>
					</div>
				</div>
			</body>
		</>
	);
};

export default Home;
