import { articles } from "@/lib/articles";
import Image from "next/image";

export default function StaffPics() {
  return (
    <>
      {articles.map((item) => (
        item.staffPics === true && (
          <div className="eachCard mb-4" key={item.id}>
            <div className="personDetails">
              <div className="personProfile flex gap-2 items-center">
                <div className="w-4 h-4 rounded-full mt-[-1px]">
                  <Image src={`/${item.profileImage}`} alt="profile-image" width={20} height={20} className="rounded-full" />
                </div>
                <h4 className="text-sm color-[#242424]">{item.author}</h4>
              </div>
              <h3 className="articleHeading font-extrabold text-lg mt-1">{item.title}</h3>
            </div>
          </div>
        )
      ))}
    </>
  );
}
