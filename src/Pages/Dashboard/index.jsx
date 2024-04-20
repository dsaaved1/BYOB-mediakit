import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import { CircularProgressbar } from 'react-circular-progressbar';
import SocialMedia from "./SocialMedia";
import {userData } from '../../data';

const formatNumber = (number) => {
    
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(0) + 'K';
    } else {
        return number.toFixed(0);
    }
};

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
        }, 300);

        return () => clearTimeout(timeout);
    }, []);
    return (<>
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
                                            <img src="/assets/images/usa.png" alt="country" />
                                        </div>
                                        <ul>
                                            <li>
                                                <img src="/assets/images/tiktok.svg" alt="tiktok" />
                                                <span>{userData.socialMedia.tikTok.statistics.followers}</span>
                                            </li>
                                            <li>
                                                <img src="/assets/images/insta.svg" alt="insta" />
                                                <span>{userData.socialMedia.instagram.statistics.followers}</span>
                                            </li>
                                            <li>
                                                <img src="/assets/images/youtube.svg" alt="youtube" />
                                                <span>{"34223"}</span>
                                            </li>
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
                                        <video id="video-play" poster="/assets/images/video-thumb.png" ref={videoRef}>
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
                        <div className="count globe">
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
                    <div className="col-6 col-md-3">
                        <div className="count round-progress">
                            <h4>25% TikTok Follower Growth</h4>
                            <small>In the Last 8 months</small>

                            <CircularProgressbar value={progress} text={`${progress}%`}  />

                        </div>
                    </div>
                </div>

                <SocialMedia />

{/* 
                <div className="row info-btm">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="row tiktok-wrap">
                            <div className="tik-side col-sm-6 mb-4 mb-sm-0">
                                <div className="d-flex align-items-center">
                                    <img
                                        src="/assets/images/tiktok.svg"
                                        alt="tiktok"
                                        className="img-fluid"
                                    />
                                    <h3>Tik Tok</h3>
                                </div>
                                <p>Data verified and last updated: 12/02/24</p>
                                <div className="tik-btm">
                                    <h6>TOP 3% Business</h6>
                                    <h6>TOP 23% Gym </h6>
                                </div>
                            </div>
                            <div className="con-side col-sm-6">
                                <ul className="row">
                                    <li className="col-6 col-sm-6 mb-3">
                                        <div className="text-center">
                                            <small>Followers</small>{" "}
                                            <img
                                                src="/assets/images/followers-icon.svg"
                                                alt="icon"
                                                className="img-fluid"
                                            />
                                            <strong>858k</strong>
                                        </div>
                                    </li>
                                    <li className="col-6 col-sm-6 mb-3">
                                        <div className="text-center">
                                            <small>Likes</small>{" "}
                                            <img
                                                src="/assets/images/liked-icon.svg"
                                                alt="icon"
                                                className="img-fluid"
                                            />
                                            <strong>18.4M</strong>
                                        </div>
                                    </li>
                                    <li className="col-6 col-sm-6">
                                        <div className="text-center">
                                            <small>Total Videos</small>{" "}
                                            <img
                                                src="/assets/images/play-icon.svg"
                                                alt="icon"
                                                className="img-fluid"
                                            />
                                            <strong>147</strong>
                                        </div>
                                    </li>
                                    <li className="col-6 col-sm-6">
                                        <div className="text-center">
                                            <small>Total Views</small>{" "}
                                            <img
                                                src="/assets/images/eye-icon.svg"
                                                alt="icon"
                                                className="img-fluid"
                                            />
                                            <strong>473M</strong>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-6">
                                <div className="reports-side">
                                    <img
                                        src="/assets/images/reports.png"
                                        alt="reports"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="more">
                                    <strong>More:</strong>
                                    <ul>
                                        <li>Gender</li>
                                        <li>Countries</li>
                                        <li>Age</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


            </div>
        </section>
    </>)
};

export default memo(Index);
