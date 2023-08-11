import { Reorder } from "framer-motion"
import { useEffect, useState } from "react"
import { styled } from "styled-components"

const listShopping = [
  { id: 0, label: "Pão" },
  { id: 1, label: "Queijo" },
  { id: 2, label: "Leite" },
  { id: 3, label: "Azeite" },
]

export const ShoppingList = () => {
  const [list, setList] = useState(listShopping)

  function handleAddNewCard(e) {
    e.preventDefault()
    const newItem = {
      id: list.length,
      label: "",
    }

    setList((value) => [newItem, ...value])
  }

  useEffect(() => {}, [list])

  return (
    <>
      <Button onClick={handleAddNewCard}>+ Adicionar</Button>
      <List axis="y" values={list} onReorder={setList}>
        {list.map((item) => {
          return (
            <ListItem key={item.id} id={item.id} value={item}>
              {item.label}
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

const ListItem = styled(Reorder.Item)`
  background-color: var(--bg-color-card);
  font-family: var(--li-font-family);
  font-size: var(--li-font-size);

  padding-block: 0.5em;
  padding-inline: 1em;

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
const Button = styled.button`
  font-family: "Indie Flower", cursive;
  font-size: 1.2em;
  background-color: var(--color-orange);
  width: calc(100% - 2em);

  border: none;
  border-radius: 0.5em;

  padding-block: 0.5em;
  padding-inline: 1em;

  margin-bottom: 0.6em;
  margin-inline: 1em;

  cursor: pointer;
`
