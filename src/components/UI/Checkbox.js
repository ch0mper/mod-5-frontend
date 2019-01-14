import React from 'react';

const Checkbox = ({checked}) => (
  <div>
      <input type="checkbox" checked={checked} />
  </div>
);

Checkbox.defaultProps = {
  checked: false
};

export default Checkbox;

// import React from "react";
//
// const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
//   <div className="form-check">
//     <label>
//       <input
//         type="checkbox"
//         name={label}
//         checked={isSelected}
//         onChange={onCheckboxChange}
//         className="form-check-input"
//       />
//       {label}
//     </label>
//   </div>
// );
//
// export default Checkbox;
