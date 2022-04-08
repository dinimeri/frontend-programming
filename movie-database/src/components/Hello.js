/**
 * Membuat component Hello.
 * Mencetak UI (elements)
 */
 const Hello = (props) => {
  const { nama } = props; 
  // di dalam return adalah JSX
  return(
    <div className="hello">
      <h2>Hello React</h2>
      <p>I am {nama} - Frontend Engineer</p>
    </div>
  );
}

export default Hello;