import { atom } from "recoil";

export const modalCountState = atom({
  key: "modalCountState",
  default: 0,
});

export const currentModalState = atom({
  key: "currentModalState",
  default: ['main'],
});

export const topModalZIndexState = atom({
  key: "topModalZIndexState",
  default: 'main',
});
