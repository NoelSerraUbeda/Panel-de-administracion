export default (() => {
    const eraseButton = document.querySelector('.erase-button');
    const saveButton = document.querySelector('.save-button button');
    const allFields = document.querySelectorAll('[data-minlength], [data-onlyletters], [data-mail]');
    const crudTable = document.querySelector('.crud-table');
    const originalSVG = saveButton.innerHTML;
  
    eraseButton?.addEventListener('click', () => {
      document.querySelectorAll('.tab-content.active input').forEach(element => element.value = '');
    });
  
    const checkAllFields = () => {
      let allValid = true;
  
      allFields.forEach(input => {
        const isInputValid = !(input.classList.contains('error'));
        allValid = allValid && isInputValid && input.value.trim() !== '';
      });
  
      return allValid;
    };
  
    const applyValidationClass = () => {
      allFields.forEach(input => {
        const isValid = !(input.classList.contains('error')) && input.value.trim() !== '';
        input.classList.toggle('valid', isValid);
      });
    };
  
    allFields.forEach(input => {
      input?.addEventListener('input', () => {
        if (input.hasAttribute('data-minlength')) {
          const valid = input.value.length >= input.getAttribute('data-minlength') || input.value.length === 0;
          input.classList.toggle('error', !valid);
        } else if (input.hasAttribute('data-onlyletters')) {
          const valid = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/u.test(input.value) || input.value.length === 0;
          input.classList.toggle('error', !valid);
        } else if (input.hasAttribute('data-mail')) {
          const emailRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9._-]*@[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(\.[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)+$/u;
          const valid = emailRegex.test(input.value) || input.value.length === 0;
          input.classList.toggle('error', !valid);
        }
  
        applyValidationClass();
      });
    });
  
    saveButton?.addEventListener('click', () => {
      if (checkAllFields()) {
        Message('Todo correcto');
        setTimeout(() => {
          const formData = getFormData();
          saveButton.innerHTML = getSavingSVG();
          saveButton.disabled = true;
  
          setTimeout(() => {
            saveButton.innerHTML = originalSVG;
            saveButton.disabled = false;
          }, 3000);
  
          generateCrudCard(formData);
        }, 1000);
      } else {
        Message('Faltan datos o son incorrectos');
      }
    });
  
    function getFormData() {
      const nombreInput = document.querySelector('[data-onlyletters]');
      const emailInput = document.querySelector('[data-mail]');
  
      return {
        nombre: nombreInput.value,
        email: emailInput.value
      };
    }
  
    function getSavingSVG() {
      return `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 12.8C13.5 12.31 12.78 12 12 12C10.34 12 9 13.34 9 15C9 16.31 9.84 17.41 11 17.82C11.07 15.67 12.27 13.8 14 12.8ZM11.09 19H5V5H16.17L19 7.83V12.35C19.75 12.61 20.42 13 21 13.54V7L17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H11.81C11.46 20.39 11.21 19.72 11.09 19ZM6 10H15V6H6V10ZM15.75 21L13 18L14.16 16.84L15.75 18.43L19.34 14.84L20.5 16.25L15.75 21Z" fill="white"/>
          <path d="M15.75 21L13 18L14.16 16.84L15.75 18.43L19.34 14.84L20.5 16.25L15.75 21Z" fill="#2EEE1E"/>
        </svg>
      `;
    }
  
    function generateCrudCard(data) {
      const cardContainer = document.createElement('div');
      cardContainer.classList.add('crud-card');
  
      const cardButtonsContainer = document.createElement('div');
      cardButtonsContainer.classList.add('crud-card-buttons');
  
      const deleteButton = createButton('delete', 'Delete');
      const editButton = createButton('edit', 'Edit');
  
      const cardDataContainer = document.createElement('div');
      cardDataContainer.classList.add('crud-card-data');
  
      const nombreElement = createElement('h3', `NOMBRE: <span>${data.nombre}</span>`);
      const emailElement = createElement('h3', `EMAIL: <span>${data.email}</span>`);
  
      cardButtonsContainer.appendChild(deleteButton);
      cardButtonsContainer.appendChild(editButton);
  
      cardDataContainer.appendChild(nombreElement);
      cardDataContainer.appendChild(emailElement);
  
      cardContainer.appendChild(cardButtonsContainer);
      cardContainer.appendChild(cardDataContainer);
  
      crudTable.appendChild(cardContainer);
    }
  
    function createButton(className, title) {
      const button = document.createElement('button');
      button.classList.add(className);
      button.innerHTML = getButtonSVG(title);
      return button;
    }
  
    function createElement(tag, innerHTML) {
      const element = document.createElement(tag);
      element.innerHTML = innerHTML;
      return element;
    }
  
    function Message(newMessage) {
      const message = document.querySelector('.crud-form .messageContainer');
      const messageContent = document.querySelector('.crud-form .messageContainer span');
  
      messageContent.textContent = newMessage;
      message.classList.add('active');
      saveButton.disabled = true;
  
      setTimeout(() => {
        message.classList.remove('active');
        saveButton.disabled = false;
      }, 2100);
    }
  
    function getButtonSVG(title) {
      return title === 'Delete'
        ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>${title}</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" fill="white" /></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>${title}</title><path d="M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" fill="white" /></svg>`;
    }
  })();
  