"use client";
import { useEffect, useState } from "react";

export interface Movie {
	page: number;
	results: Result[];
	total_pages: number;
	total_results: number;
}

export interface Result {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: OriginalLanguage;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: Date;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export enum OriginalLanguage {
	En = "en",
	It = "it",
	Ja = "ja",
	Pl = "pl",
}

const Movie = () => {
	const [movies, setMovies] = useState<Movie>();
	useEffect(() => {
		async () => {
			const { results } = await (await fetch(`/api/movie`)).json();
			setMovies(results);
		};
	}, []);
	/* $.ajax({
		url: '/api/movie',
		type: 'get',
		dataType: 'json',
		success: () => {
			...
		},
		error: ...
	})
	return axios.get("/api/movies");
	*/
	return (
		<div>
			{movies && movies?.results.map((movie) => <div key={movie.id}>{movie.original_title}</div>)}
		</div>
	);
};

export default Movie;
