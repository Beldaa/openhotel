import { SkinColor } from "shared/enums/main.ts";
import { getRandomNumber } from "@oh/utils";

export const getRandomSkinColor = (): SkinColor => {
  let skins = Object.values(SkinColor);
  skins = skins.slice(0, skins.length / 2);
  return SkinColor[skins[getRandomNumber(0, skins.length - 1)]];
};
