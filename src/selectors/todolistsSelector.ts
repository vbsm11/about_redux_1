import {AppRootStateType} from '../state/store';
import {TodolistType} from '../App';

export const todolistsSelector = (state: AppRootStateType): TodolistType[] => state.todolists