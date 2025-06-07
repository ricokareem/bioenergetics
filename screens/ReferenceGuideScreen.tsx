import React, { ReactElement } from "react";
import { ScrollView } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { ListItem } from "react-native-elements";
import { SymptomsPlaylists } from "../constants/MediaData";
import { WhiteContainer, ListText } from "../components";

type NavPropsType = {
  navigation: NavigationProp<ParamListBase>;
};

function ReferenceGuideScreen({ navigation }: NavPropsType): ReactElement {
  return (
    <WhiteContainer>
      <ScrollView>
        {SymptomsPlaylists.map((item) => (
          <ListItem
            key={item.id}
            containerStyle={{
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              backgroundColor: "#fc9829",
            }}
            onPress={() =>
              navigation.navigate(item.screen, {
                title: item.title,
                playlist: item.movieIds,
                displayTimerOnScreen: true,
              })
            }
            bottomDivider
          >
            <ListItem.Title>
              <ListText>{item.title}</ListText>
            </ListItem.Title>
            <ListItem.Chevron color="#fff" size={28} />
          </ListItem>
        ))}
      </ScrollView>
    </WhiteContainer>
  );
}

export default ReferenceGuideScreen;
