import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MyClass } from '../MyClass';
import { MyClassC } from '../MyClass_copy'


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, OnChanges {
  @Input() title = 'RORORORORORO';
  @Input() image='';
  warning = true;
  message = '';
  proffesions = ['Engineer', 'Accountant', 'Doctor'];

  new_value = 'xyz'
  showHide = false;
  copy;
  price = 22585;

  constructor(private c: MyClass) {
    this.copy = new MyClassC();
    console.log('this.x', this.c.x);
    // alert('A')
    // setInterval(() => {
    //   this.warning = !this.warning;
    //   this.message=this.warning?'Pay Attention':'go ahead'
    // }, 2000)

    //  var c= new MyClass();
  }

  // ngOnChanges(): void {
  //   console.log('C')
  // }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('C')
  }

  ngOnInit(): void {
    //console.log('image',this.image)
  }

  ChangeTitle() {
    this.title = ' change title';
  }

  changeTitle(event: Event): void {
    this.title = (event.target as HTMLInputElement).value;
  }

  ChangeCounter() {
    this.c.counter += 1;
    console.log('counter' + this.c.counter)

    this.copy.counter_c += 1;
    console.log('counter copy' + this.copy.counter_c);


  }
}


class Joseph implements Itest {
  xyz() {
  }
}

interface Itest {
  xyz: any;
}
