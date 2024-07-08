import { articles } from "@/lib/articles";
import StaffPicksItem from "./Item";

export default function StaffPicks() {
  return (
    <>
      {articles.map((item) => (
        <StaffPicksItem data={item} key={item.id} />
      ))}
    </>
  );
}
