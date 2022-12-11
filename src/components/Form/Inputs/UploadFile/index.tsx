import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import './UploadFile.scss';

export interface UploadFileProps extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: JSX.Element;
  register?: Record<string, unknown>;
}

const UploadFile: React.FC<UploadFileProps> = ({
  onValueChange,
  className,
  children,
  error,
  register,
  ...otherAttrs
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange?.(e);
  };

  return (
    <label className="upload-file-wrapper label">
      {children}
      <input
        className={classNames('upload-file-wrapper__upload-file', className)}
        onChange={handleChange}
        type="file"
        {...otherAttrs}
        {...register}
      />
      {error}
    </label>
  );
};

export default UploadFile;
