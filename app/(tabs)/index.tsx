import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
// import { Image } from "react-native-reanimated/lib/typescript/Animated";
import { Button } from "react-native";
const categories = [
  {
    id: "1",
    icon: require("../../assets/images/icon.png"),
    description: "Welfare",
  },
  {
    id: "2",
    icon: require("../../assets/images/icon.png"),
    description: "Medical",
  },
  {
    id: "3",
    icon: require("../../assets/images/icon.png"),
    description: "Online Sadaqah",
  },
  {
    id: "4",
    icon: require("../../assets/images/icon.png"),
    description: "Clean Water",
  },
  {
    id: "5",
    icon: require("../../assets/images/icon.png"),
    description: "Education",
  },
  {
    id: "6",
    icon: require("../../assets/images/icon.png"),
    description: "Food",
  },
];
const ourProjects = [
  {
    id: "1",
    heading: "Heading 1",
    icon: require("../../assets/images/react-logo.png"),
    description: "description 1",
  },
  {
    id: "2",
    heading: "Heading 2",
    icon: require("../../assets/images/react-logo.png"),
    description: " description 2",
  },
  {
    id: "3",
    heading: "Heading 3",
    icon: require("../../assets/images/react-logo.png"),
    description: " description 3",
  },
  {
    id: "4",
    heading: "Heading 4",
    icon: require("../../assets/images/react-logo.png"),
    description: " description 4",
  },
];
const ourDonation = [
  {
    id: "1",
    heading: "20000",
    duration: "Monthly",
    icon: require("../../assets/images/react-logo.png"),
    description: "Family Adoption ",
  },
  {
    id: "2",
    heading: "250000",
    duration: "Monthly",
    icon: require("../../assets/images/react-logo.png"),
    description: "Food  ",
  },
  {
    id: "3",
    heading: "30000",
    duration: "Daily",
    icon: require("../../assets/images/react-logo.png"),
    description: " Education",
  },
  {
    id: "4",
    heading: "40000",
    duration: "Daily",
    icon: require("../../assets/images/react-logo.png"),
    description: " Charity",
  },
];
const slides = [
  {
    id: "1",
    image: require("../../assets/images/profile.png"), // Replace with your image paths
    name: "Slide 1",
    description: "This is the first slide. Enjoy the experience!",
  },
  {
    id: "2",
    image: require("../../assets/images/profile.png"), // Replace with your image paths
    name: "Slide 2",
    description: "This is the second slide. Explore more content!",
  },
  {
    id: "3",
    image: require("../../assets/images/profile.png"), // Replace with your image paths
    name: "Slide 3",
    description: "This is the third slide. Keep learning and growing!",
  },
];
const { width, height } = Dimensions.get("window"); // Screen width
const ITEM_SIZE = width * 0.4; // Adjust item size (90% of screen width)
const ITEM_SIZE1 = width * 0.8;
// const ITEM_SIZE2 = width * 0.;

