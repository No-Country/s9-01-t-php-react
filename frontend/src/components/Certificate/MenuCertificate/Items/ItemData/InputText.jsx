/* eslint-disable react/prop-types */
export const InputText = ({ name, handleChange, children, value, placeholder }) => {
  return (
    <>
      <label className=" text-xl font-bold" name={name} htmlFor={name}>
        {children}
      </label>
      <input
        className=" p-2 border-[3px] border-secondary  rounded-lg"
        type="text"
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};
