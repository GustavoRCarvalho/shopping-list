import { Reorder, useDragControls } from "framer-motion"
import { AiOutlineDelete } from "react-icons/ai"
import { GoGrabber } from "react-icons/go"
import { styled } from "styled-components"
import { ItemInput } from "./ListItemInput"
import { ListButton } from "./ListButton"
import { AddSparkCheck } from "../animations/SparkCheck"
import { AddSparkDelete } from "../animations/SparkDelete"

export const ListItem = ({ item, list, setList }) => {
  const controls = useDragControls()

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

  function handleCheckCard({ event, value, id }) {
    let newList = list.map((item) => {
      if (id === item.id) {
        return { ...item, isCheck: value }
      } else {
        return item
      }
    })
    value && AddSparkCheck(event)
    setList(newList)
  }

  function handleDeleteCard({ event, id }) {
    let newList = list.filter(({ id: itemId }) => itemId !== id)
    setList(newList)
    AddSparkDelete(event)
  }

  return (
    <Item
      id={item.id}
      value={item}
      dragListener={false}
      dragControls={controls}
    >
      {item.label !== "" && (
        <CheckInput
          type="checkbox"
          checked={item.isCheck}
          onChange={(e) =>
            handleCheckCard({
              event: e,
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
        <GrabberIcon onPointerDown={(e) => controls.start(e)} />
      </ActionsWrapper>
    </Item>
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
const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Item = styled(Reorder.Item)`
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
