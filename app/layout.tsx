"use client";

import "@/styles/global.scss";
import { charcoal, neodgm } from "@/styles/local.fonts";
import { AnimatePresence } from "framer-motion";
import { RecoilRoot } from "recoil";
// import "98.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html lang="ko" className={(neodgm.className, charcoal.className)}>
        <body>{children}</body>
      </html>
    </RecoilRoot>
  );
}
