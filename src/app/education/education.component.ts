import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  schools: any[] = [

    {
      name: "Cincinnati State Technical College",
      accomplishments: "Mechanical Engineering Technology and Design",
      years: 2019
    },
    {
      name: "Fairfield High School",
      accomplishments: "College Prep",
      years: 2012
    },
    {
      name: "Max Technical Training",
      accomplishments: "Full stack dev bootcamp completion",
      years: 2021
    }
  ]

  technologies: string[] = [" git,", " github,", " SQL,", " Java,", " HTML,", " C#,", " Javascript,", " Typescript,", " Angular,", " SSMS,", " Visual Studio"];
  name: string = "git";
  constructor() { }

  ngOnInit(): void {
  }

}
