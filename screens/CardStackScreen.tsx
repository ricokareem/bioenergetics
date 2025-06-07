import React from "react";
import { FlatList, ListRenderItem, ListRenderItemInfo } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import {
  WhiteContainer,
  ListText,
  ListSubheadingText,
  ListButton,
} from "../components";
import { Movies } from "../constants/MediaData";

type NavPropsType = {
  navigation: NavigationProp<ParamListBase>;
};

interface ItemType extends ListRenderItemInfo<unknown> {
  id: string;
  name: string;
  title: string;
  screen: string;
  description: string;
  playlist: number[];
  subheading: string;
}

const cardStack = [...Movies].filter(
  (c) => c.playlist?.length
) as unknown as ItemType[];

const CardStackScreen: React.FC<NavPropsType> = (props) => {
  const { navigation } = props;

  const renderItem: ListRenderItem<ItemType> = ({ item }) => (
    <ListButton
      testID="cardStackItem"
      key={item.id}
      onPress={() => {
        navigation.navigate(item.screen, {
          title: item.title,
          name: item.name,
          description: item.description,
          playlist: item.playlist,
        });
      }}
    >
      <ListText>{item.title}</ListText>
      <ListSubheadingText>{item.subheading}</ListSubheadingText>
    </ListButton>
  );

  return (
    <WhiteContainer>
      <FlatList
        data={cardStack}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item, index) => `${index}_${item.name}`}
      />
    </WhiteContainer>
  );
};

export default CardStackScreen;
