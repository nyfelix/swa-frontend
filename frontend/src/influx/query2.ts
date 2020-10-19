
//#!./node_modules/.bin/ts-node
//////////////////////////////////////////
// Shows how to use InfluxDB query API. //
//////////////////////////////////////////

import {InfluxDB, FluxTableMetaData} from "@influxdata/influxdb-client"

const database = 'swa-database'
const retentionPolicy = 'autogen'
const url= 'http://swa-meshup_influx_1:8086'
const token= `:`    //not defined locally
const org= ``       //for influx2.0
const bucket = `${database}/${retentionPolicy}`

//import {url, token, org} from './env'

const queryApi = new InfluxDB({url, token}).getQueryApi()
const fluxQuery =
  `from(bucket:"${bucket}")
  |> range(start: -30d)
  |> filter(fn: (r) =>
      r._measurement == "soil" and
      r._field == "moisture"
      )
  |> group(columns: ["device"], mode: "by")
  |> aggregateWindow(every: 1h, fn: mean)
  |> median()`

console.log('*** QUERY ROWS ***')
// Execute query and receive table metadata and rows.
// https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/
queryApi.queryRows(fluxQuery, {
  next(row: string[], tableMeta: FluxTableMetaData) {
    const o = tableMeta.toObject(row)
    // console.log(JSON.stringify(o, null, 2))
    console.log(
      `${o._time} ${o._measurement} in '${o.location}' (${o.example}): ${o._field}=${o._value}`
    )
  },
  error(error: Error) {
    console.error(error)
    console.log('\nFinished ERROR')
  },
  complete() {
    console.log('\nFinished SUCCESS')
  },
})