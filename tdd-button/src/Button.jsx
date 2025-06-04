function Button({ text, onClick, disabled, className }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed 
                ${className || ''}`}
        >
            {text}
        </button>
    );
}

export default Button;