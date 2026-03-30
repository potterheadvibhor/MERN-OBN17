// function ClickPicture(cd)
// {
//     setTimeout(()=>{console.log("Picture Clicked")
//         cd()},4000)
// }
// function SelectPicture(cd)
// {
//     setTimeout(()=>{console.log("Picture Selected")
//         cd()
//     },3000)
// }
// function ApplyFilter(cd)
// {
//     setTimeout(()=>{console.log("Filter Applied ")
//         cd()
//     },2000)
// }
// function ChooseCaption(cd)
// {
//     setTimeout(()=>{console.log("Caption Selcted")
//         cd()
//     },1000)
// }
// function PostPicture()
// {
//     setTimeout(()=>{console.log("Picture Posted")},1000)
// }


// ClickPicture(()=>{
//     SelectPicture(()=>{
//         ApplyFilter(()=>{
//             ChooseCaption(()=>{
//                 PostPicture()
//             })
//         })
//     })
// })

// ClickPicture()
// SelectPicture()
// ApplyFilter()
// ChooseCaption()
// PostPicture()


 
function ClickPicture()
{
    return new Promise((resolve,reject)=>{
 setTimeout(()=>{
    console.log("Picture Clicked")
    resolve()
        },4000)
    })
   
}

function SelectPicture(cd)
{
   return new Promise((resolve,reject)=>{
 setTimeout(()=>{
    console.log("Picture Selected")
    resolve()
        },3000)
    })
}

function ApplyFilter(cd)
{
       return new Promise((resolve,reject)=>{

    setTimeout(()=>{console.log("Filter Applied ")
        resolve()
    },2000)})
}

function ChooseCaption(cd)
{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{console.log("Caption Selcted")
 resolve()
   },1000)})
}
function PostPicture()
{
        return new Promise((resolve,reject)=>{
    setTimeout(()=>{console.log("Picture Posted")
        resolve()
    }
     
,1000)})
}


ClickPicture()
.then(SelectPicture)
.then(ApplyFilter)
.then(ChooseCaption)
.then(PostPicture)