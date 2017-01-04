//To create the collection, we define a new tasks module that creates a Mongo collection and exports it:

import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');
