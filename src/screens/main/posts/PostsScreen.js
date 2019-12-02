import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { GetAllPosts } from "../../../api/posts/PostsApiProxy";
import { ListItem, Input } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';


const PostsScreen = props => {

    const [postList, setPostList] = useState([]);
    const [searchPostList, setSearchPostList] = useState([]);
    const [searchText, setSearchText] = useState('');



    useEffect(() => {
        const fetchData = async () => {
            let result = await GetAllPosts();
            setPostList(result.data);
            setSearchPostList(result.data);
        }
        fetchData();
    }, []);

    const handleSearch = text => {
        setSearchText(text);
        setSearchPostList(postList.filter((item) => {
            return item.title.toLowerCase().match(text)
        }));
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => (
            <ListItem
                title={item.title}
                subtitle={item.body}
                bottomDivider
                chevron
            />
    );

    return (
        <View>
            <Input
                onChangeText={text => handleSearch(text)}
                placeholder='Search'
                value={searchText}
                leftIcon={
                    <Ionicons
                        name='md-search'
                        size={24}
                        color='black'
                    />
                }
            />
            {
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={searchPostList}
                    renderItem={this.renderItem}
                />
            }
        </View>
    );
}

export default PostsScreen;