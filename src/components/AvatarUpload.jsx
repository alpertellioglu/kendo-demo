import React from "react";
import { Avatar, StackLayout } from "@progress/kendo-react-layout";
import { Upload } from "@progress/kendo-react-upload";
import { Label, Error, Hint } from "@progress/kendo-react-labels";

import userAvatar from "../avatar.jpeg";

const AvatarUpload = (fieldRenderProps) => {
  //const [avatarImage, setAvatarImage] = React.useState(null);
  const imgRef = React.useRef(null);

  const {
    valid,
    value,
    id,
    optional,
    label,
    hint,
    validationMessage,
    touched,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;

  const hintId = showHint ? `${id}_hint` : "";
  const errorId = showValidationMessage ? `${id}_error` : "";
  const labelId = label ? `${id}_label` : "";
  const hasImage = value && value.length > 0;

  React.useEffect(() => {
    if (hasImage) {
      var reader = new FileReader();

      reader.onload = function (e) {
        imgRef.current.setAttribute("src", e.target.result);
      };

      reader.readAsDataURL(value[0].getRawFile());
    }
  }, [value, hasImage]);

  const onChangeHandler = (event) => {
    fieldRenderProps.onChange({ value: event.newState });
  };

  const onRemoveHandler = (event) => {
    fieldRenderProps.onChange({ value: event.newState });
  };
  return (
    <div className="upload-container">
      <StackLayout orientation={"horizontal"} gap={30}>
        <div className="k-flex-20">
          <Avatar
            style={{ width: 100, height: 100, flexBasis: 100 }}
            shape={"circle"}
            type={"image"}
          >
            {hasImage ? (
              <img
                style={{ width: 100, height: 100 }}
                ref={imgRef}
                src={"#"}
                alt={"User Avatar"}
              />
            ) : (
              <img
                style={{ width: 100, height: 100 }}
                src={userAvatar}
                alt="user-avatar"
              />
            )}
          </Avatar>
        </div>
        <div className="k-flex-80">
          <Upload
            id={id}
            valid={valid}
            autoUpload={false}
            showActionButtons={false}
            multiple={false}
            files={value}
            onAdd={onChangeHandler}
            onRemove={onRemoveHandler}
            ariaDescribedBy={`${hintId} ${errorId}`}
            ariaLabelledBy={labelId}
            {...others}
          >
            {showHint && <Hint id={hintId}>{hint}</Hint>}
            {showValidationMessage && (
              <Error id={errorId}>{validationMessage}</Error>
            )}
          </Upload>
        </div>
      </StackLayout>
    </div>
  );
};

export default AvatarUpload;
