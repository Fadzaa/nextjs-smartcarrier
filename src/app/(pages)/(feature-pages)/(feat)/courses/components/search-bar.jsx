import React from 'react';
import Image from "next/image";
import {iconArrowDown, iconLocation, iconSearch} from "@/app/lib/utils/icon";

function SearchBarCourses() {
    return (
        <div className="w-full h-[50px] flex">
            <div className="w-full h-6 relative">
                <div className="h-6 p-6 flex items-center absolute z-10">
                    <Image src={iconSearch} alt="Icon Search" width={24} height={24}/>
                </div>

                <input className="w-full h-6 border border-colorBorder p-6 ps-16 rounded-l-lg absolute"
                       type="text"
                       placeholder="Sedang mencari posisi apa?"
                />
            </div>

            <div className="w-1/3 h-full border-t border-b border-colorBorder flex justify-between items-center relative px-4">
                <h1 className="text-textPrimary">Keahlian</h1>
                <Image src={iconArrowDown} alt="Icon Arrow Down" width={24} height={24}/>
            </div>
            <button className="bg-primary h-full w-1/5 text-white">
                Cari
            </button>
        </div>
    );
}

export default SearchBarCourses;