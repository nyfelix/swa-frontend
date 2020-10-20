<template>
  <div class="content">
    <div class="container-fluid">

      <div class="row oben">

        <div class="col-md-6">
          <card>
            <template slot="header">
              <h4 class="card-title">Felder</h4>
              <p class="card-category"></p>
            </template>
            <template slot="default">
              <div class="row">
                <div class="col-md-6">
                  <card>
                    <div class="image-container">
                      <img src="../utils/dummy/hofacker.jpg" style="max-width: 100%; height: auto;">
                    </div>
                  </card>
                </div>
                <div class="col-md-6">
                  <card>
                    <div class="image-container">
                      <img src="../utils/dummy/langfeld.jpg" style="max-width: 100%; height: auto;">
                    </div>
                  </card>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <card>
                    <div class="image-container">
                      <img src="../utils/dummy/langfeld.jpg" style="max-width: 100%; height: auto;">
                    </div>
                  </card>
                </div>
                <div class="col-md-6">
                  <card>
                    <div class="image-container">
                      <img src="../utils/dummy/hofacker.jpg" style="max-width: 100%; height: auto;">
                    </div>
                  </card>
                </div>
              </div>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-success"></i> Gut
                <i class="fa fa-circle text-warning"></i> Beobachten
                <i class="fa fa-circle text-danger"></i> Handeln
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-clock-o"></i> Zuletz aktualisert vor 3 Minuten
              </div>
            </template>
          </card>
        </div>

        <div class="col-md-6">
          <div class="row">
            <card>
              <template slot="header">
                <h4 class="card-title">Wetter</h4>
                <p class="card-category"></p>
              </template>
              <template slot="default">
                <div class="image-container">
                <img src="../utils/dummy/meteo.jpg" style="max-width: 100%; height: auto;">
                </div>
              </template>
              <template slot="footer">
                <hr>
                <div class="stats">
                  <i class="fa fa-clock-o"></i> Zuletz aktualisert vor 3 Minuten
                </div>
              </template>
            </card>
          </div>
          <div class="row">
            <card>
              <template slot="header">
                <h4 class="card-title">Sensorkarte</h4>
                <p class="card-category"></p>
              </template>
              <template slot="default">
                <div class="image-container">
                <img src="../utils/dummy/map.jpg" style="max-width: 100%; height: auto;">
                </div>
              </template>
              <template slot="footer">
                <hr>
                <div class="stats">
                  <i class="fa fa-clock-o"></i> Zuletz aktualisert vor 3 Minuten
                </div>
              </template>
            </card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import LTable from 'src/components/Table.vue'
import Card from "src/components/Cards/Card.vue"

const tableColumns1 = ['Region', 'Verbrauch', 'Status'];
const tableColumns2 = ['Bezüger', 'Verbrauch', 'Status'];
const tableData1 = [{
    region: 'Müllishofen',
    verbrauch: "12'078",
    status: "Ok"
  },{
    region: 'Tafelberg',
    verbrauch: "12'078",
    status: "Ok"
  },{
    region: 'Kronau',
    verbrauch: "12'078",
    status: "Ok"
  },{
    region: 'Bunertau',
    verbrauch: "12'078",
    status: "Ok"
  },
];
const tableData2 = [{
    bezüger: 'Landwirt A',
    verbrauch: "12'078",
    status: "Ok"
  },{
    bezüger: 'Landwirt B',
    verbrauch: "12'078",
    status: "Ok"
  },{
    bezüger: 'Industrie AG',
    verbrauch: "12'078",
    status: "Ok"
  },{
    bezüger: 'Hydranten',
    verbrauch: "12'078",
    status: "Warnung"
  },{
    bezüger: 'Rest',
    verbrauch: "12'078",
    status: "Ok"
  },
]

export default {
  components: {
    LTable,
    Card
  },
  data() {
    return {
      table1: {
          columns: [...tableColumns1],
          data: [...tableData1]
        },
      table2: {
          columns: [...tableColumns2],
          data: [...tableData2]
        },
      region_color1: '#28a745',
      region_color2: '#28a745',
      region_color3: '#ffc107',
      region_color4: '#ffc107',
    };
  },
  methods: {

  },
};
</script>
<style>
 .oben .card {
   height: 96%
 }
</style>
