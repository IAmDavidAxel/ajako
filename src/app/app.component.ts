import {Component, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'ajako';


  ngOnInit(): void {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];

   toggleButton.addEventListener('click', ()=>{
     navbarLinks.classList.toggle('active')
   })
  }



}






