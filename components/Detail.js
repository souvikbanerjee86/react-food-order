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
import colors from "./../assets/colors/colors"

const Detail = ({ route, navigation }) => {
   const { item } = route.params
   const showIngredientData = ({ item }) => {
      return (
         <View style={styles.ingredientImageWrapper}>
            <Image source={item.image} style={styles.ingredientImage} />
         </View>
      )
   }
   return (
      <View style={styles.container}>
         <ScrollView
            showsVerticalScrollIndicator={false}
            contentInsetAdjustmentBehavior="automatic"
         >
            <SafeAreaView>
               <View style={styles.headerWrapper}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                     <View style={styles.headerLeft}>
                        <Feather
                           name="chevron-left"
                           size={16}
                           color={colors.textColor}
                        />
                     </View>
                  </TouchableOpacity>

                  <View style={styles.headerRight}>
                     <MaterialCommunityIcons
                        name="star"
                        size={16}
                        color={colors.white}
                     />
                  </View>
               </View>
            </SafeAreaView>

            <View style={styles.titleWrapper}>
               <Text style={styles.textStyle}>{item.title}</Text>
            </View>

            <View style={styles.priceWrapper}>
               <Text style={styles.priceStyle}>£ {item.price}</Text>
            </View>

            <View style={styles.infoWrapper}>
               <View style={styles.leftWrapper}>
                  <View style={styles.itemWrapper}>
                     <Text style={styles.itemText}>Size</Text>
                     <Text style={styles.itemValue}>
                        {item.sizeName} {item.sizeNumber}"
                     </Text>
                  </View>
                  <View style={styles.itemWrapper}>
                     <Text style={styles.itemText}>Crust</Text>
                     <Text style={styles.itemValue}>{item.crust}</Text>
                  </View>

                  <View style={styles.itemWrapper}>
                     <Text style={styles.itemText}>Delivery</Text>
                     <Text style={styles.itemValue}>
                        {item.deliveryTime} min
                     </Text>
                  </View>
               </View>
               <View style={styles.rightWrapper}>
                  <View style={styles.imageWrapper}>
                     <Image source={item.image} />
                  </View>
               </View>
            </View>

            <View style={styles.ingredientsWrapper}>
               <Text style={styles.ingredientsText}>Ingredients</Text>
               <View style={styles.ingredientsListWrapper}>
                  <FlatList
                     data={item.ingredients}
                     keyExtractor={(item) => item.id}
                     horizontal
                     showsHorizontalScrollIndicator={false}
                     renderItem={showIngredientData}
                  />
               </View>
            </View>

            <View style={styles.placeOrderWrapper}>
               <TouchableOpacity style={styles.ClickWrapper}>
                  <View>
                     <Text style={styles.orderText}>Place order online</Text>
                  </View>
                  <View>
                     <Feather name="chevron-right" size={30} />
                  </View>
               </TouchableOpacity>
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
      marginTop: 20,
      marginHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
   },
   headerLeft: {
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: colors.white,
      borderColor: colors.textLight,
      padding: 12
   },
   headerRight: {
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: colors.primary,
      borderColor: colors.white,
      padding: 12
   },
   titleWrapper: {
      paddingHorizontal: 20,
      marginTop: 20
   },
   textStyle: {
      fontFamily: "Montserrat-Bold",
      fontSize: 32,
      width: "50%",
      color: colors.textDark
   },
   priceWrapper: {
      paddingHorizontal: 20,
      marginTop: 15
   },
   priceStyle: {
      fontFamily: "Montserrat-Bold",
      fontSize: 32,
      color: colors.secondary
   },
   infoWrapper: {
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
   },
   leftWrapper: { paddingLeft: 20 },
   itemWrapper: {
      marginBottom: 10
   },
   itemText: {
      fontFamily: "Montserrat-Bold",
      fontSize: 16,
      color: colors.textLight
   },
   itemValue: {
      fontFamily: "Montserrat-Bold",
      fontSize: 20,
      color: colors.textDark
   },
   rightWrapper: {
      marginLeft: 30
   },
   imageWrapper: {
      resizeMode: "contain"
   },
   ingredientsWrapper: {
      marginTop: 40
   },
   ingredientsText: {
      paddingHorizontal: 20,
      fontFamily: "Montserrat-Bold",
      fontSize: 20,
      color: colors.textDark
   },
   ingredientImageWrapper: {
      marginTop: 20,
      marginLeft: 20,
      backgroundColor: colors.white,
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 7
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
      elevation: 5,
      marginBottom: 20,
      paddingHorizontal: 10
   },
   placeOrderWrapper: {
      marginTop: 20,
      marginBottom: 20
   },
   ClickWrapper: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.primary,
      marginHorizontal: 60,
      paddingVertical: 20,
      borderRadius: 25
   },
   orderText: {
      fontFamily: "Montserrat-Bold",
      fontSize: 15,
      color: colors.textDark
   }
})

export default Detail
