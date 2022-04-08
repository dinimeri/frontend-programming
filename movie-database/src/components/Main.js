import Hello from "./Hello";

/**
 * Membuat component Main
 * Menampilakn Konten Utama
 */
 function Main() {
  return(
    <main>
      <Hello nama="Dini"/>
      <Hello nama="Sehun"/>
      <Hello nama="Suho"/>
      <Hello nama="Lucas"/>
      <Hello nama="Songkang"/>
    </main>
  )
}

export default Main;