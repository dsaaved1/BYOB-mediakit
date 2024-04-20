import React, { memo } from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart(props) {

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


    return (
        <>
            <Doughnut data={props.data} options={options} updateMode={"none"} width={"210px"} />
        </>
    )
}

export default memo(DoughnutChart)