import React, { ReactElement } from "react";
import { ClearScrollingContainer } from "../components";
import MediaCard from "../components/MediaCard";

type MediaScreenRouteParams = {
  title: string;
  playlist: number[];
  displayTimerOnScreen: boolean;
};

type MediaScreenProps = {
  route: { params: MediaScreenRouteParams };
};

function MediaScreen({ route }: MediaScreenProps): ReactElement {
  const { title, playlist, displayTimerOnScreen } = route.params;

  console.log("MediaScreen: title", title, playlist, displayTimerOnScreen);

  return (
    <ClearScrollingContainer>
      <MediaCard
        title={title}
        playlist={playlist}
        displayTimerOnScreen={displayTimerOnScreen}
      />
    </ClearScrollingContainer>
  );
}

export default MediaScreen;
