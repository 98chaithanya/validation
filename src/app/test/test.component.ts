import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  user={
    Lname:'',
    name:'',
    email:'',
    password:'',
    Address:'',
    Mobile:''
  }
  register(){
    alert("success")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
