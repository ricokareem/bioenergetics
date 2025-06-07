import React, { ReactElement } from "react";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { ListItem } from "react-native-elements";
import { OrangeScrollingContainer, ListText } from "../components";

type NavPropsType = {
  navigation: NavigationProp<ParamListBase>;
};

const group1 = [
  { name: "Cards", title: "HEALING SEQUENCES" },
  { name: "ReferenceGuide", title: "SYMPTOMS AND CONDITIONS" },
];
const group2 = [
  { name: "HowToUseAppScreen", title: "HOW TO USE THIS APP" },
  {
    name: "BeginningHealingSessionScreen",
    title: "BEGINNING THE HEALING SESSION",
  },
  { name: "AboutHealingTechniques", title: "ABOUT THE HEALING TECHNIQUES" },
];

function MainMenuList({ navigation }: NavPropsType): ReactElement {
  return (
    <OrangeScrollingContainer>
      {group1.map((item) => (
        <ListItem
          key={item.name}
          containerStyle={{
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            backgroundColor: "#fb8400",
          }}
          onPress={() => navigation.navigate(item.name)}
          bottomDivider
        >
          <ListItem.Title>
            <ListText>{item.title}</ListText>
          </ListItem.Title>
          <ListItem.Chevron color="#fff" size={28} />
        </ListItem>
      ))}
      {group2.map((item) => (
        <ListItem
          key={item.name}
          containerStyle={{
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            backgroundColor: "#fc9829",
          }}
          onPress={() => navigation.navigate(item.name)}
          bottomDivider
        >
          <ListItem.Title>
            <ListText>{item.title}</ListText>
          </ListItem.Title>
          <ListItem.Chevron color="#fff" size={28} />
        </ListItem>
      ))}
    </OrangeScrollingContainer>
  );
}

export default MainMenuList;
