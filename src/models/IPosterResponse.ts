import type {IPoster} from "./IPoster.ts";

export interface IPosterResponse {
	backdrops: IPoster[];
	id: number;
	logos: IPoster[];
	posters: IPoster[];
}
