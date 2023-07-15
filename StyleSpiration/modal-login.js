// modal-login.js

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
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0, 0, 0);
            background-color: rgba(0, 0, 0, 0.4);
            padding-top: 60px;
          }
  
          .modal-content {
            background-color: #fefefe;
            margin: 5px auto;
            border: 1px solid #888;
            width: 80%;
          }
  
          .close {
            position: absolute;
            right: 25px;
            top: 0;
            color: #000;
            font-size: 35px;
            font-weight: bold;
          }
  
          .close:hover,
          .close:focus {
            color: red;
            cursor: pointer;
          }
  
          .animate {
            animation: animatezoom 0.6s;
          }
  
          @keyframes animatezoom {
            from { transform: scale(0); }
            to { transform: scale(1); }
          }
        </style>
  
        <button onclick="this.parentNode.parentNode.querySelector('.modal').style.display='block'">Login</button>
  
        <div class="modal">
          <span onclick="this.parentNode.style.display='none'" class="close" title="Close Modal">&times;</span>
  
          <!-- Modal Content -->
          <form class="modal-content animate" action="/action_page.php">
            <div class="imgcontainer">
              <img src="img_avatar2.png" alt="Avatar" class="avatar">
            </div>
  
            <div class="container">
              <label for="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required>
  
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required>
  
              <button type="submit">Login</button>
              <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
              </label>
            </div>
  
            <div class="container" style="background-color:#f1f1f1">
              <button type="button" onclick="this.parentNode.parentNode.style.display='none'" class="cancelbtn">Cancel</button>
              <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
          </form>
        </div>
      `;
  
      // Append the template content to the shadow DOM
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  // Define the custom element
  customElements.define('modal-login', ModalLogin);
  