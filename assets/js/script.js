// ====== Chart Data Sets ======
const chartData = {
  weekly: [1200, 1900, 3000, 2500, 2200, 2800, 3500],
  monthly: [12000, 15500, 16000, 14500],
  yearly: [150000, 180000, 175000, 190000]
};

const chartLabels = {
  weekly: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  monthly: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  yearly: ['Q1', 'Q2', 'Q3', 'Q4']
};

const ctx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: chartLabels.weekly,
    datasets: [{
      label: 'Revenue',
      data: chartData.weekly,
      backgroundColor: '#913131ad',
      borderColor: '#d4b669',
      borderWidth: 2,
      tension: 0.3,
      fill: true,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#913131'
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#913131' },
        grid: { color: '#91313122' }
      },
      y: {
        ticks: { color: '#913131' },
        grid: { color: '#91313122' }
      }
    }
  }
});

// ====== Switch Buttons ======
function updateChart(period) {
  revenueChart.data.labels = chartLabels[period];
  revenueChart.data.datasets[0].data = chartData[period];
  revenueChart.update();
}

