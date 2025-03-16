//canvas要素の取得
const ctx = document.getElementById('skillsChart').getContext('2d');

//レーダーチャートのデータ
const data = {
    labels: ['C/C++', 'C#', 'Python', 'JavaScript'],
    datasets: [{
        label: 'スキルレベル',
        data: [4.5, 3.8, 2.8, 2.4],
        backgroundColor: 'rgba(224, 168, 0, 0.2)',
        borderColor: 'rgba(225, 168, 0, 1)',
        pointBackgroundColor: 'rgba(224, 168, 0, 1)',
        borderWidth: 2,
    }]
};

//レーダーチャートのオプション設定
const options = {
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
    responsive: true,
    maintainAspectRatio: false,
};

//Chart.jsを使ってレーダーチャートを作成
const skillsChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options,
});