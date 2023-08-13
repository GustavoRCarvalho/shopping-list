import { createContext, useContext, useMemo } from "react"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { styled } from "styled-components"
import { ItemInput } from "./ListItemInput"
import { GoGrabber } from "react-icons/go"
import { AiOutlineDelete } from "react-icons/ai"
import { ListButton } from "./ListButton"
import { AddSparkDelete } from "../animations/SparkDelete"
import { AddSparkCheck } from "../animations/SparkCheck"

const SortableItemContext = createContext({
  attributes: {},
  listeners: undefined,
  ref() {},
})

function DragHandle() {
  const { attributes, listeners, ref } = useContext(SortableItemContext)

  return (
    <Grabber {...attributes} {...listeners} ref={ref}>
      <GrabberIcon />
    </Grabber>
  )
}

export function SortableItem({ item, list, setList }) {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id: item.id })
  const context = useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef,
    }),
    [attributes, listeners, setActivatorNodeRef]
  )
  const style = {
    opacity: isDragging ? 0.4 : undefined,
    transform: CSS.Translate.toString(transform),
    transition,
  }

  function handleDeleteCard({ event, id }) {
    let newList = list.filter(({ id: itemId }) => itemId !== id)
    setList(newList)
    AddSparkDelete(event)
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
  return (
    <SortableItemContext.Provider value={context}>
      <Item ref={setNodeRef} style={style}>
        {item.label !== "" && (
          <CheckInput
            type="checkbox"
            checked={item.isCheck}
            onClick={(e) => AddSparkCheck(e)}
            onChange={(e) =>
              handleCheckCard({
                value: e.target.checked,
                id: item.id,
              })
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
          <DragHandle />
        </ActionsWrapper>
      </Item>
    </SortableItemContext.Provider>
  )
}

const CheckInput = styled.input`
  background-color: #0000;

  margin: 0;
  margin-inline: 0.3em;
  width: 4em;
  height: 4em;

  cursor: pointer;

  &:checked {
    accent-color: var(--color-blue);
  }
`

const DeleteIcon = styled(AiOutlineDelete)`
  width: 3em;
  height: 3em;
`
const GrabberIcon = styled(GoGrabber)`
  width: 3em;
  height: 3em;

  cursor: grab;
`
const Grabber = styled.button`
  touch-action: none;
  border-radius: 5px;
  border: none;
  outline: none;
  appearance: none;
  background-color: transparent;
`
const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Item = styled.li`
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
`
