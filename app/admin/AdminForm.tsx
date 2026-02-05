"use client";

export default function AdminForm() {
  function handleClick() {
    console.log("click");
  }

  return <button onClick={handleClick}>Crear</button>;
}
