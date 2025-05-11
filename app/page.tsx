import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Last updated: {new Date().toLocaleString()}</p>
    </div>
  );
}
