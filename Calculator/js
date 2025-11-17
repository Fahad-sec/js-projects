      let draft = '';
      const lastResult = localStorage.getItem('lastResult');
      document.querySelector('.js-display').innerHTML = lastResult || 0;
      function calc(value) {
        draft += value;
        document.querySelector('.js-display').innerHTML = `${draft}`
      }

      function process() {
        draft = eval(draft);
        document.querySelector('.js-display').innerHTML = `${draft}`;
        localStorage.setItem('lastResult', draft);
        draft = String(draft);
      }
      
