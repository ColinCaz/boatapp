import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Boat } from '../boat';
import { BoatService } from '../boat.service';

@Component({
  selector: 'app-read-boat',
  templateUrl: './read-boat.component.html',
  styleUrls: ['./read-boat.component.css']
})
export class ReadBoatComponent implements OnInit {

  boat: Boat={id: 0, name: "", description: "", size: 0};

  goBack(): void {
    this.location.back();
  }

  goUpdate(): void {
    this.router.navigate(['/update/'+this.boat.id]);
  }

  delete(): void {
    this.boatService.deleteBoat(this.boat.id).subscribe(() => this.goBack());
  }

  constructor(private boatService: BoatService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.boatService.getBoat(id).subscribe(boat => this.boat = boat);
  }

}