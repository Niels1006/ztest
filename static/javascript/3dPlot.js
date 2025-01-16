// Bin data for the bar plot
const bins = 20; // Number of bins for x and y axes
const range = 3; // Range of values (-range to +range for x and y)
const binWidth = (2 * range) / bins;




// Initialize the chart
const chartDom = document.getElementById('gaussplot');
const myChart = echarts.init(chartDom);

// ECharts 3D bar plot configuration
const option = {
    title: {
        text: '2D Gaussian Distribution',
        left: 'center',
        textStyle: {
            color: '#fff',
        },
    },
    tooltip: {
        formatter: function (params) {
            return `x: ${params.value[0].toFixed(2)}<br>y: ${params.value[1].toFixed(2)}<br>z: ${params.value[2]}`;
        },
    },
    xAxis3D: {
        type: 'value',
        name: 'X',
        interval: binWidth,
        nameTextStyle: {
            color: '#ffffff', // Make Y-axis name white
        },
        axisLabel: {
            textStyle: {
                color: '#ffffff', // Make Y-axis labels white
            },
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff', // Make axis line white
            },
        },
        axisPointer: {
            lineStyle: {
                color: '#ffffff', // Make cursor line white
            },
        },
    },
    yAxis3D: {
        type: 'value',
        name: 'Y',
        interval: binWidth,
        nameTextStyle: {
            color: '#ffffff', // Make Y-axis name white
        },
        axisLabel: {
            textStyle: {
                color: '#ffffff', // Make Y-axis labels white
            },
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff', // Make axis line white
            },
        },
        axisPointer: {
            lineStyle: {
                color: '#ffffff', // Make cursor line white
            },
        },
    },
    zAxis3D: {
        type: 'value',
        name: 'Amount',
        nameTextStyle: {
            color: '#ffffff', // Make Y-axis name white
        },
        axisLabel: {
            textStyle: {
                color: '#ffffff', // Make Y-axis labels white
            },
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff', // Make axis line white
            },
        },
        axisPointer: {
            lineStyle: {
                color: '#ffffff', // Make cursor line white
            },
        },
    },
    grid3D: {
        viewControl: {
            projection: 'perspective',
            rotateSensitivity: 5,
        },
        boxWidth: 100,
        boxDepth: 100,
        light: {
            main: {
                intensity: 1.2,
            },
            ambient: {
                intensity: 0.3,
            },
        },
    },
    grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      },
    series: [
        {
            type: 'bar3D',
            data: [],
            shading: 'realistic',
            realisticMaterial: {
                detailTexture: 'metal',
                roughness: 0.2,
            },
            barSize: 5, // Size of the bars
            emphasis: {
                itemStyle: {
                    color: '#ff0000',
                },
            },
        },
    ],
};

export async function updatePlot(meanX, meanY, sigmaX, sigmaY, rho, sampleData) {
    const frequency = Array.from({ length: bins }, () => Array(bins).fill(0));
    for (const [x, y] of sampleData) {
        const binX = Math.round((x + range) / binWidth);
        const binY = Math.round((y + range) / binWidth);

        if (binX >= 0 && binX < bins && binY >= 0 && binY < bins) {
            frequency[binX][binY]++;
        }
    }


    const barData = [];
    for (let i = 0; i < bins; i++) {
        for (let j = 0; j < bins; j++) {
            barData.push([(i - bins / 2) * binWidth, (j - bins / 2) * binWidth, frequency[i][j]]);
        }
    }

    option.series[0].data = barData;

    myChart.setOption(option);

}

myChart.setOption(option);
