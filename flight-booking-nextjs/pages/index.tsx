import type { NextPage } from "next";
import ShapeContainer from "@/components/shape-container";
import FrameComponent4 from "@/components/frame-component4";
import SymbolSorting from "@/components/symbol-sorting";
import PathPassagewayPassage from "@/components/path-passageway-passage";
import PathPassagewayPassagePath from "@/components/path-passageway-passagepath";
import FrameComponent3 from "@/components/frame-component3";
import FrameComponent2 from "@/components/frame-component2";
import FooterComponent from "@/components/footerComponent";

const Home: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start gap-[60px] tracking-[normal] mq750:gap-[30px_60px]">
      <ShapeContainer />
      <FrameComponent4 />
      <SymbolSorting />
      <PathPassagewayPassage />
      <PathPassagewayPassagePath />
      <FrameComponent3 />
      <FrameComponent2 />
      <FooterComponent />
    </div>
  );
};

export default Home;
