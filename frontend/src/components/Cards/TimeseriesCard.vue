<template>
  <div class="card">
    <div class="card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div v-if="isError">Fehler</div>
    <div v-else-if="isLoading">Laden</div>
    <!--<div v-else>Alles gut</div>-->
    <div v-else class="card-body" style="position: relative;">
      <line-chart style="position: relative; height:40vh"
        :chartData="chartdata"
        :options="options"
      ></line-chart>
      <!--<div class="alert alert-info" v-if="!loaded">
      Loading data...
      </div>-->
    </div>
    <div class="card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
  import Card from './Card.vue'
  import LineChart from 'src/components/Charts/LineChart.js'
  //import query2 from 'src/influx/query2.ts'

  export default {
    name: 'timeseries',
    components: {
      Card,
      LineChart
    },
    props: {
      chartdata: {
        type: Object,
        default: null
      },
      isLoading: false,
      isError: false
    },
    data () {
      return {
        options: { responsive: true, maintainAspectRatio: false }
      }
    }
  }
  
</script>

<style>

</style>