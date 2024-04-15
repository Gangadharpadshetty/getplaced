// MachineLearning.js

import React from 'react';


const MachineLearning = () => {
    return (
        <div style={{ backgroundColor: '#000', color: '#fff' }}>
            <section style={{ padding: '20px', margin: '20px', backgroundColor: '#000' }}>
                <h1>Free Resources</h1>
                <div>
                    <h2 style={{ fontSize: '24px' }}>YouTube Channels:</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div style={{ width: '50%', padding: '10px' }}>
                            <iframe width="100%" height="250" src="https://www.youtube.com/embed/videoseries?si=MAu4uuuquxEqbgXl&amp;list=PLYwpaL_SFmcBhOEPwf5cFwqo5B-cP9G4P" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div style={{ width: '50%', padding: '10px' }}>
                            <iframe width="100%" height="250" src="https://www.youtube.com/embed/0g-XL0WV2xo?si=zhW1Tg9rA9BuQlu4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div style={{ width: '50%', padding: '10px' }}>
                        <iframe width="100%" height="250" src="https://www.youtube.com/embed/videoseries?si=1XXGpOL6JhDFurif&amp;list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div style={{ width: '50%', padding: '10px' }}>
                        <iframe width="100%" height="250" src="https://www.youtube.com/embed/bmmQA8A-yUA?si=VcDlgB1xO8wQOhjG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        {/* Add more YouTube videos as needed */}
                    </div>
                </div>
            </section>
            <section style={{ padding: '10px', margin: '20px', backgroundColor: '#000' }}>
                <div>
                    <h2>Websites:</h2>
                    <ul>
                        <div>
                        <li>
                            <a href="https://www.geeksforgeeks.org/machine-learning/">
                                <img src="/images/geeksforgeeks.jpg"alt="GeeksforGeeks" className="website-image" />
                                GeeksforGeeks - Machine Learning
                            </a>
                        </li>
                        </div>
                        <div>
                        <li>
                            <a href="https://www.webscube.com/machine-learning/">
                                <img src="/images/webscubeImg.jpg" alt="Webscube" className="website-image" />
                                Webscube - Machine Learning
                            </a>
                        </li>
                         </div>
                        {/* Add more websites as needed */}
                    </ul>
                </div>
            </section>
            <section style={{ padding: '20px', margin: '20px', backgroundColor: '#000' }}>
                <h1>Paid Courses</h1>
                <div>
                    <h2>Online Courses:</h2>
                    <ul>
                        <li><a href="https://www.physicswallah.com/">Physics Wallah</a></li>
                        {/* Add more paid courses as needed */}
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default MachineLearning;
