import React, { memo, useCallback, useState } from 'react';
import { Line } from 'rc-progress';
import ProgressBar from "@ramonak/react-progress-bar";
import DoughnutChart from './Chart/DoughnutChart';




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
                                    <DoughnutChart data={props.chartData.data1} />
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
                                    <DoughnutChart data={props.chartData.data2} />
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
                                    <DoughnutChart data={props.chartData.data3} />
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
                            <div className="progress-bar-1 distribute_progress">
                                <ProgressBar completed={props.chartData.age.bar1} height={"11px"} bgColor="#27d157" baseBgColor="#d7ebdd" labelSize={"9px"} />
                            </div>
                            <div className="progress-bar-2 distribute_progress">
                                <ProgressBar completed={props.chartData.age.bar2} height={"11px"} bgColor="#2ed3c9" baseBgColor="#c8efed" labelSize={"9px"} />
                            </div>
                            <div className="progress-bar-3 distribute_progress">
                                <ProgressBar completed={props.chartData.age.bar3} height={"11px"} bgColor="#5417d7" baseBgColor="#c4b7e0" labelSize={"9px"} />
                            </div>
                        </div>
                        <div className="mt-4">
                            <ul className="gender_indicator">
                                <li>
                                    <span className="fourteen" /> 14-17
                                </li>
                                <li>
                                    <span className="eighteen" /> 18-24
                                </li>
                                <li>
                                    <span className="twentyfive" /> 25+
                                </li>
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
                                <ProgressBar completed={props.chartData.gender.women} height={"11px"} bgColor="#5417d7" baseBgColor="#c4b7e0" labelSize={"10px"} />
                            </div>
                            <div className="genderMen distribute_progress">
                                <ProgressBar completed={props.chartData.gender.men} height={"11px"} bgColor="#d32eb9" baseBgColor="#efc8e4" labelSize={"10px"} />
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