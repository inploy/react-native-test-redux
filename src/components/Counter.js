import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, incrementByAmount} from '../models/counter';
import {Button, View, Text} from 'react-native';
// import styles from './Counter.module.css';

export default function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <Button title="Increment" onPress={() => dispatch(increment())}>
          Increment
        </Button>
        <Text>{count}</Text>
        <Button title="Decrement" onPress={() => dispatch(decrement())}>
          Decrement
        </Button>
        <Button
          title="IncrementByAmount"
          onPress={() => dispatch(incrementByAmount(4))}>
          IncrementByAmount
        </Button>
      </View>
    </View>
  );
}
