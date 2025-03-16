//canvas要素の取得
const toolsChartCanvas = document.getElementById('toolsChart').getContext('2d');

//レーダーチャートのデータ
const toolsChartData = {
    labels: ['Unity', 'WPF(C#)', 'Qt(C++, Python)'],
    datasets: [{
        label: 'ツール使用スキル',
        data: [4, 3, 3],
        backgroundColor: 'rgba(48, 224, 144, 0.2)',
        borderColor: 'rgba(48, 224, 144, 1)',
        pointBackgroundColor: 'rgba(48, 224, 144, 1)',
        borderWidth: 2,
    }]
};

//レーダーチャートのオプション設定
const toolsChartOptions = {
    scales: {
        r: {
            min: 0,
            max: 5,
            ticks: {
                beginAtZero: true,
                stepSize: 1,
                precision: 0,
            },
            // グリッドライン
            grid: {
                color: 'gray'
            },
            pointLabels: {
                color: 'white',
                font: {
                    size:12
                }
            }
        }
    },
    plugins: {
        legend: {
            labels: {
                color: 'white',
                font: {
                    size:14,
                }
            }
        }
    },
    responsive:true,
    maintainAspectRatio: false,
};

//Chart.jsを使ってレーダーチャートを作成
const toolsChart = new Chart(toolsChartCanvas, {
    type: 'radar',
    data: toolsChartData,
    options: toolsChartOptions,
});