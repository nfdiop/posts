import { Virtuoso } from 'react-virtuoso'

function VirtualList({ items }) {
  return (
    <Virtuoso
      style={{ height: "100%" }}
      data={items}
      itemContent={(index, log) => (
        <div
          key={log.id}
          style={{
            padding: "5px",
            borderBottom:
              index === items.length - 1 ?
                "none" :
                "1px solid #ccc",
          }}
        >
          <LogLine log={log} index={index} />
        </div>
      )}
    />
  );
}
