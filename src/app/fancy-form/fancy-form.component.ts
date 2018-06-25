import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fancy-form',
  templateUrl: './fancy-form.component.html',
  styleUrls: ['./fancy-form.component.css']
})
export class FancyFormComponent implements OnInit, AfterViewInit {
  @ViewChild('para') para: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    const section = this.el.nativeElement.querySelector('#sec'); // use @ViewChild instead.
    const text = this.renderer.createText('Hello world!');
    this.renderer.appendChild(section, text);
    // const div = this.renderer.createElement('div');    
    
    this.renderer.setStyle(section, 'font-size', '35px');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.para.nativeElement, 'font-size', '55px');
    this.renderer.setStyle(this.para.nativeElement, 'color', 'blue');
    this.renderer.addClass(this.para.nativeElement, 'zoom');
    console.log(this.para.nativeElement.innerHTML);
  }

}
