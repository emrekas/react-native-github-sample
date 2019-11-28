import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { GetAll } from "../../../api/posts/PostsApiProxy";
import axios from 'axios';
import styled from 'styled-components';


const PostsScreen = props => {

    const [postList, setPostList] = useState([]);



    useEffect(async () => {
        let result = await GetAll();

        setPostList(result.data)
    }, []);

    return (
        <View style={{ alignItems: 'center' }}>
            {
                postList.map(item => (
                    <Text>{item.title}</Text>
                ))
            }
        </View>
    );
}

const ListItem = styled.view`
display
`;

export default PostsScreen;