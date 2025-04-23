import { useParams } from "react-router";
import DetailedView from "~/components/detailed-view/DetailedView";
import type { EffectNames } from "~/types/effects";
import SubRoute from "~/animations/transitions/SubRoute";

export default function DetailedViewRoute() {
  const { "effect-name": effect } = useParams<{
    "effect-name": EffectNames;
  }>();
  return (
    <SubRoute effectToBeRendered={effect}>
      {effect && <DetailedView effectToBeRendered={effect} />}
    </SubRoute>
  );
}
