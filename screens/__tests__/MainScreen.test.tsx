import React from "react";
import { render } from "@testing-library/react-native";
import MainScreen from "../MainScreen";

describe("<MainScreen>", () => {
  it("should match snapshot", () => {
    const { toJSON, getAllByTestId, getByText } = render(
      <MainScreen navigation={{ id: "test" }} />
    );
    const ListItemButtons = getAllByTestId("padView");

    expect(ListItemButtons).toHaveLength(5);
    expect(getByText(/healing sequences/i));
    expect(getByText(/symptoms and conditions/i));
    expect(getByText(/how to use this app/i));
    expect(getByText(/beginning the healing session/i));
    expect(getByText(/about the healing techniques/i));
    expect(toJSON()).toMatchSnapshot();
  });
});
