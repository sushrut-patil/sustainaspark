import { useNavigate } from 'react-router-dom';

const HomepageHero = () => {
    const navigate = useNavigate();
    
    return (
        <div className="bg-[#004C4C] min-h-[400px] md:min-h-[600px] py-8 md:py-16">
            <div className="container mx-auto px-4 md:px-0">
                <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                    {/* Left content */}
                    <div className="text-white space-y-4 md:space-y-6">
                        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-yellow-400 font-lato leading-tight">
                            Join SustainaSpark 4:
                            <span className="block mt-2">Compete, Connect, Conquer!</span>
                        </h1>
                        <div className="space-y-3 md:space-y-4">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-lato leading-snug">
                                Gain Experience | Indulge in Policy Making | Earn Rewards
                            </h2>
                            <p className="text-base md:text-lg lg:text-2xl font-roboto font-semibold leading-relaxed opacity-90">
                                Join the exciting SustainaSpark 4 Role Play Policy Making Competition.
                                Engage in discussions on critical global issues, and propose real-world solutions.
                                Be part of an international platform where young voices shape the policies of the future!
                            </p>
                            <button
                                className="bg-yellow-400 text-[#004C4C] px-6 py-3 rounded-full font-bold 
                                          hover:bg-yellow-300 transition-colors duration-300 
                                          text-sm md:text-base"
                                onClick={() => navigate('/register')}
                            >
                                Apply now
                            </button>
                        </div>
                    </div>
                    {/* Right content */}
                    <div className="relative mt-2 md:mt-0">
                        <div className="relative aspect-square">
                            <img
                                src="/images/hero.png"
                                alt="Global policy makers illustration"
                                className="rounded-lg w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomepageHero;