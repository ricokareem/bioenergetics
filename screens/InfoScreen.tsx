import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { ListItem } from "react-native-elements";
import { ListText, OrangeScrollingContainer } from "../components";

type NavPropsType = {
  navigation: NavigationProp<ParamListBase>;
};

const symptoms = [
  { name: "AboutRoland", title: "ABOUT ROLAND YAKOUBOV" },
  { name: "Disclaimer", title: "DISCLAIMER" },
  { name: "Social", title: "FOLLOW US" },
  { name: "Credits", title: "CREDITS" },
];

function InfoScreen({ navigation }: NavPropsType): ReactElement {
  return (
    <OrangeScrollingContainer>
      {symptoms.map((item) => (
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

export default InfoScreen;
