var count=0;
let color;
$('#add').on('click', function()
{
    let roll = $('#roll').val();
    let name = $('#name').val();
    let marks = $('#marks').val();

    $('#roll').val('');
    $('#name').val('');
    $('#marks').val('');

    if(roll=='' || name=='' || marks == '')
    {
        console.log("error");
        alert("all fields must be filled");
        return;
    }

    if(count%2==0)
    {
        color = 'white';
        count++;
    }
    else
    {
        color = 'lightgrey';
        count++;
    }
    
    $('#list').append("<div class='st-data' style='background-color:"+ color +"'><p>Roll No - </p><p id='st_roll' class='green-box'>"+ roll +"</p><p>,</p><p id='st_name' class='green-box'>"+ name +"</p><p>has scored</p><p id='st_marks' class='green-box'>"+ marks +"</p><p>marks</p></div>");
});