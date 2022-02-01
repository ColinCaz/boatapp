import { Component, OnInit } from '@angular/core';
import { Boat } from '../boat';
import { BoatService } from '../boat.service';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {

  boats: Boat[] = [];

  getBoats(): void {
    this.boatService.getBoats().subscribe(boats => this.boats = boats);
  }

  constructor(private boatService: BoatService) { }

  ngOnInit(): void {
    this.getBoats();
  }

}