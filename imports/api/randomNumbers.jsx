import {Mongo} from "meteor/mongo";

export const RandomNumbersCollection = new Mongo.Collection(null);

export const insertOneHundredRandomNumbers = async () => {
    const promises = [];
    for (let i = 1; i <= 100; i++) {
        RandomNumbersCollection.insertAsync({createdAt: new Date(), value: Math.random() * 100});
    }
};