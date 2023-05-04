var ball = document.getElementById("ball");
ball.style.top=Math.floor(Math.random()*50).toString()+"px";
ball.style.left=Math.floor(Math.random()*50).toString()+"px";
window.addEventListener('keydown', function(event)
{
  let code=event.keyCode;

    if(code===38)//up
    {
        if(ball.style.top==="0px")
        {
            return;
        }
        let current_top_distance=ball.style.top;
        let length_of_current_top_distance=ball.style.top.length;
        let numerical_distance=parseInt(current_top_distance.substring(0, length_of_current_top_distance-2));
        numerical_distance--;
        ball.style.top=numerical_distance.toString()+"px";
    }
    else if(code===37)//left
    {
        if(ball.style.left==="0px")
        {
            return;
        }
        let current_left_distance=ball.style.left;
        let length_of_current_left_distance=current_left_distance.length;
        let numerical_distance=parseInt(current_left_distance.substring(0, length_of_current_left_distance-2));
        numerical_distance--;
        ball.style.left=numerical_distance.toString()+"px";
    }
    else if(code===40)//down
    {
        if(ball.style.top===(window.innerHeight-100).toString()+"px")
        {
            return;
        }
        let current_top_distance=ball.style.top;
        let length_of_current_top_distance=ball.style.top.length;
        let numerical_distance=parseInt(current_top_distance.substring(0, length_of_current_top_distance-2));
        numerical_distance++;
        ball.style.top=numerical_distance.toString()+"px";
    }
    else if(code===39)//right
    {
        if(ball.style.left===(window.innerWidth-100).toString()+"px")
        {
            return;
        }
        let current_left_distance=ball.style.left;
        let length_of_current_left_distance=current_left_distance.length;
        let numerical_distance=parseInt(current_left_distance.substring(0, length_of_current_left_distance-2));
        numerical_distance++;
        ball.style.left=numerical_distance.toString()+"px";
    }
});