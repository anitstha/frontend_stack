const InputField = ({ type, name, placeholder, value, onChange }) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="border py-2 px-4 outline-black/40 rounded-full"
        />
    )
}

export default InputField