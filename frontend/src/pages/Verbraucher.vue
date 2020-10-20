<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <chart-card
            :chart-data="barChart.data"
            :chart-options="barChart.options"
            :chart-responsive-options="barChart.responsiveOptions"
            chart-type="Bar">
            <template slot="header">
              <h4 class="card-title">Durchschnittsverbrauch Haushalt</h4>
              <p class="card-category">Durchschnittswerte pro Person im privaten Haushalt</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Durchschnitt
                <i class="fa fa-circle text-danger"></i> Eigenverbrauch
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-check"></i> Data information certified
              </div>
            </template>
          </chart-card>
        </div>

        <div class="col-md-6">
          <card>
            <template slot="header">
              <h4 class="card-title">Empfehlungen der Wasserversorgung</h4>
              <p class="card-category">Helfen Sie mit!</p>
            </template>
            <div>
              <div class="alert alert-info">
                <span>Keine Schwimmbäder füllen</span>
              </div>
              <div class="alert alert-info">
                <span>Auto nicht waschen</span>
              </div>
              <div class="alert alert-info">
                <span>Rasen nicht wässern</span>
              </div>
              <br>
            </div>
            <template slot="footer">
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> vor 3 Minuten aktualisiert
              </div>
            </template>
          </card>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ChartCard from 'src/components/Cards/ChartCard.vue'
  import StatsCard from 'src/components/Cards/StatsCard.vue'

  export default {
    components: {
      ChartCard,
    },
    data () {
      return {
        barChart: {
          data: {
            labels: ['Do', 'Fr', 'Sa', 'So', 'Mo', 'Di', 'Mi'],
            series: [
              [542, 443, 320, 780, 553, 453, 326],
              [412, 243, 280, 580, 453, 353, 300]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
      }
    }
  }
</script>
<style>

</style>
