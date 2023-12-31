import { Utils } from "../../classes/data_models/utils";
import { HelpersContext } from "../../contexts/data_models/context";

export function HelpersProvider({ children }) {
  const UtilsObject = Utils();

  return (
    <HelpersContext.Provider value={{ UtilsObject }}>
      {children}
    </HelpersContext.Provider>
  );
}
