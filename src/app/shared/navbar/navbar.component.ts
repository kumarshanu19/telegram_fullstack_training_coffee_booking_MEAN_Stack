import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ks-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navToggle: boolean = false;
  cartToggle: boolean = false;
  menu: Array<any> = [
    {
      _id: 1,
      img: 'https://images.unsplash.com/photo-1500912708295-4cf8b060f381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZSUyMGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: "Tasty And Healthy 1",
      price: 20,
      discount: 15
    },
    {
      _id: 2,
      img: 'https://images.unsplash.com/photo-1517154196073-d000ca11b42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZSUyMGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: "Tasty And Healthy 2",
      price: 20,
      discount: 15
    },
    {
      _id: 3,
      img: 'https://images.unsplash.com/photo-1500912708295-4cf8b060f381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZSUyMGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: "Tasty And Healthy 3",
      price: 20,
      discount: 15
    },
    {
      _id: 4,
      img: 'https://images.unsplash.com/photo-1500912708295-4cf8b060f381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZSUyMGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: "Tasty And Healthy 4",
      price: 20,
      discount: 15
    },
    {
      _id: 5,
      img: 'https://images.unsplash.com/photo-1500912708295-4cf8b060f381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZSUyMGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: "Tasty And Healthy 5",
      price: 20,
      discount: 15
    },
    {
      _id: 6,
      img: 'https://images.unsplash.com/photo-1500912708295-4cf8b060f381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZSUyMGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: "Tasty And Healthy 6",
      price: 20,
      discount: 15
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  cartToggling() {
    this.cartToggle = !this.cartToggle
  }
  toggle() {
    this.navToggle = !this.navToggle;
  }

}
