type Props = {
  notes: any;
};

function Notes({ notes }: Props) {
  return (
    <div>
      {notes.map((note: any) => {
        return <h1 key={note._id}>{note.content}</h1>;
      })}
    </div>
  );
}

export default Notes;
