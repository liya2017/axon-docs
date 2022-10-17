(() => {
    const loadLinks = () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const footerLinksPlaceholder = document.getElementById('footer-links-placeholder');
        footerLinksPlaceholder.innerHTML = `
                <a href="#">
                    <img src="/img/github_${theme}.svg" alt="GitHub"/>
                </a>
                <a href="#">
                    <img src="/img/twitter_${theme}.svg" alt="Twitter"/>
                </a>
                <a href="#">
                    <img src="/img/telegram_${theme}.svg" alt="Telegram"/>
                </a>
                <a href="#">
                    <img src="/img/linkedin_${theme}.svg" alt="LinkedIn"/>
                </a>
                <a href="#">
                    <img src="/img/medium_${theme}.svg" alt="Medium"/>
                </a>
                `;
        console.log(footerLinksPlaceholder);
    };
    window.onload = () => {
        loadLinks();
        const themeButton = document.getElementsByClassName('toggleButton_node_modules-@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module')[0]
        if (themeButton) {
            themeButton.addEventListener('click', () => setTimeout(loadLinks, 100));
        }
    }
})();
