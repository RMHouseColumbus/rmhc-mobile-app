import React from "react";

export function createContext<T>(
  name: string,
  defaultValue: T
): React.Context<T> {
  const context = React.createContext<T>(defaultValue);
  context.displayName = name;

  return context;
}
