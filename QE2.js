var Input = prompt("Enter string!");
if(Input.charCodeAt(0) > 90)
{
    let temp = 0;
    temp = Input.charCodeAt(0) - 32;
    Input[0] = toString(temp);
}
for(let i = 0; i < Input.length;i++)
{
    if(Input[i] == ' ')
    {
        if(Input.charCodeAt(i+1) > 90)
        {
            Input.charAt(i+1).toUpperCase(); 
        }
    }
}
alert(Input);