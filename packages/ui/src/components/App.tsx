import { LineChart } from "@carbon/charts-react";
import { ScaleTypes } from "@carbon/charts/interfaces";
import { css } from "@emotion/css";
import {
  Header,
  HeaderName,
  Switcher,
  SwitcherDivider,
  SwitcherItem,
  Tile
} from "carbon-components-react";
import React, { FC } from "react";
import { range } from "../utils";

const appStyle = css({
  display: "flex",

  "& .body": {
    flex: 1
  }
});

export const App: FC = () => (
  <div className={appStyle}>
    <Header>
      <HeaderName prefix="">Reactor</HeaderName>
    </Header>
    <Tile className="body">
      <LineChart
        data={["A367", "P374", "Q323"].flatMap(group =>
          range(0, 60).map(minute => ({
            group,
            time: Date.now() - minute * 60 * 1000,
            value: Math.random()
          }))
        )}
        options={{
          title: "Temperatures",
          axes: {
            bottom: {
              domain: [Date.now() - (60 * 60 * 1000) / 2, Date.now()],
              mapsTo: "time",
              scaleType: ScaleTypes.TIME
            },
            left: {
              mapsTo: "value",
              title: "Temperature"
            }
          },
          curve: "curveMonotoneX",
          height: "400px",
          toolbar: { enabled: false },
          tooltip: { enabled: false },
          points: { radius: 0, enabled: false }
        }}
      />
    </Tile>
    <Switcher>
      <SwitcherItem isSelected>Link 1</SwitcherItem>
      <SwitcherDivider />
      <SwitcherItem>Link 2</SwitcherItem>
      <SwitcherItem>Link 3</SwitcherItem>
      <SwitcherItem>Link 4</SwitcherItem>
      <SwitcherItem>Link 5</SwitcherItem>
      <SwitcherDivider />
      <SwitcherItem>Link 6</SwitcherItem>
    </Switcher>
  </div>
);
