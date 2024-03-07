import {FC} from "react";
const Page: FC =() => {
    return (
        <div className="h-screen p-64">
            <div className="flex justify-center">Color Shower</div>
            <div className="flex justify-between">
                <div className="flex border-[1px] w-[384px] items-center">
                    <div className="">#ffb200</div>
                </div>
                <div className="flex p-[24px] gap-[10px] bg-[#8EFF7B] rounded-[10px]">
                    <div className="">Show</div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="bg-[#FFB200] w-[96px] h-[96px]"></div>
            </div>
            <div className="flex justify-center gap-[48px]">
                <div className="bg-[#FF0000] w-[64px] h-[64px]"></div>
                <div className="bg-[#D9D9D9] w-[64px] h-[64px]"></div>
                <div className="bg-[#00A3FF] w-[64px] h-[64px]"></div>
            </div>
        </div>
    );
}
export default Page;