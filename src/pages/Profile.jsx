import { Button } from "@progress/kendo-react-buttons";
import { Checkbox } from "@progress/kendo-react-inputs";
import React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { countries } from "../resources/countries";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import AvatarUpload from "../components/AvatarUpload";
import MyEditor from "../components/MyEditor";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-react-notification";
import { Fade } from "@progress/kendo-react-animation";

const countriesData = countries.map((country) => country.name);

const Profile = () => {
  const [success, setSuccess] = React.useState(false);

  //const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
  const handleSubmit = (dataItem) => setSuccess(true);
  return (
    <>
      <div id="Profile" className="profile-page">
        <div className="card-container">
          <div className="form-container">
            <Form
              onSubmit={handleSubmit}
              render={(formRenderProps) => (
                <FormElement
                  style={{
                    maxWidth: 650,
                  }}
                >
                  <div className="form-field">
                    <Field
                      name={"avatar"}
                      component={AvatarUpload}
                      label={"Avatar Upload"}
                    />
                  </div>

                  <div className="form-field">
                    <Field
                      name={"firstName"}
                      component={Input}
                      label={"First name"}
                    />
                  </div>
                  <div className="form-field">
                    <Field
                      name={"lastName"}
                      component={Input}
                      label={"Last name"}
                    />
                  </div>
                  <div className="form-field">
                    <Field name={"email"} component={Input} label={"Email"} />
                  </div>
                  <div className="form-field">
                    <Field
                      id={"country"}
                      name={"country"}
                      label={"Country"}
                      data={countriesData}
                      component={DropDownList}
                    />
                  </div>
                  <div className="form-field">
                    <Field
                      id={"biography"}
                      name={"biography"}
                      label={"Editor"}
                      component={MyEditor}
                    />
                  </div>

                  <div className="form-field">
                    <Button style={{ margin: "10px" }}>Cancel</Button>
                    <Button style={{ margin: "10px" }} themeColor={"primary"}>
                      Save
                    </Button>
                  </div>
                </FormElement>
              )}
            ></Form>

            <NotificationGroup
              style={{
                right: 0,
                bottom: 0,
                alignItems: "flex-start",
                flexWrap: "wrap-reverse",
              }}
            >
              <Fade>
                {success && (
                  <Notification
                    type={{
                      style: "success",
                      icon: true,
                    }}
                    closable={true}
                    onClose={() => setSuccess(false)}
                  >
                    <span>Your data has been saved.</span>
                  </Notification>
                )}
              </Fade>
            </NotificationGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
