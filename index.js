class Circle {
  constructor(radius){
    this.radius = radius;
  }

  const pi = Math.PI;
  const diameter = this.radius * 2

  get diameter(){
    return this.radius * 2
  };

  get circumference(){
    return 2 * pi * this.radius
  };

  get area(){
    let squared = this.radius ** 2;
    return pi * squared
  };

  set diameter(){}

}
