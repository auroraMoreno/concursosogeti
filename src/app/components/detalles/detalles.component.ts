import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { User } from 'src/models/user';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor(public dialog:MatDialogRef<DetallesComponent>,
    @Inject(MAT_DIALOG_DATA)public user:User) { }

    closeDialog():void{
      this.dialog.close();
    }

  ngOnInit(): void {
  }

}
