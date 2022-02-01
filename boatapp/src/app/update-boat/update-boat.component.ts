import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Boat } from '../boat';
import { BoatService } from '../boat.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-boat',
  templateUrl: './update-boat.component.html',
  styleUrls: ['./update-boat.component.css']
})
export class UpdateBoatComponent implements OnInit {

  @Input() boat: Boat={id: 0, name: "", description: "", size: 0};

  form = new FormGroup({
    name: new FormControl(this.boat.name, Validators.required),
    description: new FormControl(this.boat.description, Validators.required),
    size: new FormControl(this.boat.size, Validators.required)
  });

  save(): void {
    if (this.boat) {
      this.boat.name=this.boat.name.trim();
      this.boat.description=this.boat.description.trim(); 
      this.boatService.updateBoat(this.boat).subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

  goRead(): void {
    this.router.navigate(['/read/'+this.boat.id]);
  }

  constructor(private boatService: BoatService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.boatService.getBoat(id).subscribe(boat => this.boat = boat);
  }

}