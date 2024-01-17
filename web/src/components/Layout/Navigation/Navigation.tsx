import { IconUserCircle } from '@tabler/icons-react';

export default function Navigation() {
    return (
        <header className="h-screen w-[20vw] static border border-zinc-500">
            <nav>
                <a href="/">
                    <img src="/vim.svg" alt="Vim Logo" />
                </a>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>

                <div>
                    <a href="/my-account">
                        <IconUserCircle size={24} />
                        My Account
                    </a>
                </div>
            </nav>
        </header>
    );
}