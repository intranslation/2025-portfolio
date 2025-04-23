import { HomeView } from "~/components/home/HomeView";
import ScaleOut from "~/animations/transitions/ScaleOut";

export default function HomePage() {
  return (
    <ScaleOut>
      <HomeView />
    </ScaleOut>
  );
}
