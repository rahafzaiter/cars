import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title_test = 'a';
  Cars: CarInfo[] = [];

  new_Car = new CarInfo();

  constructor(private apiCaller: HttpClient) {

  }

  ngOnInit(): void {
    // this.getDataUsingFetch();
    //this.getData();
    this.getCarData();
  }

  getData() {

    this.apiCaller.get('https://jsonplaceholder.typicode.com/users').subscribe((json: any) => {
      // console.log('data = ', json);
      // this.Cars = json;
      json.forEach((element: any) => {
        var c = new CarInfo();
        c.name = element['name'];
        // or
        //c.name = element.name;
        this.Cars.push(c);
      })
    });
  }


  getCarData() {

    this.apiCaller.get('http://localhost:3000/data').subscribe((json: any) => {
      // console.log('data = ', json);
      // this.Cars = json;
      json.Sheet1.forEach((element: any) => {
        var c = new CarInfo();
        c.name = element['A'];
        c.img = element['C'];
        // // or
        // //c.name = element.name;
        this.Cars.push(c);
        console.log('data', element['A']);
      })
    });
  }

  getDataUsingFetch() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log('json', json);

        json.forEach((element: any) => {
          var c = new CarInfo();
          c.name = element['name'];
          // or
          //c.name = element.name;
          this.Cars.push(c);
        });
      })
  }

  addCar() {
    // var name = document.getElementById('txt_name');
    // var family = document.getElementById('txt_family');
    // var image=document.getElementById('txt_image');
    var name = this.new_Car.name;
    var family = this.new_Car.family;
    var image = this.new_Car.img;

    console.log('car_new', this.new_Car);

    //alert(name.value + '- ' + family.value);


    // fetch('http://localhost:3000/addNames', {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   // body: JSON.stringify(data),
    //   body: JSON.stringify(
    //     {
    //       "name": name,
    //       "family": family,
    //       "image": image
    //     } //js object
    //   ),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //     alert('Success')
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });


    this.apiCaller.post('http://localhost:3000/addNames',
      {
        "name": name,
        "family": family,
        "image": image
      } //js object
    ).subscribe((json: any) => {
      // console.log('data = ', json);
      // this.Cars = json;
      // json.Sheet1.forEach((element: any) => {
      //   var c = new CarInfo();
      //   c.name = element['A'];
      //   c.img = element['C'];
      //   // // or
      //   // //c.name = element.name;
      //   this.Cars.push(c);
      //   console.log('data', element['A']);
      // })
      console.log('json in add data',json);
      //this.getCarData();
      window.location.reload();
    });

  }
}

export class CarInfo {
  name: string = '';
  family: string = '';
  img: string = '';
}
