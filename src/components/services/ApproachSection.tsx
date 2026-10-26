const APPROACH = [
  { title: "Identifying", text: "Understanding whether there's a mold problem, where it is, and how far it may extend." },
  { title: "Removing", text: "Taking out affected materials where cleaning isn't practical or appropriate." },
  { title: "Cleaning", text: "Cleaning affected surfaces that are suitable to be cleaned and kept." },
  { title: "Moisture", text: "Looking at the moisture conditions that may contribute to mold returning." },
];

export function ApproachSection() {
  return (
    <section className="border-y border-border bg-card py-20 md:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div className="reveal">
          <p className="eyebrow">Our Approach</p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Finding the Right Approach to Mold Concerns</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">Not every situation needs the same treatment. Most responses draw on some combination of these four parts, depending on what the property calls for.</p>
        </div>
        <ol className="reveal grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
          {APPROACH.map((a, i) => (
            <li key={a.title} className="bg-card p-7">
              <span className="font-display text-sm font-extrabold text-gold-deep">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
