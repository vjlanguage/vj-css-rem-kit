// author : vjlang team
import type { AutoRemController, InstallAutoRemOptions } from "../auto-rem";
import { installAutoRem } from "../auto-rem";

export type ReactAutoRemEffect = () => () => void;

export function createReactAutoRemEffect(
  options: InstallAutoRemOptions = {},
): ReactAutoRemEffect {
  return () => {
    const controller = installAutoRem(options);
    return () => {
      controller.destroy();
    };
  };
}

export function createReactAutoRemManager(
  options: InstallAutoRemOptions = {},
): {
  mount: () => AutoRemController;
  unmount: () => void;
  getController: () => AutoRemController | null;
} {
  let controller: AutoRemController | null = null;

  return {
    mount: () => {
      controller?.destroy();
      controller = installAutoRem(options);
      return controller;
    },
    unmount: () => {
      controller?.destroy();
      controller = null;
    },
    getController: () => controller,
  };
}
