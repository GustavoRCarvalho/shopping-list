import { styled } from "styled-components"

const listShopping = [
  { label: "Pão" },
  { label: "Queijo" },
  { label: "Leite" },
  { label: "Azeite" },
]

export const ShoppingList = () => {
  return (
    <>
      <Button>CORES</Button>
      <List>
        {listShopping.map((item) => {
          return <ListItem key={item.label}>{item.label}</ListItem>
        })}
      </List>
    </>
  )
}

const ListItem = styled.li`
  background-color: var(--bg-color-card);

  padding-block: 0.5em;
  padding-inline: 1em;

  margin-bottom: 0.6em;
  text-align: start;
`

const List = styled.ul`
  width: 100%;

  padding: 0;
  margin: 0;
`
const Button = styled.button`
  background-color: var(--color-orange);

  border: none;
  border-radius: 0.5em;

  padding-inline: 1em;
  padding-block: 0.5em;

  cursor: pointer;
`
