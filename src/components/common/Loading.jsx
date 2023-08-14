import { IoFastFoodOutline } from "react-icons/io5"
import { motion } from "framer-motion"
import { styled } from "styled-components"

export const Loading = () => {
  return (
    <motion.div
      animate={{
        rotate: [
          0, -10, 0, 10, 0, 0, -10, 0, 10, 0, 0, -10, 0, 10, 90, 180, 270, 360,
        ],
        x: [
          0, -10, 0, 10, 0, 0, -10, 0, 10, 0, 0, -10, 0, 10, 0, 0, 0, 0, 0, 0,
        ],
        y: [
          0, 10, 0, 10, 0, 0, 10, 0, 10, 0, 0, 10, 0, 10, 0, -20, -20, -20, -20,
          0,
        ],
      }}
      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
    >
      <FoodIcon />
    </motion.div>
  )
}

const FoodIcon = styled(IoFastFoodOutline)`
  width: 2em;
  height: 2em;
`
