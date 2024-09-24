import { take, Subject, from } from 'rxjs';
import { GET, POST } from '../api/fetch-api';

class BasketService {
	initialState = {
		loading: false,
		error: null,
		basket: [],
		total: 0,
	};

	state = this.initialState;
	state$ = new Subject();

	constructor() {
		this.apiUrl = process.env.REACT_APP_API_URL;
	}

	get() {
		if (this.state.loading) {
			return;
		}

		this.state = {
			...this.state,
			loading: true,
		};
		this.state$.next(this.state);
		const data$ = from(GET(`${this.apiUrl}/cart_list`)).pipe(take(1));

		data$.subscribe({
			next: (result) => {
				this.state = {
					...this.state,
					error: null,
					loading: false,
					basket: result?.data?.rows,
					total: result?.data?.total
				};

				this.state$.next(this.state);
			},
			error: (error) => {
				this.state = {
					...this.state,
					loading: false,
					error: error.message,
				};
				this.state$.next(this.state);
			},
		});
	}

	update(productId, amount) {
		if (this.state.loading) {
			return;
		}

		this.state = {
			...this.state,
			loading: true,
		};
		this.state$.next(this.state);
		const data$ = from(POST(`${this.apiUrl}/cart_edit`, { productId, amount })).pipe(take(1));

		data$.subscribe({
			next: (result) => {
				this.state = {
					...this.state,
					error: null,
					loading: false,
					basket: result?.data?.rows,
					total: result?.data?.total
				};

				this.state$.next(this.state);
			},
			error: (error) => {
				this.state = {
					...this.state,
					loading: false,
					error: error.message,
				};
				this.state$.next(this.state);
			},
		});
	}
}

const BasketServiceInstance = new BasketService();
export default BasketServiceInstance;
