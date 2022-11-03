import React, { ChangeEvent, forwardRef, ForwardedRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import './UploadFile.scss';

export interface UploadFileProps extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  uploadFileRef?: ForwardedRef<HTMLInputElement>;
  error?: JSX.Element;
}

const UploadFile = (props: UploadFileProps) => {
  const { className, children, uploadFileRef, error, ...otherAttrs } = props;
  delete otherAttrs.onValueChange;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { onValueChange } = props;
    onValueChange && onValueChange(e);
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
      />
      {error}
    </label>
  );
};

export default UploadFile;

export const UploadFileWithRef = forwardRef<HTMLInputElement, UploadFileProps>((props, ref) => (
  <UploadFile {...props} uploadFileRef={ref} />
));
