import { user } from "@/lib/user";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header>
        <div className="flex px-10 py-5">
          <div className="companyLogo w-1/2">
            <h1 className="text-2xl text-blod">MyDev.</h1>
          </div>
          <div className="navActionsContainer w-1/2">
            <ul className="flex justify-end">
              <li>
                <button>
                  Write
                </button>
              </li>
              <li>
                <button>

                </button>
              </li>
              <li>
                <button>
                  <Image src={`/${user.image}`} width={30} height={30} alt="Profile Iamge" className="border w-full h-full rounded-full object-cover" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}