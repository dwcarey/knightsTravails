function component() {
    const element = document.createElement('div');
  
    element.innerHTML = 'yo';
  
    return element;
  }
  
  document.body.appendChild(component());