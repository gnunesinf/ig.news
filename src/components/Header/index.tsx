import Link from "next/link";

import { ActiveLink } from "../ActiveLink";

import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <img src="/images/logo.svg" alt="ig.news" />
        </Link>
        <nav>
          <ActiveLink activeClassName={styles.linkActive} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink
            activeClassName={styles.linkActive}
            href="/posts"
            prefetch={true}
          >
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
