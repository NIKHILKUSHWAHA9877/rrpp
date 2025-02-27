import React from 'react';
import BookList from './page';  // Make sure the path is correct
import { FloatingNav } from '@/components/ui/FloatingNav';
import WhiteBg from '@/components/WhiteBg';
import Contact from './Contact';
import Londa from './londa';
import "./logo.css"

const Layout: React.FC = () => {
    return (
        <>
            <main className='maain relative mx-auto sm:px-0 px-0 overflow-clip z-100 rounded-b-[120px]'>

                {/* Insert the BookList component here */}
                <FloatingNav />




                <BookList />

                <div>
                    <p className="browser-warning">
                        If this looks wonky to you it's because this browser doesn't support the CSS
                        property 'aspect-ratio'.
                    </p>



<Londa/>
                    <div className="stack">
                        <div className="card">
                            <div className="image">
                                <div className='tr'> <img src="https://cdn.relinns.com/assets/images/home-rt-integrity-logo.png" alt="Logo" className="logo5" />
                                    <h2>Detailed Brand Analysis</h2></div>

                                <ul className='ju'>
                                    <li>🚀We research your brand’s identity.</li>
                                    <li>🚀We study competitors to stand out.</li>
                                    <li>🚀We create designs tailored to your audience.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image">
                                <div className='tr'>  <img src="https://cdn.relinns.com/assets/images/home-rt-collaboration-logo.png" alt="Logo" className="logo5" />
                                    <h2>Most Affordable Packages</h2></div>

                                <ul className='ju'>
                                    <li>🚀Flexible plans to suit all budgets.</li>
                                    <li>🚀Transparent pricing with no hidden fees.</li>
                                    <li>🚀High-quality designs at affordable rates.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image">
                                <div className='tr'>    <img src="https://cdn.relinns.com/assets/images/home-rt-responsibility-logo.png" alt="Logo" className="logo5" />
                                    <h2>Experienced Designers</h2></div>

                                <ul className='ju'>
                                    <li>🚀Skilled designers with years of experience.</li>
                                    <li>🚀Expertise in crafting unique, professional logos.</li>
                                    <li>🚀Creative solutions that align with your brand.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image">
                                <div className='tr'>  <img src="https://cdn.relinns.com/assets/images/home-rt-taking-initiative-logo.png" alt="Logo" className="logo5" />
                                    <h2>Multiple Design Concepts</h2> </div>

                                <ul className='ju'>
                                    <li>🚀We provide several unique logo concepts.</li>
                                    <li>🚀You can choose the design that fits best.</li>
                                    <li>🚀Revisions included for perfect results.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image">
                                <div className='tr'> <img src="https://cdn.relinns.com/assets/images/home-rt-excellence-logo.png" alt="Logo" className="logo5" />
                                    <h2>4.8/5 rating</h2></div>

                                <ul className='ju'>
                                    <li>🚀That’s our average customer rating from 1000+ reviews</li>
                                    <li>🚀Money back guarantee! Yes that's true</li>
                                    <li><br></br></li>
                                    


                                </ul>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image">
                                <div className='tr'><img src="https://cdn.relinns.com/assets/images/home-innovation-logo.png" alt="Logo" className="logo5" />
                                    <h2>24/7 creativity</h2>
                                </div>

                                <ul className='ju'>
                                    <li>🚀Professional designers online and available worldwide</li>
                                    <li>🚀Day or Night we are always available </li>
                                    <li><br></br></li>
                                    

                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

                <Contact />
            </main>

            <WhiteBg
                className="w-full h-[90vh] mt-[-150px] sm:mt-[-150px] footer2 white-bg"
                style={{
                    zIndex: 50, // Ensuring it appears above the background but below the main content
                    display: "flex",
                }}
            />
        </>
    );

};

export default Layout;
