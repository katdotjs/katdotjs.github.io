class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="header" class="wrapper">

                <!-- Logo -->
                    <div id="logo">
                        <h1><a href="index.html">Kat Graham</a></h1>
                        <p>A web developer in Rochester, NY.</p>
                    </div>

                <!-- Nav -->
                    <nav id="nav">
                        <ul>
                            <li class="current"><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="resume.html">Resume</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>

            </section>
        `;
      }
}

customElements.define('header-component', Header);