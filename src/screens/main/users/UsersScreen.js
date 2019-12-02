import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';

const UsersScreen = (props) => {

    return (
        <View>
            <Image
                style={{ alignSelf:'center', width: '50%', height: '50%' }}
                source={{ uri: 'https://cdn.cnn.com/cnnnext/dam/assets/191024091949-02-foster-cat-large-169.jpg' }}
            />
        </View>
    );
}

export default UsersScreen;