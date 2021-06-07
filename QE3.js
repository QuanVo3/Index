let Arr = prompt("Enter arr: ");
let splArr = Arr.split(",");
for(let i = 0;i < splArr.length;i++)
{
    for(var z = i + 1; z < splArr.length;z++)
    {
        if(splArr[i] == splArr[z])
        {
            splArr.splice(z,1);
        }
    }
}
alert(splArr);