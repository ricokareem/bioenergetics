import { render, waitFor } from "@testing-library/react-native";
import MediaCard from "../MediaCard";

// Mock the font-loading hook/module to prevent forEach error
jest.mock("expo-font", () => ({
  useFonts: () => [true, null],
  isLoaded: () => true,
}));

// Mock expo-av including Video component
jest.mock("expo-av", () => ({
  Audio: {
    setAudioModeAsync: jest.fn(),
    Sound: jest.fn().mockImplementation(() => ({
      loadAsync: jest.fn(),
      playAsync: jest.fn(),
      pauseAsync: jest.fn(),
      unloadAsync: jest.fn(),
      setOnPlaybackStatusUpdate: jest.fn(),
      getStatusAsync: jest.fn().mockResolvedValue({ isLoaded: true }),
    })),
  },
  Video: jest.fn().mockImplementation(() => null),
  AVPlaybackStatus: jest.fn(),
}));

describe("<MediaCard>", () => {
  it("should match snapshot", async () => {
    const { toJSON } = await waitFor(() =>
      render(<MediaCard title="Media Screen" playlist={[81, 82]} />)
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

// IMPORT DATA & TEST ELEMENTS