// const { width, height } = Dimensions.get("window");
export default function HomeScreen() {
  const renderItem = ({ item }) => (
    // containerFlatList
    // <View style={styles.containerFlatList}>
    <View style={styles.categoryItem}>
      <Image source={item.icon} style={styles.icon} resizeMode="contain" />
      <Text style={styles.description}>{item.description}</Text>
    </View>
    // </View>
  );
  const renderItem1 = ({ item }) => (
    <View style={styles.categoryItemP}>
      {/* Left Side: Heading and Description */}
      <View style={styles.leftView}>
        <Text style={styles.heading}>{item.heading}</Text>
        <Text style={styles.descriptionP}>{item.description}</Text>
      </View>

      {/* Right Side: Image */}
      <View style={styles.rightView}>
        <Image source={item.icon} style={styles.iconP} resizeMode="contain" />
      </View>
    </View>
  );
  const renderItem2 = ({ item }) => (
    // <View style={styles.containerFlatList}>
    <View style={styles.categoryItem}>
      <Image source={item.icon} style={styles.icon} resizeMode="contain" />

      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.description}>{item.heading}</Text>
      <Text style={styles.description}>({item.duration})</Text>
    </View>
  );
  const renderItem3 = ({ item }) => (
    <View style={styles.slideS}>
      {/* Image Section */}
      <Image source={item.image} style={styles.imageS} resizeMode="cover" />

      {/* Text Section */}
      <View style={styles.textContainerS}>
        <Text style={styles.nameS}>{item.name}</Text>
        <Text style={styles.descriptionS}>{item.description}</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Logo and Search Bar */}
        <View style={styles.searchContainer}>
          <Image
            source={require("../../assets/images/icon.png")} // Replace with your image path
            style={styles.logo}
            resizeMode="contain"
          />
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            placeholderTextColor="#888"
          />
        </View>

        {/* <View style={styles.View2}> */}
        <View style={styles.searchContainer1}>
          <View>
            <Text style={styles.text}>Welcome to the App!</Text>
            <Text style={styles.text}>How Can I help you ?</Text>
            <Button
              title="Get Started"
              onPress={() => alert("Button Pressed!")}
            />
          </View>
          <View>
            <Image
              source={require("../../assets/images/icon.png")} // Replace with your image path
              style={styles.logo1}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.mainView}>
          {/* Left Sub-View: Text */}
          <View style={styles.leftSubView}>
            <Text style={styles.text}>Hello, Welcome!</Text>
          </View>

          {/* Right Sub-View: Button */}
          <View style={styles.rightSubView}>
            <Button
              title="Quick Donate"
              onPress={() => alert("Button Pressed!")}
            />
          </View>
        </View>
        <View>
          <Text style={styles.Sponser}> BE A SPONSER</Text>
        </View>
        <Text>What We Are Doing</Text>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          horizontal={true} // Change to true if you want horizontal scrolling
          showsVerticalScrollIndicator={false} // Hide vertical scrollbar
          contentContainerStyle={styles.listContent}
        />
        <View>
          <Text style={styles.ourProjectsText}>Other Projects</Text>
          <View>
            <FlatList
              data={ourProjects}
              keyExtractor={(item) => item.id}
              renderItem={renderItem1}
              horizontal={true} // Vertical scrolling
              showsVerticalScrollIndicator={false} // Show vertical scrollbar
              contentContainerStyle={styles.listContentP}
            />
          </View>
        </View>
        <View>
          <Text style={styles.ourProjectsText}>Donation Statistics</Text>
          <View>
            <FlatList
              data={ourDonation}
              keyExtractor={(item) => item.id}
              renderItem={renderItem2}
              horizontal={true} // Vertical scrolling
              showsVerticalScrollIndicator={false} // Show vertical scrollbar
              contentContainerStyle={styles.listContentP}
            />
          </View>
        </View>
        <View>
          <Text style={styles.ourProjectsText}>Our Testimonal</Text>
          <View style={styles.Testimonalsection}>
            <FlatList
              data={slides}
              keyExtractor={(item) => item.id}
              renderItem={renderItem3}
              horizontal={true} // Vertical scrolling
              showsVerticalScrollIndicator={false} // Show vertical scrollbar
              contentContainerStyle={styles.listContentP}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  View2: {
    backgroundColor: "#45ff",
  },
  container: {
    flex: 1,

    backgroundColor: "#fff",
    // justifyContent: "center", // Center content vertically
    // padding: 2,
  },
  searchContainer: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Vertically align items
    paddingHorizontal: 16,
    padding: 20,
  },
  searchContainer1: {
    flexDirection: "row", // To align child elements side by side if needed
    justifyContent: "space-between", // Space between child elements
    alignItems: "center", // Align items vertically
    borderColor: "#3498db", // Border color
    borderWidth: 2, // Border thickness
    borderRadius: 8, // Optional: Rounded corners
    padding: 16, // Optional: Inner spacing
    margin: 16, // Optional: Outer spacing
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
  },
  topSection: {
    flex: 1, // Takes up half the screen
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  bottomSection: {
    flex: 1, // Takes up the other half
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
  },

  logo: {
    width: 40, // Logo width
    height: 40, // Logo height
    marginRight: 10, // Space between logo and search bar
    borderRadius: 18,
  },
  logo1: {
    width: 120, // Logo width
    height: 120, // Logo height
    marginRight: 10, // Space between logo and search bar
    borderRadius: 18,
  },
  searchBar: {
    flex: 1, // Take the remaining width
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  mainView: {
    flexDirection: "row", // Align sub-views horizontally
    justifyContent: "space-between", // Space between sub-views
    alignItems: "center", // Center align vertically
    width: "100%", // Adjust width as needed
    padding: 10, // Padding inside the main view
    // borderWidth: 2, // Optional: Add border for visual clarity
    // borderColor: "#3498db", // Optional: Border color
    borderTopColor: "#3498db",
    borderBottomColor: "#3498db",
    // borderRadius: 8, // Optional: Rounded corners
    backgroundColor: "#ACE1AF",
  },
  leftSubView: {
    flex: 1, // Takes equal space as right sub-view
    justifyContent: "center",
  },
  rightSubView: {
    justifyContent: "center",
  },
  Sponser: {
    height: 40,
    textAlign: "center",
    backgroundColor: "#3498db",
    // textDecorationColor: "#339222",
    color: "#f5f5f5",
    alignItems: "center", // Center align vertically
    width: "100%", // Adjust width as needed
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 20,
  },
  listContent: {
    paddingBottom: 16,
  },
  // categoryItem: {
  //   flexDirection: "column", // Align icon and description vertically
  //   alignItems: "center", // Center items horizontally
  //   paddingLeft: 10,
  //   paddingRight: 10,
  //   // paddingBottom: 10,
  //   gap: 4,
  //   // marginBottom: 10,
  //   flex: 1,
  //   padding: 24,
  //   // backgroundColor: "#fff",
  //   backgroundColor: "#3498db",
  //   // flexDirection: "column",
  //   borderWidth: 1,
  //   borderColor: "#ccc",
  //   borderRadius: 8,
  //   // backgroundColor: "#f9f9f9",
  // },
  categoryItem: {
    width: ITEM_SIZE, // Equal width
    height: ITEM_SIZE, // Equal height
    marginRight: 5,
    marginLeft: 5,
    flexDirection: "column", // Align icon and description vertically
    alignItems: "center", // Center items horizontally
    justifyContent: "center", // Center content vertically
    // padding: 30, // Inner padding for the content
    gap: 4, // Space between icon and description
    backgroundColor: "#3498db", // Background color for the item
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    alignSelf: "center", // Center the items horizontally
  },
  icon: {
    width: 50, // Adjust icon size
    height: 50,
    // marginBottom: 8, // Space between icon and description
  },
  description: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  containerFlatList: {
    flex: 1,
    padding: 24,
    // backgroundColor: "#fff",
    backgroundColor: "#3498db",
    flexDirection: "column",
  },
  ourProjectsText: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
  },
  listContentP: {
    paddingBottom: 16,
  },

  categoryItemP: {
    width: ITEM_SIZE1, // Equal width
    height: 100, // Equal height
    flexDirection: "row", // Arrange sub-views horizontally
    justifyContent: "space-between", // Space out the left and right views
    alignItems: "center", // Center vertically
    padding: 16,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  leftView: {
    flex: 3, // Occupies more space for text
    justifyContent: "center",
  },
  rightView: {
    flex: 1, // Occupies less space for the image
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  descriptionP: {
    fontSize: 14,
    color: "#666",
  },
  iconP: {
    width: 50,
    height: 50,
  },
  // slider css
  sliderContent: {
    alignItems: "center",
  },
  slideS: {
    width, // Full width of the screen
    height: height * 0.75, // Adjust height (75% of the screen height)
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
    padding: 20,
    gap: 20,
    // marginLeft: 5,
    borderColor: "#3498db",
    backgroundColor: "#f9f9f9",
  },
  imageS: {
    width: 150, // Set to fixed size
    height: 150, // Equal to width
    borderRadius: 75, // Makes it a perfect circle
    marginBottom: 16,
  },
  textContainerS: {
    alignItems: "center",
  },
  nameS: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  descriptionS: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 16,
  },
  Testimonalsection: { flex: 1, backgroundColor: "#fff4", gap: 20 },
});
