// import inquirer from "inquirer";

// const answers:{"no1":number,"no2":number,"operator":string}= await inquirer.prompt ([{

//     type:"number",
//     name:"no1",
//     message:"write your no1:"
// },
// {
//     type:"number",
//     name:"no2",
//     message:"write your no2:"
// },
// {
//     type:"list",
// name:"operator",
// message:"select your operator",
// choices:["+","-","*","/"]
// }

// ])

// const{no1,no2,operator}=answers

// if(no1 && no2 && operator){
//     let result:number=0
//     if(operator==="+"){result=no1+no2
//     console.log(result)}else if(operator==="-"){result=no1-no2 
//         console.log(result) }else if(operator==="*"){result=no1*no2 
//             console.log(result) }else if(operator==="/"){result=no1/no2 
//                 console.log(result) }
//                 console.log("your answer is: " +result)
// }else{console.log("please select a valid operator")}


import inquirer from "inquirer";

const answer:{no1:number,no2:number,operator:string}=await inquirer.prompt
([{
    type:"number",
    name:"no1",
    message:"write your first no:"},
{type:"number",
name:"no2",
message:"write your second no:"},
{type:"list",
name:"operator",
message:"choose your operator:",
choices:["+","-","*","/"]
},
])

const {no1,no2,operator}=answer

if(no1&&no2&&operator){
    let result:number=0
    if(operator==="+"){ result=no1+no2
        console.log(result)}else if
    (operator==="-"){result=no1-no2
        console.log(result)}else if
    (operator==="*"){result=no1*no2
        console.log(result)}else if 
    (operator==="/"){result=no1/no2
    console.log(result) }
    console.log("your answer is " +result) 
}else{console.log("Please select a valid operator")}


