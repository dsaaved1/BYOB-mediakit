import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import { CircularProgressbar } from 'react-circular-progressbar';
import SocialMedia from "./SocialMedia";
import {userData} from '../../data';


function Index() {

    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    

    // Function to handle playing the video
    const playVideo = () => {
        videoRef.current.play();
        setIsPlaying(true);
    };
    // Function to handle pausing the video
    const pauseVideo = () => {
        videoRef.current.pause();
        setIsPlaying(false);
    };


    useEffect(() => {
        // Simulate loading time
        const timeout = setTimeout(() => {
            setProgress(25);
        }, 700);

        return () => clearTimeout(timeout);
    }, []);
    return (
    <>
        <section className="info">
            <div className="container">
                
            <div className="row">
                        <div className="col-md-3 mb-4 mb-md-0">
                            <div className="profile ">
                                <div>
                                    <img
                                        src={userData.profilePhoto}
                                        alt="profile"
                                        className="img-fluid"
                                    />
                                </div>
                                <h1>{userData.quote}</h1>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <div className="details">
                                        <div className="name-align">
                                            <h2>{userData.name}</h2>
                                            {/* <img src={`/assets/images/usa.png`} alt="country" /> */}
                                        </div>
                                        <ul>
                                            {Object.keys(userData.socialMedia).map(platform => (
                                                <li>
                                                    <img 
                                                        src={`/assets/images/${platform}.svg`} 
                                                        alt={platform} 
                                                    />
                                                    <span>{platform === 'youtube' ? userData.socialMedia[platform].statistics.subscribers : userData.socialMedia[platform].statistics.followers}</span>
                                                </li>
                                            ))}
                                            
                                            <li>
                                                <Link to="#" className="main-btn">
                                                    Contact Info
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="tag">
                                            {userData.industries.map((industry, index) => (
                                                <strong key={index}>#{industry}</strong>
                                            ))}
                                        </div>
                                        <p>
                                            <b> About:</b> {userData.about}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="vid">
                                        <video id="video-play" poster={userData.videoThumb} ref={videoRef}>
                                            <source src={userData.video} type="video/mp4" />
                                        </video>
                                        <div className="ply-btn">
                                            {isPlaying ? (
                                                <button id="pauseBtn" onClick={pauseVideo}><i className="fa-solid fa-pause"></i></button>
                                            ) : (
                                                <button id="myBtn" onClick={playVideo}><i className="fa-solid fa-play"></i></button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="row count-top">
                    <div className="col-12 col-md-3 mb-4 mb-md-0">
                        <div className="count">
                            <h4>Total Followers</h4>
                            <small>Across all platforms</small>
                            <strong><CountUp end={6450023} duration={1.5} /></strong>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 mb-4 mb-md-0">
                        <div className="count">
                            <h4>The 60th most followed account</h4>
                            <small>On Instagram in the world</small>
                            <img
                                src="/assets/images/globe.svg"
                                alt="globe"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-3 mb-4 mb-md-0">
                        <div className="count">
                            <h4>Average Views</h4>
                            <small>Per Video on TikTok</small>
                            <strong><CountUp end={2524} duration={1.5} />k</strong>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="count round-progress">
                            <h4>25% TikTok Follower Growth</h4>
                            <small>In the Last 8 months</small>

                            <CircularProgressbar value={progress} text={`${progress}%`}  />

                        </div>
                    </div>
                </div>

                <SocialMedia userData={userData} />


            </div>
        </section>
    </>
    )
};

export default memo(Index);
