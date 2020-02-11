import { h } from 'preact';
// import { useState } from 'preact/hooks';

// /**
//  * Check if value is a digit
//  */
// const isNumber = key => {
//   return /[0-9]/.test(key);
// };

// const reg = /^\d+$/;

const Input = ({ label, id, value, placeholder, error, onInput }) => {
  console.log('TCL: Input -> label', label);
  return (
    <div class="form-group">
      <label for={id} class="col-form-label">
        {label}
      </label>
      <input
        type="text"
        class="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onInput={onInput}
      />
      {error && <small class="form-text text-muted ">{error}</small>}
    </div>
  );
};

export default Input;
