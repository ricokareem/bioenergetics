import { render, waitFor } from "@testing-library/react-native";
import MediaScreen from "../MediaScreen";

// Mock the font-loading hook/module to prevent forEach error
jest.mock("expo-font", () => ({
  __esModule: true,
  default: {
    useFonts: () => [true, null],
    isLoaded: () => true,
  },
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

describe("<MediaScreen>", () => {
  it("should match snapshot", async () => {
    const { toJSON } = await waitFor(() =>
      render(
        <MediaScreen
          route={{
            params: {
              title: "Media Screen",
              playlist: [81, 82],
              displayTimerOnScreen: false,
            },
          }}
        />
      )
    );

    // Make sure we have a valid snapshot even if video status is undefined
    expect(toJSON()).toMatchSnapshot();
  });
});
