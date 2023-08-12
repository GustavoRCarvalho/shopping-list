import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable"

import { SortableItem } from "./SortableItem"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import { styled } from "styled-components"

export function SortableList({ list, setList }) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <DndContext
      modifiers={[restrictToVerticalAxis]}
      sensors={sensors}
      onDragEnd={({ active, over }) => {
        if (over && active.id !== over?.id) {
          const activeIndex = list.findIndex(({ id }) => id === active.id)
          const overIndex = list.findIndex(({ id }) => id === over.id)

          setList(arrayMove(list, activeIndex, overIndex))
        }
      }}
    >
      <SortableContext items={list}>
        <List role="application">
          {list.map((item) => (
            <SortableItem
              key={item.id}
              item={item}
              list={list}
              setList={setList}
            />
          ))}
        </List>
      </SortableContext>
    </DndContext>
  )
}

const List = styled.ul`
  list-style: none;
  width: 100%;

  padding: 0;
  margin: 0;
`
