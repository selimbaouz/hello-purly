import { stacksData } from "@/data";
import Marquee from "./ui/marquee";
import { cn } from "@/lib/utils";

const MarqueeStack = () => {
    return (
        <div className={cn("absolute z-50 flex h-full w-full flex-col items-center justify-center overflow-hidden")}>
          <Marquee pauseOnHover className="[--duration:20s]">
            <div className={cn("flex items-center gap-10 px-3", "xl:gap-20 xl:px-8")}>
              {
                stacksData.map((data, index) => (
                    <div key={index} className={cn("flex items-center gap-3")}>
                        <data.icon className={cn("text-2xl text-white", "lg:text-xl", "2xl:text-2xl")} />
                        <p>
                            {data.title}
                        </p>
                    </div>
                ))
              }
            </div>
          </Marquee>
        </div>
    );
};

export default MarqueeStack;