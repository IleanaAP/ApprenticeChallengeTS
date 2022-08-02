//Ileana Aguilar -- Typescript Challenge

function BEM<B extends string, E extends string[], M extends string[]>(block: B, element: E, modifier: M) {
  let result;

  //block__element
  if (element.length > 0 && modifier.length === 0) {
    result = `${block}__${element}`;
    return console.log(result);
  } else if (element.length === 0 && modifier.length > 0) { // block--modifier
    result = `${block}--${modifier}`;
    return console.log(result);
  } else if (element.length > 0 && modifier.length > 0) { //block__element--modifier
    result = `${block}__${element}--${modifier}`;
    return console.log(result);
  }
}

const bem = BEM<string, string[], string[]>("block", ["element"], ["modifier"]);