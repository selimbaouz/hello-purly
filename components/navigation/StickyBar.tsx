import MarqueeStack from "../MarqueeStack";

const StickyBar = () => {
    return (
        <div className="bg-foreground w-full h-10 text-white flex flex-col items-center justify-center font-light">
            <MarqueeStack />
        </div>
    );
};

export default StickyBar;