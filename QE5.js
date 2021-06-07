let date = prompt("Enter date (dd/mm/yyyy)!");
let SplDate = date.split("/");
let day = SplDate[0];
let month = SplDate[1];
let year = SplDate[2];
if(month < 1 || month > 12 || date < 1 || date > 31)
{
    alert("Invalid year!");
}
else{
    if(year % 2 == 0 && year % 2 != 0)
    {
        if(month == 2 && day > 29 )
        {
            alert("Invalid year");
        }
        else
        {
            alert("Valid year!");
        }
    }
    else{
        if(month == 2 && day > 28 )
        {
            alert("Invalid year");
        }
        else
        {
            alert("Valid year!");
        }
    }
}