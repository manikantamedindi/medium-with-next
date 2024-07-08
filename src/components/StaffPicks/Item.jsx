import Image from "next/image";
export default function StaffPicksItem({ data }) {
  return (
    <>
      {data.staffPics === true && (
        <div className="eachCard mb-4">
          <div className="personDetails">
            <div className="personProfile flex gap-2 items-center">
              <div className="w-4 h-4 rounded-full mt-[-1px]">
                <Image src={`/${data.profileImage}`} alt="profile-image" width={20} height={20} className="rounded-full" />
              </div>
              <h4 className="text-sm color-[#242424]">{data.author}</h4>
            </div>
            <h3 className="articleHeading font-extrabold text-lg mt-1">{data.title}</h3>
          </div>
        </div>
      )}
    </>
  )
}