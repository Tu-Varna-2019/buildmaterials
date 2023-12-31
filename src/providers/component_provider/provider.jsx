import { ComponentState } from "../../classes/components/componentState";
import { ComponentStateContext } from "../../contexts/data_models/context";

export function ComponentStateProvider({ children }) {
  const ComponentStateObject = ComponentState();

  return (
    <ComponentStateContext.Provider value={{ ComponentStateObject }}>
      {children}
    </ComponentStateContext.Provider>
  );
}
