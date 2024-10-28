const HomepageHero = () => {
    return (
        <div className="bg-[#004C4C] min-h-[600px] py-16">
            <div className="container mx-auto px-0">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="text-white space-y-6">
                        <h1
                            className="font-bold text-yellow-400"
                            style={{
                                fontFamily: 'Lato',
                                fontSize: '48px',
                                fontWeight: "bolder",
                                lineHeight: '57.6px',
                                textAlign: 'left',
                                color: '#FFC12D',
                                borderRadius: '8px',
                            }}
                        >
                            Join SustainaSpark 4:
                            <span className="block">Compete, Connect, Conquer!</span>
                        </h1>
                        <div className="space-y-4">
                            <h2
                                style={{
                                    fontFamily: 'Lato',
                                    fontSize: '36px',
                                    fontWeight: 800,
                                    lineHeight: '43.2px',
                                    textAlign: 'left',
                                }}
                            >
                                Gain Experience | Indulge in Policy Making | Earn Rewards
                            </h2>
                            <p
                                style={{
                                    fontFamily: 'Roboto',
                                    fontSize: '24px',
                                    fontWeight: 800,
                                    lineHeight: '28.13px',
                                    textAlign: 'left',
                                    opacity: 0.9,
                                }}
                            >
                                Join the exciting SustainaSpark 4 Role Play Policy Making Competition.
                                Engage in discussions on critical global issues, and propose real-world solutions.
                                Be part of an international platform where young voices shape the policies of the future!
                            </p>
                            <button
                                style={{
                                    backgroundColor: '#FFC12D',
                                    color: '#004C4C',
                                    padding: '0.75rem 2rem',
                                    borderRadius: '9999px',
                                    fontWeight: 'bold',
                                    transition: 'background-color 0.3s',
                                }}
                                className="hover:bg-yellow-300"
                            >
                                Apply now
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="">
                            <div className="relative aspect-square">
                                <img
                                    src="/images/hero.png"
                                    alt="Global policy makers illustration"
                                    className="rounded-lg w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomepageHero;
