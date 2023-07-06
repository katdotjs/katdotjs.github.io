class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="header" class="wrapper">

                <div id="logo">
                    <h1><a href="index.html">Kat Graham</a></h1>
                    <p>A web developer in Rochester, NY.</p>
                </div>

            
                <nav id="nav">
                    <ul>
                        <li class="current"><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#footer">Contact</a></li>
                    </ul>
                </nav>

            </section>
        `;
      }
}

customElements.define('header-component', Header);