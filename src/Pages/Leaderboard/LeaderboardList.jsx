import { Line } from 'rc-progress';
import React, { memo } from 'react'
import { Link } from 'react-router-dom';
import { tik_tok,instragram } from '../../data';
import ChartTabs from '../../Components/ChartTabs';


function LeaderboardList(props) {

    return (<>
        <section className="info">
            <div className="container">
                <section className="social_data-container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="barnd_colmn">
                                <div className="logo">
                                    <img src="/assets/images/tiktok.svg" alt="" />
                                </div>
                                <div className="barnd_text">
                                    <h2 className="title">Tik Tok</h2>
                                    <label className="sub_title">
                                        Data verified and last updated: 12/02/24
                                    </label>
                                </div>
                            </div>
                            <ul className="social_small-data">
                                <li>
                                    <label className="value">TOP 3%</label>
                                    <span className="name"> Business</span>
                                </li>
                                <li>
                                    <label className="value">TOP 23% </label>
                                    <span className="name"> Gym</span>
                                </li>
                            </ul>
                            <Link to="/leaderboard/tik-tok" state={{page_name:"tik_tok"}} className="socialBtn">
                                Save More
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <ul className="socailStat_gridView">
                                <li>
                                    <label className="title">
                                        Followers{" "}
                                        <i className="icon">
                                            <img src="/assets/images/followers.svg" alt="" />
                                        </i>
                                    </label>
                                    <span className="count">858k</span>
                                </li>
                                <li>
                                    <label className="title">
                                        Likes{" "}
                                        <i className="icon">
                                            <img src="/assets/images/Liked.svg" alt="" />
                                        </i>
                                    </label>
                                    <span className="count">18.4M</span>
                                </li>
                                <li>
                                    <label className="title">
                                        Total Reach{" "}
                                        <i className="icon">
                                            <img src="/assets/images/total_reach.svg" alt="" />
                                        </i>
                                    </label>
                                    <span className="count">215k</span>
                                </li>
                                <li>
                                    <label className="title">
                                        Total Views{" "}
                                        <i className="icon">
                                            <img src="/assets/images/total_view.svg" alt="" />
                                        </i>
                                    </label>
                                    <span className="count">473M</span>
                                </li>
                                <li>
                                    <label className="title">
                                        Engagement{" "}
                                        <i className="icon">
                                            <img src="/assets/images/engagement.svg" alt="" />
                                        </i>
                                    </label>
                                    <span className="count">9%</span>
                                </li>
                                <li>
                                    <label className="title">
                                        Total Videos{" "}
                                        <i className="icon">
                                            <img src="/assets/images/play_icon.svg" alt="" />
                                        </i>
                                    </label>
                                    <span className="count">147</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <ChartTabs chartData={tik_tok} />
                        </div>
                    </div>
                </section>
                <section className="social_data-container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="barnd_colmn">
                                <div className="logo">
                                    <img src="/assets/images/instragram-logo.svg" alt="" />
                                </div>
                                <div className="barnd_text">
                                    <h2 className="title">Instagram</h2>
                                    <label className="sub_title">
                                        Data verified and last updated: 12/04/24
                                    </label>
                                </div>
                            </div>
                            <ul className="social_small-data">
                                <li>
                                    <label className="value">TOP 3%</label>
                                    <span className="name"> Business</span>
                                </li>
                                <li>
                                    <label className="value">TOP 23% </label>
                                    <span className="name"> Gym</span>
                                </li>
                            </ul>
                            <Link to="/leaderboard/instagram" state={{page_name:"instagram"}} className="socialBtn">
                                Save More
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <ul className="socailStat_instaView">
                                <li>
                                    <label className="title">
                                        Followers{" "}
                                        <i className="icon">
                                            <img src="/assets/images/followers_insta.svg" alt="" />
                                        </i>
                                    </label>
                                    <span className="count">2.1M</span>
                                </li>
                                <li>
                                    <label className="title">
                                        Total Reach{" "}
                                        <i className="icon">
                                            <img src="/assets/images/insta-reach.svg" alt="" />
                                        </i>
                                    </label>
                                    <span className="count">992k</span>
                                </li>
                                <li>
                                    <label className="title">
                                        Engagement{" "}
                                        <i className="icon">
                                            <img src="/assets/images/instaengagement.svg" alt="" />
                                        </i>
                                    </label>
                                    <span className="count">7%</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <ChartTabs chartData={instragram} />
                        </div>
                    </div>
                </section>
            </div>
        </section>


    </>)
}

export default memo(LeaderboardList);