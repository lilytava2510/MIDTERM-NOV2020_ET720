import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core' ;

@Component({
  selector: 'app-resume-footer',
  templateUrl: './resume-footer.component.html',
  styleUrls: ['./resume-footer.component.css']
})
export class ResumeFooterComponent implements OnInit {
@Input() footer ;

  constructor() { }

  ngOnInit() {
  }

}