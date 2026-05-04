const MyBox = document.getElementById("game")
const ctx = MyBox.getContext('2d');
const SquareSpeed = ctx.canvas.width/4;
let Grid = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
class Cube{
    constructor(x, y, w, h, number)
    {
        this.col = "rgb(" + 255/4*number + ", " + 255/4*number + ", " + 255/4*number + ")"
        this.x = x;
        this.y = y;
        this.grid = [this.x/100, this.y/100]
        Grid[this.grid[1]][this.grid[0]] = 1
        console.log(Grid)
        this.w = w;
        this.h = h;
        this.num = number;
        this.LockY = 0;
        this.LockX = 0;
        this.canMove = true;    
        //this.enableMove = false;
    }
    UpdateGrid()
    {
        Grid[this.grid[1]][this.grid[0]] = 0
        this.grid = [this.x/100, this.y/100]
        Grid[this.grid[1]][this.grid[0]] = 1
    }
    draw(){
        ctx.beginPath();    
        ctx.rect(this.x, this.y, this.w, this.h);

        ctx.fillStyle = getTileColors(this.num).bg;
        ctx.fill();
        ctx.font = "10px Arial";
        ctx.fillStyle = "blue";
        ctx.textAlign = "center"

        ctx.fillText(this.num, this.x+ this.w/2, this.y+ this.h/2, this.w);
    }
    move()
    {
        let i = 1;
        this.canMove = true;
        if(this.grid[1] == 3 && vely > 0 || this.grid[1] == 0 && vely < 0 || this.grid[0] == 0 && velx < 0 || this.grid[0] == 3 && velx > 0)
        {
            this.canMove = false
            console.log("Cannot move")  
        }
        if(vely != 0)
        {
            let movei = 0;
            /*for( let i = 1; i < 5; i++)
            {
                movei+= 1
                if(i * vely + this.y >= ctx.canvas.height || Grid[i-1][this.grid[0]] != 0 && i < this.grid[1])
                {
                    console.log("SRJEJEJSJ")
                    console.log("i * vely + this.y is " + (i * vely + this.y))
                    if(movei >0)
                    {
                        movei -= 1
                    }
                    break;
                }
                else if( i * vely + this.y < 0 )
                {
                    console.log("SENKNJESNJEFDSMMK")
                    for( let y = this.grid[1]+1; y < Grid.length; y++)
                    {
                        if(Grid[this.grid[1]][y] != 0)
                        {
                            console.log("67i is " + i)
                            console.log("y is " + y)
                            movei = y - this.grid[1] - 1
                            break;

                        }
                    }
                }
                else if( i * vely + this.y > ctx.canvas.height )
                {
                    console.log("SENKNJESNJEFDSMMK")
                    for( let y = Grid.length-1; y >= 0; y--)
                    {
                        if(Grid[this.grid[1]][y] != 0)
                        {
                            console.log("67i is " + i)
                            console.log("y is " + y)
                            movei = y - this.grid[1] -1
                            break;

                        }
                    }
                }

                //checking for occupied grid space
            
        }*/
       console.log("Grid before anything is " + Grid)
       let i = this.grid[1]
       console.log("i is " + i  )
       //
            while(i > 0 && vely < 0 && this.grid[1] > 0){
                if( Grid[i-1][this.grid[0]] == 0 )
                    {
                        Grid[this.grid[1]][this.grid[0]] = 0
                        this.y += vely;
                        this.grid = [this.x/100, this.y/100]
                        Grid[this.grid[1]][this.grid[0]] = 1
                        console.log(Grid)
                        i--;
                        //shjeshjeskjfes do me
            }
            else if(Grid[i-1][this.grid[0]] != 0 && vely < 0 && this.grid[1] >0){
                console.log("in vert < 0")
            for(let c = 0; c < cubes.length ; c++)
            {
                console.log("cubes c grid is " + cubes[c].grid[0])
                if( cubes[c].grid[1] == i-1 && cubes[c].grid[0] == this.grid[0])
                {
                    if(  cubes[c].num == this.num){

                    cubes[c].num *= 2
                    console.log("Grid before is " + Grid)
                    Grid[this.grid[1]][this.grid[0]] = 0//sortcubes is wrong
                    cubes.splice(cubes.indexOf(this), 1)
                    console.log(Grid)
                    if (cubes[c].grid[1] != 0){
                        if(Grid[cubes[c].grid[1] - 1][cubes[c].grid[0]] == 0)
                        {
                            cubes[c].move()//technically is not supposed to be able to merge again
                        }
                }
                    
                    return;
                 }
                 else{
                    return
                 
                }
                
            }
        }
        }
            else{
                break;
            }
        }
        while(i < Grid.length && vely > 0 && this.grid[1] < 3)
        {
            if(Grid[i+1][this.grid[0]] == 0)
            {
                  Grid[this.grid[1]][this.grid[0]] = 0
                    this.y += vely;
                    this.grid = [this.x/100, this.y/100]
                    Grid[this.grid[1]][this.grid[0]] = 1
                    console.log(Grid)
                    i++;//imght need to just replace grid afterwards instead of during each iteration
            }
            else if (i < Grid.length-1){
            if(Grid[i+1][this.grid[0]] != 0 && vely > 0 && this.grid[1] < 3){
                console.log("thing below is " + (i + 1) + ", " + this.grid[0] + "for " + this.grid[0] + " " + this.grid[1])
            for(let c = 0; c < cubes.length ; c++)
            {
                console.log("cubes c grid is " + cubes[c].grid[0])
                if( cubes[c].grid[1] == i+1 && cubes[c].grid[0] == this.grid[0])
                {
                    if(  cubes[c].num == this.num){

                    cubes[c].num *= 2
                    console.log("Grid before is " + Grid)
                    Grid[this.grid[1]][this.grid[0]] = 0//sortcubes is wrong
                    cubes.splice(cubes.indexOf(this), 1)
                    console.log(Grid)
                    if (cubes[c].grid[1] != 4){
                        if(Grid[cubes[c].grid[1] + 1][cubes[c].grid[0]] == 0)
                        {
                            cubes[c].move()//technically is not supposed to be able to merge again
                        }
                }
                    
                    return;
                 }
                 else{
                    return
                 }
                }
                
            }
        }
        }
            else{
                console.log("cannot move, thing below")
                break;
            }
                    //make a while loop
        }
        
        //and there is a cube in that positionn
    }
        if(velx != 0)
        {
            
            let i = this.grid[0]
            while(i > 0 && velx < 0 && this.grid[0] > 0){
                if( Grid[this.grid[1]][i-1] == 0 )
                    {
                        Grid[this.grid[1]][this.grid[0]] = 0
                        this.x += velx;
                        this.grid = [this.x/100, this.y/100]
                        Grid[this.grid[1]][this.grid[0]] = 1
                        console.log(Grid)
                        i--;
            }
                else if(Grid[this.grid[1]][i-1] != 0 && velx < 0 && this.grid[0] >0){
                console.log("in hori < 0")
            for(let c = 0; c < cubes.length ; c++)
            {   
                console.log("cubes c grid is " + cubes[c].grid[0])
                if( cubes[c].grid[1] == this.grid[1] && cubes[c].grid[0] == i-1)
                {
                    if(  cubes[c].num == this.num){
                    
                    cubes[c].num *= 2
                    console.log("Grid before is " + Grid)
                    Grid[this.grid[1]][this.grid[0]] = 0//sortcubes is wrong
                    cubes.splice(cubes.indexOf(this), 1)
                    console.log(Grid)
                    if (cubes[c].grid[0] != 0){
                        if(Grid[cubes[c].grid[1]][cubes[c].grid[0] - 1] == 0)
                        {
                            console.log("Going to move again")
                           cubes[c].move()//technically is not supposed to be abt so to merge again
                        }           
                }

                    return;
                 }else{return}}}}
            
            else{
                console.log("cannot move, thing to left")
                break;
            }
        }
        while(i < Grid.length && velx > 0 && this.grid[0] < 3)
        {
            if(Grid[this.grid[1]][i+1] == 0)
            {
                  Grid[this.grid[1]][this.grid[0]] = 0
                    this.x += velx;
                    this.grid = [this.x/100, this.y/100]
                    Grid[this.grid[1]][this.grid[0]] = 1
                    console.log(Grid)
                    i++;//imght need to just replace grid afterwards instead of during each iteration
            }
            else if(Grid[this.grid[1]][i+1] != 0 && velx > 0 && this.grid[0] < 3){
                console.log("in hori > 0")
            for(let c = 0; c < cubes.length ; c++)
            {   
                console.log("cubes c grid is " + cubes[c].grid[0])
                if( cubes[c].grid[1] == this.grid[1] && cubes[c].grid[0] == i+1)
                {
                    if(  cubes[c].num == this.num){
                    
                    cubes[c].num *= 2
                    console.log("Grid before is " + Grid)
                    Grid[this.grid[1]][this.grid[0]] = 0//sortcubes is wrong
                    cubes.splice(cubes.indexOf(this), 1)
                    console.log(Grid)
                    if (cubes[c].grid[0] != 3){
                        if(Grid[cubes[c].grid[1]][cubes[c].grid[0] + 1] == 0)
                        {
                           cubes[c].move()//technically is not supposed to be able to merge again
                        }           
                }

                    return;
                 }else{return}}}}
            
            else{
                console.log("cannot move, thing to right")
                break;
            }
                    //make a while loop
        }
            
    }
    
                //this.UpdateGrid();
}
}
let cubes = [];
cubes[0] = new Cube(0,100,100,100, 2)
cubes[2] = new Cube(100,100,100,100, 2)
cubes[1] = new Cube(200,100,100,100, 2)
cubes[3] = new Cube(300,100,100,100, 2)
let randomx = 0
let randomy = 0
let randomnum = 0
//one on top is alway not working
velx = 0;
vely = 0;

