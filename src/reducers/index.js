import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "My Sharona", duration: "4:55" },
    { title: "Hold the Line", duration: "3:55" },
    { title: "Another One Bites The Dust", duration: "3:54" },
    { title: "Rebel Rebel", duration: "4:34" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
