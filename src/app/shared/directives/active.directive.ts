import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective implements OnChanges {
  @HostBinding('style.backgroundColor') backgroundColor : string;
  @HostBinding('style.color') color : string;
  @Input('appActive') isActive:boolean;

  ngOnChanges(){
    if (this.isActive){
      this.backgroundColor = '#87CEFA';
      this.color = 'white';
    }else{
      this.backgroundColor = 'transparent';
      this.color = 'black';
    }
  }

  constructor() { }

}
