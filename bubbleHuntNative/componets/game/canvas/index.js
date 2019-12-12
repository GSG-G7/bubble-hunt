import React from 'react';
import Bubble from '../bubble';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const createCanvas = units => {
  const arr = new Array(units);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(units).fill(0);
  }
  return arr;
};

const combineBubblesIntoCanvas = (bubbles, canvas) => {
  bubbles.forEach(bubble => {
    canvas[bubble[0]][bubble[1]] = 1;
  });
  return canvas;
};

export default ({units, bubbles, bubbleOnClick, canvasOnClick}) => {
  const canvas = combineBubblesIntoCanvas(bubbles, createCanvas(units));
  return (
    <View>
      <TouchableOpacity onPress={canvasOnClick}>
        {canvas.map((e, i) => {
          e.map((elm, j) => {
            <Bubble
              onPress={
                elm
                  ? event => {
                      event.stopPropagation();
                      bubbleOnClick(event.target.id);
                    }
                  : undefined
              }
              key={`${i}${j}`}
              id={`${i}${j}`}
              // style={Styles.bubble}
            />;
          });
        })}
      </TouchableOpacity>
    </View>
  );
};

// const Styles = StyleSheet.create({
// bubble:{

// }
// })
