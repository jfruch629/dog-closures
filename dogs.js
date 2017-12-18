function dogTalk() {
  let commonDogName = 'Rover';
  let unCommonDogName = 'Susan';

    stateDogNameFact = () => {
      console.log(`I believe ${commonDogName} is an excellent dog name. The name ${unCommonDogName} is a bad dog name.`);
    }
    stateDogNameOpinion = () => {
      console.log(`I have never met a dog named ${unCommonDogName}; while several dogs are named ${commonDogName}`);
    }
    callDogs = () => {
      console.log(`Hey, come here ${commonDogName} and ${unCommonDogName}`);
    }
    return [stateDogNameFact(), stateDogNameOpinion(), callDogs()]
}

dogTalk();
