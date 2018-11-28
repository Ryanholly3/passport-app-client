import { UserTemplate } from './userTemplate'

export const USERDATA: UserTemplate[]= [{
  id: 1,
  name: "Ryan Holly",
  email: "ryanholly@gmail.com",
  age: 26,
  gender: "male",
  homeCountry: "United States",
  bio: "I love to travel!",
  destinations: [
      {
        id: 1,
        latitude: 48.8566,
        longitude: 2.3522,
        country_code: "FR",
        trip_detail: "I want to visit the eiffel tower!"
      },
      {
        id: 2,
        latitude: 33.4484,
        longitude: -112.0740,
        country_code: "US",
        trip_detail: "I want to see the saguaros in phoenix!"
      }],
  visited: [
    {
      id: 1,
      latitude: 44.9778,
      longitude: -93.2650,
      country_code: "US",
      trip_detail: "Minneapolis was so much fun!"
    },
    {
      id: 2,
      latitude: 35.6895,
      longitude: 139.6917,
      country_code: "JP",
      trip_detail: "TOKYO WAS THE BEST BY FAR!"
    }]
  },{
  id: 2,
  name: "Chris Edgar",
  email: "verzetem@gmail.com",
  age: 28,
  gender: "male",
  homeCountry: "United States",
  bio: "I'm soft as cake, and I want to meet spicy fellows on my journeys!",
  destinations: [
      {
        id: 3,
        latitude: 53.3498,
        longitude: -6.2603,
        country_code: "IE",
        trip_detail: "I can't wait to drink guiness in dublin!"
      },
      {
        id: 4,
        latitude: 18.1096,
        longitude: -77.2975,
        country_code: "JM",
        trip_detail: "Can't wait to drink margaritas in Portmore, Jamaica!"
      }],
  visited: [
    {
      id: 3,
      latitude: 42.3601,
      longitude: -71.0589,
      country_code: "US",
      trip_detail: "Boston was kewl!"
    },
    {
      id: 4,
      latitude: 49.2827,
      longitude: -123.1207,
      country_code: "CA",
      trip_detail: "Vancouver was radical!!"
    }]
  },{
  id: 3,
  name: "Son Phan",
  email: "sonvphan1@gmail",
  age: 28,
  gender: "male",
  homeCountry: "United States",
  bio: "Soft as cake! And I love to travel!",
  destinations: [
      {
        id: 5,
        latitude: 39.0392,
        longitude: 125.7625,
        country_code: "KP",
        trip_detail: "I want to check out Pyongchang! Dictatorship's are so in right now."
      },
      {
        id: 6,
        latitude: 1.3521,
        longitude: 103.8198,
        country_code: "SG",
        trip_detail: "I want to climb the Tanjong Pagar Centre in Singapore!"
      }],
  "visited": [
    {
      id: 5,
      latitude: 18.1096,
      longitude: -77.2975,
      country_code: "JM",
      trip_detail: "Drinking on the beach in Jamaica was chill mon"
    },
    {
      id: 6,
      latitude: -37.8136,
      longitude: 144.9631,
      country_code: "AU",
      trip_detail: "Kangarooooooooos!"
    }]
  },{
  id: 4,
  name: "Tyler Adams",
  email: "tadams9145@gmail",
  age: 27,
  gender: "male",
  homeCountry: "United States",
  bio: "I'm an eager clown looking for other eager clowns to travel with!",
  destinations: [
      {
        id: 7,
        latitude: 52.3680,
        longitude: 4.9036,
        country_code: "NL",
        trip_detail: "I can't wait to check out the red light district!"
      },
      {
        id: 8,
        latitude: 43.3438,
        longitude: 17.8078,
        country_code: "BA",
        trip_detail: "Mostar in Bosnia looks out of this WORLD!!"
      }],
  visited: [
    {
      id: 7,
      latitude: -22.9068,
      longitude: -43.1729,
      country_code: "BR",
      trip_detail: "I watched a fulbal game in Rio de Janeiro !"
    },
    {
      id: 8,
      latitude: -55.9833,
      longitude: -67.2667,
      country_code: "CL",
      trip_detail: "Visited the southern most point in South America, Cape Horn!"
    }]
  }
]