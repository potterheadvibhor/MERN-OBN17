function result(s,f)
{
    let Ispassed=true;
    if(Ispassed)
    {
        s()
        
    }
    else{
        f()
    }
}

result(()=> console.log("Passed"),()=> console.log("Not Passed"))

