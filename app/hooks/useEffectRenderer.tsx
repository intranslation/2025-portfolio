import { useState } from "react";
import Career from "~/components/detailed-view/Career";
import Me from "~/components/detailed-view/Me";
import Mixtapes from "~/components/detailed-view/Mixtapes";
import type { EffectsRecord } from "~/types/effects";

export const useEffectRenderer = () => {
  const [views, setViews] = useState<EffectsRecord>({
    me: {
      render: <Me />,
      url: "me",
      name: "About Me",
    },
    career: {
      render: <Career />,
      url: "career",
      name: "My Career",
    },
    mixtapes: {
      render: <Mixtapes />,
      url: "career",
      name: "My Career",
    },
  });

  return { views, setViews };
};
