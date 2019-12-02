import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';


const FlatListItem = props => {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={() =>
                    props.onItemClick(props.item)
                }>
                    <Text>
                        {
                            props.item.title ?
                                props.item.title : props.item
                        }
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default FlatListItem;