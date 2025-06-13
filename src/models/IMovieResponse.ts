import type {IMovieListCard} from "./IMovieListCard.ts";

export interface IMovieResponse {
	page: number;
	results: IMovieListCard[];
	total_pages: number;
	total_results: number;
}
