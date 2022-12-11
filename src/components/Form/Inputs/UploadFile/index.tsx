import React, { ChangeEvent, forwardRef, ForwardedRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import './UploadFile.scss';

export interface UploadFileProps extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  uploadFileRef?: ForwardedRef<HTMLInputElement>;
  error?: JSX.Element;
  register?: Record<string, unknown>;
}

const UploadFile: React.FC<UploadFileProps> = ({
  onValueChange,
  className,
  children,
  uploadFileRef,
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
        ref={uploadFileRef}
        {...otherAttrs}
        {...register}
      />
      {error}
    </label>
  );
};

export default UploadFile;

export const UploadFileWithRef = forwardRef<HTMLInputElement, UploadFileProps>((props, ref) => (
  <UploadFile {...props} uploadFileRef={ref} />
));
