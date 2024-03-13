class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="footer" class="wrapper">
                <div class="title">The Rest Of It</div>
                <div class="container">
                    <header class="style1">
                        <h2>Send me a message!</h2>
                        <p>
                            Got a question or just want to talk? Feel free to reach out!
                        </p>
                    </header>
                    <div class="row aln-center">
                        <div class="col-6 col-12-medium">

                            <!-- Contact Form -->
                                <section>
                                    <form method="post" action="mailto:kmgraham811@gmail.com" enctype="text/plain">
                                        <div class="row gtr-50">
                                            <div class="col-6 col-12-small">
                                                <input type="text" name="name" id="contact-name" placeholder="Name" />
                                            </div>
                                            <div class="col-6 col-12-small">
                                                <input type="text" name="email" id="contact-email" placeholder="Email" />
                                            </div>
                                            <div class="col-12">
                                                <textarea name="message" id="contact-message" placeholder="Message" rows="4"></textarea>
                                            </div>
                                            <div class="col-12">
                                                <ul class="actions">
                                                    <li><input type="submit" class="style1" value="Send" /></li>
                                                    <li><input type="reset" class="style2" value="Reset" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
                                </section>

                        </div>
                    </div>
                    <div id="copyright">
                        <ul>
                            <li>&copy; Kat Terranova</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                            <li>Icons: <a href="https://www.flaticon.com/free-icons/computer" title="computer icons">Computer icons created by Freepik - Flaticon</a></li>
                            
                        </ul>
                    </div>
                </div>
            </section>
        `;
      }
}

customElements.define('footer-component', Footer);