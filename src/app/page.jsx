import Articles from "@/components/Articles";
import SideNavbar from "@/components/SideNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="dashboard-container flex gap-3">
        <div className="postsContainer w-[80%] pr-7 pt-5">
          <Articles></Articles>
        </div>
        <div className="border-l pl-7 pt-5 h-[100vh] w-[30%]">
          <SideNavbar></SideNavbar>
        </div>
      </div>
    </>
  );
}
