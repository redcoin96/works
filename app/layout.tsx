"use client";

import "@/styles/global.scss";
import { charcoal, neodgm } from "@/styles/local.fonts";
import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html lang="ko" className={(charcoal.className)}>
        <body>{children}</body>
      </html>
    </RecoilRoot>
  );
}
