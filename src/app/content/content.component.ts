import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';


export interface cource{

  cource_id: number,
  cource_title: string,
  cource_descripton: string,
  date_of_enrollement: Date,
  rating: number,
  cource_logo: string
  // duration: number,
  // enroll: boolean
}


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {



  constructor() {
    }


    cources: cource[] = [
      { cource_id: 1,
        cource_logo:"https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        cource_title: "Core JAVA",
        cource_descripton: "This is a cource where you'll learn the core java concepts easily.",
        date_of_enrollement: new Date(),
        rating: 3
      },

      { cource_id: 2,
        cource_logo:"https://images.unsplash.com/1/type-away-numero-dos.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        cource_title: "Advance JAVA",
        cource_descripton: "This is a cource where you'll learn the Advance java concepts easily.",
        date_of_enrollement: new Date(),
        rating: 5
      },


      { cource_id: 3,
        cource_logo:"https://images.unsplash.com/photo-1570717173024-ec8081c8f8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        cource_title: "Python",
        cource_descripton: "This is a cource where you'll learn the Python concepts easily.",
        date_of_enrollement: new Date(),
        rating: 4
      },


      { cource_id: 4,
        cource_logo:"https://images.unsplash.com/photo-1570717173024-ec8081c8f8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        cource_title: "Digital Marketing",
        cource_descripton: "This is a cource where you'll learn the Digital Marketing concepts easily.",
        date_of_enrollement: new Date(),
        rating: 3
      },

      { cource_id: 5,
        cource_logo:"https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1066&q=80",
        cource_title: "Chart.Js",
        cource_descripton: "This is a cource where you'll learn the Chart.Js concepts easily.",
        date_of_enrollement: new Date(),
        rating: 1
      },

      { cource_id: 6,
        cource_logo:"https://images.unsplash.com/photo-1591696331096-c73fe847643d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        cource_title: "Internet of things",
        cource_descripton: "This is a cource where you'll learn the Internet of things concepts easily.",
        date_of_enrollement: new Date(),
        rating: 2
      },

    ]



  ngOnInit(): void {


  }

}
