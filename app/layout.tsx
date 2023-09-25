"use client";

import "@/styles/global.scss";
import { chicagoFLF, neodgm } from "@/styles/local.fonts";
import { RecoilRoot } from "recoil";
import Providers from "@/api/tanstack/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html lang="ko" className={chicagoFLF.className}>
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    </RecoilRoot>
  );
}
