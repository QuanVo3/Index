class Employee
{
    constructor(name,age,salary,position)
    {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.position = position;
    }
    SetName(name)
    {
        this.name = name;
    }
    SetAge(age)
    {
        this.age = age; 
    }
    SetSalary(salary)
    {
        this.salary = salary;
    }
    SetPos(position)
    {
        this.position = position;
    }
}
var EmplArr = new Array(100);
var ArrIndex = 4;
EmplArr[0] = new Employee("Nhân","18","20000000","Saler");
EmplArr[1] = new Employee("Hoàng","23","15000000","Shipper");
EmplArr[2] = new Employee("Thắng","28","30000000","Manager");
var Num;
do{
    let Index = prompt("1.Read\n 2.Create\n 3.Update\n 4.Delete\n 5.Exit");
    Num = Number(Index);
    if(isNaN(Num) == true || Num < 1 || Num > 5)
        {
        alert("Function is not supported!");
        } 
    else
        {
            switch(Num)
            {
                case 1:
                    {
                        let Pos = prompt("Enter employee index!");
                       if(EmplArr[pos] = undefined)
                       {
                           alert("Information not found!");
                       }
                       else{
                        alert("Name: " + EmplArr[Pos].name + "\nAge: " + EmplArr[Pos].age + "\nSalary: " + EmplArr[Pos].salary + "\nPosition: " + EmplArr[Pos].position);
                       }
                       break;
                    }
                case 2:
                    {
                        EmplArr[ArrIndex] = new Employee();
                        EmplArr[ArrIndex].SetName = prompt("Enter name!");
                        EmplArr[ArrIndex].SetAge = prompt("Enter age!");
                        EmplArr[ArrIndex].SetSalary = prompt("Enter salary!");
                        EmplArr[ArrIndex].SetPos = prompt("Enter position!");
                        alert("Done!");
                        ArrIndex++;
                        break;
                    }
                case 3:
                    {
                        let Pos2 = prompt("Enter employee index!");
                        EmplArr[Pos2] = new Employee();
                        EmplArr[Pos2].SetName = prompt("Update name!");
                        EmplArr[Pos2].SetAge = prompt("Update age!");
                        EmplArr[Pos2].SetSalary = prompt("Update salary!");
                        EmplArr[Pos2].SetPos = prompt("Update position!");
                        alert("Done!");
                        break;
                    }
                case 4:
                    {
                        let Pos3 = prompt("Enter employee index!");
                        delete EmplArr[Pos3];   
                        alert("Done!");
                        break;
                    }
                default:
                    {
                        alert("Exiting!");
                    }
            }
        } 
} while(isNaN(Num) == true || Num != 5);