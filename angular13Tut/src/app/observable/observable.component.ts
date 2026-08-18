import { Component, OnInit } from '@angular/core';
import { filter, from, interval, map, observable, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  //create observer
  myObservable = new Observable((observer) => {
    console.log('observer starts');
    setTimeout(() => {
      observer.next('1');
    }, 1000);
    setTimeout(() => {
      observer.next('2');
    }, 2000);
    // setTimeout(() => {
    //   observer.error(new Error('something went wrong ! try again'));
    // }, 3000);
    setTimeout(() => {
      observer.next('4');
    }, 4000);
    setTimeout(() => {
      observer.next('5');
    }, 5000);
  });

  //error and completion in observable.

  myObservable2 = new Observable((obser) => {
    setTimeout(() => {
      obser.next(' observable next method ');
    }, 6000);
    // setTimeout(() => {
    //   obser.error(new Error('something went wrong'));
    // }, 7000);
    setTimeout(() => {
      obser.complete();
    }, 8000);
  });

  //observable.create method
  myObservableCreate = Observable.create((data: any) => {
    setTimeout(() => {
      data.next('Observable create method');
    }, 2000);
  });
  //constructor method
  myObservableConstructor = new Observable((data) => {
    setTimeout(() => {
      data.next('observable constructor method');
    }, 4000);
  });

  //of method
  arr1 = [1, 2, 3, 4];
  arr2 = ['A', 'B', 'C', 'D'];
  myObservableOfMethod = of(this.arr1, this.arr2);

  //from method
  myObservableFromMethod = from(this.arr1);

  //operator
  arr3 = [1, 2, 3, 4, 5];
  myObservableOperators = from(this.arr3);

  filterData = this.myObservableOperators.pipe(
    map((val) => {
      return val * 5;
    }),
    filter((filterValue) => {
      return filterValue >= 30;
    }),
  );

  counterSub: any;

  constructor() {}

  counterObservable = interval(1000);

  ngOnInit(): void {
    this.myObservable.subscribe((vol) => {
      console.log(vol);
    });

    this.myObservable2.subscribe(
      (newVal) => {
        console.log(newVal);
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        console.log('observable is completed');
      },
    );

    //observable.create method
    this.myObservableCreate.subscribe((val: any) => {
      // alert(val);
    });

    //constructor method
    this.myObservableConstructor.subscribe((val) => {
      // alert(val);
    });

    //of method
    this.myObservableOfMethod.subscribe((val) => {
      // alert(val);
    });

    //from method
    this.myObservableFromMethod.subscribe((val) => {
      // alert(val);
    });

    this.filterData.subscribe((data) => {
      console.log(data);
    });

    this.counterSub = this.counterObservable.subscribe((data) => {
      console.log(data);
    });
  }

  unscribeData() {
    this.counterSub.unsubscribe();
  }
}
