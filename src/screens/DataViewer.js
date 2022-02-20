import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, View, ScrollView } from 'react-native';
import { Block, Button, Text, NavBar, theme } from 'galio-framework';
import { VictoryBar, VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from "victory-native";

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';
import Data from '../constants/Data';

export default class DataViewer extends React.Component {

    renderImage = () => {
        return(
            <ImageBackground
                source={{  uri: Images.Foods[0] }}
                style={{ height: height/2, width: width, marginTop: '-30%', zIndex: -1 }}
            />
        )
    }

    renderHeader = () => {
        return (
            <Block flex space="between" style={styles.padded}>
            <Block flex space="around" style={{ zIndex: 2 }}>
                <Block>
                    <Text color="white" size={42}>Broccoli</Text>
                </Block>
                <Text size={18} color='rgba(255,255,255,0.6)'>
                    <Text size={18} color='white'>0.57</Text> KgCO2eq / Kg, <Text size={18} color='white'> 325</Text> Liters / Kg
                </Text>
                <Text></Text>
            </Block>
            <Block>
                <Text size={22} color='white'>0.27%<Text size={18} color='rgba(255,255,255,0.6)'> Daily Carbon Allowance</Text></Text>
                
                <Text size={22} color='white'>0.94%<Text size={18} color='rgba(255,255,255,0.6)'> Daily Water Allowance</Text></Text>
                <Text></Text>
                <Text></Text>
            </Block>
            </Block>
        )
    }

    renderCO2Comparison = () => {
        return(
            <Block flex space="between" style={styles.padded}>
                <Text color="white" size={24}>Carbon Footprint Comparison</Text>

                <VictoryChart
                    width={350}
                    responsive={true}
                    domainPadding={{ x: 0 }}
                    theme={VictoryTheme.material}
                >
                    <VictoryAxis style={{
                        tickLabels: { fill: 'rgba(255,255,255,0.6)'},
                        grid: {
                            stroke: "grey", //CHANGE COLOR OF X-AXIS GRID LINES
                            strokeDasharray: '7',
                        }
                    }}/>
                    <VictoryBar
                    style={{ 
                        data: { fill: "#6DB65B" }, 
                        labels: { fill: "white" }, 
                     }}
                    alignment="middle"
                    labels={({ datum }) => datum.y}
                    data={Data.VEGETABLE_CO2}
                    />
                </VictoryChart>
            </Block>
        )
    }

    renderWaterComparison = () => {
        return(
            <Block flex space="between" style={styles.padded}>
                <Text color="white" size={24}>Water Footprint Comparison</Text>
                <VictoryChart
                    width={350}
                    responsive={true}
                    domainPadding={{ x: 0 }}
                    theme={VictoryTheme.material}
                >
                    <VictoryAxis style={{
                        tickLabels: { fill: 'rgba(255,255,255,0.6)'},
                        grid: {
                            stroke: "grey", //CHANGE COLOR OF X-AXIS GRID LINES
                            strokeDasharray: '7',
                        }
                    }}/>
                    <VictoryBar
                    style={{ data: { fill: "#1AA7EC" }, labels: { fill: "white" } }}
                    alignment="middle"
                    labels={({ datum }) => datum.y}
                    data={Data.VEGETABLE_WATER}
                    />
                </VictoryChart>
            </Block>
        )
    }

    renderUSLineChart = () => {
        return(
            <VictoryChart width={350} theme={VictoryTheme.material}>
                <VictoryLine style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc"}
                }} data={Data.US_CO2} x="year" y="co2_per_capita" />
            </VictoryChart>
        )
        
    }

    render() {
        return (
            <Block flex style={styles.container}>
                <StatusBar barStyle="light-content" />
                <ScrollView
                style={styles.components}
                showsVerticalScrollIndicator={false}>
                    {this.renderImage()}
                    {this.renderHeader()}
                    {this.renderCO2Comparison()}
                    {this.renderWaterComparison()}
                    {/* {this.renderUSLineChart()} */}
                </ScrollView>
            </Block>

        // <Block flex style={styles.container}>
        //     <StatusBar barStyle="light-content" />

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
        //             <View style={styles.container}>
        //                 <VictoryChart width={350} theme={VictoryTheme.material}>
        //                 <VictoryLine style={{
        //                     data: { stroke: "#c43a31" },
        //                     parent: { border: "1px solid #ccc"}
        //                 }} data={Data.US_CO2} x="year" y="co2_per_capita" />
        //                 </VictoryChart>
        //             </View>
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
    paddingHorizontal: theme.SIZES.BASE,
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