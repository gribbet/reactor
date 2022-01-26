import { LineChart } from "@carbon/charts-react";
import { ScaleTypes } from "@carbon/charts/interfaces";
import { Tile } from "carbon-components-react";
import React, { FC } from "react";

const data = [
  {
    group: "Dataset 1",
    date: "2019-01-01T08:00:00.000Z",
    value: 50000,
    surplus: 476211802.97866595
  },
  {
    group: "Dataset 1",
    date: "2019-01-05T08:00:00.000Z",
    value: 65000,
    surplus: 897832774.7638109
  },
  {
    group: "Dataset 1",
    date: "2019-01-08T08:00:00.000Z",
    value: null,
    surplus: 21442.064926422994
  },
  {
    group: "Dataset 1",
    date: "2019-01-13T08:00:00.000Z",
    value: 49213,
    surplus: 852455991.9001114
  },
  {
    group: "Dataset 1",
    date: "2019-01-17T08:00:00.000Z",
    value: 51213,
    surplus: 1259417637.1519842
  },
  {
    group: "Dataset 2",
    date: "2019-01-02T08:00:00.000Z",
    value: 0,
    surplus: 12185.589158981405
  },
  {
    group: "Dataset 2",
    date: "2019-01-06T08:00:00.000Z",
    value: 57312,
    surplus: 1397870732.1172936
  },
  {
    group: "Dataset 2",
    date: "2019-01-08T08:00:00.000Z",
    value: 27432,
    surplus: 173538380.69306242
  },
  {
    group: "Dataset 2",
    date: "2019-01-15T08:00:00.000Z",
    value: 70323,
    surplus: 587287601.5442743
  },
  {
    group: "Dataset 2",
    date: "2019-01-19T08:00:00.000Z",
    value: 21300,
    surplus: 166202666.24906167
  },
  {
    group: "Dataset 3",
    date: "2019-01-01T08:00:00.000Z",
    value: 40000,
    surplus: 868618384.0363519
  },
  {
    group: "Dataset 3",
    date: "2019-01-05T08:00:00.000Z",
    value: null,
    surplus: 16499.84799555454
  },
  {
    group: "Dataset 3",
    date: "2019-01-08T08:00:00.000Z",
    value: 18000,
    surplus: 324608856.8411795
  },
  {
    group: "Dataset 3",
    date: "2019-01-13T08:00:00.000Z",
    value: 39213,
    surplus: 710291991.593765
  },
  {
    group: "Dataset 3",
    date: "2019-01-17T08:00:00.000Z",
    value: 61213,
    surplus: 1177618538.8833945
  },
  {
    group: "Dataset 4",
    date: "2019-01-02T08:00:00.000Z",
    value: 20000,
    surplus: 216684106.85547763
  },
  {
    group: "Dataset 4",
    date: "2019-01-06T08:00:00.000Z",
    value: 37312,
    surplus: 374606060.393814
  },
  {
    group: "Dataset 4",
    date: "2019-01-08T08:00:00.000Z",
    value: 51432,
    surplus: 712136144.7031991
  },
  {
    group: "Dataset 4",
    date: "2019-01-15T08:00:00.000Z",
    value: 25332,
    surplus: 246817654.4145573
  },
  {
    group: "Dataset 4",
    date: "2019-01-19T08:00:00.000Z",
    value: null,
    surplus: 14260.31319145145
  }
];
export const App: FC = () => (
  <Tile>
    <LineChart
      data={data}
      options={{
        title: "Line (time series)",
        axes: {
          bottom: {
            title: "2019 Annual Sales Figures",
            mapsTo: "date",
            scaleType: ScaleTypes.TIME
          },
          left: {
            mapsTo: "value",
            title: "Conversion rate",
            scaleType: ScaleTypes.TIME
          }
        },
        curve: "curveMonotoneX",
        height: "400px",
        toolbar: { enabled: false }
      }}
    />
  </Tile>
);
