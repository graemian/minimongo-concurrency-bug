import React, {useEffect} from 'react';

import {useTracker} from "meteor/react-meteor-data";
import {insertOneHundredRandomNumbers} from "../api/randomNumbers";

export const App = () => {
    // Total blob count
    const randomNumbersCount = useTracker(() => RandomNumbersCollection.find().count());
    
    // Range trackers (0-10, 10-20, ..., 90-100)
    const range0to10 = useTracker(() => RandomNumbersCollection.find({ value: { $gte: 0, $lt: 10 } }).count());
    const range10to20 = useTracker(() => RandomNumbersCollection.find({ value: { $gte: 10, $lt: 20 } }).count());
    const range20to30 = useTracker(() => RandomNumbersCollection.find({ value: { $gte: 20, $lt: 30 } }).count());
    const range30to40 = useTracker(() => RandomNumbersCollection.find({ value: { $gte: 30, $lt: 40 } }).count());
    const range40to50 = useTracker(() => RandomNumbersCollection.find({ value: { $gte: 40, $lt: 50 } }).count());
    const range50to60 = useTracker(() => RandomNumbersCollection.find({ value: { $gte: 50, $lt: 60 } }).count());
    const range60to70 = useTracker(() => RandomNumbersCollection.find({ value: { $gte: 60, $lt: 70 } }).count());
    const range70to80 = useTracker(() => RandomNumbersCollection.find({ value: { $gte: 70, $lt: 80 } }).count());
    const range80to90 = useTracker(() => RandomNumbersCollection.find({ value: { $gte: 80, $lt: 90 } }).count());
    const range90to100 = useTracker(() => RandomNumbersCollection.find({ value: { $gte: 90, $lte: 100 } }).count());

    useEffect(() => { Meteor.setTimeout(() => insertOneHundredRandomNumbers(), 1000) }, [])

    return <div>
        <h1>Welcome to Meteor!</h1>

        <div>Total random numbers count: {randomNumbersCount}</div>
        
        <div>Range 0-10: {range0to10}</div>
        <div>Range 10-20: {range10to20}</div>
        <div>Range 20-30: {range20to30}</div>
        <div>Range 30-40: {range30to40}</div>
        <div>Range 40-50: {range40to50}</div>
        <div>Range 50-60: {range50to60}</div>
        <div>Range 60-70: {range60to70}</div>
        <div>Range 70-80: {range70to80}</div>
        <div>Range 80-90: {range80to90}</div>
        <div>Range 90-100: {range90to100}</div>
    </div>
};
