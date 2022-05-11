import { createDomain } from "effector";
import { Column } from "./columnService.types";

const columnServiceDomain = createDomain("columnService");

const $column = columnServiceDomain.createStore<Column | null>(null);

export const columnService = {
    outputs: {
        $column,
    }
};
