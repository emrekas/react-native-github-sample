import React from 'react';
import { Text, View } from "react-native";

export const RowText = props => {
    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    );
};