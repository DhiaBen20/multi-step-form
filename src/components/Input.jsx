let defaultClasses = "px-4 py-2.5 border rounded-lg focus:outline-none";
let errorClasses = "border-[#ed3548]";
let successClasses = "focus:border-[#534C9A] hover:border-[#534C9A]";

export default function Input({ isError, ...props }) {
    return (
        <input
            {...props}
            className={`${defaultClasses} ${
                isError ? errorClasses : successClasses
            }`}
        />
    );
}
