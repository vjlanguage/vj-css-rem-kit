// author : vjlang team
import type { AutoRemController, InstallAutoRemOptions } from "../auto-rem";
import { installAutoRem } from "../auto-rem";

export function createVueAutoRemLifecycle(
  options: InstallAutoRemOptions = {},
): {
  onMounted: () => AutoRemController;
  onBeforeUnmount: () => void;
  getController: () => AutoRemController | null;
} {
  let controller: AutoRemController | null = null;

  return {
    onMounted: () => {
      controller?.destroy();
      controller = installAutoRem(options);
      return controller;
    },
    onBeforeUnmount: () => {
      controller?.destroy();
      controller = null;
    },
    getController: () => controller,
  };
}
