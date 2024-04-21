import { Line } from 'rc-progress';
import React, { memo } from 'react'
import { Link } from 'react-router-dom';
import { tik_tok,instragram } from '../../data';
import { userData } from '../../data';
import ChartTabs from '../../Components/ChartTabs';


function SocialMedia(props) {

    return (<>
       
        <section className="info">
            <div className="container">
                {Object.keys(userData.socialMedia).map((platform, index) => {
                    const platformData = userData.socialMedia[platform];
                    return (
                        <section className="social_data-container" key={index}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="barnd_colmn">
                                        <div className="logo">
                                            <img src={platformData.logo} alt={platformData.name} />
                                        </div>
                                        <div className="barnd_text">
                                            <h2 className="title">{platformData.name}</h2>
                                            <label className="sub_title">
                                                Data verified and last updated: {platformData.lastUpdated}
                                            </label>
                                        </div>
                                    </div>
                                    <ul className="social_small-data">
                                        {platformData.rankings?.map((data, idx) => (
                                            <li key={idx}>
                                                <label className="value">{data.value}</label>
                                                <span className="name">{data.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to={`/leaderboard/${platform}`} state={{ page_name: platform }} className="socialBtn">
                                        See Deals
                                    </Link>
                                </div>
                                <div className="col-md-3">
                                    <ul className={"socailStat_gridView"}>
                                        {Object.keys(platformData.statistics).map((stat, idx) => (
                                            <li key={idx}>
                                                <label className="title">
                                                    {stat.charAt(0).toUpperCase() + stat.slice(1)}{" "}
                                                    <i className="icon">
                                                        <img src={`/assets/images/${stat}.svg`} alt={stat} />
                                                    </i>
                                                </label>
                                                <span className="count">
                                                    {platformData.statistics[stat]}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-md-5">
                                    <ChartTabs chartData={platformData} />
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>
        </section>

    </>)
}

export default memo(SocialMedia);