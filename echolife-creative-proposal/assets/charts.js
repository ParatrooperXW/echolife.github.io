// assets/charts.js — EchoLife Creative Proposal Charts
(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Chart: Monthly Emotion Curve ---
  var chartEmotion = echarts.init(document.getElementById('chart-emotion'), null, { renderer: 'svg' });
  chartEmotion.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      appendToBody: true,
      backgroundColor: '#fff',
      borderColor: rule,
      textStyle: { color: ink, fontSize: 13 }
    },
    legend: {
      data: ['积极指数', '压力指数'],
      top: 0,
      textStyle: { color: muted, fontSize: 12 }
    },
    grid: { top: 40, right: 20, bottom: 30, left: 40 },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, fontSize: 12 }
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 10,
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      axisLabel: { color: muted, fontSize: 12 }
    },
    series: [
      {
        name: '积极指数',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: { width: 2.5, color: accent },
        itemStyle: { color: accent },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: accent + '30' },
            { offset: 1, color: accent + '05' }
          ])
        },
        data: [6.5, 5.8, 7.2, 6.9, 7.8, 8.1, 7.5, 6.2, 7.0, 8.5, 7.3, 8.8]
      },
      {
        name: '压力指数',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: { width: 2.5, color: accent2 },
        itemStyle: { color: accent2 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: accent2 + '25' },
            { offset: 1, color: accent2 + '05' }
          ])
        },
        data: [7.2, 8.0, 6.5, 7.8, 5.9, 5.2, 6.8, 8.5, 7.1, 4.8, 6.0, 4.2]
      }
    ]
  });
  window.addEventListener('resize', function() { chartEmotion.resize(); });

  // --- Chart: Top Keywords ---
  var chartKeywords = echarts.init(document.getElementById('chart-keywords'), null, { renderer: 'svg' });
  chartKeywords.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      appendToBody: true,
      backgroundColor: '#fff',
      borderColor: rule,
      textStyle: { color: ink, fontSize: 13 }
    },
    grid: { top: 10, right: 30, bottom: 30, left: 80 },
    xAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      axisLabel: { color: muted, fontSize: 12 }
    },
    yAxis: {
      type: 'category',
      data: ['值得', '累', '开心', '成长', '家人', '旅行', '运动', '学习', '感恩', '焦虑'],
      inverse: true,
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: ink, fontSize: 13 }
    },
    series: [{
      type: 'bar',
      barWidth: 18,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: accent + '80' },
          { offset: 1, color: accent }
        ]),
        borderRadius: [0, 4, 4, 0]
      },
      data: [63, 47, 41, 38, 35, 29, 27, 25, 23, 21]
    }]
  });
  window.addEventListener('resize', function() { chartKeywords.resize(); });
})();
