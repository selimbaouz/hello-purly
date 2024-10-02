import { cn } from "@/lib/utils";
import { FC } from "react";
import { IconType } from "react-icons";

interface SelectButtonProps {
    icon: IconType;
    title: string;
    classname: string;
}

const SelectButton: FC<SelectButtonProps> = ({
    icon: Icon,
    title,
    classname
}) => {
    console.log(Icon);
    return (
        <div className={cn("p-3 w-[109px] text-center rounded-xl border", classname)}>
            <h6 className="uppercase text-xs font-bold">
                {title}
            </h6>
        </div>
    );
};

export default SelectButton;