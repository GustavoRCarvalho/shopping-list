import { useState, useEffect } from "react"
import { styled } from "styled-components"
import { BiAddToQueue } from "react-icons/bi"
import { AddSparkPlus } from "../animations/SparkPlus"
import { ListButton } from "../ShoppingList/ListButton"
import { ItemInput } from "../ShoppingList/ListItemInput"
import { SortableList } from "../ShoppingList/SortableList"
import { useLocation } from "react-router-dom"
import { Loading } from "../common/Loading"

const listShopping = (path) => {
  switch (path) {
    case "Fast Food":
      return [
        { id: 1, label: "🍔 Hamburger", isCheck: false },
        { id: 2, label: "🍟 Batata Frita", isCheck: false },
        { id: 3, label: "🍕 Pizza", isCheck: true },
        { id: 4, label: "🌭 Cachorro Quente", isCheck: false },
        { id: 5, label: "🌮 Taco", isCheck: false },
      ]
    case "Fazer Bolo":
      return [
        { id: 1, label: "🥚 ovoso", isCheck: false },
        { id: 2, label: "🥛 Leite", isCheck: false },
        { id: 4, label: "🍚 Açucar", isCheck: false },
        { id: 3, label: "🥣 Farrinha", isCheck: true },
        { id: 5, label: "🍫 Chocolate em Pó", isCheck: false },
      ]
    case "Compras da Fruteira":
      return [
        { id: 1, label: "🍇 Uva", isCheck: false },
        { id: 2, label: "🍓 Morango", isCheck: false },
        { id: 4, label: "🥝 Kiwi", isCheck: false },
        { id: 3, label: "🍎 Maça", isCheck: true },
        { id: 5, label: "🍍 Abacaxi", isCheck: false },
      ]
    default:
      return [
        { id: 1, label: "🍞 Pão", isCheck: false },
        { id: 2, label: "🧀 Queijo", isCheck: false },
        { id: 3, label: "🥛 Leite", isCheck: true },
        { id: 4, label: "🍾 Azeite", isCheck: false },
      ]
  }
}

export const ShoppingList = () => {
  const [list, setList] = useState([])
  const [newItemLabel, setNewItemLabel] = useState("")
  const blockAddMore = newItemLabel === ""
  const { pathname } = useLocation()
  const path = pathname.split("/")[2]

  useEffect(() => {
    setList([])
    setTimeout(() => {
      setList(listShopping(decodeURI(path)))
    }, [3000])
  }, [path])

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
      <Title>{decodeURI(path)}</Title>
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
      {JSON.stringify(list) === "[]" && <Loading />}
      <SortableList list={list} setList={setList} />
    </>
  )
}

const Title = styled.h2`
  margin: 0;
  margin-top: 0.3em;
`

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
