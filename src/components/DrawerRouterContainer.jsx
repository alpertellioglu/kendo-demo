import React from "react";
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import { withRouter } from "react-router-dom";
import Header from "./Header";

const items = [
  { name: "Dashboard", icon: "k-i-grid", selected: true, route: "/" },
  { name: "Profile", icon: "k-i-user", route: "/profile" },
  { separator: true },
  { name: "Info", icon: "k-i-information", route: "/info" },
];

const DrawerRouterContainer = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(
    items.findIndex((x) => x.selected === true)
  );
  const [isSmallerScreen, setIsSmallerScreen] = React.useState(
    window.innerWidth < 768
  );

  const handleMenuClick = () => {
    setExpanded(!expanded);
  };

  const handleSelect = (e) => {
    setSelectedId(e.itemIndex);
    setExpanded(false);

    props.history.push(e.itemTarget.props.route);
  };

  const getSelectedItem = (pathName) => {
    let currentPath = items.find((item) => item.route === pathName);
    if (currentPath.name) {
      return currentPath.name;
    }
  };

  let selected = getSelectedItem(props.location.pathname);

  return (
    <div>
      <Header onMenuClick={handleMenuClick} />
      <Drawer
        expanded={expanded}
        animation={{ duration: 100 }}
        items={items.map((item) => ({
          ...item,
          text: item.name,
          selected: item.name === selected,
        }))}
        position={"start"}
        mode={isSmallerScreen ? "overlay" : "push"}
        mini={isSmallerScreen ? false : true}
        onSelect={handleSelect}
      >
        <DrawerContent style={{ height: 1066 }}>{props.children}</DrawerContent>
      </Drawer>
    </div>
  );
};

export default withRouter(DrawerRouterContainer);
