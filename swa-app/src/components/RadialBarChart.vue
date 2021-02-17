<template>
    <v-card class="fill-height">
        <v-card-title>Tageskontingente</v-card-title>
        <v-divider inset></v-divider>
        <div>
            <apexchart type="radialBar" height="250" :options="chartOptions2" :series="series2"></apexchart>
        </div>
        <v-divider inset></v-divider>
        <div>
            <apexchart type="radialBar" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>
    </v-card>
</template>


<script>

import VueApexCharts from 'vue-apexcharts'

export default {
    name: 'RadialBarChart',
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            series: [76, 67, 61, 90],
            chartOptions: {
                chart: {
                    height: 390,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 5,
                            size: '30%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                show: false,
                            }
                        }
                    }
                },
                colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
                labels: ['Amriswil', 'Düttingen', 'Vorstadt', 'Nestlisbach'],
                legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'left',
                offsetX: 160,
                offsetY: 15,
                labels: {
                    useSeriesColors: true,
                },
                markers: {
                    size: 0
                },
                formatter: function(seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
                itemMargin: {
                    vertical: 3
                }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }]
            },
            series2: [70],
            chartOptions2: {
                chart: {
                height: 250,
                type: 'radialBar',
                },
                plotOptions: {
                radialBar: {
                    hollow: {
                    size: '70%',
                    }
                },
                },
                labels: ['Total'],
            },         
        }
    }      
}


</script>
