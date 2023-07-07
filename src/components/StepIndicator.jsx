export default function StepIndicator({ isActive, ...props }) {
    let defaultClasses =
        "rounded-full w-8 h-8 border flex items-center justify-center font-[500]";
    let activeClasses = "bg-[#BDE1FF] border-[#BDE1FF] text-[#00203F]";
    let unactiveClasses = "border-[#F1EFFF] text-[#F9F6FF]";

    return (
        <span
            {...props}
            className={`${defaultClasses} ${
                isActive ? activeClasses : unactiveClasses
            }`}
        />
    );
}
