function Greet(props) {

  return (
    <>
      <div  className="h-screen w-full bg-cyan-900 flex items-center justify-center">
        <h2 className="text-9xl text-slate-200">Hi, {props.user}</h2>
      </div>
    </>
  );
}

export default Greet;
