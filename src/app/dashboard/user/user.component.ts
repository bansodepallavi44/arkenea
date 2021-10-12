import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { DialogBoxComponent } from 'src/app/dialog-box/dialog-box.component';
import { UserService } from '../user.service';
import { User } from './interface/user';


export interface UsersData {
  id:number;
  name: string;
  email:string,
  gender: string;
  address: string;
}

const ELEMENT_DATA: UsersData[] = [
  { id:1,  name: 'Jenny',email:'admin@gmail.com', gender:'Female', address:'Kulas Light, Apt. 556, Gwenborough'},
  { id:2, name: 'Jack',email:'admin@gmail.com', gender:'Male', address:'Kulas Light, Apt. 556, Gwenborough'},
  { id:3, name: 'Charls',email:'admin@gmail.com', gender:'Male', address:'Kulas Light, Apt. 556, Gwenborough'},
  { id:4, name: 'Jenny',email:'admin@gmail.com', gender:'Female', address:'Kulas Light, Apt. 556, Gwenborough'},
  { id:5, name: 'marvin',email:'admin@gmail.com', gender:'Male', address:'Kulas Light, Apt. 556, Gwenborough'},
  { id:6 ,name: 'Jenny',email:'admin@gmail.com', gender:'Female', address:'Kulas Light, Apt. 556, Gwenborough'},
  { id:7, name: 'Joya',email:'admin@gmail.com', gender:'Female', address:'Kulas Light, Apt. 556, Gwenborough',},
  { id:8, name: 'Jenny',email:'admin@gmail.com', gender:'Female', address:'Kulas Light, Apt. 556, Gwenborough'},
];
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  

  displayedColumns: string[] = ['id', 'name', 'email', 'gender', 'address', 'action'];
  dataSource =ELEMENT_DATA;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog,
    private user: UserService) { }
  // dataSource = new MatTableDataSource(this.getAllUser());

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    this.getAllUser();
    console.log("dat: " + JSON.stringify(this.dataSource));
  }

  openDialog(action: any, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '300px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  getAllUser() {
    return ELEMENT_DATA;
  }

  addRowData(row_obj:UsersData) {
    console.log("row: "+row_obj);
    this.dataSource.push(row_obj);
    this.table.renderRows();

  }
  updateRowData(row_obj: any) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.name = row_obj.name;
      }
      return true;
    });
  }
  deleteRowData(row_obj: any) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id != row_obj.id;
    });
  }

}