let GeneralUpdate = function()
{ 
    requestAnimationFrame(GeneralUpdate);           
    ctx.beginPath(); // Start a new path
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Add a rectangle to the current path    
    for(i = 0; i < cubes.length; i++)
    {    
        cubes[i].draw()
    }
};
GeneralUpdate()
function getTileColors(val) {
  switch (true) {
    case val == 2:    return { bg: '#eee4da', fg: '#776e65' };
    case val == 4:    return { bg: '#ede0c8', fg: '#776e65' };
    case val == 8:    return { bg: '#f2b179', fg: '#f9f6f2' };
    case val == 16:   return { bg: '#f59563', fg: '#f9f6f2' };
    case val == 32:   return { bg: '#f67c5f', fg: '#f9f6f2' };
    case val == 64:   return { bg: '#f65e3b', fg: '#f9f6f2' };
    case val == 128:  return { bg: '#edcf72', fg: '#f9f6f2' };
    case val == 256:  return { bg: '#edcc61', fg: '#f9f6f2' };
    case val == 512:  return { bg: '#edc850', fg: '#f9f6f2' };
    case val == 1024: return { bg: '#edc53f', fg: '#f9f6f2' };
    case val == 2048: return { bg: '#edc22e', fg: '#f9f6f2' };
    default:          return { bg: '#3c3a32', fg: '#f9f6f2' };
  }
}
let sortCubes = function(dir, thecubes)
{
    cubes1 = thecubes
    newcubes = []
    //if we're going by y the and direction is 1 we make the ones on the top row go first
    //i is dependent on dir, i = gridlength if going left/up or i = 0 if going right/down

    if(dir == 1 )
        {
       
        for(let i = 0; i < Grid.length; i++)
        {
            for(let j = 0; j < Grid.length; j++)
            {
                if(Grid[i][j] != 0)
                {
                    for(f = 0; f < cubes1.length; f++)
                    {
                        //console.log("found grid position is " + Grid[i][j])
                        //console.log("the position is " + i + ", " + j)
                        //console.log("the cubes i pos is " + cubes1[f].grid)//this is becoming undefined
                        if(cubes1[f].grid[0] == j && cubes1[f].grid[1] == i)//this is wrong
                        {
                            //console.log("The number of the cubes added is " + cubes1[f].num)
                            //console.log("Condition is true!!!")//nothing is being added to the list
                            console.log("HELLOOOOO " + cubes1[f].x + " " + cubes1[f].y)
                            newcubes.push(cubes1[f])
                            cubes1.splice(f, 1)
                            //console.log("cubes1 are " + cubes1)
                            //console.log("length is " + cubes1.length)
                        }
                    }
                    //need to push object into list to be updated    
                    //need t find the cube which position is at i and j
                }
            }
        }
    }
        if(dir == 3)
            {
            for(let i = Grid.length - 1; i >=0; i--)
        { 
            console.log("Value of i is " + i)
            console.log("i is " + i)
            for(let j = Grid.length - 1;  j >=0; j--){
                
               //row i column j
                if(Grid[i][j] != 0) 
                {
                    console.log("not zero at " + i + ", " + j)
                    for(let f = 0; f < cubes1.length; f++)
                    {
                        console.log("the position is " + i + ", " + j)//the grid and this.grid are reversed
                        console.log("the cubes i pos is " + cubes1[f].grid)//this is becoming undefined
                        if(cubes1[f].grid[0] == j && cubes1[f].grid[1] == i)//this is wrong
                        {
                            /* console.log("The number of the cubes added is " + cubes1[f].num)
                            console.log("Condition is true!!!")//nothing is being added to the list */
                            console.log("HELLOOOOO " + cubes1[f].x + " " + cubes1[f].y)
                            newcubes.push(cubes1[f])
                            cubes1.splice(f, 1)
                            //console.log("cubes1 are " + cubes1)
                            break
                            
                        }
                    }
                }
            }
        }
        
        }
        if(dir == 2){
            for(let i = Grid.length; i >= 0; i--)
        {
            for(let j = 0; j < Grid.length - 1; j++)
            {
                if(Grid[j][i] != 0)
                {
                    for(let f = 0; f < cubes1.length; f++)
                    {
                        console.log("the position is " + i + ", " + j)//the grid and this.grid are reversed
                        console.log("the cubes i pos is " + cubes1[f].grid)//this is becoming undefined
                        if(cubes1[f].grid[0] == i && cubes1[f].grid[1] == j)//this is wrong
                        {
                            console.log("The number of the cubes added is " + cubes1[f].num)
                            console.log("Condition is true!!!")//nothing is being added to the list
                            console.log("HELLOOOOO " + cubes1[f].x + " " + cubes1[f].y)
                            newcubes.push(cubes1[f])
                            cubes1.splice(f, 1)
                            console.log("cubes1 are " + cubes1)
                            break
                        }
                    }
                    //need to push object into list to be updated    
                    //need t find the cube which position is at i and j
                }
            }
        }
        }
        if(dir == 4){
        for(let i = 0; i < Grid.length ; i++)
        {
            for(let j = 0; j < Grid.length ; j++)
            {
                if(Grid[j][i] != 0)
                {
                    for(let f = 0; f < cubes1.length; f++)
                    {
                        console.log("the position is " + i + ", " + j)//the grid and this.grid are reversed
                        console.log("the cubes i pos is " + cubes1[f].grid)//this is becoming undefined
                        if(cubes1[f].grid[0] == i && cubes1[f].grid[1] == j)//this is wrong
                        {
                            console.log("The number of the cubes added is " + cubes1[f].num)
                            console.log("Condition is true!!!")//nothing is being added to the list
                            console.log("HELLOOOOO " + cubes1[f].x + " " + cubes1[f].y)
                            newcubes.push(cubes1[f])
                            cubes1.splice(f, 1)
                            console.log("cubes1 are " + cubes1)
                            break
                            
                        }
                    }
                    //need to push object into list to be updated    
                    //need t find the cube which position is at i and j
                }
            }
        }
        }
    for(i = 0; i < newcubes.length; i++)
    {
        
            console.log("iterating" + i)
            console.log("Moving")
        }
    
    console.log("All of new cubes are " + newcubes)
    return(newcubes)
}

