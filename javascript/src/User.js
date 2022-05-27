"use strict";

module.exports = class User {
  trips = [];
  friends = [];

  getFriends() {
    return this.friends;
  }

  addFriend(user) {
    this.friends.push(user);
  }

  addTrip(trip) {
    this.trips.push(trip);
  }

  getTrips() {
    return this.trips;
  }
};
