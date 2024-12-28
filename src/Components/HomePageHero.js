import { useNavigate } from 'react-router-dom';
import Header from './Header';

const HomepageHero = ({ registrationRef }) => {
    const navigate = useNavigate();
    
    return (
        <div 
            className="relative bg-[#004C4C] min-h-[400px] md:min-h-[600px] py-8 md:py-16"
            style={{
                backgroundImage: `
                    linear-gradient(
                        rgba(0, 76, 76, 0.15), 
                        rgba(0, 76, 76, 0.15)
                    ),
                    url('/images/newss4/homepageimg.jpeg')
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <Header registrationRef={registrationRef}/>
            
        </div>
    );
};

export default HomepageHero;