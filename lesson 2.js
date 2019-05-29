/**
 * LOOPS
 *  - for loop ( for i < 10, i <=10, i >= 0, i += 2, 3, etc.), looping backwards
 *  - - console log example
 * [ 'vanilla js', 'angular', 'react', 'vue', 'jQuery', 'knockout', 'ember']
 * 
 * - while loop (previous example)
 * 
 * - do while
 * 
 * - continue, break
 * - - typeof for strings example, ===, then continue
 * - - break on first found element
 */

 /**
  * SCOPING
  * what is scoping
  */

  var a = 'number 1';
  first()

  function first() {
    var b = ' number 2';
    second()

    function second() {
      var c = ' number 3';
      // third();
      
      console.log(a + b + c)
    }
  }

  function third() {
    var c = ' number 4';

    console.log(a + b + c + d)
  }

/**
 * ES6 - history
 * 
 * - 1996 - LiveScript -> JavaScript
 * - 1997 - ES1 (ECMAScript 1) - first JS language standart
 * - 2009 - ES5 was released
 * - 2015 - ES6/ES2015 was released -> the biggest update ever
 * - 2015 - ES is being released every year from now on, instead of shipping huge new version
 * 
 * - ES5 is fully supported
 * - ES6+ is mostly supported (https://caniuse.com/#search=ES6) in modern browsers. Most other features are available via transpiling & polyfilling
 * - ES10+ is called ESNext, partially supported by browsers, some other features are available via transpiling & polyfilling
 */

/**
 * ES6 vs ES5
 * - still have to understand ES5
 * - lots of code samples in ES5
 * - older codebases may still be in ES5
 */

/**
 * ES6 features
 * - let,const
 * - destructuring, composition
 * - arrow functions
 * - classes
 */

/** 
 * Inheritance && prototype cahin
 * 
 * 
 * 
 */

 /** 
 * - prototypes
 * - array iterations
 * 
 * 
 * - scoping, scope chain
 */