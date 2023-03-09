let options1 = {
  chart: {
    type: "line",
  },
  series: [
    {
      name: "sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
  responsive: [
    {
      breakpoint: undefined,
      options: {},
    },
  ],
};

let options2 = {};

let options3 = {};

let options4 = {};

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
