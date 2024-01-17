import { useDispatch } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';

const store = createReduxStore();

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
