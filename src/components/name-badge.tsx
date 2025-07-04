//const NameBadge = ({name}:{name: string}) => {} could also be written
//similar to: const addTwo =(n: number)=> n + 2 changing it to...

type NameBadgeProps = {
  name: string,
  greeting?: string
}

const NameBadge = (props: NameBadgeProps)=> {
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
