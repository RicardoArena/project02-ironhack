import style from "./index.module.css";

export function Footer() {
  return (
    <>
      <footer
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <ul>
          <li>
            <a href="mailto:arena_717@hotmail.com">Email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ricardo-arena-neto/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/RicardoArena">Github</a>
          </li>
          <li>
            <p>👋</p>
          </li>
        </ul>
      </footer>
    </>
  );
}
