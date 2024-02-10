import { Injectable } from "@angular/core";
import { Travel } from "./travel.model";
import { UserService } from "./user.service";

@Injectable()
export class TravelService {
    constructor(public userService: UserService){}
    public dummyTravelList: Array<Travel> = [
        {
        id: 1,
        img: "https://www.horecapropeler.com/images/media/421-38953202795521308d2efb.jpg",
        type: 'train',
        name: 'Novi Sad',
        price: 15,
        date: new Date(),
        likes: 100,
        status: 'upcoming',
        likeUsers: [ 1, 2 ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ 1, 2 ],
        comments: []
        },
        {
        id: 2,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 1200000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 3,
        type: 'train',
        img: "https://images.pexels.com/photos/2845801/pexels-photo-2845801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Montenegro',
        price: 12345,
        date: new Date(),
        likes: 13,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'crna gora'},
            { userId: 2, comment: 'crna je gora'},      
            { userId: 3, comment: 'montenegro'}      
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 4,
        type: 'plane',
        img: "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Japan',
        price: 4553450,
        date: new Date(),
        likes: 450,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'jeste'},
            {userId: 3, comment: 'senpai notice me'}       
        ],
        description: 'lorem ipsum dolor weeb amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 5,
        type: 'bus',
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Subotica_townhall_at_night.jpg",
        name: 'Subotica',
        price: 16,
        date: new Date(),
        likes: 3,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
              
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 6,
        type: 'plane',
        img: "https://images.pexels.com/photos/2376713/pexels-photo-2376713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Juzna Koreja',
        price: 643273445,
        date: new Date(),
        likes: 344,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 7,
        type: 'bus',
        img: "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Italija',
        price: 14415,
        date: new Date(),
        likes: 56,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'patnja'},
            { userId: 2, comment: 'gde bas bus'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 8,
        type: 'train',
        img: "https://images.pexels.com/photos/9504777/pexels-photo-9504777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Rumunija',
        price: 15213,
        date: new Date(),
        likes: 9,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 9,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 10,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 11,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 12,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 13,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 14,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 15,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 16,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 17,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 18,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 19,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 20,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 21,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 22,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 23,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 24,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 25,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'upcoming',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ ]
        },
        {
        id: 26,
        type: 'plane',
        img: "https://images.pexels.com/photos/1637122/pexels-photo-1637122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: 'Cuba',
        price: 120000000,
        date: new Date(),
        likes: 79,
        status: 'done',
        likeUsers: [ ],
        comments: [
            { userId: 1, comment: 'strava'},
            { userId: 2, comment: 'lose'}       
        ],
        description: 'lorem ipsum dolor sit amaet',
        cancelledUsers: [ ],
        reservedUsers: [ 1 ]
        },
        
    ]

    getTravels(){
        return this.dummyTravelList
    }

    getTravelById(id: number) {
        var foundTravel!: Travel
        this.dummyTravelList.forEach(travel =>{
            if (travel.id == id) {
                foundTravel = travel
            }
        })
        return foundTravel
    }


    createNewTravel(travel: Travel) {
        this.dummyTravelList.push(travel)
    }
    
    removeTravel(travelToDelete: Travel) {
        this.dummyTravelList = this.dummyTravelList.filter( travel =>
            travel.id != travelToDelete.id)
    }

    leaveComment(id: number, comment: string) {
        this.dummyTravelList[id-1].comments?.push({userId: this.userService.currentUser!.id, comment: comment})
    }


}