import React from "react"
import {
   Text,
   View,
   SafeAreaView,
   Image,
   StyleSheet,
   FlatList,
   ScrollView,
   TouchableOpacity
} from "react-native"
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import categoriesData from "./../assets/data/categoriesData"
import popularData from "./../assets/data/popularData"
import colors from "./../assets/colors/colors"

const Home = ({ navigation }) => {
   const categoriesRenderData = ({ item }) => {
      return (
         <View
            style={[
               styles.categoryItemWrapper,
               {
                  backgroundColor: item.selected
                     ? colors.primary
                     : colors.white,
                  marginLeft: item.id == 1 ? 20 : 0
               }
            ]}
         >
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.title}</Text>
            <View
               style={[
                  styles.categoryIconWrapper,
                  {
                     backgroundColor: item.selected
                        ? colors.white
                        : colors.secondary
                  }
               ]}
            >
               <Feather
                  name="chevron-right"
                  size={16}
                  style={[
                     styles.categoryIcon,
                     {
                        color: item.selected ? colors.black : colors.white
                     }
                  ]}
               />
            </View>
         </View>
      )
   }

   return (
      <View style={styles.container}>
         <ScrollView>
            <SafeAreaView
               showVerticalScrollIndicator={false}
               contentInsetAdjustmentBehavior="automatic"
            >
               <View style={styles.headerWrapper}>
                  <Image
                     source={require("../assets/images/profile.png")}
                     style={styles.profileImage}
                  />
                  <Feather name="menu" size={24} color={colors.textDark} />
               </View>
            </SafeAreaView>
            <View style={styles.titlesWrapper}>
               <Text style={styles.titlesSubtitle}>Food</Text>
               <Text style={styles.titlesTitle}>Delivery</Text>
            </View>
            <View style={styles.searchWrapper}>
               <Feather name="search" size={16} color={colors.textDark} />
               <View style={styles.search}>
                  <Text style={styles.searchText}>Search.....</Text>
               </View>
            </View>
            <View style={styles.categoriesWrapper}>
               <Text style={styles.categoriesText}>Categories</Text>
               <View style={styles.categoriesListWrapper}>
                  <FlatList
                     data={categoriesData}
                     keyExtractor={(item) => item.id}
                     renderItem={categoriesRenderData}
                     horizontal
                     showsHorizontalScrollIndicator={false}
                  />
               </View>
            </View>
            <View style={styles.popularsWrapper}>
               <Text style={styles.popularText}>Popular</Text>
               {popularData.map((item, index) => (
                  <TouchableOpacity
                     key={index}
                     onPress={() =>
                        navigation.navigate("Detail", { item: item })
                     }
                  >
                     <View style={styles.contentWrapper}>
                        <View style={styles.mainWrapper}>
                           <View>
                              <View style={styles.topWrapper}>
                                 <MaterialCommunityIcons
                                    name="crown"
                                    size={12}
                                    color={colors.primary}
                                 />
                                 <Text style={styles.topText}>
                                    Top of The week
                                 </Text>
                              </View>
                              <View style={styles.itemTitleWrapper}>
                                 <Text style={styles.itemTitle}>
                                    {item.title}
                                 </Text>
                              </View>
                              <View style={styles.itemWeightWrapper}>
                                 <Text style={styles.itemWeight}>
                                    Weight {item.weight}
                                 </Text>
                              </View>

                              <View style={styles.ButtonWrapper}>
                                 <View style={styles.outerButton}>
                                    <Text style={styles.plusButton}>+</Text>
                                 </View>

                                 <View style={styles.ratingWrapper}>
                                    <MaterialCommunityIcons
                                       name="star"
                                       size={10}
                                       color="black"
                                    />
                                    <Text style={styles.ratingText}>
                                       {item.rating}
                                    </Text>
                                 </View>
                              </View>
                           </View>

                           <View style={styles.imageWrapper}>
                              <Image
                                 style={styles.imageStyle}
                                 source={item.image}
                              />
                           </View>
                        </View>
                     </View>
                  </TouchableOpacity>
               ))}
            </View>
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   headerWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      paddingTop: 20,
      alignItems: "center"
   },
   profileImage: {
      width: 40,
      height: 40,
      borderRadius: 40
   },
   titlesWrapper: {
      marginTop: 30,
      paddingHorizontal: 20
   },
   titlesSubtitle: {
      fontSize: 16,
      color: colors.textDark,
      fontFamily: "Montserrat-Regular"
   },
   titlesTitle: {
      fontSize: 32,
      color: colors.textDark,
      fontFamily: "Montserrat-Bold",
      marginTop: 5
   },
   searchWrapper: {
      marginTop: 30,
      flexDirection: "row",
      paddingHorizontal: 20
   },
   search: {
      flex: 1,
      paddingLeft: 10,
      borderBottomWidth: 2,
      borderBottomColor: colors.textLight
   },
   searchText: {
      fontSize: 17,
      color: colors.textLight,
      fontFamily: "Montserrat-Semibold",
      marginBottom: 5
   },
   categoriesWrapper: {
      marginTop: 30
   },
   categoriesText: {
      fontFamily: "Montserrat-Bold",
      fontSize: 18,
      marginLeft: 20
   },
   categoriesListWrapper: {
      paddingTop: 10
   },
   categoryItemWrapper: {
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: colors.primary,
      marginRight: 30,
      borderRadius: 10,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 7
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,

      elevation: 15
   },
   categoryImage: {
      height: 50,
      width: 65,
      marginTop: 15,
      marginBottom: 15,
      marginHorizontal: 15
   },
   categoryText: {
      fontFamily: "Montserrat-Semibold",
      marginBottom: 20
   },
   categoryIconWrapper: {
      height: 30,
      width: 30,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      backgroundColor: colors.white,
      marginBottom: 20
   },
   popularsWrapper: {
      marginTop: 15,
      marginHorizontal: 20
   },
   popularText: {
      fontFamily: "Montserrat-Bold",
      fontSize: 18
   },
   contentWrapper: {
      marginHorizontal: 10
   },
   mainWrapper: {
      backgroundColor: colors.white,
      marginTop: 15,
      flexDirection: "row",
      borderRadius: 25,
      overflow: "hidden"
   },
   imageWrapper: {
      marginTop: 15,
      marginBottom: 15
   },
   imageStyle: {
      width: 210,
      height: 125,
      resizeMode: "contain"
   },
   topWrapper: {
      marginTop: 15,
      marginLeft: 15,
      flexDirection: "row"
   },
   topText: {
      fontFamily: "Montserrat-Bold",
      fontSize: 14,
      marginLeft: 15
   },
   itemTitleWrapper: {
      marginTop: 15,
      marginLeft: 20
   },
   itemTitle: {
      fontFamily: "Montserrat-Bold",
      fontSize: 16,
      color: colors.textDark
   },
   itemWeightWrapper: {
      marginTop: 10,
      marginLeft: 20
   },
   itemWeight: {
      fontFamily: "Montserrat-Bold",
      fontSize: 16,
      color: colors.textLight
   },
   ButtonWrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
   },
   ratingWrapper: {
      marginLeft: 15,
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20
   },
   outerButton: {
      marginTop: 15,
      height: 60,
      width: 120,
      backgroundColor: colors.primary,
      justifyContent: "center",
      alignItems: "center",
      borderTopRightRadius: 25
   },
   ratingText: {
      marginLeft: 5,
      fontFamily: "Montserrat-Bold"
   }
})

export default Home
