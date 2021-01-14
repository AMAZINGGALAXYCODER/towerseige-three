class Box extends BaseClass {
  constructor(x,y,width,height){
    super(x,y,width,height);
    this.Visiblity = 255;
  }

 display(){
   console.log(this.body.speed);

   score()  {
    if(this.visibility<0 && this.visibility >-105){
      score++;
    
    }
    
   };

   if(this.body.speed < 5){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     pop();
   };
   
   
 }



};