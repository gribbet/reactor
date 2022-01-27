import { LineChart } from "@carbon/charts-react";
import {
  Alignments,
  ScaleTypes,
  TickRotations
} from "@carbon/charts/interfaces";
import { css } from "@emotion/css";
import {
  Header,
  Modal,
  Switcher,
  SwitcherDivider,
  SwitcherItem,
  Tile
} from "carbon-components-react";
import { makeNoise2D } from "fast-simplex-noise";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { range } from "../utils";

const appStyle = css({
  display: "flex",
  alignItems: "flex-start",
  paddingTop: "3rem",

  "& .body": {
    height: "calc(100vh - 3rem)",
    flex: 1,
    overflowY: "auto",

    "& .dashboard": {
      display: "grid",
      gridGap: "1rem",
      gridTemplateColumns: "1fr 1fr 1fr",
      padding: "1rem"
    }
  },

  "& .chart": {
    overflow: "hidden"
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
        <Logo />
      </Header>
      <div className="body">
        <div className="dashboard">
          <DummyTemperatureChart title="Temperature 1" now={now} />
          <DummyTemperatureChart title="Temperature 2" now={now} />
          <DummyTemperatureChart title="Temperature 3" now={now} />
          <DummyTemperatureChart title="Temperature 4" now={now} />
          <DummyTemperatureChart title="Temperature 5" now={now} />
          <DummyTemperatureChart title="Temperature 6" now={now} />
          <DummyTemperatureChart title="Temperature 7" now={now} />
        </div>
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
      <TestModal />
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
    noise(group, time / 60 / 1000) * 10 + 25;

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
  <Tile className="chart">
    <LineChart
      data={groups.flatMap((group, i) =>
        range(0, 60).map(second => {
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
            domain: [now - 60 * 1000, now + 10 * 1000],
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

const logoStyle = css({
  fontSize: "1.25rem",
  fontFamily: "Inter",
  display: "flex",
  padding: "0 1rem",
  alignItems: "center",
  fontWeight: "bold",

  "& svg": {
    marginRight: "0.5rem"
  }
});

const Logo: FC = () => (
  <div className={logoStyle}>
    <svg width="24" height="24" viewBox="0 0 32 32">
      <path
        d="M26,22a3.6069,3.6069,0,0,0-2,.6L19.4143,18,18,19.4141,22.6,24a4.1755,4.1755,0,0,0-.4,1H9.8583A3.5525,3.5525,0,0,0,9.4,24L24,9.4a3.6069,3.6069,0,0,0,2,.6,4,4,0,1,0-3.8569-5H9.9A4.0785,4.0785,0,0,0,6,2a4,4,0,0,0,0,8,3.6066,3.6066,0,0,0,2-.6L12.5858,14,14,12.5859,9.4,8a4.175,4.175,0,0,0,.4-1H22.1418A3.5553,3.5553,0,0,0,22.6,8L8,22.6A3.6066,3.6066,0,0,0,6,22a4,4,0,1,0,3.8569,5H22.1A4.0118,4.0118,0,1,0,26,22ZM26,4a2,2,0,1,1-2,2A2.0058,2.0058,0,0,1,26,4ZM6,8A2,2,0,1,1,8,6,2.0058,2.0058,0,0,1,6,8ZM6,28a2,2,0,1,1,2-2A2.0058,2.0058,0,0,1,6,28Zm20,0a2,2,0,1,1,2-2A2.0058,2.0058,0,0,1,26,28Z"
        fill="white"
      />
    </svg>
    LogoType
  </div>
);

const TestModal: FC = () => {
  const [open, setOpen] = useState(false);

  const onRequestClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const timeout = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Modal
      open={open}
      size="xs"
      primaryButtonText="OK"
      onRequestClose={onRequestClose}
      onRequestSubmit={onRequestClose}
    >
      This is a test modal
    </Modal>
  );
};
