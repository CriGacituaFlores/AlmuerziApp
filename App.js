import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MealsScreen from "./screens/Meals";
import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/Register";
import Modal from "./screens/Modal";
import AuthLoading from "./screens/AuthLoading";

const OnBoardingNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: "Login"
  }
);

const AppNavigator = createStackNavigator(
  {
    Meals: {
      screen: MealsScreen
    }
  },
  {
    initialRouteName: "Meals"
  }
);

const RootStack = createStackNavigator(
  {
    Main: AppNavigator,
    Modal: Modal
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const baseStack = createSwitchNavigator(
  {
    AuthLoading,
    OnBoarding: OnBoardingNavigator,
    Root: RootStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default createAppContainer(baseStack);
