class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

ball1 = new Ball();
ball2 = new Ball("super");

console.log(ball1.ballType);
console.log(ball2.ballType);

// class Ball {
//     //     constructor(ballType) {
//     //         if (ballType != undefined) {
//     //             this.ballType = ballType;
//     //         } else {this.ballType = "regular"}
//     //     }
//     // }

//     // let ball1 = new Ball();
//     // let ball2 = new Ball("super");
//     // console.log(ball1.ballType);    //=> "regular"
//     // console.log(ball2.ballType);    //=> "super"

//     // 2. Möglichkeit
//     // als standard regular nehmen, außer es wird was in ballType mitgegeben

//     class Ball {
//         constructor(ballType = "regular") {
//                 this.ballType = ballType;
//         }
//     }

//     let ball1 = new Ball();
//     let ball2 = new Ball("super");
//     console.log(ball1.ballType);    //=> "regular"
//     console.log(ball2.ballType);    //=> "super"
