let options1 = {
        series: [70],
        chart: {
        height: 300,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
          }
        },
      },
      labels: ['Gadenia'],
//   responsive: [
//     {
//       breakpoint: undefined,
//       options: {},
//     },
//   ],
};

let options2 = {
    series: [50],
    chart: {
    height: 300,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '50%',
      }
    },
  },
  labels: ['Rose '],
//   responsive: [
//     {
//       breakpoint: undefined,
//       options: {},
//     },
//   ],
};

let options3 = {
    series: [30],
    chart: {
    height: 300,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '50%',
      }
    },
  },
  labels: ['Lilly'],
//   responsive: [
//     {
//       breakpoint: undefined,
//       options: {},
//     },
//   ],
};

let options4 = {
      series: [90],
    chart: {
    height: 300,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '50%', 
      }
    },
  },
  labels: ['Chrysanthemum '],
//   responsive: [
//     {
//       breakpoint: undefined,
//       options: {},
//     },
//   ],};
};


//creation of the first chart with ApexCharts
let chart1 = new ApexCharts(
  document.querySelector("#responsive-chart1"),
  options1
);
chart1.render();

//creation of the second chart with ApexCharts
let chart2 = new ApexCharts(
  document.querySelector("#responsive-chart2"),
  options2
);
chart2.render();

//creation of the third chart with ApexCharts
let chart3 = new ApexCharts(
  document.querySelector("#responsive-chart3"),
  options3
);
chart3.render();

//creation of the forth chart with ApexCharts
let chart4 = new ApexCharts(
  document.querySelector("#responsive-chart4"),
  options4
);
chart4.render();
