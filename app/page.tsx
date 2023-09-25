import dynamic from "next/dynamic";
import { getProjects } from "@/api/getProjects";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "@/api/tanstack/getQueryClient";

const Main = dynamic(() => import("@/components/main/main"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default async function Home() {
  // const cachedData = await getProjects()

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["projects"], getProjects);
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <Hydrate state={dehydratedState}>
        <Main />;
        <div id="modal-root" />
      </Hydrate>
    </>
  );
}
