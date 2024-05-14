import resume from './resume.json' with { type: 'json' };

console.log('Resume: ', resume)

//For Loop 

for(let i = 0; i < resume.length; i++){
    console.log('Skill: ', resume[i].skills)
    for(let skill of resume[i].skills){
        console.log('category',skill.category)
    }
}

//ForEach Loop
resume[0].education.forEach(element => console.log(element));


//for in loop 
for(const data in resume[0].experience){
   console.log(resume[0].experience[data])
}
