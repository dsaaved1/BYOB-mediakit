import React, { memo, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Line } from 'rc-progress';
import ProgressBar from "@ramonak/react-progress-bar";
import { tik_tok, instragram } from '../../data';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    plugins: {

        title: {
            display: true,
            text: 'Countries',
        },
        legend: {
            display: true,
            position: 'bottom',
            onClick: (e) => false,
            labels: {
                usePointStyle: true,

            },
        },


    }
};


function LeaderboardDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const [PageName, setPageName] = useState(null);
    const [ChartData, setChartData] = useState({});

    useEffect(() => {
        if (location.state !== null) {
            if (location.state.page_name !== undefined) {
                setPageName(location.state.page_name);

                if (location.state.page_name === "tik_tok") {
                    setChartData(tik_tok);
                }
                else if (location.state.page_name === "instagram") {
                    setChartData(instragram);
                }
                else {
                    navigate(-1);
                }
            }
            else {
                navigate(-1);
            }
        } else {
            navigate(-1);
        }
    }, [])



    return (
    <>
        <section className="info">
            <div className="container">
                <div className="page_navigation">
                    <a href="#" onClick={() => navigate(-1)}>
                        <img src="/assets/images/back.png" alt="" />
                    </a>
                    
                </div>
                <div className="siteBarnd_wraper">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="barnd_colmn">
                                <div className="logo">
                                    {PageName === 'tik_tok' && <img src="/assets/images/tiktok.svg" alt="" />}
                                    {PageName === 'instagram' && <img src="/assets/images/instragram-logo.svg" alt="" />}
                                </div>
                                <div className="barnd_text">

                                    {PageName === 'tik_tok' && <h2 className="title">Tik Tok</h2>}
                                    {PageName === 'instagram' && <h2 className="title">Instagram</h2>}

                                    <label className="sub_title">
                                        Data verified and last updated: 12/02/24
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <ul className="social_status-list">
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
                                        Engagement{" "}
                                        <i className="icon">
                                            <img src="/assets/images/engagement.svg" alt="" />
                                        </i>
                                    </label>
                                    <span className="count">9%</span>
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
                                        Total Videos{" "}
                                        <i className="icon">
                                            <img src="/assets/images/play_icon.svg" alt="" />
                                        </i>
                                    </label>
                                    <span className="count">147</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="stat_distribute-panel">
                    <div className="" />
                    <div className="row">
                        <div className="col-md-4 d-flex">
                            <div className="distribure_row">
                                <div className="row_header">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="mb-4">
                                                <h2 className="title">
                                                    Age <label>Distribution</label>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="col-md-4"></div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="progress-bar-1 distribute_progress">
                                        <Line percent={ChartData?.age?.bar1} strokeWidth={3} strokeColor="#27d157" trailColor="#d7ebdd" trailWidth={3} />
                                    </div>
                                    <div className="progress-bar-2 distribute_progress">
                                        <Line percent={ChartData?.age?.bar2} strokeWidth={3} strokeColor="#2ed3c9" trailColor="#c8efed" trailWidth={3} />
                                    </div>
                                    <div className="progress-bar-3 distribute_progress">
                                        <Line percent={ChartData?.age?.bar3} strokeWidth={3} strokeColor="#5417d7" trailColor="#c4b7e0" trailWidth={3} />
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex">
                            <div className="distribure_row">
                                <div className="row_header">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="mb-4">
                                                <h2 className="title">
                                                    Gender <label>Distribution</label>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            {/* <input
                                                type="text"
                                                className="datepicker dataField"
                                                placeholder="from"
                                            /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 genderProgress">
                                    <div className="genderWomen distribute_progress">
                                        <ProgressBar completed={ChartData?.gender?.women} height={"11px"} bgColor="#5417d7" baseBgColor="#c4b7e0" labelSize={"10px"} />
                                    </div>
                                    <div className="genderMen distribute_progress">
                                        <ProgressBar completed={ChartData?.gender?.men} height={"11px"} bgColor="#d32eb9" baseBgColor="#efc8e4" labelSize={"10px"} />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <ul className="gender_indicator">
                                        <li>
                                            <span className="women" /> Women
                                        </li>
                                        <li>
                                            <span className="men" /> Men
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4  d-flex">
                            <div className="distribure_row">
                                <div className="row_header">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="mb-4">
                                                <h2 className="title">
                                                    Country<label>Distribution</label>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            {/* <input
                                                type="text"
                                                className="datepicker dataField"
                                                placeholder="from"
                                            /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 d-flex">
                                    <div className="chart_colmn">
                                        {/* <div className="pieID pie"></div> */}
                                        {ChartData?.data1 && <Doughnut data={ChartData?.data1} options={options} width={"210px"} />}
                                    </div>
                                    {/* <div className="chart_value" style={{ marginLeft: "-30px" }}>
                                        <ul className="pieID legend ">
                                            <li>
                                                <em>Other</em>
                                                <span>31</span>
                                            </li>
                                            <li>
                                                <em>Usa</em>
                                                <span>28</span>
                                            </li>
                                            <li>
                                                <em>Canada</em>
                                                <span>24</span>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stat_sheet-wraper">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="stat_sheet-inner">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="stat_sheet-colmn">
                                            <h3 className="title">Package Options</h3>
                                            <div className="sheet_table">
                                                <div className="table_parent">
                                                    <div className="row">
                                                        <div className="cell">
                                                            <span>1 Video</span>
                                                        </div>
                                                        <div className="cell">
                                                            <span>300$</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="cell">
                                                            <span>3 Video</span>
                                                        </div>
                                                        <div className="cell">
                                                            <span>500$</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="cell">
                                                            <span>5 Video</span>
                                                        </div>
                                                        <div className="cell">
                                                            <span>700$</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="stat_sheet-colmn">
                                            <h3 className="title">Rate Sheet</h3>
                                            <div className="sheet_table">
                                                <div className="table_parent">
                                                    <div className="row">
                                                        <div className="cell">
                                                            <span>Dedicated TikTok</span>
                                                        </div>
                                                        <div className="cell">
                                                            <span>300$</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="cell">
                                                            <span>TikTok + Reel</span>
                                                        </div>
                                                        <div className="cell">
                                                            <span>500$</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="cell">
                                                            <span>Integrated TikTok</span>
                                                        </div>
                                                        <div className="cell">
                                                            <span>700$</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 ml-auto">
                    <a href="#" className="btnContact">
                        Contact us
                    </a>
                </div>
            </div>
        </section>

    </>
    )
}

export default memo(LeaderboardDetails)