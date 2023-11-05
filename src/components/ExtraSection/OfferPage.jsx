

const OfferPage = () => {
    return (
        <div>
           <section className="">
	<div className="container flex flex-col-reverse mx-auto lg:flex-row">
		<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 text-gray-900 mt-10">
			<div className="flex space-x-2 sm:space-x-4">
				<div className="space-y-2">
					<p className="text-6xl font-medium leadi">What are you in the mood for today?</p>
					<p className="text-xl leadi">Anything you want, whenever you want! A coffee is mandatory when you wake up. We know that. You forgot to buy diapers. Or beer. Or milk. We've got it! That lasagna you forgot to cook. We bring that to you. And the eggs you need for that recipe. Find them all here!!</p>
				</div>
			</div>
			
		</div>
		<div className="lg:w-1/2 xl:w-3/5">
			<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
				<img src="https://i.ibb.co/bK2DFZZ/foody-homepage-cuisines-28-07-2023.webp" alt="" className="rounded-lg shadow-lg aspect-video sm:min-h-96" />
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default OfferPage;