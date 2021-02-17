<template>
  <div class="content">
    <div class="container-fluid">

      <div class="row justify-content-center">
        <div class="col-3 text-center">
          <div class="col-md-offset-1">
            <button class="btn btn-primary btn-fill btn-block" v-on:click="getData()">Get Data</button>
          </div>
        </div>
      </div>
      <br>

      <div class="row">
        <div class="col-md-12">
          <timeseries :chartdata="moisture.seriesdata">
            <template slot="header">
              <h4 class="card-title">Bodenfeuchtigkeit</h4>
              <p class="card-category">24 Hours performance</p>
            </template>
            <template slot="footer">
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Updated 3 minutes ago
              </div>
            </template>
          </timeseries>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <timeseries
            :chartdata="temperature.seriesdata"
            :isLoading="isLoading"
            :isError="isError">
            <template slot="header">
              <h4 class="card-title">Bodentemperatur</h4>
              <p class="card-category">24 Hours performance</p>
            </template>
            <template slot="footer">
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Updated 3 minutes ago
              </div>
            </template>
          </timeseries>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import Timeseries from 'src/components/Cards/TimeseriesCard.vue'
import axios from 'axios'

  export default {
    components: {
      Timeseries
    },
    data () {
      return {
        temperature: [],
        moisture: [],
        isLoading: false,
        isError: false
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      async getData() {
        //this.isLoading = true;
        axios
          .get('http://localhost:1880/query')
          .then(response => {
            console.log(response);
            this.temperature = response.data;
            this.moisture = response.data;
            this.isLoading = false;
          })
          .catch(error => {
            console.log(error);
            this.isError = true;
          })
      },
      /*
      fillData() {
        this.moisture= {
          seriesdata : {
            labels: [1, 2, 3, 4],
            datasets: [
              {
                label: 'Mois One',
                backgroundColor: '#f87979',
                data: [24, 20, 24, 0]
              }, {
                label: 'Mois Two',
                backgroundColor: '#25B386',
                data: [22, 23, 25, 21]
              }
            ]
          }
        },
        this.temperature = {
          seriesdata : {
            labels: [1, 2, 3, 4],
            datasets: [
              {
                label: 'Mois One',
                backgroundColor: '#f87979',
                data: [0, 1, 2, 5]
              }, {
                label: 'Mois Two',
                backgroundColor: '#25B386',
                data: [0, 1, 2, this.getRandomInt()]
              }
            ]
          }
        }
      }*/
    }
  }
</script>
<style>

</style>
