const HomepageHero = () => {
    return (
        <div className="bg-teal-800 min-h-[600px] py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="text-white space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
                            Join SustainaSpark 4:
                            <span className="block">Compete, Connect, Conquer!</span>
                        </h1>
                        <div className="space-y-4">
                            <h2 className="text-2xl">
                                Gain Experience | Indulge in Policy Making | Earn Rewards
                            </h2>
                            <p className="text-lg opacity-90">
                                Join the exciting SustainaSpark 4 Role Play Policy Making Competition.
                                Engage in discussions on critical global issues, and propose real-world solutions.
                                Be part of an international platform where young voices shape the policies of the future!
                            </p>
                            <button className="bg-yellow-400 text-teal-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors">
                                Apply now
                            </button>
                        </div>
                    </div>

                    {/* Right content - Illustration */}
                    <div className="relative">
                        <div className="bg-teal-700 rounded-lg p-8">
                            <div className="relative aspect-square">
                                <img
                                    src="/api/placeholder/400/400"
                                    alt="Global policy makers illustration"
                                    className="rounded-lg w-full"
                                />
                                <div className="absolute bottom-0 left-0 right-0 text-center p-4">
                                    <div className="text-white text-sm font-medium">
                                        SHAPE THE FUTURE THROUGH POLICY MAKING
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-8 -left-8 text-teal-600">
                            <svg className="w-16 h-16 transform rotate-45" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2L2 22L12 18L22 22L12 2Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomepageHero;