import { OutputTableComponent } from "../../classes/components/outputTableComponent";

export function FuncOutputTableOverride() {
  const { handleExitClick } = OutputTableComponent();

  const outputTableOverride = {
    button_exit: {
      onClick: (event) => handleExitClick(event),
    },
  };

  return { outputTableOverride };
}
