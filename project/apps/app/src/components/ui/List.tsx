interface Props {
    title: string;
    items: any[]; // or a more specific type
    renderItem: (item: any) => React.ReactNode;
}

export default function List({ title, items, renderItem }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {items.map((item, index) => renderItem(item, index))}
      </ul>
    </div>
  );
}

List.Item = function ListItem({ children }) {
  return <li>{children}</li>;
};
