let arr=[95, 67, 40, 82]

console.log(arr.map((score)=>
{ 
     if(score>=90)
    {
       return "Excellent"
    }
    else if(score<90 && score>=60)
    {
        return "Good"
    }
    else
    {
    return "fail"
    }

}))