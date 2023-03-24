//Задача №1. Усовершенствовать кеширующий декоратор

function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(','); 
    let objectInCache = cache.findIndex((item) => item.hash === hash); 
    if (objectInCache != -1) { 
      console.log('Из кэша: ' + cache[objectInCache].result); 
      return 'Из кэша: ' + cache[objectInCache].result;
    }

    let result = func(...args); 
    cache.push({hash, result}); // 
    if (cache.length > 5) {
      cache.shift()   
    }
    console.log('Вычисляем: '+ result);
    return 'Вычисляем: ' + result;
  }
  return wrapper;
}

//Задача № 2. Декоратор debounce с моментальным вызовом и подсчётом количества вызовов

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++;
    if(timeoutId === null) {
      func(...args);
      wrapper.count++;
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);
  }
  return wrapper;
}