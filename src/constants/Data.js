import US_CO2_DATA from '../data/us_co2.json';

const US_CO2 = US_CO2_DATA["data"]

const VEGETABLE_CO2 = [
    {
        x: "Broccoli",
        y: 0.57
    },
    {
        x: "Cauliflower",
        y: 0.31
    },
    {
        x: "Cabbage",
        y: 0.23
    },
    {
        x: "Spinach",
        y: 0.34
    },
    {
        x: "Lettuce",
        y: 0.41
    }
]

const VEGETABLE_WATER = [
    {
        x: "Broccoli",
        y: 325
    },
    {
        x: "Cauliflower",
        y: 285
    },
    {
        x: "Cabbage",
        y: 280
    },
    {
        x: "Spinach",
        y: 292
    },
    {
        x: "Lettuce",
        y: 237
    }
]

export default { US_CO2, VEGETABLE_CO2, VEGETABLE_WATER };