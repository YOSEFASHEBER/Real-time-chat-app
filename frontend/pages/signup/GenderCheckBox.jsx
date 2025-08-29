const GenderCheckbox = () => {
  return (
    <div className="flex mt-1.5 mr-2">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox border-amber-50" />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox border-amber-50" />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
