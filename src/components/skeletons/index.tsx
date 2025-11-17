import React from "react";

type Props = {
  fallback: React.ReactNode;
  component: React.ReactNode;
};

const Suspense = ({ fallback, component }: Props) => {
  return <React.Suspense fallback={fallback}>{component}</React.Suspense>;
};

export default Suspense;
