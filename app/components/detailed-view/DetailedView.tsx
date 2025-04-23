import { useEffectRenderer } from "~/hooks/useEffectRenderer";
import type { EffectNames } from "~/types/effects";

interface DetailedViewProps {
  effectToBeRendered: EffectNames;
}

export default function DetailedView({
  effectToBeRendered,
}: DetailedViewProps) {
  const { views } = useEffectRenderer();
  return <>{views[effectToBeRendered].render}</>;
}
