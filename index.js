class Circle {
  constructor(radius){
    this.radius = radius;
  }

  const pi = Math.PI;
  const diameter = this.radius * 2;
  const rsquared = this.radius ** 2;

  get diameter(){
    return this.radius * 2
  };

  get circumference(){
    return pi * diameter
  };

  get area(){
    return pi * squared
  };

  set diameter(){}

}
