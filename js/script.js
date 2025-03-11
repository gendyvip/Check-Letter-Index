function sortArray(numbers,sortType){
    console.log(numbers);
    if(sortType=="Asc"){
            numbers.sort(function(a,b){
                return a-b
           })
            return numbers
    }
    else if (sortType=="Dsc")
    {
        numbers.sort(function(a,b){
            return b-a
       })
        return numbers
    }
    else 
    return 0
}
var inp
var arr=[]
for(var i=0;i<5;i++)
{
    inp=prompt("Please enter the numbers")
    arr.push(inp)
}
type=prompt('Please enter the sorting type: "Asc" or "Dsc"')
document.writeln('<h3 style="color: red;">You have entered values of '+'<span style="color: black !important;">' + arr + '</span>' + '</h3>')
if(type=="Asc"){
    document.writeln('<h3 style="color: red;">Your values after being sorted ascending '+'<span style="color: black !important;">' + sortArray(arr,type) + '</span>' + '</h3>')
}
else if(type=="Dsc"){
    document.writeln('<h3 style="color: red;">Your values after being sorted descending '+'<span style="color: black !important;">' + sortArray(arr,type) + '</span>' + '</h3>')
}
else{
    document.writeln('<h3 style="color: red;">Error beacuse you have entered wrong type '+'<span style="color: black !important;">' + sortArray(arr,type) + '</span>' + '</h3>')

}