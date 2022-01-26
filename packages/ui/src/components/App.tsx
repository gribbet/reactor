import { LineChart } from "@carbon/charts-react";
import {
  Alignments,
  ScaleTypes,
  TickRotations
} from "@carbon/charts/interfaces";
import { css } from "@emotion/css";
import {
  Header,
  HeaderName,
  Switcher,
  SwitcherDivider,
  SwitcherItem,
  Tile
} from "carbon-components-react";
import { makeNoise2D } from "fast-simplex-noise";
import React, { FC, useEffect, useMemo, useState } from "react";
import { range } from "../utils";

const appStyle = css({
  display: "flex",
  paddingTop: "3rem",

  "& .body": {
    flex: 1,
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: "1fr 1fr 1fr",
    padding: "1rem"
  }
});

const groups = ["A367", "P374", "Q323"];

export const App: FC = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(interval);
  });

  return (
    <div className={appStyle}>
      <Header>
        <HeaderName prefix="">Reactor</HeaderName>
      </Header>
      <div className="body">
        <DummyTemperatureChart title="Temperature 1" now={now} />
        <DummyTemperatureChart title="Temperature 2" now={now} />
        <DummyTemperatureChart title="Temperature 3" now={now} />
        <DummyTemperatureChart title="Temperature 4" now={now} />
        <DummyTemperatureChart title="Temperature 5" now={now} />
      </div>
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
};

interface DummyTemperatureChartProps {
  title: string;
  now: number;
}

const DummyTemperatureChart: FC<DummyTemperatureChartProps> = ({
  title,
  now
}) => {
  const noise = useMemo(() => makeNoise2D(), []);

  const temperature = (group: number, time: number) =>
    noise(group, time / 60 / 1000 / 10) * 10 + 25;

  return (
    <DummyChart title={title} now={now} min={10} max={40} value={temperature} />
  );
};

interface DummyChartProps {
  title: string;
  now: number;
  min: number;
  max: number;
  value: (group: number, time: number) => number;
}

const DummyChart: FC<DummyChartProps> = ({ title, now, min, max, value }) => (
  <Tile>
    <LineChart
      data={groups.flatMap((group, i) =>
        range(0, 5 * 60).map(second => {
          const time = now - second * 1000;
          return {
            group,
            time,
            value: value(i, time)
          };
        })
      )}
      options={{
        title,
        timeScale: {
          addSpaceOnEdges: 0
        },
        axes: {
          bottom: {
            domain: [now - 5 * 60 * 1000, now + 60 * 1000],
            mapsTo: "time",
            scaleType: ScaleTypes.TIME,
            ticks: {
              number: 2,
              rotation: TickRotations.NEVER
            }
          },
          left: {
            domain: [min, max],
            mapsTo: "value"
          }
        },
        curve: "curveMonotoneX",
        height: "300px",
        toolbar: { enabled: false },
        tooltip: { enabled: false },
        points: { radius: 0, enabled: false },
        legend: { alignment: Alignments.CENTER, clickable: false }
      }}
    />
  </Tile>
);
