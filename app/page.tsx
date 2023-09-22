import dynamic from "next/dynamic";

const Main = dynamic(() => import("@/components/main/main"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return <Main />;
}
