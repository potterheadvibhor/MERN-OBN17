let str="PTEG1y9l0KBTOhkVxt1wD0TUXw2DYdxFNchkwNawUOMBLHtS5SiHFql385DUTIJsDs4T9C4FVTBl7jzUWrmPmPrM5vXeUQ3ZRTM1C1E20oV5isSnjXcX0VQvpUGVFjANCG5uDmy83YIdHirG9KByoKEWxPftk00cO4iVuWks8dGGVdtK7UldiPokFffnjwBOTfEjPnf5Zd8EewA3kuweCdxllA4ewRMaedpdM4qzgNNclsSlFhdo1gLoMIrwQterudBJBFQMPGlfkJx3YRlXikIAVxOsjHhfdxg9hc46VwarxJEbFXwtewnbsKjVwmDWwn587z9miCdcLcyjlPSLjR8ZhoKGceHtLlvWbQyH3sMzDvtD2TKCRLSjfHbYnAQJgpJulLhnf0afDfSPvLNAAOkexCKmlCSCDfzXOFFHupagfvizJV93fZ5gzW4E1sdEIgpTZqktmKtszrBoM7eyv121Pb9RzRMatN6UQfa1d7QCJ..."
let str2=""
for(let i=0;i<str.length;i++)
{
 if(str[i]===str[i].toUpperCase())
 {
   str2+=str[i].toLowerCase()
 }
 else if(str[i]===str[i].toLowerCase())
 {
   str2+=str[i].toUpperCase()
 }
 else{
str2+=str[i]
 }


}
console.log(str2)