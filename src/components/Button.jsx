let variantClasses = {
    primary: "py-3 px-4 bg-[#02295a] text-white rounded hover:bg-[#174A89]",
    secondary: "py-3 px-4 bg-[#473dff] text-white rounded hover:bg-opacity-60",
    ghost: "text-[#9699ab] hover:text-[#02295a]",
};

export default function Button({ variant = "primary", ...props }) {
    return (
        <button
            {...props}
            className={`text-sm font-semibold  ${variantClasses[variant]}`}
        />
    );
}
