import '../stars.css';
import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import TypeWriterEffect from 'react-typewriter-effect';

export function Header() {
    return (
        <header className="panel header">
            <section>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </section>
            <div className="title">
            <TypeWriterEffect
            textStyle={{ fontFamily: 'Montserrat', color: 'white' }}
            startDelay={100}
            cursorColor="white"
            text="Hi, I'm Stefan"
            typeSpeed={100}
            /></div>
            <ParallaxProvider>
                <ParallaxBanner
                    className="parallaxbanner"
                    layers={[
                        {
                            image: '/img/mountain3.png',
                            amount: 0.1,
                            expanded: false,
                        },
                        {
                            image: '/img/mountain2.png',
                            amount: -0.1,
                            expanded: false,
                        },
                        {
                            image: '/img/mountain1.png',
                            amount: -0.3,
                            expanded: true,
                        },

                    ]}
                >
                </ParallaxBanner>
            </ParallaxProvider>
            <div className="emergencyBloc"></div>
        </header>
    )
}