"use client"

import { useRouter } from "next/navigation";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { BookText, FolderClosed, Folders, Share2, Building, ChartColumnIncreasing, 
         Settings, ChevronLeft, /* Search */ } from "lucide-react";

const Dashboard = () => {
  const router =  useRouter();
  const [activeId, setActiveId] = useState("");

  const handleClick = (id: string) => {
    setActiveId(id);
  };

  return (
    <main className="grid grid-cols-[10%_90%] min-h-screen text-xs">
      <article className="flex flex-col h-full bg-gray-100 border-r-2">
        <section className="flex flex-col">
          <svg className="w-auto my-4 mx-2" viewBox="0 0 117 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M41.112 20.556c0 11.352-9.204 20.556-20.556 20.556C9.203 41.112 0 31.908 0 20.556 0 9.203 9.203 0 20.556 0c11.352 0 20.556 9.203 20.556 20.556ZM23.176 33.658c1.574 0 1.935 1.68.386 1.958-.9.162-1.828.247-2.776.247-8.574 0-15.525-6.924-15.525-15.464S12.21 4.936 20.786 4.936c3.165 0 6.109.943 8.564 2.563 1.135.75.511 2.31-.85 2.31h-1.014a1.368 1.368 0 1 0 0 2.736h5.853c.51 0 .986.264 1.223.716.466.89-.227 1.89-1.23 1.89H16.473a1.303 1.303 0 1 0 0 2.607h18.431c.683 0 1.273.481 1.337 1.161.074.774-.561 1.418-1.339 1.418h-13.31a1.428 1.428 0 0 0 0 2.857h12.723c.908 0 1.595.832 1.33 1.7-.175.578-.721.944-1.326.944H18.038a1.303 1.303 0 1 0 0 2.607h13.351c1.164 0 1.85 1.263 1.082 2.137-.269.306-.66.47-1.067.47h-11.02a1.303 1.303 0 1 0 0 2.606h2.792Zm.4-23.85a1.368 1.368 0 1 0 0 2.737 1.368 1.368 0 0 0 0-2.737Zm-7.363 12.055a1.368 1.368 0 1 1 2.736 0 1.368 1.368 0 0 1-2.736 0Z" fill="#5349CE"></path>
            <path d="M59.524 7.576a.34.34 0 0 1 .335.392l-3.953 25.003a.34.34 0 0 1-.335.286h-4.727a.34.34 0 0 1-.335-.392l3.953-25.003a.34.34 0 0 1 .335-.286h4.727Zm-7.708 25.68a.34.34 0 0 1-.335-.391l.691-4.388a.34.34 0 0 1 .335-.287h13.75a.34.34 0 0 1 .335.392l-.691 4.389a.339.339 0 0 1-.335.286h-13.75ZM80.078 16.191a.34.34 0 0 1 .335-.286h4.484a.34.34 0 0 1 .335.392l-2.635 16.674a.34.34 0 0 1-.335.286H78.02a.34.34 0 0 1-.339-.327l-.026-.7c-.01-.307-.396-.448-.619-.238-.532.504-1.076.89-1.633 1.16-.763.371-1.666.556-2.707.556-1.272 0-2.383-.324-3.331-.972a5.934 5.934 0 0 1-2.048-2.637c-.416-1.087-.52-2.29-.312-3.61l1.654-10.299a.34.34 0 0 1 .335-.285h4.484a.34.34 0 0 1 .335.393l-1.43 8.942c-.184 1.157-.045 2.083.417 2.777.486.694 1.192 1.04 2.117 1.04 1.018 0 1.84-.312 2.464-.936.648-.625 1.064-1.539 1.25-2.742l1.447-9.188ZM89.5 32.97a.34.34 0 0 1-.336.287H84.68a.339.339 0 0 1-.335-.392L86.98 16.19a.34.34 0 0 1 .335-.286h4.242a.34.34 0 0 1 .339.327l.024.67c.012.31.406.448.626.23.548-.546 1.102-.955 1.663-1.227.763-.37 1.665-.555 2.707-.555 1.295 0 2.417.324 3.366.972.948.647 1.654 1.527 2.117 2.637.462 1.087.59 2.29.381 3.61l-1.655 10.402a.339.339 0 0 1-.334.286h-4.485a.34.34 0 0 1-.335-.392l1.43-9.048c.186-1.156.035-2.082-.45-2.776-.487-.694-1.238-1.04-2.256-1.04-.995 0-1.828.323-2.5.97-.647.649-1.063 1.586-1.248 2.812l-1.448 9.188ZM116.716 15.795a.32.32 0 0 1 .239.366l-.673 4.281a.34.34 0 0 1-.335.287h-1.376c-.995 0-1.885.173-2.672.52a4.221 4.221 0 0 0-1.874 1.562c-.486.694-.821 1.608-1.007 2.742l-1.169 7.418a.339.339 0 0 1-.335.286h-4.484a.34.34 0 0 1-.335-.392l2.634-16.674a.339.339 0 0 1 .335-.286h4.214c.193 0 .347.162.338.355l-.147 3.129a.204.204 0 0 1-.204.195.198.198 0 0 1-.187-.272 6.247 6.247 0 0 1 1.909-2.574c.948-.74 2.093-1.11 3.435-1.11.324 0 .66.023 1.007.069.24.016.469.049.687.098Z" fill="currentColor"></path>
          </svg>

          <ul className="mx-1">
            <li 
              id="repo"
              onClick={() => handleClick("repo")}
              className={`flex flex-row items-center px-3 py-1 rounded-md cursor-pointer ${activeId === "repo" ? "bg-gray-300" : ""}`}
            >
              <BookText />
              <p className="ml-3">Repository</p>
            </li>

            <li className="cursor-pointer">
              <div 
                id="projects" 
                onClick={() => handleClick("projects")} 
                className={`flex flex-row items-center px-3 py-1 rounded-md ${activeId === "projects" ? "bg-gray-300" : ""}`}
              >
                <FolderClosed />
                <p className="ml-3">Projects</p>
              </div>
              
              <ul className="ml-10">
                <li><p className="truncate w-[100%] my-2">VH-0001 - Vehicle Usdkbuf</p></li>
                <li><p className="truncate w-[100%] my-2">VMR041 - Boat Ramasdfbn</p></li>
                <li><p className="truncate w-[100%] my-2">LNR-001 - Lunr Samalisdebf</p></li>
                <li><p className="truncate w-[100%] my-2">DF-000952 - Boat Ralisdbfh</p></li>
                <li><p className="truncate w-[100%] my-2">001 - PF - Sample Prasdfbasd</p></li>
              </ul>
            </li>

            <li className="cursor-pointer">
              <div 
                id="collections"
                onClick={() => handleClick("collections")}
                className={`flex flex-row items-center px-3 py-1 rounded-md ${activeId === "collections" ? "bg-gray-300" : ""}`}
              >
                <Folders />
                <p className="ml-3">Collections</p>
              </div>

              <ul className="ml-10">
                <li><p className="truncate w-[100%] my-2">Pikenba</p></li>
                <li><p className="truncate w-[100%] my-2">My Saved Search</p></li>
              </ul>
            </li>

            <li 
              id="collaboration"
              onClick={() => handleClick("collaboration")}
              className={`flex flex-row items-center px-3 py-1 rounded-md cursor-pointer ${activeId === "collaboration" ? "bg-gray-300" : ""}`}
            >
              <Share2 />
              <p className="ml-3">Collaboration</p>
            </li>

            <li 
              id="portfolios"
              onClick={() => handleClick("portfolios")}
              className={`flex flex-row items-center px-3 py-1 rounded-md cursor-pointer ${activeId === "portfolios" ? "bg-gray-300" : ""}`}
            >
              <Building />
              <p className="ml-3">Portfolios</p>
            </li>

            <li 
              id="reports"
              onClick={() => handleClick("reports")}
              className={`flex flex-row items-center px-3 py-1 rounded-md cursor-pointer ${activeId === "reports" ? "bg-gray-300" : ""}`}
            >
              <ChartColumnIncreasing />
              <p className="ml-3">Reports</p>
            </li>
          </ul>
        </section>

        <section className="flex flex-col h-full border-t-[1px] border-gray-300 mx-1 mt-2 px-2">
          <div className="mt-auto flex flex-row items-center gap-2">
            <Settings />
            <p>Admin</p>
          </div>

          <p className="my-4">Team - {"luminosity"}</p>
        </section>
      </article>


      <article className="bg-white border-2 ">
        <section className="grid grid-rows-[5%_95%] h-full">
          <div className="bg-gray-50 mx-auto w-full flex justify-between items-center relative px-4">
            <div 
              onClick={() => {router.push("/")}}
              className="flex items-center border rounded-full w-auto py-2 px-4 hover:bg-gray-50 hover:cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              <p>Back</p>
            </div>

            <div className="flex-1 flex justify-center">
              <Input className="border border-black w-[50%] px-4 py-2"/>
            </div>

            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="grid grid-cols-[85%_15%] w-full">
            <div className="border-2 border-black">
              <h4>Col</h4>
            </div>

            <div className="grid grid-rows-[15%_85%] h-full">
              <div>
                <h5>
                  Row
                </h5>
              </div>

              <div className="border-t-2 border-black">
                <h5>
                  Row
                </h5>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Dashboard;
