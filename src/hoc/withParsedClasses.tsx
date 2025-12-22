// withParsedClasses.tsx
import React from "react";
import { parseClass } from "../utils/parseClass";

export function withParsedClasses<T extends { className?: string }>(
  Component: React.ComponentType<T>
) {
  const WrappedComponent = (props: T) => {
    const parsedClassName = (props.className || "")
      .split(" ")
      .map((cls) => parseClass(cls))
      .join(" ");

    return <Component {...props} className={parsedClassName} />;
  };

  // Preserve the original component's display name
  WrappedComponent.displayName = Component.displayName || Component.name || 'Component';

  return WrappedComponent;
}