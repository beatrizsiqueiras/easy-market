import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const OrderChart = ({ ordersChartData }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const orderChart = chartRef.current;

        if (orderChart && ordersChartData) {
            if (orderChart.chartInstance) {
                orderChart.chartInstance.destroy();
            }

            orderChart.chartInstance = new Chart(orderChart, {
                type: 'line',
                data: {
                    labels: ordersChartData.map((row) => `${row.month} - ${row.year} `),
                    datasets: [
                        {
                            backgroundColor: '#815ac0',
                            borderCapStyle: '#815ac0',
                            tension: 0.5,
                            label: '2023 - 2024',
                            data: ordersChartData.map((row) => row.count),
                        },
                    ],
                },
            });
        }
    }, [ordersChartData]);

    return (
        <>
            <canvas id='orderChart' ref={chartRef}></canvas>
        </>
    );
};

export default OrderChart;
