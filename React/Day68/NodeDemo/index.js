import chalk from 'chalk'
import figlet from 'figlet'

figlet("Hello World",(err,data)=>{
    console.log(chalk.blue(data))
})