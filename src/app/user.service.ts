import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "./user.model"

@Injectable()
export class UserService {

    public currentUser: User | undefined

    constructor(private router: Router){}

    static dummyUserList: Array<User> = [
        {
            id: 1,
            name: 'Ime',
            surname: 'Prezime',
            email: "korisnik@test.com",
            address: 'Izmisljena ulica br. 9',
            password: "12341234",
            date: new Date("2022-05-26 16:59"),
            doneTravel: [ 26 ]
            
        },
        {
            id: 2,
            name: 'Luka',
            surname: 'Spasojevic',
            email: "drugi@test.com",
            address: 'neka adresa br.6',
            password: "12341234",
            favorites: ['voz', 'avion'],
            date: new Date("2022-05-26 16:42"),
            doneTravel: []
        }
    ]


    getUserName(user: User) : string {
        return user.email
    }

    getCurrentUser(): User | undefined{
        console.log('trenutni korisnik: ',this.currentUser)
        return this.currentUser
    }

    getUserById(id: number) : User {
        var foundUser!: User
        UserService.dummyUserList.forEach(user => {
            if (user.id == id) {
                foundUser = user
            }

        })
        this.currentUser = foundUser
        return foundUser
    }

    getUser(userEmail: string) : User {
        this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!
        return this.currentUser
    }

    isPasswordCorrect(userEmail: string, password: string) : boolean {
        return UserService.dummyUserList.find(userToFind => (userToFind.email == userEmail && userToFind.password == password)) != undefined
    }

    registerUser(email: string,name: string, surname:string, address:string, password: string, date: Date, favorites: []) : User {
        var maxId: number = 0

        UserService.dummyUserList.forEach(user =>
            {
                if (maxId < user.id) {
                    maxId = user.id
                }
            })

            var id = ++maxId
            var user: User = { id, name, surname, email, address, password, date, favorites}

            UserService.dummyUserList.push(user)

            this.currentUser = user

            console.log(user)
            console.log(this.currentUser)
            return user
    }

    isLoggedIn() {
        if (this.currentUser === undefined) {
            this.router.navigate(['login'])
        }
    }


}