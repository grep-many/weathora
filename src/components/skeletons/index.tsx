import React from "react";

type Props = {
  fallback: React.ReactNode;
  component: React.ReactNode;
  className?: string;
};

const Suspense = ({ fallback, component, className }: Props) => (
  <section className={className}>
    <React.Suspense fallback={fallback}>{component}</React.Suspense>
  </section>
);

export default Suspense;
