const firstMessage = [ 'Your sign is pulling energy from a forgotten star', 
    'A hidden opprotunity blooms when Venus whispers to your ruling planet.',
    'The moon is watching your silence',
    'Your aura has been buzzing since Mercury last exhaled',
    'Love won\'t knock today',
    'Jupiter rolls dice in your favor this week',
    'A forgotten friend might reappear when Saturn stumbles',
    'Your energy is contagious',
    'Stars are realigning for you',
    'A new chapter starts with an oddly times compliment'
]

const secondMessage =[
    'Small steps every day create mountains behind you',
    'The fact you are still here means you have beaten every hard day so far',
    'Someone is rooting for you who hasn\'t even met you yet',
    'Dreams don\'t demand perfection, just persistence',
    'The world doesn\'t need another perfect person, it needs you',
    'Don\'t underestimate the power of showing up.',
    'Your story isn\'t over, the next chapter is unwritten',
    'One day, the thing you worried about would not matter at all.',
    'Be kind to yourself',
    'Every sunrise is proof that second chances exist'
]

const thirdMessage = [
    'Why don\'t ghosts use the elevators',
    'My phone fell in soup',
    'I tried to catch fog yesterday',
    'If pencils had GPS, would they still draw maps',
    'Why was the broom late?',
    'A sandwich walks into a library.',
    'Why dont cows ever win talent shows?',
    'I ordered a chicken and an egg online.',
    'My shows started singing',
    'I asked my dog what 2+2 is.'
]

const generateRandom = message => {
    let random = Math.floor(Math.random() * message.length)
    return `${message[random]}`
}
function generateMessage(){
    let no1 = generateRandom(firstMessage);
    let no2 = generateRandom(secondMessage);
    let no3 = generateRandom(thirdMessage);
    return `The favorite quote of the day is ${no1} , but suddenly she said; ${no3} , The title of my favorite novel is ${no2}`
}

console.log(generateMessage());