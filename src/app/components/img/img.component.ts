import { Component, OnInit,Input,Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault = './assets/images/default.png';
  constructor() {
    //before render
    //NO async -- once time
    console.log('constructor','imgValue = >', this.img);
   }

   ngOnChanges() {
      //before render
      //changes inputs --times
      console.log('ngOnChanges','imgValue = >', this.img);
   }
  ngOnInit(): void {
    //before render
    //async -fetch -- once time
    console.log('ngOnInit','imgValue = >', this.img);
  }
  ngAfterViewInit(): void {
    //after render
    //handler children
    console.log('ngAfterViewInit');
  }
  ngOnDestroy() {
    //delete
    console.log('ngOnDestroy');

  }
  imgError(){
    this.img = this.imgDefault;
  }
  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
