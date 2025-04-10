import ItemList from "../ItemList";
const index = ({data}) => {
  return (
    <div>
        {/* Accordian header */}
       <div> <span>{data.title} ({data.itemCards.length})</span>
       <span>🔽</span></div>
        {/* Accordian Body */}
        <ItemList items={data.itemCards} />
    </div>
  )
}

export default index