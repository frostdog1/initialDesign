import React from "react";
import { StyleSheet, Text, View } from "react-native";

const resultData = [
    {key:0, title: "04/01/2021", score: "Roland-Morris score: 8/24"},
    {key:1, title: "Insights", image:require("../assets/data_growing.png"), goTo:"Analytics"},
    {key:2, title: "Report", image:require("../assets/fileAnalysis.png"), goTo:"Report"} ,
    {key:3, title: "Results", image:require("../assets/pastResults.png"), goTo:"Results"},
];
export default function Flat() {

// create fragment
<>
<ScreenContainer>
<View style={styles.container}>
    <FlatList style={styles.list}
      contentContainerStyle={styles.listContainer}
      data={resultData}
      horizontal={false}
      numColumns={1}
      keyExtractor={(item) => {
        return item.key;
      } }
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(item.goTo)}>
            <View style={styles.cardFooter}></View>
            <View style={styles.cardHeader}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      } } />
  </View>
  </ScreenContainer>
  
  </>

    };