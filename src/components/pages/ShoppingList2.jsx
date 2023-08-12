import { Reorder } from "framer-motion"
import { useState } from "react"
import { styled } from "styled-components"
import { AiOutlineDelete } from "react-icons/ai"
import { GoGrabber } from "react-icons/go"
import { BiAddToQueue } from "react-icons/bi"
import { AddSparkPlus } from "../animations/SparkPlus"
import { AddSparkDelete } from "../animations/SparkDelete"

const listShopping = [
  { id: 0, label: "Pão", isCheck: false },
  { id: 1, label: "Queijo", isCheck: false },
  { id: 2, label: "Leite", isCheck: true },
  { id: 3, label: "Azeite", isCheck: false },
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

  function handleEditInputCard({ text, id }) {
    let newList = list.map((item) => {
      if (id === item.id) {
        return { ...item, label: text }
      } else {
        return item
      }
    })
    setList(newList)
  }
  function handleCheckCard({ value, id }) {
    let newList = list.map((item) => {
      if (id === item.id) {
        return { ...item, isCheck: value }
      } else {
        return item
      }
    })
    setList(newList)
  }
  function handleDeleteCard({ event, id }) {
    let newList = list.filter(({ id: itemId }) => itemId !== id)
    setList(newList)
    AddSparkDelete(event)
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
            <ListItem key={item.id} id={item.id} value={item}>
              {item.label !== "" && (
                <CheckInput
                  type="checkbox"
                  checked={item.isCheck}
                  onChange={(e) =>
                    handleCheckCard({ value: e.target.checked, id: item.id })
                  }
                />
              )}
              <ItemInput
                $isChecked={item.isCheck}
                placeholder="Parece que está faltando algo..."
                onChange={(e) =>
                  handleEditInputCard({ text: e.target.value, id: item.id })
                }
                value={item.label}
              />
              <ActionsWrapper>
                <ListButton $clickColor="#ff0e0e">
                  <DeleteIcon
                    onClick={(e) => handleDeleteCard({ event: e, id: item.id })}
                  />
                </ListButton>
                <GrabberIcon />
              </ActionsWrapper>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

const CheckInput = styled.input`
  background-color: #0000;

  margin: 0;
  margin-inline: 0.3em;
  width: 2em;
  height: 2em;

  &:checked {
    accent-color: var(--color-blue);
  }
`

const DeleteIcon = styled(AiOutlineDelete)`
  width: 1.6em;
  height: 1.6em;
`
const GrabberIcon = styled(GoGrabber)`
  width: 1.6em;
  height: 1.6em;
`
const AddIcon = styled(BiAddToQueue)`
  width: 1.6em;
  height: 1.6em;
`

const ListButton = styled.button`
  background-color: #0000;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  padding: 0.2em;
  border-radius: 0.2em;
  padding-inline: 0.2em;

  border: none;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  &:active {
    background-color: ${(props) => !props.disabled && props.$clickColor};
  }
`

const ActionsWrapper = styled.div`
  display: flex;
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
const ItemInput = styled.input`
  background-color: #0000;
  outline: none;
  border: none;
  font-family: var(--li-font-family);
  font-size: var(--li-font-size);

  text-decoration: ${(props) => props.$isChecked && "line-through"};

  width: 100%;

  margin-top: 0.4em;
`

const ListItem = styled(Reorder.Item)`
  background-color: var(--bg-color-card);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: 0.6em;
  padding-block: 0.2em;

  margin-bottom: 0.6em;
  margin-inline: 1em;

  border-radius: 0.3em;

  text-align: start;

  cursor: grab;
`

const List = styled(Reorder.Group)`
  list-style: none;
  width: 100%;

  padding: 0;
  margin: 0;
`
