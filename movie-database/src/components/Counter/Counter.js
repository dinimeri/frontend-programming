import { useState } from "react";

function Counter() {
  // Membuat variable state
  const [hasil, setHasil] = useState(0);

  function tambah() {
    // jalankan fungsi setHasil
    setHasil(hasil + 1)
  }

  return (
    <div>
      <p>Hasil: {hasil}</p>
      <button onClick={tambah}>Add</button>
    </div>
  );
}

export default Counter;