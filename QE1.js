let strInput = prompt("Enter string!");
let z = new Array(strInput.length);
let Index = 0;
for(let i = strInput.length; i >= 0; i--)
{
    z[Index] = strInput[i];
    Index++;
}
alert(strInput + " reverse = " + z.join(""));