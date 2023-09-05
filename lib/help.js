function helpExecutor() {
     console.log(`List of all the commands: 
                    1. view Tree <dir-name> 
                    2. view Flat <dir-name>  
                    3. organize <dir-name>
                    4. help `
                ); 
}

module.exports = {
    helpFn : helpExecutor
}