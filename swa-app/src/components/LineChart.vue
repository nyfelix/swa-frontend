<template>
    <v-card class="fill-height">
        <v-card-title>Wasserbezug Heute</v-card-title>

        <div>
            <apexchart type="line" :options="chartOptions" :series="series"></apexchart>
        </div>
    </v-card>
</template>


<script>

import VueApexCharts from 'vue-apexcharts'

    var dataSeries = [
            {
            "date": "2014-01-01",
            "value": 20000000
            },
            {
            "date": "2014-01-02",
            "value": 10379978
            },
            {
            "date": "2014-01-03",
            "value": 30493749
            },
            {
            "date": "2014-01-04",
            "value": 10785250
            },
            {
            "date": "2014-01-05",
            "value": 33901904
            },
            {
            "date": "2014-01-06",
            "value": 11576838
            },
            {
            "date": "2014-01-07",
            "value": 14413854
            },
            {
            "date": "2014-01-08",
            "value": 15177211
            },
            {
            "date": "2014-01-09",
            "value": 16622100
            },
            {
            "date": "2014-01-10",
            "value": 17381072
            }
    ];

    var ts2 = Date.parse(new Date());
    ts2 = ts2 - (5*3600*1000);
    var dates = [];
    for (var i = 0; i < 8; i++) {
        ts2 = ts2 + (1*3600*1000);
        var innerArr = [ts2, dataSeries[i].value];
        dates.push(innerArr)
    };

export default {
    name: 'LineChart',
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            series: [{
                name: 'Bezug',
                data: dates
            }],
            chartOptions: {
                chart: {
                    type: 'area',
                    stacked: false
                },
                xaxis: {
                    type: 'datetime',
                },
                yaxis: {
                    title: {
                        text: 'Bezug in m3'
                    }
                },
                annotations: {
                    yaxis: [{
                        y: 30000000,
                        borderColor: 'Red',
                        label: {
                            border: 0,
                            style: {
                                color: 'Red',
                            }
                        }
                    }],
                    xaxis: [{
                        x: Date.parse(new Date()),
                        x2: dates[dates.length - 1][0],
                        fillColor: 'Green',
                        opacity: 0.1,
                        label: {
                            style: {
                                fontSize: '10px',
                                color: '#fff',
                                background: 'Green',
                            }
                        }
                    }],
                }
            }
        }
    }      
}


</script>
