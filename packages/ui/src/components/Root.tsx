import React, { FC, lazy, Suspense } from "react";

const App = lazy(async () => {
  const { App } = await import("./App");
  return { default: App };
});

export const Root: FC = () => (
  <Suspense fallback="">
    <App />
  </Suspense>
);
