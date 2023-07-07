export default function Checkbox({ isChecked, name, value }) {
    return (
        <button
            className={`w-5 h-5 rounded transition-colors flex items-center justify-center ${
                isChecked ? "bg-[#423DF2]" : "border"
            }`}
            type="button"
            role="checkbox"
            aria-checked={isChecked}
        >
            <input
                type="hidden"
                name={name}
                value={value}
                disabled={!isChecked}
                readOnly
            />

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-3.5 h-5 text-white transition-opacity ${
                    isChecked ? "" : "opacity-0"
                }`}
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                />
            </svg>
        </button>
    );
}
