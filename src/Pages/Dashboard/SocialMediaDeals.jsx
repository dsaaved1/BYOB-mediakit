import React, { memo, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Line } from 'rc-progress';
import ProgressBar from "@ramonak/react-progress-bar";
import { userData } from '../../data';
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

const ageColorPairs = [
    { bgColor: '#27d157', baseBgColor: '#d7ebdd' },
    { bgColor: '#2ed3c9', baseBgColor: '#c8efed' },
    { bgColor: '#5417d7', baseBgColor: '#c4b7e0' },
    { bgColor: '#d32eb9', baseBgColor: '#efc8e4' },
    { bgColor: '#f6a821', baseBgColor: '#fceeda' },
    { bgColor: '#e54b4b', baseBgColor: '#f3c4c4' },
    { bgColor: '#17a2b8', baseBgColor: '#b7eaff' }
];

const genderColorPairs = [
    { bgColor: '#5417d7', baseBgColor: '#c4b7e0' },
    { bgColor: '#d32eb9', baseBgColor: '#efc8e4' },
    { bgColor: '#27d157', baseBgColor: '#d7ebdd' }
];


function SocialMediaDeals() {
    const navigate = useNavigate();
    const location = useLocation();
    const [PageData, setPageData] = useState(null);

    useEffect(() => {
        if (location.state && location.state.page_name) {
            const socialMediaData = userData.socialMedia[location.state.page_name];
            if (socialMediaData) {
                setPageData(socialMediaData);
            } else {
                navigate(-1);
            }
        } else {
            navigate(-1);
        }
    }, [location.state, navigate]);

    if (!PageData) return null; 



    return (
    <>
        <section className="info">
            <div className="container">

                <div className="page_navigation">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate(-1); }}>
                        <img src="/assets/images/back.svg" alt="" />
                    </a>
                </div>

                <div className="siteBarnd_wraper">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="barnd_colmn">
                                <div className="logo">
                                     <img src={PageData.logo} alt={PageData.name} />
                                </div>
                                <div className="barnd_text">
                                    <h2 className="title">{PageData.name}</h2>
                                    <label className="sub_title">
                                        Data verified and last updated: {PageData.lastUpdated}
                                    </label>
                                </div>
                            </div>
                        </div>

                        
                        <div className="col-md-9">
                           <ul className="social_status-list">
                                {Object.keys(PageData?.statistics).map((stat, idx) => (
                                    <li key={idx}>
                                        <label className="title">
                                            {stat.charAt(0).toUpperCase() + stat.slice(1)}{" "}
                                            <i className="icon">
                                                <img src={`/assets/images/${stat}.svg`} alt={stat} />
                                            </i>
                                        </label>
                                        <span className="count">
                                            {PageData.statistics[stat]}
                                        </span>
                                    </li>
                                ))}
                              
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
                                        {PageData.demographics?.age?.bars.map((bar, index) => {
                                        const colorPair = ageColorPairs[index % ageColorPairs.length];
                                        return (
                                            <div key={index} className={`progress-bar-${index + 1} distribute_progress`}>
                                                <ProgressBar 
                                                    completed={bar.value} 
                                                    height={"11px"} 
                                                    bgColor={colorPair.bgColor} 
                                                    baseBgColor={colorPair.baseBgColor} 
                                                    labelSize={"9px"} 
                                                />
                                            </div>
                                            );
                                        })}
                                    </div>
                                    <div className="mt-4">
                                        <ul className="gender_indicator">
                                            {PageData.demographics?.age?.bars.map((bar, index) => (
                                                <li key={index}>
                                                    <span className={bar.name.replace('+', '').replace('-', '').toLowerCase()} /> {bar.name}
                                                </li>
                                            ))}
                                        </ul>
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
                                       </div>
                                   </div>
                                   <div className="mt-4 genderProgress">
                                        {PageData.demographics?.gender?.bars.map((bar, index) => {
                                            const colorPair = genderColorPairs[index % genderColorPairs.length];
                                            return (
                                                <div key={index} className={`gender${bar.name} distribute_progress`}>
                                                    <ProgressBar 
                                                        completed={bar.value} 
                                                        height={"11px"} 
                                                        bgColor={colorPair.bgColor} 
                                                        baseBgColor={colorPair.baseBgColor} 
                                                        labelSize={"10px"} 
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="mt-4">
                                        <ul className="gender_indicator">
                                            {PageData.demographics?.gender?.bars.map((bar, index) => (
                                                <li key={index}>
                                                    <span className={bar.name.toLowerCase()} /> {bar.name}
                                                </li>
                                            ))}
                                        </ul>
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
                                                       Country<label>Distribution</label>
                                                   </h2>
                                               </div>
                                           </div>
                                           <div className="col-md-4">
                                              
                                           </div>
                                       </div>
                                   </div>
                                   <div className="mt-4 d-flex">
                                       <div className="chart_colmn">
                                           {PageData.demographics?.countries?.data1 && <Doughnut data={PageData.demographics?.countries?.data1} options={options} width={"210px"} />}
                                       </div>
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
                                                        {PageData.packageOptions && Object.entries(PageData.packageOptions).map(([key, value]) => (
                                                            <div className="row" key={key}>
                                                                <div className="cell">
                                                                    <span>{key}</span>
                                                                </div>
                                                                <div className="cell">
                                                                    <span>{value}</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="col-md-6">
                                           <div className="stat_sheet-colmn">
                                               <h3 className="title">Rate Sheet</h3>
                                               <div className="sheet_table">
                                                   <div className="table_parent">
                                                        {PageData.rateSheet && Object.entries(PageData.rateSheet).map(([key, value]) => (
                                                            <div className="row" key={key}>
                                                                <div className="cell">
                                                                    <span>{key}</span>
                                                                </div>
                                                                <div className="cell">
                                                                    <span>{value}</span>
                                                                </div>
                                                            </div>
                                                        ))}
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

export default memo(SocialMediaDeals)