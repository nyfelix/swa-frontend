//#!./node_modules/.bin/ts-node
////////////////////////////////////////////////////////////////////
// Shows how to use forward compatibility APIs from InfluxDB 1.8. //
////////////////////////////////////////////////////////////////////
// [InfluxDB 2.0 API compatibility endpoints](https://docs.influxdata.com/influxdb/v1.8/tools/api/#influxdb-2-0-api-compatibility-endpoints)
// are part of the InfluxDB 1.x line since InfluxDB 1.8.0. This allows you to leverage InfluxDB 2.0 client libraries for both writing and
// querying data with Flux.
// https://docs.influxdata.com/influxdb/v1.8/about_the_project/releasenotes-changelog/#forward-compatibility

import {ClientOptions, InfluxDB} from '@influxdata/influxdb-client'

const username = ''
const password = ''

const database = 'swa-database'
const retentionPolicy = 'autogen'

const bucket = `${database}/${retentionPolicy}`

const clientOptions: ClientOptions = {
  url: 'http://swa-meshup_influx_1:8086',
  token: `${username}:${password}`,
}

const influxDB = new InfluxDB(clientOptions)

function queryExample() {
    console.log('*** QUERY ROWS ***')

    const queryAPI = influxDB.getQueryApi('')
    const query = `from(bucket: "${bucket}")
                |> range(start: -30d)
                |> filter(fn: (r) =>
                    r._measurement == "soil" and
                    r._field == "moisture"
                    )
                |> group(columns: ["device"], mode: "by")
                |> aggregateWindow(every: 1h, fn: mean)
                |> median()`
    queryAPI.queryRows(query, {
    next(row, tableMeta) {
        const o = tableMeta.toObject(row)
        console.log(`${o._time} ${o._measurement} : ${o._field}=${o._value}`)
    },
    error(error) {
        console.error(error)
    },
    complete() {
        console.log('\nFinished')
    },
    })
}


//SELECT median("moisture") AS "median_moisture" FROM "swa-database"."autogen"."soil" WHERE time > :dashboardTime: AND time < :upperDashboardTime: GROUP BY time(1h), "device" FILL(null)