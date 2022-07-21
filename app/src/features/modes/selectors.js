import { useSelector } from 'react-redux';

const getCurrentMode = () => {
  const modes = useSelector(state => state.modes);
  const config = useSelector(state => state.config);

  return modes[config.current] || modes[config.default]; 
}

const getUsers = () => {
  return getCurrentMode()?.users || {};
}

const getMenu = () => {
  return getCurrentMode()?.menu || [];
}

const getTitles = () => {
  return getCurrentMode()?.titles || {};
}


export { getCurrentMode, getUsers, getMenu, getTitles };