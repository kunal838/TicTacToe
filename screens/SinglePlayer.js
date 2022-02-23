import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Board } from "../components";
import { isTerminal } from "../utils/board";

const SinglePlayer = () => {
  const initialState = [null, null, null, null, null, null, null, null, null];
  const [state, setState] = useState(initialState);
  const handlePress = (cell) => {
    const dummystate = [...state];

    dummystate[cell] = "x";

    setState(dummystate);
  };
  return (
    <View>
      <Board
        cells={state}
        onCellPressed={handlePress}
        size={330}
        disable={Boolean(isTerminal(state))}
      />
    </View>
  );
};

export default SinglePlayer;

const styles = StyleSheet.create({});
