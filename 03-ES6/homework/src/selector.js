var traverseDomAndCollectElements = function(matchFunc, startEl = document.body) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl))  resultSet.push(startEl)// si matchFunc es igual a startEl entonces haceme un push de startEl en resultSet
// el children te devuelve un arreglo y con .length los contas para iterar
   for(let i = 0;i< startEl.children.length;i++){// el children.length busca los hijos del arbol startEl, por eso startEl.children 
    let res = traverseDomAndCollectElements(matchFunc,startEl.children[i])// es una recursion para que evalue el children 0, luego el 1, luego el 2, etc;
     resultSet = [...resultSet,...res]// el ... te crea una copia del parametro ej resultSet= [...resultSet], te hace otro resultSet y lo guarda en result set
   }
   return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector.at() === '#') return 'id';
  if (selector[0] === '.')return 'class';
  if (selector.includes('.') )return 'tag.class';
  return 'tag';

};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = element  =>  '#'+ element.id === selector;
  } else if (selectorType === "class") {
    matchFunction = (element)  =>  {
      for (var abc of element.classList) {
        if('.'+ abc === selector) return true;
        }
        return false;
      };
  } else if (selectorType === "tag.class") {
     matchFunction = element =>{ 
     const[tagnn, classnn] = selector.split('.')
return matchFunctionMaker(tagnn)(element)&& matchFunctionMaker('.' + classnn)(element)
     }
  } else if (selectorType === "tag") {
    matchFunction = element => element.tagName.toLowerCase() === selector
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
