// author : vjlang team
import { onBeforeUnmount, onMounted } from "vue";
import { createVueAutoRemLifecycle } from "../src/adapters/vue";
import "../styles/responsive.css";

export function useResponsiveTypography() {
  const autoRem = createVueAutoRemLifecycle();

  onMounted(() => {
    autoRem.onMounted();
  });

  onBeforeUnmount(() => {
    autoRem.onBeforeUnmount();
  });

  return autoRem;
}
