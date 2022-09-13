import React from "react";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import avatarImage from "../avatar.jpeg";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const Header = (props) => {
  return (
    <div className="header">
      <AppBar
        themeColor="inherit"
        // style={{
        //   background: "rgb(16, 8, 110)",
        // }}
      >
        <AppBarSection>
          <Button
            className="menu-icon"
            icon="menu"
            onClick={props.onMenuClick}
          />
        </AppBarSection>
        <AppBarSpacer
          style={{
            width: 20,
          }}
        />
        <AppBarSection>
          <h1 className="title">Carved Rock Fitness</h1>
        </AppBarSection>
        <AppBarSpacer />
        <AppBarSection className="actions">
          <Button>
            <BadgeContainer>
              <span className="k-icon k-i-bell" />
              <Badge
                shape="dot"
                themeColor="info"
                size="small"
                position="inside"
              />
            </BadgeContainer>
          </Button>
        </AppBarSection>

        <AppBarSection>
          <DropDownList
            value="English"
            data={["English", "French", "Spanish"]}
          />
        </AppBarSection>

        <AppBarSection>
          <span className="k-appbar-separator" />
        </AppBarSection>

        <AppBarSection>
          <Avatar type="image">
            <img src={avatarImage} />
          </Avatar>
        </AppBarSection>
      </AppBar>
    </div>
  );
};

export default Header;
