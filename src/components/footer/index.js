import { h } from 'preact';

const Footer = () => {
    return (
        <footer class="footer d-flex text-center back-gradient-1">
            <div class="py-4 py-md-5 mx-auto">
                <h3 class="mb-2 text-capitalize">Ivan Brajković</h3>
                <div class="social-media">
                    <a href="mailto:ivan.brajkovic@icloud.com" target="_blank">
                        <i class="far fa-envelope mx-2"></i>
                    </a>
                    <a href="https://github.com/ivbrajkovic/" target="_blank">
                        <i class="fab fa-github mx-2"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ivan-brajkovi%C4%87-5b9883143/"
                        target="_blank"
                    >
                        <i class="fab fa-linkedin-in mx-2"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
