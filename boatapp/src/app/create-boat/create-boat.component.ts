import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Boat } from '../boat';
import { BoatService } from '../boat.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-boat',
  templateUrl: './create-boat.component.html',
  styleUrls: ['./create-boat.component.css']
})
export class CreateBoatComponent implements OnInit {

  boat: Boat={id: 0, name: "", description: "", size: 0};

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    size: new FormControl('', Validators.required)
  });
  
  add(): void {
    var name = this.form.controls['name'].value.trim();
    var description = this.form.controls['description'].value.trim();
    var size = this.form.controls['size'].value;
    this.boatService.addBoat({ name, description, size } as Boat).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  constructor(private boatService: BoatService, private location: Location) { }

  ngOnInit(): void {
  }

}