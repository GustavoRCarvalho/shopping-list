import { useState } from "react"
import { styled } from "styled-components"
import { BiAddToQueue } from "react-icons/bi"
import { AddSparkPlus } from "../animations/SparkPlus"
import { ListButton } from "../ShoppingList/ListButton"
import { ItemInput } from "../ShoppingList/ListItemInput"
import { SortableList } from "../ShoppingList/SortableList"

const listShopping = [
  { id: 1, label: "🍞 Pão", isCheck: false },
  { id: 2, label: "🧀 Queijo", isCheck: false },
  { id: 3, label: "🥛 Leite", isCheck: true },
  { id: 4, label: "🍾 Azeite", isCheck: false },
]

export const ShoppingList3 = () => {
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
      <SortableList list={list} setList={setList} />
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
