export function renderTreemap(containerId, jsonData) {
    const chart = echarts.init(document.getElementById(containerId));

    const option = {
        title: {
            text: 'Package dependencies',
            left: 'center',
            textStyle: {
                color: '#fff',
            },
        },
        tooltip: {
            formatter: function (info) {
                return `${info.name}: ${info.value}`;
            }
        },
        series: [
            {
                type: 'treemap',
                data: [jsonData],
                label: {
                    show: true,
                    formatter: '{b}'
                },
                leafDepth: 1,
                levels: [
                    {
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 1,
                            gapWidth: 1
                        }
                    }
                ]
            }
        ]
    };

    chart.setOption(option);
}
