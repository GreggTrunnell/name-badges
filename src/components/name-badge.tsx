//const NameBadge = ({name}:{name: string}) => {} could also be written
//like: const addTwo =(n: number)=> n + 2 changing it to...

const NameBadge = (props:{name: string}) => {
  if(Math.random()) return null;
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="text-5xl">HELLO</h1>
        <p>My name is…</p>
      </header>
      <div className="badge-body">
        <p className="badge-name">{props.name}</p>
      </div>
      <footer className="badge-footer" />
    </section>
  );
};

export default NameBadge;
