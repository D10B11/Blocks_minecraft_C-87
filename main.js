var player_object="";
block_view="";
block_Image_Width=30;
block_Image_Height=30;
player_x=10;
player_y=10;
var Canvas=new fabric.Canvas("myCanvas");
function player_update()
{
   fabric.Image.fromURL ("player.png",function(Img)
   {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set(
        {
            top:player_y,left:player_x
        })
        Canvas.add(player_object);
   });
}

function new_sprite(get_image)
{
   fabric.Image.fromURL (get_image,function(Img)
   {
        block_view=Img;
        block_view.scaleToWidth(block_Image_Width);
        block_view.scaleToHeight(block_Image_Height);
        block_view.set(
        {
            top:player_y,left:player_x
        })
        Canvas.add(block_view);
   });
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e)
{
  keypressed=e.keyCode;
  console.log(keypressed);
  if (e.shiftKey==true && keypressed=="80") 
  {
    console.log("p and shift pressed together");
    block_Image_Width=block_Image_Width+10;
    block_Image_Height=block_Image_Height+10;
    document.getElementById("current_width").innerHTML=block_Image_Width;
    document.getElementById("current_height").innerHTML=block_Image_Height;
  }

  if (e.shiftKey==true && keypressed=="77") 
  {
    console.log("m and shift pressed together");
    block_Image_Width=block_Image_Width-10;
    block_Image_Height=block_Image_Height-10;
    document.getElementById("current_width").innerHTML=block_Image_Width;
    document.getElementById("current_height").innerHTML=block_Image_Height;
  }

    if(keypressed=="38")
    {
        up();
        console.log("up");
    }

    if(keypressed=="40")
    {
        down();
        console.log("down");
    }

    if(keypressed=="37")
    {
        left();
        console.log("left");
    }

    if(keypressed=="39")
    {
        right();
        console.log("right");
    }

    if(keypressed=="87")
    {
        new_sprite("wall.jpg");
        console.log("w");
    }

    if(keypressed=="71")
    {
        new_sprite("ground.png");
        console.log("g");
    }

    if(keypressed=="76")
    {
        new_sprite("light_green.png");
        console.log("l");
    }

    if(keypressed=="84")
    {
        new_sprite("trunk.jpg");
        console.log("t");
    }

    if(keypressed=="82")
    {
        new_sprite("roof.jpg");
        console.log("r");
    }

    if(keypressed=="89")
    {
        new_sprite("yellow_wall.png");
        console.log("y");
    }

    if(keypressed=="68")
    {
        new_sprite("dark_green.png");
        console.log("d");
    }

    if(keypressed=="85")
    {
        new_sprite("unique.png");
        console.log("u");
    }

    if(keypressed=="67")
    {
        new_sprite("cloud.jpg");
        console.log("c");
    }
}

function down()
{
    if(player_y<=550)
    {
       player_y=player_y+block_Image_Height;
       console.log("block_height = "+block_Image_Height);
        console.log("When down pressed,x="+player_x+" y= "+player_y);
        Canvas.remove(player_object);
        player_update();
    }

}

function down()
{
    if(player_y<=550)
    {
       player_y=player_y+block_Image_Height;
       console.log("block_height = "+block_Image_Height);
        console.log("When down pressed,x="+player_x+" y= "+player_y);
        Canvas.remove(player_object);
        player_update();
    }
}

function up()
{
    if(player_y>=0)
    {
       player_y=player_y-block_Image_Height;
       console.log("block_height = "+block_Image_Height);
        console.log("When up pressed,x="+player_x+" y= "+player_y);
        Canvas.remove(player_object);
        player_update();
    }

}

function left()
{
    if(player_x>=0)
    {
       player_x=player_x-block_Image_Height;
       console.log("block_height = "+block_Image_Height);
        console.log("When left pressed,x="+player_x+" y= "+player_y);
        Canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x<=950)
    {
       player_x=player_x+block_Image_Height;
       console.log("block_height = "+block_Image_Height);
        console.log("When right pressed,x="+player_x+" y= "+player_y);
        Canvas.remove(player_object);
        player_update();
    }

}
