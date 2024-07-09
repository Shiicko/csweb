import * as s from "./HeaderStyled";
import { motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";

export const Header = () => {
  return (
    <>
      <s.nav>
        <img src="https://via.placeholder.com/70" alt="" />
        <s.links>
          <motion.div whileTap={{ scale: 0.9 }}>
            <li>
              <a href="">Inicio</a>
            </li>
          </motion.div>
          <li>
            <motion.div whileTap={{ scale: 0.9 }}>
              <a href="">Destacadas</a>
            </motion.div>
          </li>
          <li>
            <motion.div whileTap={{ scale: 0.9 }}>
              <a href="">Comunidad</a>
            </motion.div>
          </li>
        </s.links>
        <s.burguer>
          <motion.div whileTap={{ scale: 0.9 }}>
            <CiMenuFries />
          </motion.div>
        </s.burguer>
      </s.nav>
    </>
  );
};
