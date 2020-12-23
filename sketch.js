// variables
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup,Food,obstacle, obstacleGroup;
var score;
var survivalTime=0;

function preload()
{
         // preloaded images
  monkey_running =                loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
          bananaImage = loadImage("banana.png");
          obstaceImage = loadImage("obstacle.png");
 
}

function setup() 
{
            // creating monkey sprite
            monkey=createSprite(80,315,20,20);
            monkey.addAnimation("moving",monkey_running);
            monkey.scale=0.1;
  
            // creating ground sprite
            ground= createSprite(400,350,900,10);
            ground.velocityX=-4;
            ground.x=ground.width/2;
            console.log(ground.x);
  
}

            function draw() 
{
            createCanvas(600,400);
            background("green");
            
            // score
            text("score:"+score,500,50);
            stroke("black");
            textSize(20);
            fill("black");
  
            // Survival Time
            text("Survival Time:"+survivalTime,225,60);
            survivalTime=Math.ceil(frameCount/frameRate())
            fill("black");
            textSize(20);
            stroke("black");
  
            //ground
            if (ground.x<0)
{
            ground.x=ground.width/2;
}
            // jumping monkey
            if(keyDown("space")&& monkey.y >= 100)
{
            monkey.velocityX=-12;
}
            // adding gravity to monkey
            monkey.velocityY=monkey.velocityY+0.8;
            monkey.collide(ground);

            FoodGroup();
            obstacleGroup();
  
            drawSprites();
}

            function FoodGroup() 
{

            if (frameCount % 80 === 0) 
{
            var banana = createSprite(600,120,40,10);
            banana.y = Math.round(random(120,200));
            banana.addImage(bananaImage);
            banana.scale = 0.5;
            banana.velocityX = -3;
    
            //assign lifetime to the variable
            banana.lifetime = 200;
    
            // adding banana to the group
            Food.add(banana);
}
}

            function obstacleGroup() 
{

            if (frameCount % 300 === 0) 
{
            var obstacle = createSprite(600,350,40,10);
            obstacle.y = Math.round(random(120,200));
            obstacle.addImage(obstacleImage);
            obstacle.scale = 0.5;
            obstacle.velocityX = -3;
    
            //assign lifetime to the variable
            obstacle.lifetime = 200;
    
            // adding obstacle to the group
            obstacle.add(obstacle);
}
}
