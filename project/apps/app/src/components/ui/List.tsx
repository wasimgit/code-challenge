import './List.css';

interface Props {
    title: string;
    items: any[]; // or a more specific type
    renderItem: (item: any) => React.ReactNode;
}

export default function List({ title, items, renderItem }: Props) {
  return (
    <div className="list">
      <h1>{title}</h1>
      <ul className="list-grid">
        {items.map((item, index) => renderItem(item, index))}
      </ul>
    </div>
  );
}

List.Item = function ListItem({ children }) {
  return <li className="list-item">{children}</li>;
};
