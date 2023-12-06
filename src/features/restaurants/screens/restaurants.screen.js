import styled from "styled-components/native";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";

const SearchContainer = styled(View)`
  padding: 16px;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margintop: ${StatusBar.currentHeight}px`};
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  backgroundcolor: blue;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
