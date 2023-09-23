import { atom } from "recoil";
import { ReactElement } from "react";

export const modalsState = atom<ReactElement[]>({
  key: "modalsState",
  default: [],
});

export const modalCountState = atom({
  key: "modalCountState",
  default: 0,
});

export const topModalZIndexState = atom({
  key: "topModalZIndexState",
  default: 'main',
});
