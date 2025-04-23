import type { JSX } from "react";

export type EffectNames = "me" | "career" | "mixtapes";

export type EffectItem = {
  render: JSX.Element;
  name: string;
  description?: string;
  url: string;
};

export type EffectsRecord = Record<EffectNames, EffectItem>;
