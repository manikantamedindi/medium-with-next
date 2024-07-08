import { articles } from "@/lib/articles";
import StaffPicksItem from "./Item";

export default function StaffPicks() {
  return (
    <>
      <h4 className="mb-3">Staff Picks</h4>
      {articles.map((item) => (
        <StaffPicksItem data={item} key={item.id} />
      ))}
    </>
  );
}
