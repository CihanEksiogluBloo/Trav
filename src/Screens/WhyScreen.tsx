import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import AccordionCard from "../Components/Accordion/AccordionCard";
import CustomView from "../Components/CustomView/CustomView";
import {Reasons} from "../Constants";

const WhyScreen: React.FC = () => {
  return (
    <CustomView>
      <FlatList
        data={Reasons}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <View style={{margin: 5}}>
              <AccordionCard header={item.header} value={item.reason} />
            </View>
          );
        }}
      />
    </CustomView>
  );
};

export default WhyScreen;

const styles = StyleSheet.create({});
