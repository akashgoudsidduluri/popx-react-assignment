function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required=true
}) {
  return (
    <div className="input-group">
      <span className="floating-label">
        {label}{
          required && (
          <span className="required">*</span>
          )
        }
        
      </span>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;