

const OfferPage = () => {
	return (
		<div>
			<section className="mt-10">
				<div className="w-full dark:bg-gray-500 bg-[url('https://i.ibb.co/s9T4VPc/closeup-arugula-shrimps-tomatoes-salad-219193-365.jpg')]">
					<div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
						<h1 className="md:text-6xl antialiased font-semibold leadi text-center text-white">Culinary Delights</h1>
						<p className="pt-2 pb-8 md:text-2xl antialiased text-center dark:text-gray-100 font-bold">Sharing love, one meal at a time.</p>
					</div>
				</div>
				<div className="container flex flex-col-reverse mx-auto lg:flex-row">
					<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 text-gray-900 mt-10">
						<div className="flex space-x-2 sm:space-x-4">
							<div className="space-y-2">
								<p className="text-2xl md:text-5xl font-medium leadi">What are you in the mood for today?</p>
								<p className="text-base md::text-xl leadi">Anything you want, whenever you want! A coffee is mandatory when you wake up. We know that. You forgot to buy diapers. Or beer. Or milk. We&apos;ve got it! That lasagna you forgot to cook. We bring that to you. And the eggs you need for that recipe. Find them all here!!</p>
							</div>
						</div>

					</div>
					<div className="lg:w-1/2 xl:w-3/5 mt-5">
						<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
							<img src="https://i.ibb.co/bK2DFZZ/foody-homepage-cuisines-28-07-2023.webp" alt="" className="rounded-lg shadow-lg aspect-video sm:min-h-96" />
						</div>
					</div>
				</div>
				<div className="container max-w-6xl mx-auto space-y-6 sm:space-y-12">
					<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
							<img role="presentation" className="object-cover lg:w-96 rounded h-44 dark:bg-gray-500" src="https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg" />
							<div className="p-2 space-y-2">
								<h3 className="text-2xl font-semibold text-center">Pate Chinois</h3>

							</div>
						</a>
						<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
							<img role="presentation" className="object-cover lg:w-96 rounded h-44 dark:bg-gray-500" src="https://www.themealdb.com/images/category/beef.png" />
							<div className="p-2 space-y-2">
								<h3 className="text-2xl font-semibold text-center">Beef</h3>

							</div>
						</a>
						<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
							<img role="presentation" className="object-cover lg:w-96 rounded h-44 dark:bg-gray-500" src="https://www.themealdb.com/images/media/meals/1529444113.jpg" />
							<div className="p-2 space-y-2">
								<h3 className="text-2xl font-semibold text-center">Chicken rice bowl</h3>

							</div>
						</a>

					</div>

				</div>
			</section>
			
		</div>
	);
};

export default OfferPage;