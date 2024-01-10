import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SalesChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const data = [
            { month: "Jan", count: 10 },
            { month: "Fev", count: 20 },
            { month: "Mar", count: 15 },
            { month: "Abr", count: 25 },
            { month: "Mai", count: 22 },
            { month: "Jun", count: 30 },
            { month: "Jul", count: 28 },
            { month: "Ago", count: 8 },
            { month: "Se", count: 23 },
            { month: "Out", count: 60 },
            { month: "Nov", count: 70 },
            { month: "Dez", count: 100 },
        ];

        const salesChart = chartRef.current;

        if (salesChart) {
            // Check if a chart instance already exists and destroy it
            if (salesChart.chartInstance) {
                salesChart.chartInstance.destroy();
            }

            salesChart.chartInstance = new Chart(salesChart, {
                type: "line",
                data: {
                    labels: data.map((row) => row.month),
                    datasets: [
                        {
                            backgroundColor: "#815ac0",
                            borderCapStyle: "#815ac0",
                            tension: 0.5,
                            label: "Vendas do ano",
                            data: data.map((row) => row.count),
                        },
                    ],
                },
            });
        }
    }, []);

    return (
        <>
            <canvas id='salesChart' ref={chartRef}></canvas>
        </>
    );
};

export default SalesChart;