addEventListener('keydown', (event) => {
    const keyName = event.key;
    cardinalkeypress = false;
    velx = 0;
    vely = 0;
    if(event.key == "w")
    {
        vely = -SquareSpeed;
        cardinalkeypress = true;
        cubes = sortCubes(1, cubes);
    }
    if(event.key == "s")
    {
        vely = SquareSpeed;
        cardinalkeypress = true;
        cubes = sortCubes(3, cubes);
    }
    if(event.key == "d")
    {
        velx = SquareSpeed;
        cardinalkeypress = true;
        cubes = sortCubes(2, cubes)
    }
    if(event.key == "a"){
        velx = -SquareSpeed;
        cardinalkeypress = true;
        cubes = sortCubes(4, cubes);
    }
   
    console.log("length of current cubes after sorting is " + cubes.length)
    if(cardinalkeypress)
    {
         for(let i = 0; i < newcubes.length; i++)
        {
        
            console.log("iterating" + i)
            console.log("Moving")
            newcubes[i].move();
        }
         randomx = Math.floor(Math.random() * 4) * 100
        randomy = Math.floor(Math.random() * 4) * 100
        randomnum = Math.random()
        console.log("randomnum is " + randomnum)
        if (randomnum < 0.9)
        {
            randomnum = 2
        }
        else if (randomnum >= 0.9)
        {
            randomnum = 4
        }
        while(Grid[randomy/100][randomx/100] != 0)
        {
            randomx = Math.floor(Math.random() * 4) * 100
            randomy = Math.floor(Math.random() * 4) * 100
            //need to make lose condition
        }
        cubes.push(new Cube(randomx, randomy, 100, 100, randomnum))
        cardinalkeypress = false
        console.log(Grid)
    }
            });