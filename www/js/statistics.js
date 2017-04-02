// This is a JavaScript file
var Statistics = function(){};

Statistics.prototype.init = function(){
    var ctx = document.querySelector("#score-diagram");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["'15.12.12","'15.12.12","'15.12.12","'15.12.12", "'16.2.31", "'16.4.31", "'16.6.31", "16.12.31", "'17.3.31"],
            datasets: [{
                type: 'line', // 追加
                fill: false,
                lineTension: 0,
                data: [
                    44, 33,44, 33,44, 33,44, 33, 38
                ],
                borderColor : "rgba(254,97,132,0.8)",
                backgroundColor : "rgba(254,97,132,0.5)",
            },{
                type: 'bar', // 追加
                data: [
                    92, 110, 97, 108, 98, 93, 108, 98, 93
                ],
                borderColor : "rgba(54,164,235,0.8)",
                backgroundColor : "rgba(54,164,235,0.5)",
            }]
        },
        options: {
            responsive: true,
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    display: false,
                    ticks: {
                        beginAtZero:true
                    }
                }],
                xAxes: [{
                    gridLines : {
                        display : false
                    }
                }],
            },
            tooltips: {
                enabled: false
            },
            animation: {
                onComplete: function () {
                    var chartInstance = this.chart,
                        ctx = chartInstance.ctx;
                    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
        
                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];                            
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                    });
                }
            }
        }
        
    });
};

Statistics.prototype.swipe = function() {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
    });
};

var statistics = new Statistics();