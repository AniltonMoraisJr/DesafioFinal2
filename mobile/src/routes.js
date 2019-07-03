import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import { Animated, Easing } from "react-native";

import SignIn from "~/pages/SignIn";
import SignUp from "~/pages/SignUp";
// import Admin from "~/pages/Admin";

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { position, layout, scene, index, scenes } = sceneProps;
      const toIndex = index;
      const thisSceneIndex = scene.index;
      const height = layout.initHeight;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, 0]
      });

      // Since we want the card to take the same amount of time
      // to animate downwards no matter if it's 3rd on the stack
      // or 53rd, we interpolate over the entire range from 0 - thisSceneIndex
      const translateY = position.interpolate({
        inputRange: [0, thisSceneIndex],
        outputRange: [height, 0]
      });

      const slideFromRight = { transform: [{ translateX }] };
      const slideFromBottom = { transform: [{ translateY }] };

      const lastSceneIndex = scenes[scenes.length - 1].index;

      // Test whether we're skipping back more than one screen
      // and slide from bottom if true
      if (lastSceneIndex - toIndex > 1) {
        // Do not transoform the screen being navigated to
        if (scene.index === toIndex) return;
        // Hide all screens in between
        if (scene.index !== lastSceneIndex) return { opacity: 0 };
        // Slide top screen down
        return slideFromBottom;
      }
      // Otherwise slide from right
      return slideFromRight;
    }
  };
};
const LoginRoutes = createStackNavigator(
  { SignIn, SignUp },
  { initialRouteName: "SignIn", headerMode: "none", transitionConfig }
);
// const AdminRoutes = createStackNavigator(
//   { Admin },
//   { initialRouteName: "Admin", headerMode: "none", transitionConfig }
// );
const Routes = createAppContainer(
  createSwitchNavigator({ Login: LoginRoutes }, { initialRouteName: "Login" })
);

export default Routes;
