export default function FormSummary({ centerText, children }) {
    return (
        <p className={`text-[#98999D] mb-6 ${centerText ? "text-center" : ""}`}>
            {children}
        </p>
    );
}
