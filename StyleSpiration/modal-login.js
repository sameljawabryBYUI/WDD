class ModalLogin extends HTMLElement {
  constructor() {
    super();

    // Define the component's shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Create the template for the modal login form
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        /* Add the CSS styles for the modal login form here */
        .modal {
          /* ... CSS styles ... */
        }

        /* ... Other CSS styles ... */

      </style>

      <button id="login-btn">Login</button>

      <div class="modal">
        <!-- ... Modal content ... -->
        <form class="modal-content animate" action="/action_page.php">
          <!-- ... Form content ... -->
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required>

          <button type="button" id="submit-btn">Login</button>
          <!-- ... Other elements ... -->
        </form>
      </div>
    `;

    // Append the template content to the shadow DOM
    shadowRoot.appendChild(template.content.cloneNode(true));

    // Add event listener to handle login button click
    this.shadowRoot.getElementById('login-btn').addEventListener('click', this.openModal.bind(this));

    // Add event listener to handle form submission
    this.shadowRoot.getElementById('submit-btn').addEventListener('click', this.handleLogin.bind(this));
  }

  // Method to open the modal
  openModal(event) {
    this.shadowRoot.querySelector('.modal').style.display = 'block';
  }

  // Method to close the modal
  closeModal() {
    this.shadowRoot.querySelector('.modal').style.display = 'none';
  }

  // Method to handle form submission (login)
  handleLogin(event) {
    event.preventDefault();
    const usernameInput = this.shadowRoot.querySelector('input[name="uname"]');
    const passwordInput = this.shadowRoot.querySelector('input[name="psw"]');

    // Get the entered username and password
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Simulate login check (Replace this with actual login validation logic)
    const correctUsername = 'user123';
    const correctPassword = 'password123';

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
      alert('Login Successful!');
      this.closeModal();
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
}

// Define the custom element
customElements.define('modal-login', ModalLogin);
