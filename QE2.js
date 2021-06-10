<<<<<<< HEAD
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
=======
var str = prompt("Enter string!");
str[0].toUpperCase();
alert(str);
>>>>>>> a5441abbb969219f516d6c1479b3ca16a16cbaa9
