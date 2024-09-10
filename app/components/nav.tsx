function Nav({ title, src }: { title: string; src: string }) {
  return (
    <li className="my-0 mx-4 hover:underline text-white">
      <a href={src}>{title}</a>
    </li>
  );
}

export default Nav;
