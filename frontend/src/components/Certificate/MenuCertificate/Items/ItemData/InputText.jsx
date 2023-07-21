/* eslint-disable react/prop-types */
export const InputText = ({ name, handleChange, children, value }) => {
  return (
    <>
      <label className=" text-xl font-bold" name={name} htmlFor={name}>
        {children}
      </label>
      <input
        className=" p-2 border-[3px] border-[#E4E4E4]  rounded-lg"
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};
