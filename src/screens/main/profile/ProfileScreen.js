import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import styled from 'styled-components';
import { GetAllUsers, GetUserById } from '../../../api/users/UsersApiProxy';
import { RowText } from '../../../base-components/TextComponent';

const ProfileScreen = () => {


    const [userList, setUserList] = useState([]);
    const [currentUser, setCurrentUser] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            const responseUsers = await GetAllUsers();
            const responseUser = await GetUserById(1);

            setCurrentUser(responseUser.data);
            setUserList(responseUsers.data);
        }
        fetchData();
    }, []);

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => (
        <ListItem
            title={item.username}
            subtitle={item.name}
            bottomDivider
            chevron
        />
    );

    return (
        <View style={{ padding: 30 }}>
            <Text style={{ fontSize: 25 }}>Cyber Pufuduk</Text>

            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row'
            }}>
                <Image
                    style={{ width: 150, height: 150 }}
                    source={{ uri: 'https://res.cloudinary.com/teepublic/image/private/s--JmBqek_s--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1467809400/production/designs/572424_1.jpg' }}
                />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <RowText text={currentUser.username}></RowText>
                    <RowText text={currentUser.name}></RowText>
                    <RowText text={currentUser.email}></RowText>
                </View>

            </View>

            <Text style={{ fontSize: 20, margin: 10 }}>Friend List</Text>

            <FlatList
                keyExtractor={this.keyExtractor}
                data={userList}
                renderItem={this.renderItem}
            />

        </View >
    );
}

const Header = styled.Text`
    
`;

const View1 = styled.View`
justifyContent: space-around;
flexDirection: row;
`;

export default ProfileScreen;