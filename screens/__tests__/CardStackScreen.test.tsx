import { render } from "@testing-library/react-native";
import CardStackScreen from "../CardStackScreen";
import { Movies } from "../../constants/MediaData";

describe("<CardStackScreen>", () => {
  it("should match snapshot", () => {
    const { toJSON } = render(<CardStackScreen navigation={{ id: "test" }} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it("should render all TouchableOpacity buttons", () => {
    const { getAllByTestId, getByText } = render(
      <CardStackScreen navigation={{ id: "test" }} />
    );
    const ListItemButtons = getAllByTestId("cardStackItem");
    const titles = Movies.map((movie) => movie.title);

    expect(ListItemButtons).toHaveLength(13);
    titles.forEach((title) => {
      expect(getByText(title));
    });
  });
});

// LINKS COVERED IN CYPRESS TEST
