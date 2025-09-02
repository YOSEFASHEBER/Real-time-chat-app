const GenderCheckbox = ({ input, setInput }) => {
  const handleChange = (gender) => {
    setInput((prev) => {
      const newInput = {
        ...prev,
        gender: prev.gender === gender ? "" : gender,
      };
      return newInput;
    });
  };
  return (
    <div className="flex mt-1.5 mr-2">
      <div className="form-control pr-1">
        <label className={`label gap-2 cursor-pointer checked `}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            name="gender"
            className="checkbox border-amber-50 "
            checked={input.gender === "male"}
            onChange={() => handleChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            name="gender"
            className="checkbox border-amber-50 "
            checked={input.gender === "female"}
            onChange={() => handleChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
