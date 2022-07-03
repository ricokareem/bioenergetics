import React from "react";
import { render } from "@testing-library/react-native";
import ReferenceGuideScreen from "../ReferenceGuideScreen";
import { SymptomsPlaylists } from "../../constants/MediaData";

describe("<ReferenceGuideScreen>", () => {
  it("should match snapshot", () => {
    const { toJSON } = render(
      <ReferenceGuideScreen navigation={{ id: "test" }} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("should render all ListItem buttons", () => {
    const { getAllByTestId, getByText } = render(
      <ReferenceGuideScreen navigation={{ id: "test" }} />
    );
    const ListItemButtons = getAllByTestId("padView");
    const titles = SymptomsPlaylists.map((playlist) => playlist.title);

    expect(ListItemButtons).toHaveLength(15);
    titles.forEach((title) => {
      expect(getByText(title));
    });
  });
});

// LINKS COVERED IN CYPRESS TEST
