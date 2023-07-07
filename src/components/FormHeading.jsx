export default function FormHeading({ centerText, children }) {
    return (
        <h2
            className={`text-[#02295a] text-2xl md:text-4xl font-bold mb-5 ${
                centerText ? "text-center" : ""
            }`}
        >
            {children}
        </h2>
    );
}
