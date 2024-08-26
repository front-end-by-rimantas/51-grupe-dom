export function header(currentHref) {
    const navData = [
        {
            href: '',
            text: 'Pagrindinis',
        },
        {
            href: 'services',
            text: 'Paslaugos',
        },
        {
            href: 'team',
            text: 'Komanda',
        },
    ];

    let navHTML = '';

    for (const link of navData) {
        let classes = '';

        if (currentHref === link.href) {
            classes = 'link active';
        } else {
            classes = 'link';
        }

        navHTML += `<a class="${classes}" href="../${link.href}">${link.text}</a>`;
    }

    const headerHTML = `
        <header class="header">
            <img class="logo" src="../logo.png" alt="logo">
            <nav class="nav">${navHTML}</nav>
        </header>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}