class Circle {
  constructor(radius){
    this.radius = radius;
  }

  const pi = Math.PI

  get diameter(){
    return this.radius * 2
  }

  set diameter(diameter){
    this.radius = diameter / 2
  }

  get circumference(){
    return (this.radius * 2) * pi
  }

  set circumference(circumference){
    this.radius = circum
  }

}
