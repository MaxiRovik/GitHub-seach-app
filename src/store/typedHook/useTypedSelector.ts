import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RepositoriesState} from "../../types/repositories";

export const useTypeSelector: TypedUseSelectorHook<RepositoriesState> = useSelector