import { Reorder } from "framer-motion"
import { useState } from "react"
import { styled } from "styled-components"
import { BiAddToQueue } from "react-icons/bi"
import { AddSparkPlus } from "../animations/SparkPlus"
import { ListButton } from "../ShoppingList/ListButton"
import { ItemInput } from "../ShoppingList/ListItemInput"
import { ListItem } from "../ShoppingList/ListItem"

const listShopping = [
  { id: 0, label: "🍞 Pão", isCheck: false },
  { id: 1, label: "🧀 Queijo", isCheck: false },
  { id: 2, label: "🥛 Leite", isCheck: true },
  { id: 3, label: "🍾 Azeite", isCheck: false },
]

export const ShoppingList2 = () => {
  const [list, setList] = useState(listShopping)
  const [newItemLabel, setNewItemLabel] = useState("")
  const blockAddMore = newItemLabel === ""

  function addToList(e) {
    if (blockAddMore) {
      return
    }
    const newItem = {
      id: parseInt(Math.random() * 1000000),
      label: newItemLabel,
      isCheck: false,
    }
    AddSparkPlus(e)
    setList((value) => [newItem, ...value])
    setNewItemLabel("")
  }

  function handleTypeEnter(e) {
    if (e.key === "Enter") {
      addToList(e)
    }
  }

  return (
    <>
      <NewItemInput>
        <ItemInput
          placeholder="Insira um Item..."
          onChange={(e) => setNewItemLabel(e.target.value)}
          onKeyDown={handleTypeEnter}
          value={newItemLabel}
        />
        <ListButton
          id="addItemButton"
          $clickColor={"var(--color-orange)"}
          onClick={addToList}
          disabled={blockAddMore}
        >
          <AddIcon />
        </ListButton>
      </NewItemInput>
      <List axis="y" values={list} onReorder={setList}>
        {list.map((item) => {
          return (
            <ListItem key={item.id} item={item} list={list} setList={setList} />
          )
        })}
      </List>
    </>
  )
}

const AddIcon = styled(BiAddToQueue)`
  width: 3em;
  height: 3em;
`

const NewItemInput = styled.div`
  background-color: var(--bg-color-card);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: 0.6em;
  padding-block: 0.2em;

  margin-block: 0.6em;
  margin-inline: 1em;

  border-radius: 0.3em;

  text-align: start;
`

const List = styled(Reorder.Group)`
  list-style: none;
  width: 100%;

  padding: 0;
  margin: 0;
`
