import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import IconWithBadge from '../navigator/components/IconWithBadge';

import PostsScreen from "../screens/main/posts/PostsScreen";
import SearchScreen from "../screens/main/search/SearchScreen";
import UsersScreen from "../screens/main/users/UsersScreen";


// const HomeIconWithBadge = props => {
//   // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
//   return <IconWithBadge {...props} badgeCount={2} />;
// };

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;

  switch (routeName) {
    case 'Posts':
      iconName = `md-home`;
      break;
    case 'Search':
      iconName = `md-search`;
      break;
    case 'Users':
      iconName = `md-people`;
      break;
    default:
      break;
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};


const Tabs = createBottomTabNavigator(
  {
    Posts: { screen: PostsScreen },
    Search: { screen: SearchScreen },
    Users: { screen: UsersScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      showIcon: true,
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(Tabs);
