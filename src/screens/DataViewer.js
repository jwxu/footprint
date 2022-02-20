import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, View } from 'react-native';
import { Block, Button, Text, NavBar, theme } from 'galio-framework';
// import {
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend
//   } from 'recharts';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';
import Data from '../constants/Data';

const data = [
    { year: 1, earnings: 13000 },
    { year: 2, earnings: 16500 },
    { year: 3, earnings: 14250 },
    { year: 4, earnings: 19000 }
  ];

export default class DataViewer extends React.Component {

    // renderHeader = () => (
    //     <NavBar
    //       title="Product Data"
    //       onLeftPress={() => this.props.navigation.openDrawer()}
    //       leftIconColor={theme.COLORS.MUTED}
    //       right={(
    //         <Button
    //             color="transparent"
    //             style={styles.settings}
    //             onPress={() => this.props.navigation.openDrawer()}
    //         >
    //             <Icon size={BASE_SIZE} name="heart" family="font-awesome" color={theme.COLORS.MUTED} />
    //         </Button>
    //       )}
    //       style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
    //     />
    // )

    render() {
        return (
            <View style={styles.container}>
                <VictoryChart width={350} theme={VictoryTheme.material}>
                <VictoryBar data={data} x="year" y="earnings" />
                </VictoryChart>
            </View>
        // <LineChart
        //     data={Data.US_CO2}
        //     >
        //     <CartesianGrid strokeDasharray="3 3" />
        //     <XAxis dataKey="year" />
        //     <YAxis />
        //     <Tooltip />
        //     <Legend />
        //     <Line
        //         type="monotone"
        //         dataKey="co2_per_capita"
        //         stroke="#8884d8"
        //         activeDot={{ r: 8 }}
        //     />
        // </LineChart>
        // <Block flex style={styles.container}>
        //     <StatusBar barStyle="light-content" />

        //     <LineChart
        //         data={Data.US_CO2}
        //         >
        //         <CartesianGrid strokeDasharray="3 3" />
        //         <XAxis dataKey="year" />
        //         <YAxis />
        //         <Tooltip />
        //         <Legend />
        //         <Line
        //             type="monotone"
        //             dataKey="co2_per_capita"
        //             stroke="#8884d8"
        //             activeDot={{ r: 8 }}
        //         />
        //     </LineChart>
        //     {/* <Block flex center>
        //     <ImageBackground
        //         source={{  uri: Images.Foods[0] }}
        //         style={{ height: height / 2, width: width, marginTop: '-55%', zIndex: 1 }}
        //     />
            
        //     </Block> */}
        //     <Block flex space="between" style={styles.padded}>
        //     <Block flex space="around" style={{ zIndex: 2 }}>
        //         <Block>
        //             <Block>
        //                 <Text color="white" size={48}>Broccoli</Text>
        //             </Block>
        //             <Text size={16} color='rgba(255,255,255,0.6)'>
        //                 0.57 KgCO2eq/Kg
        //             </Text>
        //             <Text size={16} color='rgba(255,255,255,0.6)'>
        //                 325 Liters of Water / Kg
        //             </Text>
        //         </Block>
        //         <Block center>
        //         <Button
        //             shadowless
        //             style={styles.button}
        //             color={materialTheme.COLORS.BUTTON_COLOR}
        //             onPress={() => navigation.navigate('App')}>
        //             SCAN ITEMS
        //         </Button>
        //         </Block>
        //     </Block>
        //     </Block>
        // </Block>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});