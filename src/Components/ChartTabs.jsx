import React, { memo, useCallback, useState } from 'react';
import { Line } from 'rc-progress';
import ProgressBar from "@ramonak/react-progress-bar";
import DoughnutChart from './Chart/DoughnutChart';


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


function ChartTabs(props) {
    const [activeTab, setActiveTab] = useState('tab1');
    const [sideActiveTab, setsideActiveTab] = useState('country');

    const TabChange = useCallback((data) => {
        setActiveTab(data);
    }, [activeTab]);

    const SideTabChange = useCallback((data) => {
        setsideActiveTab(data);
    }, [sideActiveTab]);

    
    return (<>
        <div className="social_stat-wrap">
            <div className="stat_piechart-wrap">

                {sideActiveTab === "country" && <div className="pie_chart-row">

                    {activeTab === 'tab1' && <>

                        {/* //////////// 4 segments ///////////// */}
                        <div className="pie_chart-colmn">
                            <h5 className="title">Countries</h5>
                            <div className="chart_flow-row">
                                <div className="chart_colmn">
                                    {/* <div className="pieID pie"></div> */}
                                    <DoughnutChart data={props.chartData.demographics?.countries?.data1} />
                                </div>

                            </div>
                        </div>

                    </>}


                    {activeTab === 'tab2' && <>

                        {/* //////////// 8 segments ///////////// */}
                        <div className="pie_chart-colmn">
                            <h5 className="title">Countries</h5>
                            <div className="chart_flow-row">
                                <div className="chart_colmn">
                                    {/* <div className="pieID pie"></div> */}
                                    <DoughnutChart data={props.chartData.demographics?.countries?.data2} />
                                </div>

                            </div>
                        </div>

                    </>}


                    {activeTab === 'tab3' && <>

                        {/* //////////// 12 segments ///////////// */}
                        <div className="pie_chart-colmn">
                            <h5 className="title">Countries</h5>
                            <div className="chart_flow-row">
                                <div className="chart_colmn">
                                    {/* <div className="pieID pie"></div> */}
                                    <DoughnutChart data={props.chartData.demographics?.countries?.data3} />
                                </div>

                            </div>
                        </div>

                    </>}



                    <ul className="segment_tab">
                        <li>
                            <button type='button' className={`tabChartbtn ${activeTab == "tab1" && 'active'}`} onClick={() => TabChange('tab1')}>
                                4 segments
                            </button>
                        </li>
                        <li>
                            <button type='button' className={`tabChartbtn ${activeTab == "tab2" && 'active'}`} onClick={() => TabChange('tab2')} >
                                8 segments</button>
                        </li>
                        <li>
                            <button type='button' className={`tabChartbtn ${activeTab == "tab3" && 'active'}`} onClick={() => TabChange('tab3')} >
                                12 segments</button>
                        </li>
                    </ul>

                </div>}

                {sideActiveTab === "age" && <>
                    <div className="distribure_row">
                        <div className="row_header">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="mb-4">
                                        <h2 className="title">
                                            Age
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                        <div className="mt-4">
                            {props.chartData.demographics?.age?.bars?.map((bar, index) => {
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
                                {props.chartData.demographics?.age?.bars?.map((bar, index) => (
                                    <li key={index}>
                                        <span className={bar.name.replace('+', '').replace('-', '').toLowerCase()} /> {bar.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>}

                {sideActiveTab === "gender" && <>
                    <div className="distribure_row">
                        <div className="row_header">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="mb-4">
                                        <h2 className="title">
                                            Gender 
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 genderProgress">
                            {props.chartData.demographics?.gender?.bars.map((bar, index) => {
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
                                {props.chartData.demographics?.gender?.bars.map((bar, index) => (
                                    <li key={index}>
                                        <span className={bar.name.toLowerCase()} /> {bar.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>}


                <div className="right_panel-data">
                    <h5 className="title">More:</h5>
                    <ul>
                        {sideActiveTab !== "country" && <li onClick={() => SideTabChange('country')}>
                            <span className="countries" />
                            Countries
                        </li>}
                        {sideActiveTab !== "gender" && <li onClick={() => SideTabChange('gender')}>
                            <span className="genr" />
                            Gender
                        </li>}
                        {sideActiveTab !== "age" && <li onClick={() => SideTabChange('age')}>
                            <span className="age" />
                            Age
                        </li>}
                    </ul>
                </div>

            </div>
        </div>
    </>)
}

export default memo(ChartTabs)